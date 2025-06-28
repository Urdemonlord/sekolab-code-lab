# Modul 07: Full-Stack Project Development

## Tujuan Pembelajaran
Setelah menyelesaikan modul ini, siswa akan mampu:
- Mengintegrasikan semua teknologi yang telah dipelajari
- Membangun aplikasi full-stack dari planning hingga deployment
- Mengimplementasikan best practices dalam development
- Mengelola project dengan Git dan version control
- Deploy aplikasi ke production environment
- Memahami testing, security, dan performance optimization

## Materi Pembelajaran

### 1. Project Planning & Architecture

#### Project Requirements Analysis
```markdown
# E-Commerce Platform - Requirements

## Functional Requirements
1. User Authentication & Authorization
2. Product Catalog Management
3. Shopping Cart & Checkout
4. Order Management
5. Payment Integration
6. Admin Dashboard
7. Search & Filter
8. Reviews & Ratings

## Non-Functional Requirements
1. Performance: Load time < 3 seconds
2. Security: Data encryption, secure authentication
3. Scalability: Support 1000+ concurrent users
4. Compatibility: Modern browsers, mobile responsive
5. Availability: 99.9% uptime
```

#### Technology Stack Selection
```javascript
// Frontend Stack
const frontendStack = {
    framework: 'React 18',
    styling: 'Tailwind CSS',
    stateManagement: 'Redux Toolkit',
    routing: 'React Router',
    httpClient: 'Axios',
    testing: 'Jest + React Testing Library'
};

// Backend Stack (untuk referensi)
const backendStack = {
    runtime: 'Node.js',
    framework: 'Express.js',
    database: 'PostgreSQL',
    orm: 'Prisma',
    authentication: 'JWT',
    testing: 'Jest + Supertest'
};

// Development Tools
const devTools = {
    bundler: 'Vite',
    linting: 'ESLint + Prettier',
    versionControl: 'Git + GitHub',
    deployment: 'Vercel/Netlify',
    monitoring: 'Sentry'
};
```

#### Project Structure
```
ecommerce-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   └── feature-specific/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── constants/
│   │   └── styles/
│   ├── tests/
│   └── package.json
├── backend/ (jika ada)
├── docs/
├── .gitignore
└── README.md
```

### 2. Advanced React Patterns

#### Custom Hooks
```jsx
// useLocalStorage hook
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue];
};

// useAPI hook
const useAPI = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        ...options.headers
                    },
                    ...options
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};
```

#### Higher-Order Components (HOC)
```jsx
// withAuth HOC
const withAuth = (WrappedComponent) => {
    return function AuthenticatedComponent(props) {
        const { user, loading } = useAuth();

        if (loading) {
            return <div>Loading...</div>;
        }

        if (!user) {
            return <Navigate to="/login" replace />;
        }

        return <WrappedComponent {...props} user={user} />;
    };
};

// withErrorBoundary HOC
const withErrorBoundary = (WrappedComponent) => {
    return function ComponentWithErrorBoundary(props) {
        return (
            <ErrorBoundary>
                <WrappedComponent {...props} />
            </ErrorBoundary>
        );
    };
};

// Usage
const ProtectedDashboard = withAuth(withErrorBoundary(Dashboard));
```

#### Render Props Pattern
```jsx
// DataFetcher component dengan render props
const DataFetcher = ({ url, children }) => {
    const { data, loading, error } = useAPI(url);

    return children({ data, loading, error });
};

// Usage
const ProductList = () => {
    return (
        <DataFetcher url="/api/products">
            {({ data: products, loading, error }) => {
                if (loading) return <ProductSkeleton />;
                if (error) return <ErrorMessage error={error} />;
                
                return (
                    <div className="product-grid">
                        {products?.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                );
            }}
        </DataFetcher>
    );
};
```

### 3. State Management dengan Redux Toolkit

#### Store Setup
```javascript
// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import productsSlice from './slices/productsSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
        cart: cartSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST']
            }
        })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

#### Slice Implementation
```javascript
// store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../services/authAPI';

// Async thunks
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await authAPI.login(email, password);
            localStorage.setItem('token', response.token);
            return response.user;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, { dispatch }) => {
        localStorage.removeItem('token');
        dispatch(clearCart());
    }
);

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: localStorage.getItem('token'),
        loading: false,
        error: null
    },
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.token = null;
            });
    }
});

export const { clearError, setUser } = authSlice.actions;
export default authSlice.reducer;
```

### 4. Advanced Component Patterns

#### Compound Components
```jsx
// Accordion compound component
const Accordion = ({ children, defaultActiveKey }) => {
    const [activeKey, setActiveKey] = useState(defaultActiveKey);

    const value = {
        activeKey,
        setActiveKey
    };

    return (
        <AccordionContext.Provider value={value}>
            <div className="accordion">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

const AccordionItem = ({ eventKey, children }) => {
    const { activeKey, setActiveKey } = useContext(AccordionContext);
    const isActive = activeKey === eventKey;

    return (
        <div className={`accordion-item ${isActive ? 'active' : ''}`}>
            {children}
        </div>
    );
};

const AccordionHeader = ({ children, eventKey }) => {
    const { setActiveKey } = useContext(AccordionContext);

    return (
        <div 
            className="accordion-header"
            onClick={() => setActiveKey(eventKey)}
        >
            {children}
        </div>
    );
};

const AccordionBody = ({ children }) => {
    return <div className="accordion-body">{children}</div>;
};

// Attach components
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

// Usage
const FAQ = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is React?</Accordion.Header>
                <Accordion.Body>
                    React is a JavaScript library for building user interfaces.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How to learn React?</Accordion.Header>
                <Accordion.Body>
                    Start with the basics and practice building projects.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};
```

#### Error Boundaries
```jsx
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false, 
            error: null,
            errorInfo: null 
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Log error to monitoring service
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2>Oops! Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                    <button onClick={() => window.location.reload()}>
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

// Functional error boundary with react-error-boundary library
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" className="error-fallback">
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

const App = () => {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={(error, errorInfo) => {
                console.log('Error logged:', error, errorInfo);
            }}
        >
            <MyComponent />
        </ErrorBoundary>
    );
};
```

### 5. Performance Optimization

#### React.memo dan Memoization
```jsx
import React, { memo, useMemo, useCallback } from 'react';

// Memoized component
const ProductCard = memo(({ product, onAddToCart }) => {
    const discountedPrice = useMemo(() => {
        if (product.discount) {
            return product.price * (1 - product.discount / 100);
        }
        return product.price;
    }, [product.price, product.discount]);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price">
                {product.discount && (
                    <span className="original-price">${product.price}</span>
                )}
                <span className="current-price">${discountedPrice}</span>
            </div>
            <button onClick={() => onAddToCart(product.id)}>
                Add to Cart
            </button>
        </div>
    );
});

// Parent component dengan useCallback
const ProductList = ({ products }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = useCallback((productId) => {
        setCart(prevCart => [...prevCart, productId]);
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
};
```

#### Code Splitting dengan Lazy Loading
```jsx
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Suspense>
    );
};

// Component-level code splitting
const AdminPanel = () => {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [AdvancedSettings, setAdvancedSettings] = useState(null);

    useEffect(() => {
        if (showAdvanced && !AdvancedSettings) {
            import('./AdvancedSettings').then(module => {
                setAdvancedSettings(() => module.default);
            });
        }
    }, [showAdvanced, AdvancedSettings]);

    return (
        <div>
            <h2>Admin Panel</h2>
            <button onClick={() => setShowAdvanced(true)}>
                Show Advanced Settings
            </button>
            {showAdvanced && AdvancedSettings && <AdvancedSettings />}
        </div>
    );
};
```

### 6. Testing

#### Unit Testing dengan Jest & React Testing Library
```jsx
// __tests__/ProductCard.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard';

const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 100,
    image: 'test.jpg',
    discount: 10
};

describe('ProductCard', () => {
    const mockOnAddToCart = jest.fn();

    beforeEach(() => {
        mockOnAddToCart.mockClear();
    });

    test('renders product information correctly', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
        
        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$90')).toBeInTheDocument(); // Discounted price
        expect(screen.getByText('$100')).toBeInTheDocument(); // Original price
    });

    test('calls onAddToCart when button is clicked', () => {
        render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
        
        const addButton = screen.getByText('Add to Cart');
        fireEvent.click(addButton);
        
        expect(mockOnAddToCart).toHaveBeenCalledWith(1);
    });

    test('calculates discounted price correctly', () => {
        const productWithoutDiscount = { ...mockProduct, discount: 0 };
        render(<ProductCard product={productWithoutDiscount} onAddToCart={mockOnAddToCart} />);
        
        expect(screen.getByText('$100')).toBeInTheDocument();
        expect(screen.queryByText('$90')).not.toBeInTheDocument();
    });
});
```

#### Integration Testing
```jsx
// __tests__/ShoppingCart.integration.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import ShoppingCart from '../ShoppingCart';

const renderWithRedux = (component) => {
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    );
};

describe('Shopping Cart Integration', () => {
    test('adds product to cart and displays correct total', async () => {
        renderWithRedux(<ShoppingCart />);
        
        // Add product to cart
        const addButton = screen.getByTestId('add-product-1');
        fireEvent.click(addButton);
        
        // Wait for cart to update
        await waitFor(() => {
            expect(screen.getByText('Total: $100')).toBeInTheDocument();
        });
        
        // Add same product again
        fireEvent.click(addButton);
        
        await waitFor(() => {
            expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
            expect(screen.getByText('Total: $200')).toBeInTheDocument();
        });
    });
});
```

### 7. Deployment

#### Build Optimization
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        target: 'esnext',
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    router: ['react-router-dom'],
                    ui: ['@headlessui/react', '@heroicons/react']
                }
            }
        }
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
});
```

#### Environment Configuration
```javascript
// config/env.js
const config = {
    development: {
        API_URL: 'http://localhost:3001/api',
        STRIPE_PUBLIC_KEY: 'pk_test_...',
        APP_URL: 'http://localhost:3000'
    },
    production: {
        API_URL: 'https://api.myapp.com',
        STRIPE_PUBLIC_KEY: 'pk_live_...',
        APP_URL: 'https://myapp.com'
    }
};

export default config[process.env.NODE_ENV || 'development'];
```

## Project Implementation: E-Commerce Platform

### Phase 1: Setup & Basic Structure (Week 1)
1. Project initialization dengan Vite
2. Folder structure setup
3. Basic routing dengan React Router
4. UI library integration (Tailwind CSS)
5. State management setup (Redux Toolkit)

### Phase 2: Authentication & User Management (Week 2)
1. Login/Register forms
2. JWT token handling
3. Protected routes
4. User profile management
5. Password reset functionality

### Phase 3: Product Catalog (Week 3)
1. Product listing dengan pagination
2. Product detail pages
3. Search dan filter functionality
4. Category navigation
5. Product images dan gallery

### Phase 4: Shopping Cart & Checkout (Week 4)
1. Add to cart functionality
2. Cart management (update quantities, remove items)
3. Checkout process
4. Order summary
5. Local storage persistence

### Phase 5: Advanced Features (Week 5)
1. Wishlist functionality
2. Product reviews dan ratings
3. Order history
4. Email notifications
5. Admin dashboard basics

### Phase 6: Testing & Optimization (Week 6)
1. Unit testing untuk critical components
2. Integration testing
3. Performance optimization
4. Code splitting dan lazy loading
5. Error handling dan logging

### Phase 7: Deployment & Monitoring (Week 7)
1. Production build optimization
2. Deployment ke Vercel/Netlify
3. Environment configuration
4. Performance monitoring
5. Error tracking dengan Sentry

## Best Practices Summary

### Code Quality
1. **Consistent Naming**: Use descriptive names untuk components, variables, dan functions
2. **Component Size**: Keep components small dan focused on single responsibility
3. **Code Reusability**: Create reusable components dan custom hooks
4. **Error Handling**: Implement proper error boundaries dan error states
5. **Type Safety**: Use PropTypes atau TypeScript untuk type checking

### Performance
1. **Memoization**: Use React.memo, useMemo, dan useCallback appropriately
2. **Code Splitting**: Implement lazy loading untuk large components
3. **Bundle Optimization**: Optimize bundle size dengan proper imports
4. **Image Optimization**: Use optimized images dan lazy loading
5. **Caching**: Implement proper caching strategies

### Security
1. **Input Validation**: Validate semua user inputs
2. **XSS Prevention**: Sanitize user-generated content
3. **CSRF Protection**: Implement CSRF tokens
4. **Secure Storage**: Never store sensitive data di localStorage
5. **HTTPS**: Always use HTTPS di production

### Testing
1. **Test Coverage**: Aim for >80% test coverage
2. **Unit Tests**: Test individual components dan functions
3. **Integration Tests**: Test component interactions
4. **E2E Tests**: Test complete user workflows
5. **Accessibility Testing**: Test keyboard navigation dan screen readers

## Deliverables

### 1. Complete E-Commerce Application
- Fully functional frontend dengan semua fitur
- Responsive design untuk mobile dan desktop
- User authentication dan authorization
- Product catalog dengan search dan filter
- Shopping cart dan checkout process

### 2. Documentation
- Technical documentation
- User manual
- API documentation (jika ada backend)
- Deployment guide

### 3. Testing Suite
- Unit tests untuk critical components
- Integration tests
- Test coverage report

### 4. Performance Report
- Lighthouse audit results
- Bundle analysis
- Performance optimization recommendations

---

**Estimasi Waktu Pengerjaan:** 7-8 minggu
**Level:** Expert
**Prerequisites:** Semua modul sebelumnya
**Final Assessment:** Presentasi project dan code review

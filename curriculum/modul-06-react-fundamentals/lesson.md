# Modul 06: React Fundamentals

## Tujuan Pembelajaran
Setelah menyelesaikan modul ini, siswa akan mampu:
- Memahami konsep dasar React dan Virtual DOM
- Membuat komponen React dengan functional dan class components
- Menggunakan JSX dengan benar
- Mengelola state dan props
- Memahami React Hooks (useState, useEffect, useContext)
- Handling events dalam React
- Conditional rendering dan lists
- React Router untuk navigation

## Materi Pembelajaran

### 1. Pengenalan React

#### Apa itu React?
React adalah library JavaScript untuk membangun user interfaces, terutama untuk aplikasi web. React dikembangkan oleh Facebook dan sekarang digunakan oleh banyak perusahaan besar.

#### Keunggulan React:
- **Virtual DOM**: Performa yang optimal
- **Component-based**: Code yang reusable dan modular
- **Declarative**: Code yang mudah dibaca dan debug
- **Rich Ecosystem**: Banyak library dan tools pendukung

#### Setup Development Environment
```bash
# Menggunakan Create React App
npx create-react-app my-app
cd my-app
npm start

# Atau menggunakan Vite (lebih cepat)
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

### 2. JSX (JavaScript XML)

#### Syntax Dasar JSX
```jsx
// JSX element
const element = <h1>Hello, World!</h1>;

// JSX dengan expressions
const name = 'John';
const element = <h1>Hello, {name}!</h1>;

// JSX dengan attributes
const element = <img src="avatar.jpg" alt="User Avatar" />;

// JSX dengan conditional rendering
const isLoggedIn = true;
const element = (
    <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
    </div>
);
```

#### Rules JSX
```jsx
// 1. Return single parent element
const App = () => {
    return (
        <div> {/* Parent wrapper */}
            <h1>Title</h1>
            <p>Content</p>
        </div>
    );
};

// 2. Atau gunakan React Fragment
const App = () => {
    return (
        <>
            <h1>Title</h1>
            <p>Content</p>
        </>
    );
};

// 3. Close all tags
const element = <img src="image.jpg" />; // Self-closing
const element = <input type="text" />; // Self-closing

// 4. Use camelCase for attributes
<div className="container" onClick={handleClick}>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" />
</div>
```

### 3. Components

#### Functional Components
```jsx
// Simple functional component
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Arrow function component
const Welcome = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

// With destructuring
const Welcome = ({ name, age }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old</p>
        </div>
    );
};

// Default props
const Welcome = ({ name = 'Guest', age = 0 }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old</p>
        </div>
    );
};
```

#### Props
```jsx
// Parent component
const App = () => {
    const user = {
        name: 'John Doe',
        age: 25,
        avatar: 'avatar.jpg'
    };
    
    return (
        <div>
            <UserCard 
                name={user.name}
                age={user.age}
                avatar={user.avatar}
                isOnline={true}
            />
            {/* Spread props */}
            <UserCard {...user} isOnline={true} />
        </div>
    );
};

// Child component
const UserCard = ({ name, age, avatar, isOnline }) => {
    return (
        <div className="user-card">
            <img src={avatar} alt={name} />
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <span className={isOnline ? 'online' : 'offline'}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    );
};
```

### 4. State Management dengan Hooks

#### useState Hook
```jsx
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

// State dengan object
const UserForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        age: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };
    
    return (
        <form>
            <input
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Age"
            />
        </form>
    );
};
```

#### useEffect Hook
```jsx
import { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Effect yang berjalan setelah render
    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                const userData = await response.json();
                setUser(userData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
    }, [userId]); // Dependency array
    
    // Cleanup effect
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Timer tick');
        }, 1000);
        
        return () => {
            clearInterval(timer); // Cleanup
        };
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>User not found</div>;
    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};
```

### 5. Event Handling

#### Basic Event Handling
```jsx
const EventDemo = () => {
    const [message, setMessage] = useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        setMessage('Button clicked!');
    };
    
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', message);
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };
    
    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type something..."
                />
                <button type="submit">Submit</button>
            </form>
            
            <p>Message: {message}</p>
        </div>
    );
};
```

### 6. Conditional Rendering dan Lists

#### Conditional Rendering
```jsx
const UserDashboard = ({ user, isLoggedIn }) => {
    // If statement
    if (!isLoggedIn) {
        return <LoginForm />;
    }
    
    return (
        <div>
            {/* Ternary operator */}
            {user ? (
                <h1>Welcome, {user.name}!</h1>
            ) : (
                <h1>Welcome, Guest!</h1>
            )}
            
            {/* Logical AND */}
            {user && user.isAdmin && (
                <AdminPanel />
            )}
            
            {/* Multiple conditions */}
            {user && (
                user.isPremium ? (
                    <PremiumFeatures />
                ) : (
                    <UpgradePrompt />
                )
            )}
        </div>
    );
};
```

#### Rendering Lists
```jsx
const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false },
        { id: 3, text: 'Deploy to production', completed: true }
    ]);
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            
            {todos.length === 0 && (
                <p>No todos yet. Add one above!</p>
            )}
        </div>
    );
};
```

### 7. useContext Hook

#### Context untuk State Management
```jsx
import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook untuk menggunakan context
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// Component yang menggunakan context
const Header = () => {
    const { theme, toggleTheme } = useTheme();
    
    return (
        <header style={{ 
            backgroundColor: theme === 'light' ? '#fff' : '#333',
            color: theme === 'light' ? '#333' : '#fff'
        }}>
            <h1>My App</h1>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </header>
    );
};

// App component
const App = () => {
    return (
        <ThemeProvider>
            <div>
                <Header />
                <main>
                    <p>Your app content here...</p>
                </main>
            </div>
        </ThemeProvider>
    );
};
```

### 8. React Router

#### Basic Routing
```jsx
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Components
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

// Navigation component
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

// User detail component dengan params
const UserDetail = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    
    return (
        <div>
            <h2>User Detail: {userId}</h2>
            <button onClick={() => navigate('/')}>
                Go Home
            </button>
        </div>
    );
};

// Main App dengan Router
const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/user/:userId" element={<UserDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
```

## Latihan Praktik

### Latihan 1: Counter App dengan Multiple Counters
Buat aplikasi counter yang:
- Memiliki multiple counter instances
- Setiap counter dapat increment, decrement, reset
- Total dari semua counters
- Local storage untuk persistence

### Latihan 2: Todo App dengan CRUD Operations
Buat todo application dengan:
- Add new todos
- Mark todos as complete/incomplete  
- Edit existing todos
- Delete todos
- Filter by status (all, active, completed)
- Local storage untuk data persistence

### Latihan 3: Weather App dengan API Integration
Buat aplikasi cuaca yang:
- Fetch data dari weather API
- Search by city name
- Display current weather dan forecast
- Loading states dan error handling
- Responsive design

## Project Mini: Personal Blog Dashboard
Buat dashboard untuk personal blog dengan fitur:

### Requirements:
1. **Post Management**
   - Create, read, update, delete blog posts
   - Rich text editor (simple)
   - Categories dan tags
   - Draft dan published status

2. **Navigation**
   - Multiple pages dengan React Router
   - Dashboard, Posts, Categories, Settings

3. **State Management**
   - Global state dengan Context API
   - Local storage untuk persistence

4. **User Interface**
   - Responsive design
   - Theme switcher (light/dark)
   - Search dan filter functionality

### Technical Requirements:
- Functional components dengan hooks
- Proper component composition
- Error boundaries untuk error handling
- Code splitting dengan lazy loading
- PropTypes atau TypeScript untuk type checking

## Kuis

### Soal 1 (Multiple Choice)
Apa yang dimaksud dengan Virtual DOM?
a) DOM yang tidak terlihat di browser
b) Representasi virtual dari real DOM di memory
c) DOM untuk virtual reality applications
d) DOM yang digunakan untuk testing

### Soal 2 (Multiple Choice)
Kapan useEffect dengan empty dependency array akan berjalan?
a) Setiap render
b) Hanya sekali setelah mount
c) Ketika component unmount
d) Ketika state berubah

### Soal 3 (Fill in the blank)
Untuk menggunakan state dalam functional component, kita menggunakan hook _______.

### Soal 4 (Coding)
Tulis functional component yang menerima props `name` dan `age`, dan menampilkan greeting message:
```jsx
const Greeting = (/* props */) => {
    // Tulis implementasi di sini
};
```

### Soal 5 (True/False)
Dalam JSX, semua elements harus memiliki closing tag atau self-closing.

## Kunci Jawaban
1. b) Representasi virtual dari real DOM di memory
2. b) Hanya sekali setelah mount
3. useState
4. Contoh implementasi:
```jsx
const Greeting = ({ name, age }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
        </div>
    );
};
```
5. True

## Referensi dan Sumber Belajar

### Dokumentasi Resmi
- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)

### Best Practices
1. Use functional components dan hooks
2. Keep components small dan focused
3. Use descriptive names untuk components dan variables
4. Handle loading dan error states
5. Implement proper key props untuk lists
6. Use React Developer Tools untuk debugging

### Tools dan Resources
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Vite](https://vitejs.dev/) - Fast build tool
- [ESLint React Plugin](https://github.com/jsx-eslint/eslint-plugin-react)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Tips Belajar
1. Start dengan simple components
2. Practice dengan real projects
3. Understand the component lifecycle
4. Learn React DevTools untuk debugging
5. Study popular React patterns
6. Build multiple small projects
7. Join React communities

---

**Estimasi Waktu Belajar:** 4-5 minggu
**Level:** Expert
**Prerequisites:** HTML, CSS, JavaScript Menengah
**Next Module:** React Advanced (State Management, Testing, Performance)

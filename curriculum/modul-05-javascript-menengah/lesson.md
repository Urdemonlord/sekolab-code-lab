# Modul 05: JavaScript Menengah

## Tujuan Pembelajaran
Setelah menyelesaikan modul ini, siswa akan mampu:
- Memahami dan menggunakan ES6+ features (arrow functions, destructuring, modules)
- Bekerja dengan Asynchronous JavaScript (Promises, async/await)
- Manipulasi DOM yang lebih advanced
- Menggunakan Local Storage dan Session Storage
- Error handling yang proper
- Memahami konsep OOP dalam JavaScript
- Bekerja dengan APIs menggunakan Fetch

## Materi Pembelajaran

### 1. ES6+ Features

#### Arrow Functions
```javascript
// Function declaration tradisional
function tambah(a, b) {
    return a + b;
}

// Arrow function
const tambah = (a, b) => a + b;

// Arrow function dengan body
const hitungLuas = (panjang, lebar) => {
    const luas = panjang * lebar;
    return luas;
};

// Arrow function untuk array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
```

#### Destructuring
```javascript
// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

// Object destructuring
const person = {
    name: 'John',
    age: 30,
    city: 'Jakarta'
};
const { name, age, city } = person;

// Destructuring dengan default values
const { name, age, country = 'Indonesia' } = person;

// Destructuring dalam function parameters
function greet({ name, age }) {
    return `Hello ${name}, you are ${age} years old`;
}
```

#### Template Literals
```javascript
const name = 'John';
const age = 30;

// Template literal
const message = `Hello ${name}, you are ${age} years old.`;

// Multiline strings
const html = `
    <div class="card">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
    </div>
`;
```

#### Spread Operator dan Rest Parameters
```javascript
// Spread operator dengan arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Spread operator dengan objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

### 2. Asynchronous JavaScript

#### Promises
```javascript
// Membuat Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ data: 'Success!' });
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 1000);
    });
};

// Menggunakan Promise
fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Operation completed'));
```

#### Async/Await
```javascript
// Async function
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Multiple async operations
async function fetchMultipleData() {
    try {
        const [data1, data2, data3] = await Promise.all([
            fetch('/api/data1').then(r => r.json()),
            fetch('/api/data2').then(r => r.json()),
            fetch('/api/data3').then(r => r.json())
        ]);
        
        return { data1, data2, data3 };
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}
```

### 3. Advanced DOM Manipulation

#### Event Delegation
```javascript
// Event delegation untuk dynamic content
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const item = e.target.closest('.item');
        item.remove();
    }
    
    if (e.target.classList.contains('btn-edit')) {
        const item = e.target.closest('.item');
        editItem(item);
    }
});
```

#### Custom Events
```javascript
// Membuat custom event
const customEvent = new CustomEvent('userLoggedIn', {
    detail: {
        username: 'john_doe',
        timestamp: new Date()
    }
});

// Mengirim custom event
document.dispatchEvent(customEvent);

// Mendengarkan custom event
document.addEventListener('userLoggedIn', (e) => {
    console.log('User logged in:', e.detail);
});
```

#### Intersection Observer
```javascript
// Lazy loading images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});
```

### 4. Local Storage dan Session Storage

#### Local Storage
```javascript
// Menyimpan data
const user = {
    name: 'John',
    preferences: {
        theme: 'dark',
        language: 'id'
    }
};

localStorage.setItem('user', JSON.stringify(user));

// Mengambil data
const savedUser = JSON.parse(localStorage.getItem('user'));

// Helper functions
const storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    },
    
    clear() {
        localStorage.clear();
    }
};
```

### 5. Error Handling

#### Try-Catch dengan Async/Await
```javascript
async function handleAsyncOperation() {
    try {
        const response = await fetch('/api/data');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Network error:', error);
        } else {
            console.error('API error:', error);
        }
        
        // Re-throw untuk handling di level yang lebih tinggi
        throw error;
    }
}
```

#### Custom Error Classes
```javascript
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'NetworkError';
        this.status = status;
    }
}

// Penggunaan
function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
}
```

### 6. Object-Oriented Programming

#### Classes
```javascript
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
    
    // Method
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Getter
    get displayName() {
        return this.name.toUpperCase();
    }
    
    // Setter
    set name(value) {
        if (value.length < 2) {
            throw new Error('Name must be at least 2 characters');
        }
        this._name = value;
    }
    
    get name() {
        return this._name;
    }
    
    // Static method
    static createFromObject(obj) {
        return new User(obj.name, obj.email);
    }
}

// Inheritance
class Admin extends User {
    constructor(name, email, permissions) {
        super(name, email);
        this.permissions = permissions;
    }
    
    hasPermission(permission) {
        return this.permissions.includes(permission);
    }
    
    greet() {
        return `${super.greet()} and I'm an admin`;
    }
}
```

### 7. Working with APIs

#### Fetch API
```javascript
class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new NetworkError(
                    `Request failed: ${response.statusText}`,
                    response.status
                );
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }
    
    get(endpoint) {
        return this.request(endpoint);
    }
    
    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE'
        });
    }
}

// Penggunaan
const api = new ApiClient('https://api.example.com');

async function loadUsers() {
    try {
        const users = await api.get('/users');
        displayUsers(users);
    } catch (error) {
        showErrorMessage('Failed to load users');
    }
}
```

### 8. Modules (ES6 Modules)

#### Export/Import
```javascript
// utils.js
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('id-ID').format(date);
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export default class Logger {
    static log(message) {
        console.log(`[${new Date().toISOString()}] ${message}`);
    }
}

// main.js
import Logger, { formatDate, debounce } from './utils.js';

Logger.log('Application started');
const formattedDate = formatDate(new Date());
```

## Latihan Praktik

### Latihan 1: Todo App dengan Local Storage
Buat aplikasi todo yang:
- Menggunakan ES6+ features
- Menyimpan data di localStorage
- Memiliki fitur add, edit, delete, mark complete
- Error handling yang proper

### Latihan 2: Weather App dengan API
Buat aplikasi cuaca yang:
- Menggunakan fetch untuk API calls
- Async/await untuk asynchronous operations
- Error handling untuk network failures
- Local storage untuk menyimpan preferensi

### Latihan 3: Image Gallery dengan Lazy Loading
Buat gallery yang:
- Menggunakan Intersection Observer
- Lazy loading untuk images
- Custom events untuk komunikasi antar komponen
- Module-based architecture

## Project Mini: Task Management App
Buat aplikasi manajemen tugas dengan fitur:

### Requirements:
1. **Task Management**
   - Create, read, update, delete tasks
   - Mark tasks as complete/incomplete
   - Set due dates and priorities

2. **Data Persistence**
   - Local storage untuk menyimpan tasks
   - Import/export functionality

3. **User Interface**
   - Responsive design
   - Drag and drop untuk reordering
   - Search dan filter functionality

4. **Advanced Features**
   - Categories/tags untuk tasks
   - Statistics dan progress tracking
   - Notifications untuk due dates

### Technical Requirements:
- ES6+ features (classes, modules, arrow functions)
- Async/await untuk file operations
- Custom events untuk component communication
- Error handling dan validation
- Local storage management
- Module-based architecture

## Kuis

### Soal 1 (Multiple Choice)
Apa perbedaan utama antara `let` dan `const`?
a) `let` untuk primitive types, `const` untuk objects
b) `const` tidak bisa di-reassign, `let` bisa
c) `let` adalah block-scoped, `const` adalah function-scoped
d) Tidak ada perbedaan

### Soal 2 (Multiple Choice)
Kapan sebaiknya menggunakan `async/await` dibanding `.then()`?
a) Ketika working dengan single promise
b) Ketika perlu error handling yang complex
c) Ketika ingin code yang lebih readable dan sequential
d) Semua jawaban benar

### Soal 3 (Fill in the blank)
Untuk membuat custom event dengan data, gunakan constructor _______ dengan parameter kedua berisi property _______.

### Soal 4 (Coding)
Tulis function untuk debounce search input:
```javascript
function createSearchDebounce(searchFunction, delay) {
    // Tulis implementasi di sini
}
```

### Soal 5 (True/False)
Arrow functions memiliki binding `this` yang sama dengan regular functions.

## Kunci Jawaban
1. b) `const` tidak bisa di-reassign, `let` bisa
2. d) Semua jawaban benar
3. CustomEvent, detail
4. Contoh implementasi:
```javascript
function createSearchDebounce(searchFunction, delay) {
    let timeout;
    return function(searchTerm) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            searchFunction(searchTerm);
        }, delay);
    };
}
```
5. False (Arrow functions tidak memiliki binding `this` sendiri)

## Referensi dan Sumber Belajar

### Dokumentasi Resmi
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Specifications](https://tc39.es/ecma262/)
- [Node.js Documentation](https://nodejs.org/docs/)

### Best Practices
1. Gunakan `const` by default, `let` ketika perlu reassignment
2. Prefer async/await over promise chains
3. Handle errors appropriately dengan try-catch
4. Gunakan destructuring untuk cleaner code
5. Implement proper module structure
6. Validate input dan handle edge cases

### Tools dan Resources
- [JavaScript.info](https://javascript.info/) - Tutorial comprehensive
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - Series buku
- [ESLint](https://eslint.org/) - Code linting
- [Babel](https://babeljs.io/) - JavaScript compiler

## Tips Belajar
1. Praktik dengan real-world projects
2. Experiment dengan berbagai ES6+ features
3. Learn debugging dengan browser dev tools
4. Understand asynchronous concepts thoroughly
5. Practice error handling scenarios
6. Study popular libraries' source code
7. Join JavaScript communities dan forums

---

**Estimasi Waktu Belajar:** 3-4 minggu
**Level:** Menengah
**Prerequisites:** HTML Dasar, CSS Dasar, JavaScript Dasar
**Next Module:** Framework JavaScript (React/Vue)

// Utility untuk memuat konten kurikulum
export const curriculumData = {
  'modul-01': {
    title: 'HTML Dasar',
    lesson: `# Modul 1: HTML Dasar

Selamat datang di dunia web development! HTML (HyperText Markup Language) adalah bahasa markup yang digunakan untuk membuat struktur halaman web.

## Silabus

1. **Pengenalan HTML**
   - Apa itu HTML?
   - Struktur dokumen HTML
   - Tag, elemen, dan atribut

2. **Tag-tag Dasar HTML**
   - Heading (h1-h6)
   - Paragraf (p)
   - Link (a)
   - Gambar (img)
   - List (ul, ol, li)

3. **Struktur Halaman Web**
   - DOCTYPE declaration
   - html, head, body
   - Meta tags
   - Title

4. **Semantic HTML**
   - header, nav, main, section, article, aside, footer
   - Pentingnya semantic markup

## Materi

### 1. Pengenalan HTML

HTML adalah singkatan dari **HyperText Markup Language**. HTML bukan bahasa pemrograman, melainkan bahasa markup yang digunakan untuk membuat struktur dan konten halaman web.

### 2. Struktur Dasar HTML

Setiap dokumen HTML memiliki struktur dasar sebagai berikut:

\`\`\`html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
</head>
<body>
    <h1>Selamat datang di website saya!</h1>
    <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>
\`\`\`

### 3. Tag-tag Penting

**Heading (Judul):**
\`\`\`html
<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<h3>Sub Sub Judul</h3>
\`\`\`

**Paragraf:**
\`\`\`html
<p>Ini adalah sebuah paragraf.</p>
\`\`\`

**Link:**
\`\`\`html
<a href="https://sekolab.com">Kunjungi Sekolab</a>
\`\`\`

**Gambar:**
\`\`\`html
<img src="gambar.jpg" alt="Deskripsi gambar">
\`\`\`

## Latihan

1. Buat halaman HTML sederhana dengan struktur lengkap
2. Tambahkan berbagai heading dan paragraf
3. Sisipkan gambar dan link
4. Buat daftar (list) menggunakan ul dan ol

## Kuis

1. Apa perbedaan antara tag \`<b>\` dan \`<strong>\`?
2. Mengapa atribut \`alt\` penting pada tag \`<img>\`?
3. Jelaskan perbedaan antara \`<ul>\` dan \`<ol>\`!`,
    examples: [
      {
        title: 'Struktur HTML Dasar',
        description: 'Contoh struktur HTML yang benar',
        code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Dasar</title>
</head>
<body>
    <h1>Selamat Datang</h1>
    <p>Ini adalah halaman HTML pertama saya!</p>
</body>
</html>`
      }
    ],
    exercises: [
      {
        title: 'Latihan 1: Halaman Profil',
        description: 'Buat halaman profil sederhana dengan HTML',
        difficulty: 'Mudah'
      }
    ]
  },
  'modul-02': {
    title: 'CSS Dasar',
    lesson: `# Modul 2: CSS Dasar

CSS (Cascading Style Sheets) adalah bahasa untuk menghias dan mengatur tampilan halaman web yang dibuat dengan HTML.

## Silabus

1. **Pengenalan CSS**
   - Apa itu CSS?
   - Cara menambahkan CSS ke HTML
   - Inline, Internal, External CSS

2. **CSS Selectors**
   - Element selector
   - Class selector
   - ID selector
   - Attribute selector

3. **CSS Properties**
   - Colors dan background
   - Typography (font)
   - Box model (margin, padding, border)
   - Display dan positioning

4. **Responsive Design**
   - Media queries
   - Flexible layouts
   - Mobile-first approach

## Materi

### 1. Pengenalan CSS

CSS memungkinkan kita untuk:
- Mengubah warna dan ukuran teks
- Menambahkan background dan border
- Mengatur layout halaman
- Membuat animasi
- Membuat desain responsif

### 2. Cara Menambahkan CSS

**Inline CSS:**
\`\`\`html
<p style="color: blue; font-size: 16px;">Teks biru</p>
\`\`\`

**Internal CSS:**
\`\`\`html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
\`\`\`

**External CSS:**
\`\`\`html
<head>
    <link rel="stylesheet" href="style.css">
</head>
\`\`\`

### 3. CSS Selectors

\`\`\`css
/* Element selector */
p {
    color: black;
}

/* Class selector */
.highlight {
    background-color: yellow;
}

/* ID selector */
#header {
    font-size: 24px;
}
\`\`\`

## Kuis

1. Apa perbedaan antara class dan ID selector?
2. Jelaskan konsep box model dalam CSS!
3. Kapan sebaiknya menggunakan external CSS?`,
    examples: [
      {
        title: 'CSS Styling Dasar',
        description: 'Contoh styling text dan background',
        code: `.title {
    color: #333;
    font-size: 2rem;
    text-align: center;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}`
      }
    ],
    exercises: [
      {
        title: 'Latihan 1: Styling Card',
        description: 'Buat styling untuk komponen card',
        difficulty: 'Mudah'
      }
    ]
  },
  'modul-03': {
    title: 'JavaScript Dasar',
    lesson: `# Modul 3: JavaScript Dasar

JavaScript adalah bahasa pemrograman yang membuat halaman web menjadi interaktif dan dinamis.

## Silabus

1. **Pengenalan JavaScript**
   - Apa itu JavaScript?
   - Variabel dan tipe data
   - Operator dan ekspresi

2. **Control Flow**
   - Conditional statements (if, else)
   - Loops (for, while)
   - Switch statements

3. **Functions**
   - Function declaration
   - Function expression
   - Arrow functions
   - Parameters dan return values

4. **DOM Manipulation**
   - Selecting elements
   - Changing content
   - Event handling

## Materi

### 1. Variabel dan Tipe Data

\`\`\`javascript
// Variabel
let nama = "Sekolab";
const umur = 25;
var isActive = true;

// Tipe data
let angka = 42;           // Number
let teks = "Hello";       // String
let benar = true;         // Boolean
let kosong = null;        // Null
let undefined;            // Undefined
\`\`\`

### 2. Functions

\`\`\`javascript
// Function declaration
function sapa(nama) {
    return "Halo, " + nama + "!";
}

// Arrow function
const tambah = (a, b) => {
    return a + b;
};

// Memanggil function
console.log(sapa("Budi"));
console.log(tambah(5, 3));
\`\`\`

### 3. DOM Manipulation

\`\`\`javascript
// Mengambil elemen
const button = document.getElementById('myButton');
const title = document.querySelector('.title');

// Mengubah konten
title.textContent = 'Judul Baru';

// Event handling
button.addEventListener('click', function() {
    alert('Button diklik!');
});
\`\`\`

## Kuis

1. Apa perbedaan antara \`let\`, \`const\`, dan \`var\`?
2. Jelaskan apa itu DOM!
3. Bagaimana cara menambahkan event listener?`,
    examples: [
      {
        title: 'Function dan Event',
        description: 'Contoh penggunaan function dan event handling',
        code: `function changeColor() {
    const element = document.getElementById('box');
    element.style.backgroundColor = 'red';
}

document.getElementById('btn').addEventListener('click', changeColor);`
      }
    ],
    exercises: [
      {
        title: 'Latihan 1: Calculator Sederhana',
        description: 'Buat kalkulator dengan JavaScript',
        difficulty: 'Sedang'
      }
    ]
  },
  'modul-04': {
    title: 'CSS Layout Modern',
    lesson: `# Modul 4: CSS Layout Modern

Pelajari teknik layout modern menggunakan Flexbox dan CSS Grid untuk membuat desain yang responsif.

## Silabus

1. **CSS Flexbox**
   - Flex container dan flex items
   - Main axis dan cross axis
   - Flex properties

2. **CSS Grid**
   - Grid container dan grid items
   - Grid template areas
   - Grid positioning

3. **Responsive Design**
   - Media queries
   - Mobile-first design
   - Breakpoints

4. **Layout Patterns**
   - Holy grail layout
   - Card layouts
   - Navigation patterns

## Materi

### 1. CSS Flexbox

Flexbox adalah metode layout satu dimensi yang memungkinkan kita mengatur elemen dalam satu baris atau kolom.

\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.item {
    flex: 1;
}
\`\`\`

### 2. CSS Grid

CSS Grid adalah sistem layout dua dimensi yang memungkinkan kita mengatur elemen dalam baris dan kolom.

\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-gap: 1rem;
}

.header {
    grid-column: 1 / -1;
}
\`\`\`

### 3. Media Queries

\`\`\`css
/* Mobile first */
.container {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}
\`\`\`

## Kuis

1. Kapan sebaiknya menggunakan Flexbox vs Grid?
2. Apa itu mobile-first design?
3. Jelaskan perbedaan \`justify-content\` dan \`align-items\`!`,
    examples: [
      {
        title: 'Flexbox Navigation',
        description: 'Membuat navigation bar dengan Flexbox',
        code: `.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}`
      }
    ],
    exercises: [
      {
        title: 'Latihan 1: Dashboard Layout',
        description: 'Buat layout dashboard dengan CSS Grid',
        difficulty: 'Sedang'
      }
    ]
  },
  'modul-05': {
    title: 'JavaScript Menengah',
    lesson: `# Modul 5: JavaScript Menengah

Pelajari konsep JavaScript yang lebih advanced seperti asynchronous programming dan ES6+ features.

## Silabus

1. **Asynchronous JavaScript**
   - Callbacks
   - Promises
   - Async/await

2. **ES6+ Features**
   - Arrow functions
   - Destructuring
   - Spread operator
   - Template literals

3. **DOM Manipulation Lanjutan**
   - Event delegation
   - Creating elements
   - Removing elements

4. **Fetch API**
   - Making HTTP requests
   - Handling responses
   - Error handling

## Materi

### 1. Promises dan Async/Await

\`\`\`javascript
// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data berhasil dimuat');
        }, 1000);
    });
};

// Async/Await
async function loadData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

### 2. Fetch API

\`\`\`javascript
// GET request
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// POST request
async function postData(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Post error:', error);
    }
}
\`\`\`

### 3. ES6+ Features

\`\`\`javascript
// Destructuring
const user = { name: 'John', age: 30, city: 'Jakarta' };
const { name, age } = user;

// Spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Template literals
const message = \`Halo \${name}, umur Anda \${age} tahun\`;
\`\`\`

## Kuis

1. Apa perbedaan antara Promise dan async/await?
2. Kapan menggunakan destructuring assignment?
3. Bagaimana cara handle error pada fetch request?`,
    examples: [
      {
        title: 'API Integration',
        description: 'Contoh integrasi dengan API eksternal',
        code: `async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        
        document.getElementById('quote').textContent = data.content;
        document.getElementById('author').textContent = data.author;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}`
      }
    ],
    exercises: [
      {
        title: 'Latihan 1: Weather App',
        description: 'Buat aplikasi cuaca menggunakan API',
        difficulty: 'Sedang'
      }
    ]
  },
  'modul-06': {
    title: 'React Fundamentals',
    lesson: `# Modul 6: React Fundamentals

Pelajari dasar-dasar React untuk membangun aplikasi web modern yang interaktif.

## Silabus

1. **Pengenalan React**
   - Virtual DOM
   - Components
   - JSX

2. **State dan Props**
   - useState hook
   - Passing props
   - State vs props

3. **Event Handling**
   - onClick events
   - Form handling
   - Controlled components

4. **useEffect Hook**
   - Component lifecycle
   - Side effects
   - Cleanup functions

## Materi

### 1. Components dan JSX

\`\`\`jsx
// Functional Component
function Welcome(props) {
    return <h1>Halo, {props.name}!</h1>;
}

// Arrow Function Component
const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
};
\`\`\`

### 2. useState Hook

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
\`\`\`

### 3. useEffect Hook

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []); // Empty dependency array

    if (loading) return <p>Loading...</p>;

    return <div>{JSON.stringify(data)}</div>;
}
\`\`\`

## Kuis

1. Apa perbedaan antara state dan props?
2. Kapan menggunakan useEffect hook?
3. Jelaskan konsep Virtual DOM!`,
    examples: [
      {
        title: 'Todo App Component',
        description: 'Komponen Todo sederhana dengan React',
        code: `function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input }]);
            setInput('');
        }
    };

    return (
        <div>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add todo..."
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}`
      }
    ],
    exercises: [
      {
        title: 'Latihan 1: Contact Form',
        description: 'Buat form kontak dengan validasi',
        difficulty: 'Sedang'
      }
    ]
  },
  'modul-07': {
    title: 'Proyek Full-Stack',
    lesson: `# Modul 7: Proyek Full-Stack

Integrasikan semua yang telah dipelajari untuk membangun aplikasi web lengkap.

## Silabus

1. **Perencanaan Proyek**
   - Requirements analysis
   - UI/UX design
   - Technical architecture

2. **Frontend Development**
   - React application setup
   - Component structure
   - State management

3. **Backend Integration**
   - API design
   - Database integration
   - Authentication

4. **Deployment**
   - Build optimization
   - Hosting setup
   - Domain configuration

## Materi

### 1. Project Structure

\`\`\`
my-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── App.js
├── package.json
└── README.md
\`\`\`

### 2. State Management

\`\`\`jsx
// Context API for global state
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

function appReducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, {
        user: null,
        loading: false
    });

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export const useApp = () => useContext(AppContext);
\`\`\`

### 3. API Integration

\`\`\`jsx
// Custom hook for API calls
import { useState, useEffect } from 'react';

function useApi(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) throw new Error('Failed to fetch');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}
\`\`\`

## Proyek Akhir

Buat aplikasi web lengkap dengan fitur:
- User authentication
- CRUD operations
- Responsive design
- API integration
- Error handling

## Kuis

1. Apa pentingnya project structure yang baik?
2. Kapan menggunakan Context API vs external state management?
3. Bagaimana cara optimize performance React app?`,
    examples: [
      {
        title: 'Authentication Hook',
        description: 'Custom hook untuk authentication',
        code: `function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            validateToken(token);
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            
            localStorage.setItem('token', data.token);
            setUser(data.user);
        } catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return { user, loading, login, logout };
}`
      }
    ],
    exercises: [
      {
        title: 'Proyek Akhir: E-commerce App',
        description: 'Buat aplikasi e-commerce lengkap',
        difficulty: 'Sulit'
      }
    ]
  }
};

export const getModuleContent = (moduleId: string) => {
  return curriculumData[moduleId as keyof typeof curriculumData] || null;
};

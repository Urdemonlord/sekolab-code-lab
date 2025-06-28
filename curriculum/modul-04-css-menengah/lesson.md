# Modul 04: CSS Menengah

## Tujuan Pembelajaran
Setelah menyelesaikan modul ini, siswa akan mampu:
- Memahami dan menggunakan CSS Flexbox dan Grid Layout
- Menerapkan responsive design dengan media queries
- Menggunakan CSS pseudo-classes dan pseudo-elements
- Mengelola transformasi dan transisi CSS
- Memahami metodologi CSS (BEM, OOCSS)

## Materi Pembelajaran

### 1. CSS Flexbox
Flexbox adalah sistem layout satu dimensi yang memudahkan pengaturan elemen.

#### Flexbox Container Properties
```css
.container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | flex-end | space-between | space-around;
  align-items: stretch | flex-start | center | flex-end;
  flex-wrap: nowrap | wrap;
}
```

#### Flexbox Item Properties
```css
.item {
  flex: 1; /* flex-grow flex-shrink flex-basis */
  align-self: auto | flex-start | center | flex-end;
  order: 0;
}
```

### 2. CSS Grid Layout
Grid adalah sistem layout dua dimensi yang powerful untuk membuat layout kompleks.

#### Grid Container
```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 100px;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}
```

#### Grid Items
```css
.header {
  grid-area: header;
}

.sidebar {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
```

### 3. Responsive Design
Membuat website yang adaptif di berbagai ukuran layar.

#### Media Queries
```css
/* Mobile First Approach */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 20px;
  }
}
```

### 4. CSS Pseudo-classes dan Pseudo-elements

#### Pseudo-classes
```css
/* State pseudo-classes */
a:hover { color: blue; }
input:focus { border-color: #007bff; }
li:nth-child(odd) { background: #f0f0f0; }
div:not(.excluded) { margin: 10px; }

/* Structural pseudo-classes */
:first-child, :last-child
:nth-child(2n), :nth-of-type(3)
```

#### Pseudo-elements
```css
/* Content pseudo-elements */
p::before {
  content: "★ ";
  color: gold;
}

p::after {
  content: " ✓";
  color: green;
}

/* Selection pseudo-elements */
::selection {
  background: yellow;
  color: black;
}
```

### 5. CSS Transformations dan Transitions

#### Transforms
```css
.transform-examples {
  /* 2D Transforms */
  transform: translate(50px, 100px);
  transform: rotate(45deg);
  transform: scale(1.5);
  transform: skew(30deg, 20deg);
  
  /* 3D Transforms */
  transform: perspective(1000px) rotateX(30deg);
  transform: translateZ(50px);
}
```

#### Transitions
```css
.smooth-transition {
  transition: all 0.3s ease-in-out;
  /* atau lebih spesifik */
  transition: background-color 0.3s ease, transform 0.2s linear;
}

.button:hover {
  background-color: #007bff;
  transform: translateY(-2px);
}
```

### 6. CSS Variables (Custom Properties)
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}

.component {
  color: var(--primary-color);
  font-size: var(--font-size-base);
  margin: calc(var(--spacing-unit) * 2);
}
```

### 7. CSS Metodologi - BEM
BEM (Block Element Modifier) adalah metodologi penamaan CSS yang terstruktur.

```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--large { }
.card--featured { }
.card__header--highlighted { }
```

## Latihan Praktik

### Latihan 1: Flexbox Navigation
Buat navigation bar menggunakan Flexbox dengan:
- Logo di kiri
- Menu di tengah
- User actions di kanan
- Responsive untuk mobile

### Latihan 2: Grid Layout Dashboard
Buat layout dashboard dengan CSS Grid:
- Header di atas
- Sidebar kiri
- Main content area
- Footer di bawah

### Latihan 3: Card Component dengan Hover Effects
Buat card component dengan:
- Hover animations
- CSS variables untuk theming
- BEM methodology

### Latihan 4: Responsive Gallery
Buat responsive image gallery dengan:
- Grid layout yang adaptif
- Hover effects
- Modal view untuk gambar

## Project Mini: Portfolio Website
Buat website portfolio pribadi dengan menggunakan semua konsep yang dipelajari:
- Responsive design
- Flexbox dan Grid layout
- Smooth animations
- Modern CSS techniques

### Requirements:
1. Header dengan navigation
2. Hero section dengan animasi
3. About section
4. Portfolio/Projects grid
5. Contact form
6. Footer
7. Responsive untuk semua device
8. Smooth scrolling dan transitions

## Kuis

### Soal 1 (Multiple Choice)
Properti CSS mana yang digunakan untuk mengatur jarak antar grid items?
a) margin
b) padding  
c) gap
d) spacing

### Soal 2 (Multiple Choice)
Apa yang dimaksud dengan "Mobile First" approach?
a) Mendesain khusus untuk mobile saja
b) Menggunakan CSS khusus mobile
c) Memulai design dari layar kecil lalu scale up
d) Membuat aplikasi mobile

### Soal 3 (Fill in the blank)
Untuk membuat element flex item mengambil sisa ruang yang tersedia, gunakan properti _______.

### Soal 4 (True/False)
Pseudo-element ::before secara default adalah inline element.

### Soal 5 (Coding)
Tulis CSS untuk membuat button dengan hover effect yang smooth:
```css
.button {
  /* Tulis kode di sini */
}

.button:hover {
  /* Tulis kode di sini */
}
```

## Kunci Jawaban
1. c) gap
2. c) Memulai design dari layar kecil lalu scale up
3. flex: 1 atau flex-grow: 1
4. False (pseudo-element adalah inline by default tapi bisa diubah dengan display)
5. Contoh jawaban:
```css
.button {
  background: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

## Referensi dan Sumber Belajar

### Dokumentasi Resmi
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks - Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Tools dan Resources
- [Flexbox Froggy](https://flexboxfroggy.com/) - Game untuk belajar Flexbox
- [Grid Garden](https://cssgridgarden.com/) - Game untuk belajar CSS Grid
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)

### Best Practices
1. Gunakan mobile-first approach
2. Konsisten dengan naming convention (BEM)
3. Gunakan CSS variables untuk maintainability
4. Optimize untuk performance
5. Test di berbagai browser dan device

## Tips Belajar
1. Praktik langsung dengan membuat project
2. Experiment dengan berbagai layout combinations
3. Pelajari dev tools browser untuk debugging CSS
4. Ikuti CSS news dan updates
5. Bergabung dengan komunitas CSS developers

---

**Estimasi Waktu Belajar:** 2-3 minggu
**Level:** Menengah
**Prerequisites:** HTML Dasar, CSS Dasar
**Next Module:** JavaScript Menengah

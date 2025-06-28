# Modul 02: CSS Dasar - Selectors & Styling

## 📝 Deskripsi
Modul ini akan memperkenalkan Anda pada CSS (Cascading Style Sheets), bahasa yang digunakan untuk mengatur tampilan dan layout halaman web. Anda akan mempelajari selector CSS, properti styling dasar, dan cara mengintegrasikan CSS dengan HTML.

## 🎯 Tujuan Pembelajaran
Setelah menyelesaikan modul ini, Anda akan dapat:
1. Memahami apa itu CSS dan fungsinya dalam web development
2. Mengenal berbagai jenis selector CSS
3. Menggunakan properti CSS untuk styling teks, warna, dan background
4. Mengintegrasikan CSS dengan HTML menggunakan berbagai metode
5. Memahami konsep cascade, specificity, dan inheritance

## 📚 Materi

### 1. Pengenalan CSS

CSS (Cascading Style Sheets) adalah bahasa stylesheet yang digunakan untuk mendeskripsikan presentasi dokumen HTML. CSS mengontrol layout, warna, font, dan aspek visual lainnya dari halaman web.

#### Keunggulan CSS:
- **Pemisahan konten dan presentasi** - HTML untuk struktur, CSS untuk tampilan
- **Konsistensi** - Satu file CSS bisa mengatur banyak halaman
- **Maintainability** - Perubahan style mudah dilakukan
- **Performance** - Mengurangi redundansi kode

### 2. Cara Menambahkan CSS ke HTML

#### 2.1 Inline CSS
CSS ditulis langsung dalam atribut `style` pada elemen HTML.

```html
<p style="color: blue; font-size: 18px;">Teks dengan inline CSS</p>
```

#### 2.2 Internal CSS
CSS ditulis dalam tag `<style>` di bagian `<head>` dokumen HTML.

```html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
```

#### 2.3 External CSS
CSS ditulis dalam file terpisah dan dihubungkan dengan HTML menggunakan tag `<link>`.

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

**File styles.css:**
```css
p {
  color: blue;
  font-size: 18px;
}
```

### 3. Selector CSS

Selector digunakan untuk menargetkan elemen HTML yang akan diberi style.

#### 3.1 Element Selector
Menargetkan semua elemen dengan tag tertentu.

```css
h1 {
  color: red;
  font-size: 24px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}
```

#### 3.2 Class Selector
Menargetkan elemen dengan class tertentu (menggunakan titik `.`).

```css
.highlight {
  background-color: yellow;
  padding: 10px;
}

.text-large {
  font-size: 20px;
  font-weight: bold;
}
```

**HTML:**
```html
<p class="highlight">Paragraf dengan class highlight</p>
<div class="text-large">Teks besar</div>
```

#### 3.3 ID Selector
Menargetkan elemen dengan ID tertentu (menggunakan hash `#`).

```css
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}

#footer {
  text-align: center;
  margin-top: 50px;
}
```

**HTML:**
```html
<div id="header">Header Website</div>
<div id="footer">Footer Website</div>
```

#### 3.4 Descendant Selector
Menargetkan elemen yang berada di dalam elemen lain.

```css
div p {
  color: gray;
}

.container h2 {
  border-bottom: 2px solid blue;
}
```

#### 3.5 Multiple Selector
Memberikan style yang sama pada beberapa elemen.

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #333;
}
```

### 4. Properti CSS Dasar

#### 4.1 Text Properties

```css
.text-style {
  color: #333;                    /* Warna teks */
  font-family: Arial, sans-serif; /* Jenis font */
  font-size: 16px;                /* Ukuran font */
  font-weight: bold;              /* Ketebalan font */
  font-style: italic;             /* Style font (italic/normal) */
  text-align: center;             /* Alignment teks */
  text-decoration: underline;     /* Dekorasi teks */
  line-height: 1.5;               /* Tinggi baris */
  letter-spacing: 1px;            /* Jarak antar huruf */
  text-transform: uppercase;      /* Transform teks */
}
```

#### 4.2 Background Properties

```css
.background-style {
  background-color: #f0f0f0;     /* Warna background */
  background-image: url('bg.jpg'); /* Gambar background */
  background-repeat: no-repeat;   /* Pengulangan background */
  background-position: center;    /* Posisi background */
  background-size: cover;         /* Ukuran background */
}
```

#### 4.3 Border Properties

```css
.border-style {
  border: 2px solid #333;        /* Border shorthand */
  border-width: 2px;             /* Ketebalan border */
  border-style: solid;           /* Style border */
  border-color: #333;            /* Warna border */
  border-radius: 10px;           /* Border melengkung */
}
```

#### 4.4 Spacing Properties

```css
.spacing-style {
  margin: 20px;                  /* Margin luar */
  margin-top: 10px;              /* Margin atas */
  margin-right: 15px;            /* Margin kanan */
  margin-bottom: 10px;           /* Margin bawah */
  margin-left: 15px;             /* Margin kiri */
  
  padding: 15px;                 /* Padding dalam */
  padding-top: 10px;             /* Padding atas */
  padding-right: 20px;           /* Padding kanan */
  padding-bottom: 10px;          /* Padding bawah */
  padding-left: 20px;            /* Padding kiri */
}
```

### 5. CSS Box Model

Setiap elemen HTML adalah kotak (box) yang terdiri dari:
- **Content** - Konten aktual
- **Padding** - Ruang antara content dan border
- **Border** - Garis tepi elemen
- **Margin** - Ruang luar border

```css
.box-model {
  width: 200px;          /* Lebar content */
  height: 100px;         /* Tinggi content */
  padding: 20px;         /* Ruang dalam */
  border: 2px solid #333; /* Border */
  margin: 10px;          /* Ruang luar */
}
```

### 6. CSS Units (Satuan)

#### Absolute Units:
- `px` - Pixel (unit tetap)
- `pt` - Point
- `cm` - Centimeter

#### Relative Units:
- `%` - Persentase dari parent element
- `em` - Relatif terhadap ukuran font parent
- `rem` - Relatif terhadap ukuran font root
- `vh` - Viewport height (1vh = 1% tinggi viewport)
- `vw` - Viewport width (1vw = 1% lebar viewport)

```css
.units-example {
  width: 50%;           /* 50% dari parent */
  font-size: 1.2em;     /* 1.2x ukuran font parent */
  margin: 2rem;         /* 2x ukuran font root */
  height: 50vh;         /* 50% tinggi viewport */
}
```

## 💻 Latihan Praktikum

### Latihan 1: Basic Styling
Buatlah halaman HTML dengan CSS yang mencakup:
1. Styling heading dengan warna dan font yang berbeda
2. Styling paragraf dengan line-height dan spacing
3. Penggunaan class dan ID selector
4. Background color pada elemen tertentu

### Latihan 2: Text Formatting
Buatlah halaman yang mendemonstrasikan:
1. Berbagai font-family
2. Text alignment (left, center, right, justify)
3. Text decoration (underline, overline, line-through)
4. Text transform (uppercase, lowercase, capitalize)

### Latihan 3: Box Model
Buatlah beberapa div dengan:
1. Border yang berbeda-beda
2. Padding dan margin yang bervariasi
3. Background color
4. Demonstrasi box model dengan inspect element

## 🧪 Kuis

```javascript
const quizCSSBasic = [
  {
    pertanyaan: "Apa kepanjangan dari CSS?",
    pilihan: [
      "Cascading Style Sheets",
      "Creative Style Sheets", 
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Manakah cara yang BENAR untuk menambahkan external CSS?",
    pilihan: [
      "<style src='style.css'>",
      "<link rel='stylesheet' href='style.css'>",
      "<css href='style.css'>", 
      "<stylesheet>style.css</stylesheet>"
    ],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Selector mana yang digunakan untuk menargetkan elemen dengan class 'container'?",
    pilihan: ["#container", ".container", "container", "*container"],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Properti CSS mana yang digunakan untuk mengubah warna teks?",
    pilihan: ["text-color", "font-color", "color", "text-style"],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Urutan yang benar dalam CSS Box Model dari dalam ke luar adalah:",
    pilihan: [
      "content, padding, margin, border",
      "content, padding, border, margin",
      "content, border, padding, margin",
      "content, margin, border, padding"
    ],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Untuk membuat border melengkung, properti yang digunakan adalah:",
    pilihan: ["border-curve", "border-radius", "border-round", "border-corner"],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Unit CSS mana yang bersifat relatif terhadap ukuran font root?",
    pilihan: ["px", "em", "rem", "%"],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Cara menambahkan komentar dalam CSS adalah:",
    pilihan: [
      "// ini komentar",
      "<!-- ini komentar -->",
      "/* ini komentar */",
      "# ini komentar"
    ],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Untuk mengatur jarak antar huruf, properti yang digunakan adalah:",
    pilihan: ["letter-spacing", "word-spacing", "char-spacing", "text-spacing"],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Nilai default untuk properti 'display' pada elemen <div> adalah:",
    pilihan: ["inline", "block", "inline-block", "flex"],
    jawabanBenar: 1
  }
];
```

## 📚 Referensi
1. [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
2. [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
3. [CSS-Tricks](https://css-tricks.com/)
4. [Can I Use - CSS Browser Support](https://caniuse.com/)

## 🔍 Best Practices
1. **Organisasi** - Kelompokkan CSS berdasarkan komponen atau fungsi
2. **Naming Convention** - Gunakan nama class yang deskriptif
3. **Specificity** - Hindari !important, gunakan specificity yang tepat
4. **Performance** - Minimalkan penggunaan selector yang kompleks
5. **Maintainability** - Tulis CSS yang mudah dibaca dan dipahami

## 🚀 Project Mini
Buatlah halaman portfolio sederhana dengan CSS yang mencakup:
1. Header dengan navigation
2. Section hero dengan background image
3. Section about dengan card styling
4. Section skills dengan progress bars (menggunakan div + CSS)
5. Footer dengan social media links
6. Responsive design untuk mobile (gunakan media queries sederhana)

# Modul 01: HTML Dasar - Struktur & Tag Dasar

## 📝 Deskripsi
Modul ini akan memperkenalkan Anda pada dasar-dasar HTML (Hypertext Markup Language), bahasa markup standar untuk membuat halaman web. Anda akan mempelajari struktur dokumen HTML, tag-tag dasar, dan cara membuat halaman web sederhana.

## 🎯 Tujuan Pembelajaran
Setelah menyelesaikan modul ini, Anda akan dapat:
1. Memahami struktur dasar dokumen HTML
2. Mengenal dan menggunakan tag-tag HTML dasar
3. Membuat halaman web sederhana dengan HTML
4. Memvalidasi kode HTML menggunakan validator W3C

## 📚 Materi

### 1. Pengenalan HTML
HTML (Hypertext Markup Language) adalah bahasa markup standar untuk membuat halaman web. HTML mendeskripsikan struktur halaman web menggunakan markup. Elemen HTML adalah blok pembangun dari halaman HTML dan diwakili oleh tag.

### 2. Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Judul Halaman</title>
</head>
<body>
  <!-- Konten halaman web akan ditempatkan di sini -->
  <h1>Halo Dunia!</h1>
  <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>
```

#### Penjelasan:
- `<!DOCTYPE html>`: Deklarasi tipe dokumen untuk HTML5
- `<html>`: Elemen root dari halaman HTML
- `<head>`: Berisi informasi meta tentang dokumen
- `<meta charset="UTF-8">`: Menentukan pengkodean karakter
- `<meta name="viewport">`: Mengatur viewport untuk tampilan responsif
- `<title>`: Menentukan judul halaman (muncul di tab browser)
- `<body>`: Berisi konten yang terlihat dari halaman web

### 3. Tag HTML Dasar

#### Heading (H1-H6)
Heading digunakan untuk menampilkan judul atau subjudul pada halaman web.

```html
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```

#### Paragraf
Tag `<p>` digunakan untuk mendefinisikan paragraf teks.

```html
<p>Ini adalah sebuah paragraf. Paragraf adalah kumpulan kalimat yang membahas topik tertentu.</p>
<p>Ini adalah paragraf kedua yang membahas topik yang berbeda.</p>
```

#### Pemformatan Teks
```html
<strong>Teks tebal</strong>
<em>Teks miring</em>
<mark>Teks disorot</mark>
<small>Teks kecil</small>
<del>Teks yang dicoret</del>
<ins>Teks yang digarisbawahi</ins>
<sub>Teks subscript</sub>
<sup>Teks superscript</sup>
```

#### Link (Anchor)
Tag `<a>` digunakan untuk membuat hyperlink.

```html
<a href="https://www.sekolab.com">Kunjungi Sekolab</a>
<a href="halaman2.html">Halaman 2</a>
<a href="#section1">Loncat ke Bagian 1</a>
```

#### Gambar
Tag `<img>` digunakan untuk menampilkan gambar.

```html
<img src="gambar/logo.png" alt="Logo Sekolab" width="300" height="200">
```

#### List
HTML menyediakan tiga jenis list:

**Unordered List**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**Ordered List**
```html
<ol>
  <li>Langkah pertama</li>
  <li>Langkah kedua</li>
  <li>Langkah ketiga</li>
</ol>
```

**Description List**
```html
<dl>
  <dt>HTML</dt>
  <dd>Hypertext Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

### 4. Komentar dalam HTML
Komentar digunakan untuk menambahkan catatan dalam kode yang tidak akan ditampilkan di browser.

```html
<!-- Ini adalah komentar HTML -->
<!-- 
  Komentar bisa juga
  multi-baris
-->
```

## 💻 Latihan Praktikum

### Latihan 1: Membuat Halaman Profil Sederhana
Buatlah halaman profil diri sederhana dengan HTML yang berisi:
1. Judul halaman
2. Heading utama dengan nama Anda
3. Foto profil (gunakan gambar placeholder jika tidak ada)
4. Paragraf deskripsi diri
5. Daftar hobi menggunakan unordered list
6. Daftar pendidikan menggunakan ordered list
7. Link ke media sosial Anda

### Latihan 2: Membuat Artikel Blog Sederhana
Buatlah sebuah halaman artikel blog sederhana dengan HTML yang berisi:
1. Judul artikel sebagai heading utama
2. Nama penulis dan tanggal publikasi
3. Gambar ilustrasi artikel
4. Beberapa paragraf konten artikel
5. Sub-judul menggunakan heading level 2
6. Daftar poin-poin penting menggunakan list
7. Link ke artikel terkait

## 🧪 Kuis

```javascript
const quizHTMLDasar = [
  {
    pertanyaan: "Apa kepanjangan dari HTML?",
    pilihan: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperlink Text Markup Language",
      "Home Tool Markup Language"
    ],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Tag HTML mana yang digunakan untuk membuat paragraf?",
    pilihan: ["<paragraph>", "<p>", "<para>", "<text>"],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Bagaimana cara membuat teks menjadi tebal dalam HTML?",
    pilihan: ["<bold>", "<b>", "<strong>", "Semua jawaban benar"],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Tag apa yang digunakan untuk membuat judul utama?",
    pilihan: ["<heading>", "<h1>", "<head>", "<title>"],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Atribut apa yang harus selalu ada pada tag <img>?",
    pilihan: ["src", "href", "alt", "title"],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Tag apa yang digunakan untuk membuat tautan/link?",
    pilihan: ["<a>", "<link>", "<href>", "<url>"],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Elemen mana yang merupakan root dari dokumen HTML?",
    pilihan: ["<body>", "<root>", "<html>", "<head>"],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Bagaimana cara membuat komentar dalam HTML?",
    pilihan: [
      "// Ini komentar",
      "/* Ini komentar */",
      "<!-- Ini komentar -->",
      "# Ini komentar"
    ],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Tag apa yang digunakan untuk membuat daftar bernomor?",
    pilihan: ["<list>", "<ul>", "<ol>", "<dl>"],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Atribut 'alt' pada tag <img> digunakan untuk apa?",
    pilihan: [
      "Memberi judul pada gambar",
      "Memberikan teks alternatif jika gambar tidak bisa ditampilkan",
      "Menentukan ukuran gambar",
      "Membuat gambar menjadi link"
    ],
    jawabanBenar: 1
  }
];
```

## 📚 Referensi
1. [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
3. [HTML.com](https://html.com/)
4. [HTML Living Standard - WHATWG](https://html.spec.whatwg.org/)

## 🔍 Validasi Kode HTML
Setelah membuat halaman HTML, validasi kode Anda menggunakan [W3C Markup Validation Service](https://validator.w3.org/) untuk memastikan kode Anda mengikuti standar.

## 🚀 Project Mini
Buatlah halaman web portfolio sederhana yang berisi:
1. Header dengan nama dan profesi
2. Bagian tentang diri
3. Bagian keahlian
4. Bagian portfolio dengan beberapa project (gunakan gambar placeholder)
5. Bagian kontak dengan form sederhana (belum perlu fungsional)
6. Footer dengan copyright dan tahun

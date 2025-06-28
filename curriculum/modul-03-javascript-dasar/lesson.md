# Modul 03: JavaScript Dasar - Variabel & Logika Dasar

## 📝 Deskripsi
Modul ini akan memperkenalkan Anda pada JavaScript, bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif dan dinamis. Anda akan mempelajari dasar-dasar JavaScript termasuk variabel, tipe data, operator, dan struktur kontrol.

## 🎯 Tujuan Pembelajaran
Setelah menyelesaikan modul ini, Anda akan dapat:
1. Memahami apa itu JavaScript dan perannya dalam web development
2. Mendeklarasikan dan menggunakan variabel
3. Mengenal berbagai tipe data dalam JavaScript
4. Menggunakan operator aritmatika dan logika
5. Mengimplementasikan struktur kontrol (if/else, loops)
6. Menulis dan memanggil function sederhana

## 📚 Materi

### 1. Pengenalan JavaScript

JavaScript adalah bahasa pemrograman tingkat tinggi yang dinamis dan interpreted. JavaScript memungkinkan Anda untuk:
- Membuat interaksi dengan user
- Memanipulasi DOM (Document Object Model)
- Menangani events (click, hover, dll)
- Validasi form
- Membuat animasi
- Berkomunikasi dengan server (AJAX)

#### Sejarah Singkat:
- Dibuat oleh Brendan Eich di Netscape (1995)
- Awalnya bernama LiveScript, kemudian JavaScript
- Standardisasi ECMAScript (ES) dimulai tahun 1997
- ES6/ES2015 membawa banyak fitur modern

### 2. Cara Menambahkan JavaScript ke HTML

#### 2.1 Inline JavaScript
JavaScript ditulis langsung dalam atribut event HTML.

```html
<button onclick="alert('Hello World!')">Klik Saya</button>
```

#### 2.2 Internal JavaScript
JavaScript ditulis dalam tag `<script>` di HTML.

```html
<script>
  console.log('Hello from internal JavaScript!');
</script>
```

#### 2.3 External JavaScript
JavaScript ditulis dalam file terpisah dan dihubungkan dengan HTML.

```html
<script src="script.js"></script>
```

**File script.js:**
```javascript
console.log('Hello from external JavaScript!');
```

### 3. Variabel dan Konstanta

#### 3.1 Deklarasi Variabel

```javascript
// ES6+ (Recommended)
let nama = 'Ahmad';
const umur = 25;

// ES5 (Legacy)
var kota = 'Jakarta';
```

#### Perbedaan let, const, dan var:
- **`let`** - Block scope, dapat diubah, tidak dapat dideklarasi ulang
- **`const`** - Block scope, tidak dapat diubah, harus diinisialisasi
- **`var`** - Function scope, dapat diubah, dapat dideklarasi ulang

```javascript
// let - dapat diubah
let skor = 100;
skor = 95; // OK

// const - tidak dapat diubah
const PI = 3.14159;
// PI = 3.14; // Error!

// var - legacy, hindari penggunaan
var status = 'aktif';
var status = 'nonaktif'; // OK tapi tidak disarankan
```

### 4. Tipe Data

#### 4.1 Primitive Types

```javascript
// String - teks
let namaLengkap = 'Ahmad Sekolab';
let pesan = "Selamat belajar JavaScript!";
let template = `Nama saya ${namaLengkap}`;

// Number - angka
let umur = 25;
let tinggi = 175.5;
let infinity = Infinity;
let notNumber = NaN;

// Boolean - true/false
let sudahMenikah = false;
let sedangBelajar = true;

// Undefined - belum didefinisikan
let variabelKosong;
console.log(variabelKosong); // undefined

// Null - kosong dengan sengaja
let data = null;

// Symbol - unik identifier (ES6)
let symbol = Symbol('id');
```

#### 4.2 Reference Types

```javascript
// Object - kumpulan key-value
let mahasiswa = {
  nama: 'Ahmad',
  umur: 22,
  jurusan: 'Informatika',
  aktif: true
};

// Array - kumpulan data berurutan
let hobi = ['programming', 'gaming', 'reading'];
let angka = [1, 2, 3, 4, 5];
let campuran = ['text', 123, true, null];

// Function - blok kode yang dapat dipanggil
function salam() {
  return 'Halo!';
}
```

### 5. Operator

#### 5.1 Operator Aritmatika

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (penjumlahan)
console.log(a - b);  // 7  (pengurangan)
console.log(a * b);  // 30 (perkalian)
console.log(a / b);  // 3.333... (pembagian)
console.log(a % b);  // 1  (modulus/sisa bagi)
console.log(a ** b); // 1000 (pangkat)

// Increment dan Decrement
let counter = 5;
counter++;  // 6 (post-increment)
++counter;  // 7 (pre-increment)
counter--;  // 6 (post-decrement)
--counter;  // 5 (pre-decrement)
```

#### 5.2 Operator Assignment

```javascript
let x = 10;

x += 5;  // x = x + 5;  -> 15
x -= 3;  // x = x - 3;  -> 12
x *= 2;  // x = x * 2;  -> 24
x /= 4;  // x = x / 4;  -> 6
x %= 5;  // x = x % 5;  -> 1
```

#### 5.3 Operator Perbandingan

```javascript
let num1 = 10;
let num2 = '10';

console.log(num1 == num2);   // true (equal, type coercion)
console.log(num1 === num2);  // false (strict equal)
console.log(num1 != num2);   // false (not equal)
console.log(num1 !== num2);  // true (strict not equal)
console.log(num1 > 5);       // true (greater than)
console.log(num1 < 20);      // true (less than)
console.log(num1 >= 10);     // true (greater than or equal)
console.log(num1 <= 10);     // true (less than or equal)
```

#### 5.4 Operator Logika

```javascript
let benar = true;
let salah = false;

console.log(benar && salah);  // false (AND)
console.log(benar || salah);  // true (OR)
console.log(!benar);          // false (NOT)

// Short-circuit evaluation
let nama = null;
let namaDefault = nama || 'Anonymous'; // 'Anonymous'

let user = { nama: 'Ahmad' };
let greeting = user && `Halo ${user.nama}`; // 'Halo Ahmad'
```

### 6. Struktur Kontrol

#### 6.1 Conditional Statements

```javascript
// If-else
let nilai = 85;

if (nilai >= 90) {
  console.log('Grade A');
} else if (nilai >= 80) {
  console.log('Grade B');
} else if (nilai >= 70) {
  console.log('Grade C');
} else {
  console.log('Grade D');
}

// Ternary operator
let status = nilai >= 75 ? 'Lulus' : 'Tidak Lulus';
console.log(status);

// Switch statement
let hari = 'Senin';

switch (hari) {
  case 'Senin':
    console.log('Hari kerja');
    break;
  case 'Sabtu':
  case 'Minggu':
    console.log('Weekend');
    break;
  default:
    console.log('Hari tidak valid');
}
```

#### 6.2 Loops

```javascript
// For loop
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}`);
}

// While loop
let count = 1;
while (count <= 3) {
  console.log(`Count: ${count}`);
  count++;
}

// Do-while loop
let number = 1;
do {
  console.log(`Number: ${number}`);
  number++;
} while (number <= 3);

// For...of loop (array)
let buah = ['apel', 'jeruk', 'mangga'];
for (let item of buah) {
  console.log(item);
}

// For...in loop (object)
let person = { nama: 'Ahmad', umur: 25, kota: 'Jakarta' };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### 7. Functions

#### 7.1 Function Declaration

```javascript
// Function declaration
function salam(nama) {
  return `Halo, ${nama}!`;
}

console.log(salam('Ahmad')); // "Halo, Ahmad!"

// Function dengan multiple parameters
function tambah(a, b) {
  return a + b;
}

console.log(tambah(5, 3)); // 8

// Function dengan default parameter
function perkenalan(nama, umur = 25) {
  return `Nama saya ${nama}, umur ${umur} tahun`;
}

console.log(perkenalan('Ahmad'));        // "Nama saya Ahmad, umur 25 tahun"
console.log(perkenalan('Budi', 30));     // "Nama saya Budi, umur 30 tahun"
```

#### 7.2 Function Expression

```javascript
// Function expression
const kali = function(a, b) {
  return a * b;
};

console.log(kali(4, 5)); // 20

// Arrow function (ES6)
const bagi = (a, b) => {
  return a / b;
};

// Arrow function (short syntax)
const kuadrat = x => x * x;
const sapaan = nama => `Halo ${nama}`;

console.log(kuadrat(5));        // 25
console.log(sapaan('Ahmad'));   // "Halo Ahmad"
```

### 8. Scope

```javascript
// Global scope
let globalVar = 'Saya global';

function contohScope() {
  // Function scope
  let functionVar = 'Saya function scope';
  
  if (true) {
    // Block scope
    let blockVar = 'Saya block scope';
    console.log(globalVar);    // OK
    console.log(functionVar);  // OK
    console.log(blockVar);     // OK
  }
  
  // console.log(blockVar);  // Error! blockVar tidak accessible
}

contohScope();
```

## 💻 Latihan Praktikum

### Latihan 1: Variabel dan Tipe Data
Buatlah script JavaScript yang:
1. Mendeklarasikan variabel dengan berbagai tipe data
2. Menampilkan tipe data menggunakan `typeof`
3. Melakukan konversi tipe data
4. Membuat object dan array sederhana

### Latihan 2: Calculator Sederhana
Buatlah function untuk:
1. Operasi aritmatika dasar (+, -, *, /)
2. Function yang menerima dua parameter
3. Validasi input (pastikan input adalah number)
4. Menampilkan hasil di console

### Latihan 3: Grading System
Buatlah program yang:
1. Menerima input nilai (0-100)
2. Menentukan grade berdasarkan nilai
3. Menggunakan if-else atau switch
4. Menampilkan pesan sesuai grade

### Latihan 4: Loop dan Array
Buatlah program yang:
1. Membuat array dengan data siswa
2. Menggunakan loop untuk menampilkan semua data
3. Mencari nilai tertinggi dan terendah
4. Menghitung rata-rata nilai

## 🧪 Kuis

```javascript
const quizJavaScriptBasic = [
  {
    pertanyaan: "Manakah cara yang BENAR untuk mendeklarasikan variabel di JavaScript ES6?",
    pilihan: ["var nama = 'Ahmad'", "let nama = 'Ahmad'", "variable nama = 'Ahmad'", "declare nama = 'Ahmad'"],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Apa perbedaan antara == dan === di JavaScript?",
    pilihan: [
      "Tidak ada perbedaan",
      "== membandingkan nilai, === membandingkan nilai dan tipe",
      "== untuk angka, === untuk string",
      "=== lebih lambat dari =="
    ],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Tipe data mana yang TIDAK ada di JavaScript?",
    pilihan: ["string", "boolean", "integer", "undefined"],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Apa hasil dari: 5 + '3' di JavaScript?",
    pilihan: ["8", "53", "Error", "undefined"],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Keyword mana yang digunakan untuk membuat konstanta?",
    pilihan: ["const", "constant", "final", "let"],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Bagaimana cara membuat function di JavaScript?",
    pilihan: [
      "function myFunction() {}",
      "def myFunction() {}",
      "create function myFunction() {}",
      "func myFunction() {}"
    ],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Apa hasil dari: Boolean(0) di JavaScript?",
    pilihan: ["true", "false", "0", "undefined"],
    jawabanBenar: 1
  },
  {
    pertanyaan: "Loop mana yang SELALU dieksekusi minimal satu kali?",
    pilihan: ["for", "while", "do-while", "for...in"],
    jawabanBenar: 2
  },
  {
    pertanyaan: "Operator mana yang digunakan untuk modulus (sisa bagi)?",
    pilihan: ["%", "//", "mod", "rem"],
    jawabanBenar: 0
  },
  {
    pertanyaan: "Cara mana yang BENAR untuk mengakses elemen array?",
    pilihan: ["array{0}", "array[0]", "array(0)", "array.0"],
    jawabanBenar: 1
  }
];
```

## 📚 Referensi
1. [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. [JavaScript.info](https://javascript.info/)
3. [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
4. [Eloquent JavaScript (Free Book)](https://eloquentjavascript.net/)

## 🔍 Debugging Tips
1. **Console.log** - Gunakan untuk debugging dan melihat nilai variabel
2. **Browser DevTools** - Inspect element dan console untuk testing
3. **Syntax Error** - Perhatikan kurung, koma, dan titik koma
4. **Type Error** - Pastikan tipe data sesuai dengan operasi
5. **Reference Error** - Pastikan variabel sudah dideklarasikan

## 🚀 Project Mini
Buatlah aplikasi "Kalkulator Grade" dengan fitur:
1. Input nilai dari user (prompt atau form sederhana)
2. Validasi input (harus angka 0-100)
3. Perhitungan grade (A, B, C, D, E)
4. Tampilkan hasil dengan pesan motivasi
5. Option untuk menghitung lagi
6. Simpan history perhitungan dalam array

## 💡 Tips Belajar JavaScript
1. **Praktik Konsisten** - Koding setiap hari minimal 30 menit
2. **Console adalah Teman** - Selalu gunakan console.log untuk debugging
3. **Baca Error Message** - Error message memberikan petunjuk masalah
4. **Eksperimen** - Coba berbagai kombinasi kode
5. **Join Community** - Bergabung dengan forum JavaScript untuk belajar bersama

# Genova Text-to-Image (MERN Stack)

Aplikasi web fullstack yang didukung oleh AI untuk mengubah **teks (prompt)** menjadi **gambar**. Dibangun dengan stack **MongoDB, Express, React, dan Node.js (MERN)** serta terintegrasi dengan model AI generatif gambar seperti ClipDrop.

## Fitur
- 📝 Input prompt teks
- 🖼️ Hasilkan gambar dari teks menggunakan AI
- 💾 Simpan gambar ke database
- 🗂️ Galeri gambar yang dihasilkan
- 🔒 Fitur Login dan Logout

## Struktur Proyek
```
genova/
├── client/
├── server/ 
├── .gitignore
├── README.md
```

## Teknologi yang Digunakan
- **Frontend**: React, Axios, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Motion**: Motion

## Cara Menjalankan

### 1. Clone repositori
```bash
git clone https://github.com/dimasqramadhani/genova.git
cd genova
```

### 2. Install dependensi
```bash
cd client
npm install
cd ../server
npm install
```

### 3. Konfigurasi file environment (.env)

Buat file `.env` pada folder `client/` dan `server/` berdasarkan file `.env.example`.
Contoh isi `server/.env`:
```bash
MONGO_URI= isi dengan link database mongodb 
AI_API_KEY= isi dengan API key
```

### 4. Jalankan aplikasi

#### Mode pengembangan (development):
```bash
# Dari folder root (gunakan concurrently)
npm run dev
```

#### Atau jalankan secara terpisah:
```bash
# Terminal 1
cd server && npm start

# Terminal 2
cd client && npm start
```

## Build untuk Produksi
```bash
cd client
npm run build
# Pindahkan folder build ke server untuk deployment
mv build ../server/
```


## Kredit
AI generator gambar menggunakan Platform ClipDrop.

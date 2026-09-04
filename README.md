# Kananime - Nonton Anime Sub Indo

Website statis (single-file HTML, React + Tailwind dimuat lewat CDN). Tidak perlu build step — tinggal deploy `index.html` apa adanya.

## Struktur

```
kananime-html/
├── index.html      # seluruh aplikasi (HTML + CSS + JS/React lewat CDN)
├── vercel.json      # konfigurasi opsional untuk Vercel
└── .gitignore
```

## 1. Deploy ke GitHub

```bash
cd kananime-html
git init
git add .
git commit -m "Initial commit - Kananime"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPO` sesuai akun & repo GitHub kamu. Kalau repo belum dibuat, buat dulu lewat [github.com/new](https://github.com/new) (pilih **Public/Private**, jangan centang "Add README" biar tidak konflik).

## 2. Deploy ke Vercel

**Cara termudah (lewat dashboard):**
1. Buka [vercel.com/new](https://vercel.com/new)
2. Login/connect akun GitHub kamu
3. Pilih repo yang baru di-push tadi
4. Framework Preset: pilih **Other** (karena ini static HTML biasa)
5. Build Command & Output Directory: kosongkan saja (biarkan default)
6. Klik **Deploy**

Beberapa saat kemudian situs sudah live di `https://nama-repo.vercel.app`.

**Cara lewat CLI (alternatif):**
```bash
npm i -g vercel
cd kananime-html
vercel
```
Ikuti instruksi di terminal (login, pilih scope, konfirmasi project). Untuk deploy ke production:
```bash
vercel --prod
```

## Catatan

- Karena ini file statis, setiap kali kamu edit `index.html`, cukup `git push` lagi — Vercel otomatis re-deploy (jika sudah terhubung ke repo GitHub).
- Aplikasi memanggil API publik `https://www.sankavollerei.web.id/anime` untuk data anime (Samehadaku & Otakudesu). Pastikan API tersebut aktif dan bisa diakses.
- Bookmark & riwayat tontonan disimpan di `localStorage` browser masing-masing pengunjung (bukan database bersama).

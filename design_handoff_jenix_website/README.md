# Handoff: Jenix Industrial — Website Katalog Produk (Astro.js)

## Overview
Website statis, content-driven, untuk promosi produk & katalog — **tanpa fungsi jual-beli**. Ini adalah website pribadi seorang sales/marketing consultant ("Reza Pratama") untuk memamerkan lini produk electric forklift Jenix Industrial. Semua CTA mengarah ke WhatsApp, bukan checkout.

## Tentang File Desain
File-file `.dc.html` di folder `design-reference/` adalah **referensi desain berbentuk HTML** (prototipe tampilan & perilaku) — bukan kode produksi untuk disalin langsung. Tugasnya adalah **merekonstruksi desain ini di dalam project Astro.js** menggunakan komponen `.astro`, content collections, dan struktur routing Astro yang sebenarnya — bukan menempelkan HTML apa adanya.

Project Astro starter kosong (dari `npm create astro@latest`) sudah tersedia sebagai titik awal — lihat bagian "Struktur Project Astro yang Disarankan" di bawah.

## Fidelity
**High-fidelity.** Semua warna, tipografi, spacing, dan konten copy pada referensi sudah final untuk tahap ini. Developer harus merekonstruksi UI sedekat mungkin dengan referensi, menggunakan komponen Astro (`.astro`) dan CSS asli (bukan HTML/inline style hasil salin-tempel).

## Placeholder yang WAJIB diganti sebelum go-live
- Nomor WhatsApp: `+62 812-3456-7890` (dummy)
- Email: `reza.pratama@jenixindustrial.com` (dummy)
- Alamat: `Jl. Industri Raya No. 88, Bekasi, Jawa Barat` (dummy)
- Nama sales & foto pribadi (dummy, untuk demo personal-branding)
- Semua foto produk & foto personal: masih berupa placeholder kosong (drag-and-drop di file referensi), perlu foto asli
- Link Instagram/LinkedIn: `#` (belum diisi)

## Design Tokens

### Warna
- Background utama: `#FAF8F5` (putih hangat)
- Permukaan kartu: `#FFFFFF`
- Teks utama: `#1E2126`
- Teks sekunder: `#5B6472`
- Navy primer (brand/CTA/link aktif): `#14304D`
- Navy hover/link default: `#1F4E79`
- Aksen hangat (badge, eyebrow text): `#B8651F` teks di atas bg `rgba(224,138,60,0.14)`
- Border hairline: `#E6E1D8`
- Footer background: `#14304D`, teks footer: `#D8DEE6`, teks sekunder footer: `#AEB8C4`

### Tipografi
- Heading: **Plus Jakarta Sans**, weight 700–800 (Google Fonts)
- Body: **IBM Plex Sans**, weight 400–600 (Google Fonts)
- H1 hero: 50–52px/800/line-height 1.1
- H1 halaman dalam: 40px/800
- H2 section: 26–32px/700
- Body besar: 16–18px/1.65–1.7
- Body kecil (label/meta): 12–14.5px

### Spacing & Layout
- Container max-width: 1200px, padding horizontal 32px
- Section vertical padding: 64–80px (72px untuk hero)
- Radius kartu: 16px, radius gambar hero: 20–24px, radius button: 10px, radius pill (nav CTA): 999px
- Grid produk: 3 kolom, gap 28px

## Struktur Project Astro yang Disarankan

```
src/
  layouts/
    Layout.astro          → head, font links, <Header/> + <Footer/> wrapper, global reset
  components/
    Header.astro           → logo, nav 4 item, CTA WhatsApp (prop: activePage)
    Footer.astro            → 4 kolom (brand, navigasi, produk, kontak)
    ProductCard.astro       → kartu produk (dipakai di Beranda + Produk), prop: product
    WhatsAppForm.astro      → form kontak client-side (island) yang redirect ke wa.me
  content/
    config.ts               → collection "products": name, slug, category, capacity, liftHeight, battery, chargeTime, dimensions, weight, useCase, tagline, images[]
    products/
      jenix-ef15.md
      jenix-ef25.md
      jenix-er12.md
  pages/
    index.astro             → Beranda
    produk/
      index.astro            → Produk (katalog, loop content collection)
      [slug].astro            → Detail Produk (getStaticPaths dari collection)
    tentang.astro            → Tentang Kami
    kontak.astro              → Kontak Kami
  data/
    site.ts                  → konstanta: nomor WA, email, alamat, sosmed (satu sumber kebenaran)
```

Catatan penting:
- Gunakan **1 content collection `products`** — jangan hardcode 3 produk di 3 tempat berbeda seperti pada file referensi (di referensi itu duplikasi sengaja karena tiap `.dc.html` berdiri sendiri).
- Halaman Detail Produk pada referensi (`DetailProduk.dc.html`) hanya menampilkan 1 contoh produk (Jenix EF25) sebagai representasi template — implementasikan sebagai dynamic route `[slug].astro` yang bekerja untuk seluruh produk di collection.
- Form kontak butuh interactivity (state input + on-submit membuka `wa.me`) → jadikan komponen client-side (Astro island, `client:load`), lihat detail di bawah.

## Halaman / Views

### 1. Beranda (`index.astro`)
**Tujuan:** Kesan pertama personal + funnel ke katalog produk.
**Layout:** Header sticky → Hero 2 kolom (headline+CTA kiri, foto kanan) → strip 3 value-prop → grid 3 produk unggulan → about teaser 2 kolom → CTA banner navy full-width → Footer.
**Copy hero:** Judul "Forklift Listrik yang Siap Kerja, Bukan Sekadar Dijual." + subcopy perkenalan sales + 2 tombol (Lihat Katalog Produk / Chat via WhatsApp).

### 2. Produk (`produk/index.astro`)
**Tujuan:** Katalog lengkap.
**Layout:** Header halaman + grid 3 kartu produk (lebih detail dari home: kategori, tagline, 4 baris spek ringkas, tombol "Lihat Detail Produk" full-width) → CTA banner → Footer.

### 3. Detail Produk (`produk/[slug].astro`)
**Tujuan:** Info lengkap 1 produk + dorong kontak.
**Layout:** Breadcrumb → 2 kolom (galeri foto kiri: 1 foto utama + 3 thumbnail; kanan: kategori, nama, tagline, 4 spec-chip, catatan harga "hubungi untuk penawaran", 2 tombol CTA) → tabel spesifikasi lengkap (7 baris) → grid 2 produk terkait → Footer.

### 4. Tentang Kami (`tentang.astro`)
**Tujuan:** Personal branding sales consultant.
**Layout:** Hero 2 kolom (foto besar kiri, nama+quote kanan) → 3 paragraf cerita → strip putih 3 kartu "kenapa lewat saya" → blok tentang brand Jenix Industrial → CTA banner → Footer.

### 5. Kontak Kami (`kontak.astro`)
**Tujuan:** Konversi ke percakapan WhatsApp.
**Layout:** Header halaman → 2 kolom: kiri = 4 kartu info kontak (WA/email/alamat/sosmed) + placeholder peta; kanan = form (Nama, No. WhatsApp, Pesan) → tombol "Kirim via WhatsApp".

## Interactions & Behavior

### Form Kontak → WhatsApp (paling penting, butuh JS)
1. State: `nama`, `nomor`, `pesan`, `submitted`, `errorMsg`.
2. Validasi: `nama` dan `pesan` wajib diisi (nomor opsional). Jika kosong → tampilkan error inline, jangan submit.
3. Saat submit valid:
   ```js
   const text = `Halo Reza, saya ${nama}${nomor ? ' (' + nomor + ')' : ''}. ${pesan}`;
   const link = 'https://wa.me/6281234567890?text=' + encodeURIComponent(text);
   window.open(link, '_blank');
   ```
   (ganti `6281234567890` dengan nomor WA asli, format internasional tanpa `+` atau spasi)
4. Setelah submit: tampilkan state sukses (ikon centang + tombol "Buka WhatsApp" fallback berisi link yang sama, untuk browser yang memblokir popup).
5. Implementasi di Astro: komponen React/Vue/Svelte kecil atau vanilla `<script>` di dalam `.astro` dengan `client:load`/`is:inline` — pilih sesuai stack yang dipakai developer.

### Navigasi
- Header sticky di semua halaman, link aktif ditandai warna navy + bold, lainnya abu-abu.
- Semua tombol/link "Chat WhatsApp" di header & CTA banner membuka `wa.me` di tab baru dengan pesan pre-filled berbeda sesuai konteks halaman/produk (lihat contoh teks di file referensi).

### Hover/Focus
- Link teks: default `#1F4E79`, hover `#14304D`.
- Tombol solid navy: pertimbangkan sedikit darken/opacity on hover (tidak ada di referensi, boleh ditambahkan developer sesuai konvensi Astro project).

### Responsive
Referensi dibuat di lebar desktop (grid 2–3 kolom, max-width 1200px). Belum ada breakpoint mobile eksplisit — developer perlu menambahkan responsive behavior standar Astro/CSS (stack ke 1 kolom di bawah ~768px, nav jadi hamburger di bawah ~640px) mengikuti konvensi umum, karena ini belum dispesifikasikan oleh klien.

## Assets
- Semua foto (hero personal, foto produk, thumbnail detail, foto "tentang", peta) masih berupa **placeholder kosong** — belum ada foto asli dari klien. Setiap placeholder di file referensi punya caption yang menjelaskan foto apa yang seharusnya ada di sana (mis. "Foto: Reza bersama unit forklift listrik").
- Tidak ada logo asli — nama brand ditampilkan sebagai wordmark teks "JENIX INDUSTRIAL" + tagline kecil "Electric Forklift Specialist". Ganti dengan logo asli bila tersedia.
- Font: Google Fonts `Plus Jakarta Sans` dan `IBM Plex Sans` — load via `@font-face`/`<link>` standar Astro (lihat `astro.config.mjs` / head layout).

## Data Produk (untuk content collection)
3 produk contoh (klien mungkin menambah lebih banyak nanti):

1. **Jenix EF15** — Electric Forklift · 1.5 Ton — Kapasitas 1.500 kg, tinggi angkat 3.000 mm, baterai Lithium-ion 48V/210Ah, isi ulang 2–3 jam, cocok gudang & ritel.
2. **Jenix EF25** — Electric Forklift · 2.5 Ton — Kapasitas 2.500 kg, tinggi angkat 4.500 mm, baterai Lithium-ion 80V/300Ah, isi ulang 3–4 jam, cocok distribusi & logistik skala besar. Dimensi 2.560×1.150×2.100 mm, berat ±3.850 kg.
3. **Jenix ER12** — Electric Reach Truck · 1.2 Ton — Kapasitas 1.200 kg, tinggi angkat 7.500 mm (high-rack), baterai Lithium-ion 24V/250Ah, isi ulang 2–3 jam, cocok rak tinggi & cold storage.

## Files
- `design-reference/Beranda.dc.html` — Beranda
- `design-reference/Produk.dc.html` — Katalog Produk
- `design-reference/DetailProduk.dc.html` — Detail Produk (contoh: Jenix EF25)
- `design-reference/KontakKami.dc.html` — Kontak Kami (form → WhatsApp)
- `design-reference/TentangKami.dc.html` — Tentang Kami
- `design-reference/image-slot.js` — komponen placeholder gambar (drag-and-drop), hanya untuk kebutuhan pratinjau desain, **tidak perlu dipakai di project Astro**

Catatan: file `.dc.html` di atas hanya bisa dipratinjau di lingkungan desain ini (memuat runtime khusus). Untuk melihat tampilan visualnya, buka lewat tool desain ini atau minta tangkapan layar (screenshot) — jangan mencoba menjalankannya sebagai file HTML statis biasa.

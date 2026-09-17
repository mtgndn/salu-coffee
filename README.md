
# ☕ Salu Coffee & Matcha

### Sade bir marka kimliği. Kahve ve matcha odaklı dijital deneyim.

Salu Coffee & Matcha için geliştirilen, ürünleri ve marka atmosferini öne çıkaran modern, duyarlı ve tek sayfalık tanıtım sitesi.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[Proje Kaynak Kodu](https://github.com/mtgndn/salu-coffee) · [Instagram](https://www.instagram.com/salucoffeeco/)

</div>

---

## 📖 Proje hakkında

**Salu Coffee & Matcha**, bir kafenin dijital ortamda marka hikâyesini, ürünlerini ve servis seçeneklerini tek bir akışta sunması için geliştirilmiş bir **landing page** projesidir. Tasarımda kahve tonları, matcha yeşili, geniş ürün görselleri ve güçlü tipografi bir araya getirilerek markanın sade kimliği yansıtılır.

Ziyaretçi; markayı tanıyabilir, fotoğrafları inceleyebilir, öne çıkan içecek ve tatlıları keşfedebilir, ardından doğrudan **Yemeksepeti** veya **Instagram** bağlantılarına geçebilir. Site içinde sipariş alma ya da ödeme işleme özelliği bulunmaz; sipariş bağlantısı harici platforma yönlendirir.

## ✨ Öne çıkan özellikler

- **Görsel odaklı açılış alanı:** Büyük kapak görseli, kısa marka anlatımı ve belirgin yönlendirme butonları.
- **Tek sayfalık gezinme:** Menü, marka hikâyesi ve sipariş bölümlerine sayfa içi bağlantılar.
- **Kaydırmaya duyarlı üst menü:** Sayfa kaydırıldığında görünümünü değiştiren sabit `Header` bileşeni.
- **Fotoğraf vitrini:** Kafe atmosferini ve ürünleri tanıtan farklı boyutlarda görsel kartları.
- **İmza matcha serisi:** Strawberry, Mango, Blueberry ve Hot Matcha ürünlerinin tanıtımı.
- **Menüden seçmeler:** Kahve, matcha, soğuk içecek ve tatlı kategorilerinden öne çıkan ürünler.
- **Marka ve servis bilgileri:** Gel-al, paket servis ve sosyal medya yönlendirmeleri.
- **Mobil uyumlu arayüz:** Ekran genişliğine göre yeniden düzenlenen grid yapıları ve butonlar.
- **Temel arama motoru / paylaşım meta verileri:** Sayfa başlığı, açıklaması ve Open Graph görseli.

> **Kapsam:** Proje, tanıtım ve yönlendirme amacıyla hazırlanmış bir ön yüz uygulamasıdır. Menü verileri sayfa dosyasında statik olarak tanımlanır. Yönetim paneli, veritabanı, kullanıcı girişi veya entegre ödeme sistemi mevcut değildir.

## 🛠️ Kullanılan teknolojiler

| Teknoloji | Projedeki görevi |
| --- | --- |
| **Next.js (App Router)** | Sayfa ve kök yerleşim yapısı; `next/image` ile görsel kullanımı; Metadata API ile sayfa meta verileri. |
| **React** | Arayüz bileşenlerinin oluşturulması; `Header` içerisinde `useState` ve `useEffect` ile kaydırma durumunun yönetilmesi. |
| **TypeScript** | TSX bileşenleri, bileşen özelliklerinin tiplendirilmesi ve daha kontrollü geliştirme deneyimi. |
| **CSS3 (Vanilla CSS)** | Renk değişkenleri, tipografi, Grid/Flexbox düzenleri, geçişler ve responsive tasarım. |
| **ESLint** | Projedeki lint komutuyla kod denetimi. |

**Not:** Depodaki `package.json` bağımlılık sürümlerini `latest` olarak tanımlıyor; bu nedenle README'de doğrulanmamış sabit sürüm numaraları kullanılmadı. Tasarım Tailwind CSS veya bir hazır UI kütüphanesiyle değil, `app/globals.css` üzerinden yazılmış CSS ile hazırlanmıştır.

## 🎨 Tasarım yaklaşımı

Arayüz, markanın “Simplicity is the new excellence!” yaklaşımına uygun olarak gereksiz görsel karmaşadan uzak tutulmuştur.

| Renk | Kod | Kullanım amacı |
| --- | --- | --- |
| Krem | `#F7F1E8` | Ana sayfa zemini |
| Açık krem | `#FFFAF2` | İçerik yüzeyleri |
| Koyu mürekkep | `#1D1914` | Metinler ve koyu paneller |
| Kahve | `#4F2D1F` | Marka vurguları |
| Matcha yeşili | `#7D9A54` | Butonlar ve vurgular |
| Açık yeşil | `#DBE4C6` | Öne çıkan alanlar |

- **Tipografi:** Başlıklarda serif karakterli Georgia; gövde metinlerinde Inter öncelikli sistem font dizisi.
- **Yerleşim:** CSS Grid ve Flexbox ile kurulan, geniş ekran ve mobil görünüme uyarlanan bölümler.
- **Etkileşim:** Yumuşak sayfa içi kaydırma, hover geçişleri ve kaydırma konumuna göre değişen header.
- **Görseller:** `next/image` üzerinden görüntülenen yerel marka ve ürün görselleri.

## 🧩 Sayfa akışı

```text
Sabit üst menü (Header)
       │
       ▼
Hero / Marka mesajı
       │
       ▼
Marka hikâyesi
       │
       ▼
Fotoğraf vitrini
       │
       ▼
İmza matcha ürünleri
       │
       ▼
Menüden seçmeler
       │
       ▼
Sosyal medya ve servis bilgileri
       │
       ▼
Sipariş / Instagram yönlendirmesi
       │
       ▼
Footer
```

Menü kartları, imza içecekler, servis bilgileri ve fotoğraf kartları `app/page.tsx` içindeki diziler üzerinden oluşturulur. Bu yaklaşım, benzer içeriklerin tekrarlı JSX yazmadan düzenlenmesini sağlar.

## 📁 Temel proje yapısı

```text
salu-coffee/
├── app/
│   ├── globals.css       # Tasarım sistemi, sayfa stilleri ve medya sorguları
│   ├── layout.tsx        # Kök yerleşim ve SEO/Open Graph meta verileri
│   └── page.tsx          # Landing page, ürün listeleri ve sayfa bölümleri
├── components/
│   └── Header.tsx        # Kaydırmaya göre davranan istemci bileşeni
├── public/              # Sayfada kullanılan statik görsel dosyaları
├── package.json         # Bağımlılıklar ve npm komutları
└── tsconfig.json        # TypeScript yapılandırması
```

> Bu şema, incelenen uygulamanın temel kaynak dosyalarını gösterir; depodaki tüm yapılandırma ve kilit dosyalarının eksiksiz listesi değildir.

## 🚀 Yerel ortamda çalıştırma

**Gereksinimler:** Next.js ile uyumlu bir Node.js sürümü ve npm. Bağımlılıklar `latest` kullanıldığı için gereken kesin Node.js sürümünü kurulan Next.js sürümünün belgelerinden kontrol edin.

**1. Depoyu klonlayın**

```bash
git clone https://github.com/mtgndn/salu-coffee.git
cd salu-coffee
```

**2. Bağımlılıkları kurun**

```bash
npm install
```

**3. Geliştirme sunucusunu başlatın**

```bash
npm run dev
```

Tarayıcıda **http://localhost:3000** adresini açın.

### Kullanılabilir komutlar

| Komut | Açıklama |
| --- | --- |
| `npm run dev` | Next.js geliştirme sunucusunu başlatır. |
| `npm run build` | Üretim derlemesi oluşturur. |
| `npm run start` | Oluşturulan üretim derlemesini çalıştırır. Önce `npm run build` çalıştırılmalıdır. |
| `npm run lint` | `app` ve `components` dizinlerini ESLint ile denetler; uyarılarda da başarısız olur. |

Üretim modunda yerel çalıştırmak için:

```bash
npm run build
npm run start
```

## 🔧 İçerikleri özelleştirme

- **Menü:** `app/page.tsx` → `menuItems`
- **İmza içecekler:** `app/page.tsx` → `signatureItems`
- **Servis bilgileri:** `app/page.tsx` → `highlights`
- **Fotoğraf kartları:** `app/page.tsx` → `photoCards`
- **Yemeksepeti / Instagram bağlantıları:** `app/page.tsx` dosyasının üst kısmındaki URL sabitleri.
- **Renkler ve responsive düzen:** `app/globals.css` → `:root` değişkenleri ve `@media` blokları.
- **Sayfa başlığı, açıklaması ve sosyal paylaşım kartı:** `app/layout.tsx` → `metadata`.

**Yayına almadan önce:** Çalışma saatleri, adres, sosyal medya istatistikleri, ürün açıklamaları, müşteri yorumu ve harici bağlantılar kod içinde sabit olduğundan güncelliklerini doğrulayın. `metadataBase` için tanımlanmış alan adının gerçek yayın adresiyle eşleştiğinden emin olun.

## 📌 Geliştirme notları

Mevcut uygulama, tek sayfada güçlü bir marka sunumu ve harici sipariş yönlendirmesine odaklanır. İleride ihtiyaç oluşursa şu geliştirmeler değerlendirilebilir: içeriklerin yönetim panelinden güncellenmesi, menü öğelerinin harici bir veri kaynağından alınması, daha kapsamlı erişilebilirlik testleri ve otomatik test altyapısı. **Bunlar mevcut özellikler değil, geliştirme önerileridir.**

## 👨‍💻 Geliştirici

**Metehan Günaydın**

[GitHub](https://github.com/mtgndn) · [LinkedIn](https://www.linkedin.com/in/mtgndn) · [Portfolio](https://www.metehangunaydin.com)

---

<div align="center">

**Salu Coffee & Matcha** — Kahvenin ve matchanın dijital vitrini. ☕🍵

</div>
sini açın.

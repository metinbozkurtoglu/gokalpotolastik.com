# 🔥 GÖKALP LASTİKÇİLİK — PROJE KURALLARI & MASTER BRIEF
## "Mersin'in En İyi Lastikçi Sitesi" Standartları

> ⚠️ BU DOKÜMAN PROJENİN TEK KAYNAK BELGESİDİR. HİÇBİR KURAL ATLANAMAZ.
> HER SAYFA, HER COMPONENT, HER SATIR KOD BU KURALLARA UYGUN OLMALIDIR.

---

## 📋 BÖLÜM 1: İŞLETME BİLGİLERİ (DEĞİŞMEZ)

| Alan | Değer |
|---|---|
| **İşletme Adı** | Gökalp Lastikçilik ve Akü Satışı |
| **Uzun Başlık** | Gökalp Lastikçilik ve Akü Satışı — Hankook Lastik Bayi |
| **Konum** | Mustafa Kemal, 201. Cd. No:34/A, 33250 Toroslar/Mersin |
| **Bölge** | Mersin / Toroslar |
| **Telefon** | +90 534 030 77 59 |
| **WhatsApp** | +90 534 030 77 59 |
| **E-posta** | info@gokalplastikcilik.com |
| **Çalışma Saatleri** | 7/24 (Yol yardım & akü takviyesi dahil) |

### Google Maps Embed
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.4401339431906!2d34.596780577009866!3d36.80797176725955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f3e0a578888b%3A0xf848d9a049d87e49!2zR8O2a2FscCBMYXN0aWvDp2lsaWsgdmUgQWvDvCBTYXTEscWfxLEgSGFua29vayBMYXN0aWsgQmF5aQ!5e0!3m2!1str!2str!4v1770225529022!5m2!1str!2str" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

---

## 📋 BÖLÜM 2: HİZMETLER & ÜRÜNLER (DEĞİŞMEZ)

### 2.1 Hizmet Listesi (Her biri AYRI sayfa olacak)
1. **Lastik Satışı** — Tüm marka ve ebatlarda lastik
2. **Lastik Değişimi** — Profesyonel lastik sökme/takma
3. **Lastik Tamiri** — Yama, onarım hizmetleri
4. **Rot Balans** — Hassas rot-balans ayarı
5. **Jant Düzeltme (Çant Düzeltme)** — Hasarlı jant onarımı
6. **Akü Satışı & Değişimi** — Bosch akü bayii
7. **7/24 Yol Yardım Servisi** — Acil lastik & akü takviyesi
8. **Akü Takviyesi** — Yerinde akü şarj & değişim

> 🔑 Hizmetler ileride çoğaltılabilir yapıda olmalı. Yeni hizmet eklemek tek bir dosya oluşturmak kadar kolay olmalı.

### 2.2 Marka Öncelikleri
| Kategori | Öncelikli Marka | Detay |
|---|---|---|
| **Lastik** | Hankook | 1. öncelik — bayi olduğumuz marka |
| **Lastik** | Laufenn | 2. öncelik (Hankook'un alt markası) |
| **Lastik** | Diğer tüm markalar | Michelin, Continental, Bridgestone, Pirelli vb. mevcut |
| **Akü** | Bosch | Tek ve ana akü markamız |
| **Jant** | Tüm markalar | Her marka jant (çant) mevcut |

### 2.3 Öne Çıkan USP'ler (Unique Selling Points)
- Hankook Yetkili Bayi
- 7/24 Yol Yardım Servisi
- Bosch Akü Bayii
- Mersin Toroslar'da 7/24 hizmet
- Yerinde akü takviyesi
- Tüm marka lastik ve jant stokta

---

## 📋 BÖLÜM 3: TEKNOLOJİ STACK

| Katman | Teknoloji | Neden |
|---|---|---|
| **Framework** | Astro 4+ (SSG-first) | Sıfır JS, maksimum hız |
| **Stil** | Tailwind CSS | Utility-first, tutarlı tasarım |
| **Font** | Montserrat (self-hosted) | Marka fontu — değişmez |
| **İnteraktif Bileşenler** | Preact Islands | Sadece gerektiğinde hydration |
| **Hosting** | Kullanıcının kendi VPS'i | Kullanıcı yönetecek |
| **Analytics/Tracking** | Kullanıcı kuracak | GTM, GA4, Ads — kullanıcı yönetecek |

---

## 📋 BÖLÜM 4: RENK PALETİ & TASARIM SİSTEMİ (DEĞİŞMEZ)

### 4.1 Ana Renkler
```css
:root {
  /* PRIMARY — Turuncu/Ateş */
  --color-primary: #DB5200;
  --color-primary-hover: #FF6B1A;
  --color-primary-dark: #B84500;
  --color-primary-glow: rgba(219, 82, 0, 0.3);

  /* DARK — Siyah Tonları */
  --color-black: #000000;
  --color-dark-900: #0A0A0A;
  --color-dark-800: #141414;
  --color-dark-700: #1F1F1F;
  --color-dark-600: #2A2A2A;

  /* LIGHT — Beyaz Tonları */
  --color-white: #FFFFFF;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E8E8E8;
  --color-gray-300: #D1D1D1;
  --color-gray-400: #9A9A9A;

  /* SEMANTIC */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-whatsapp: #25D366;
}
```

### 4.2 Renk Kullanım Kuralları
| Kullanım Alanı | Renk | Not |
|---|---|---|
| CTA butonları | `--color-primary` | HER CTA turuncu |
| Hover durumu | `--color-primary-hover` | Daha açık turuncu |
| Arka plan (koyu bölümler) | `--color-dark-900` | Header, footer, hero |
| Arka plan (açık bölümler) | `--color-white` / `--color-gray-100` | İçerik |
| Metin (açık zemin) | `--color-dark-900` | Ana metin |
| Metin (koyu zemin) | `--color-white` | Kontrast metin |
| WhatsApp butonu | `--color-whatsapp` | Sabit yeşil |
| Telefon butonu | `--color-primary` | Turuncu |

### 4.3 Tipografi Kuralları
```
Font Ailesi: "Montserrat", sans-serif
├── H1: 700 (Bold), 48-64px desktop / 32-40px mobil
├── H2: 700 (Bold), 36-48px desktop / 28-32px mobil
├── H3: 600 (SemiBold), 24-32px desktop / 20-24px mobil
├── H4: 600 (SemiBold), 20-24px desktop / 18-20px mobil
├── Body: 400 (Regular), 16-18px desktop / 15-16px mobil
├── Small: 400 (Regular), 14px
├── CTA Buton: 700 (Bold), 16-18px, UPPERCASE, letter-spacing: 0.05em
└── Nav Link: 500 (Medium), 15-16px
```

### 4.4 Tasarım Stili — "PREMIUM OTOMOTİV"

**ANA FELSEFe:**
> Karanlık, güçlü, güven veren, premium oto servis deneyimi.
> "Lastikçi = kirli, dağınık" algısını tamamen kıracak kurumsal görüntü.
> Kullanıcı siteye girdiğinde "bu adam işini biliyor" demeli.
> Mersin'deki HİÇBİR lastikçi sitesine benzememeli.

**YAPILACAKLAR:**
- Siyah ağırlıklı koyu tema — premium, güçlü, maskülen
- Design skill frontend skill kesinlikle kullanılacak 
- Turuncu #DB5200 SADECE dikkat çekmesi gereken yerlerde: CTA, vurgular, ikonlar, ayraçlar
- Büyük, cesur tipografi — "Biz buradayız, güven bize" hissi
- Profesyonel fotoğraflar: karanlık tonlu, kontrast yüksek
- Glassmorphism kartlar: koyu zemin üzerinde yarı saydam, blur arka plan
- Subtle animasyonlar: scroll-triggered fade-in, staggered reveal (abartısız)
- Koyu ↔ açık bölüm geçişleri ile görsel ritim yaratılacak
- Negatif alan (whitespace) bilinçli kullanılacak — sıkışık görünüm YASAK
- Turuncu accent line/border kullanımı — ince çizgilerle premium his
- Micro-interaction: buton hover glow, kart hover scale, link hover underline slide

**KAÇINILACAKLAR:**
- ❌ Çocuksu renkler, pastel tonlar
- ❌ Generic AI görünümü (mor gradyanlar, Inter/Roboto font, cookie-cutter layout)
- ❌ Aşırı yuvarlak köşeler (max border-radius: 12px)
- ❌ Kalabalık, karmaşık layout
- ❌ Stok fotoğraf hissi veren görseller
- ❌ Animasyon kirliliği — her şey hareket etmemeli
- ❌ Gradient çorbası — max 1 gradient kullanımı
- ❌ Gölge kirliliği — shadow minimal ve bilinçli
- ❌ Beyaz üzerine açık turuncu metin (kontrast yetersiz)
- ❌ Rakip lastikçi sitelerinin klasik "kırmızı-beyaz-gri" şablonu

**REFERANS HİS:**
Premium araç servis markaları, lüks oto yıkama siteleri, Hankook/Continental kurumsal siteleri.

---

## 📋 BÖLÜM 5: SAYFA YAPISI & URL MİMARİSİ

### 5.1 Site Haritası
```
/ (Anasayfa)
├── /hakkimizda
├── /hizmetler
│   ├── /hizmetler/lastik-satisi
│   ├── /hizmetler/lastik-degisimi
│   ├── /hizmetler/lastik-tamiri
│   ├── /hizmetler/rot-balans
│   ├── /hizmetler/jant-duzeltme
│   ├── /hizmetler/aku-satisi-degisimi
│   ├── /hizmetler/yol-yardim-servisi
│   └── /hizmetler/aku-takviyesi
├── /blog
│   └── /blog/[slug]
├── /iletisim
└── /sitemap.xml
```

### 5.2 URL Kuralları
- Tüm URL'ler Türkçe, küçük harf, tire ile ayrılmış
- Ş→s, Ç→c, Ğ→g, Ü→u, Ö→o, İ→i dönüşümü
- Asla ID veya query parameter URL'de olmasın
- Her URL benzersiz title, description, H1
- Trailing slash OLMAYACAK

---

## 📋 BÖLÜM 6: SEO KURALLARI (KRİTİK)

### 6.1 Her Sayfada Zorunlu Meta Taglar
```html
<title>{Sayfa Başlığı} | Gökalp Lastikçilik Mersin</title>
<meta name="description" content="{160 karaktere kadar benzersiz açıklama}" />
<link rel="canonical" href="https://gokalplastikcilik.com/{path}" />

<!-- Open Graph -->
<meta property="og:title" content="{Başlık}" />
<meta property="og:description" content="{Açıklama}" />
<meta property="og:image" content="{Sayfa görseli}" />
<meta property="og:url" content="{Canonical URL}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="tr_TR" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />

<!-- Geo -->
<meta name="geo.region" content="TR-33" />
<meta name="geo.placename" content="Mersin" />
<meta name="geo.position" content="36.807972;34.596781" />
<meta name="ICBM" content="36.807972, 34.596781" />
```

### 6.2 Schema Markup (JSON-LD)

**Tüm sayfalarda — LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Gökalp Lastikçilik ve Akü Satışı",
  "alternateName": "Gökalp Lastikçilik",
  "description": "Mersin Toroslar'da 7/24 lastik, akü, jant hizmetleri. Hankook yetkili bayi, Bosch akü satışı.",
  "url": "https://gokalplastikcilik.com",
  "telephone": "+905340307759",
  "email": "info@gokalplastikcilik.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mustafa Kemal, 201. Cd. No:34/A",
    "addressLocality": "Toroslar",
    "addressRegion": "Mersin",
    "postalCode": "33250",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.807972,
    "longitude": 34.596781
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "₺₺",
  "areaServed": { "@type": "City", "name": "Mersin" }
}
```

**Ek schema'lar:**
- Hizmet sayfaları → `Service` schema
- Blog yazıları → `Article` schema
- Her hizmet sayfası → `FAQPage` schema (en az 3 soru/cevap)
- İletişim → `ContactPage` schema
- Her sayfa (anasayfa hariç) → `BreadcrumbList` schema

### 6.3 Heading Hiyerarşisi
- H1 → Sayfada TEK, ana anahtar kelimeyi içerir
- H2 → Alt bölümler (3-6 adet)
- H3 → Detaylar
- Sıra atlanmaz (H1 → H3 YASAK)
- H1 asla logo olmamalı, her sayfada benzersiz

### 6.4 Internal Linking
- Her hizmet sayfası → en az 2 diğer hizmet sayfasına link
- Blog yazıları → ilgili hizmet sayfalarına link
- Anasayfa → tüm hizmet sayfalarına direkt link
- Breadcrumb → her sayfada (anasayfa hariç)
- Anchor text açıklayıcı: "tıklayın" YASAK → "lastik değişimi hizmetimiz" gibi

### 6.5 Teknik SEO
- robots.txt doğru yapılandırılacak
- XML sitemap otomatik (Astro entegrasyonu)
- Canonical URL her sayfada
- 404 sayfası özel tasarım + CTA
- Görsellerde Türkçe alt tag zorunlu
- Lazy loading (above-the-fold hariç)
- WebP/AVIF format öncelikli
- Self-hosted Montserrat (harici Google Fonts isteği YOK)

### 6.6 Sayfa Bazlı SEO Planı

| Sayfa | Title | H1 |
|---|---|---|
| Anasayfa | Gökalp Lastikçilik Mersin \| 7/24 Lastik & Akü Hizmeti \| Hankook Bayi | Mersin'de 7/24 Profesyonel Lastik ve Akü Hizmeti |
| Hakkımızda | Hakkımızda \| Gökalp Lastikçilik Mersin - Hankook Yetkili Bayi | Gökalp Lastikçilik — Mersin'in Güvenilir Lastik & Akü Uzmanı |
| Lastik Satışı | Lastik Satışı Mersin \| Hankook, Laufenn & Tüm Markalar \| Gökalp | Mersin'de Her Marka Lastik Satışı — Hankook Yetkili Bayi |
| Lastik Değişimi | Lastik Değişimi Mersin \| Profesyonel Lastik Sökme Takma \| Gökalp | Profesyonel Lastik Değişimi Hizmeti — Mersin Toroslar |
| Lastik Tamiri | Lastik Tamiri Mersin \| Lastik Yama & Onarım \| Gökalp Lastikçilik | Mersin'de Uzman Lastik Tamiri ve Onarım Hizmeti |
| Rot Balans | Rot Balans Ayarı Mersin \| Hassas Balans Hizmeti \| Gökalp | Hassas Rot Balans Ayarı — Güvenli Sürüş İçin |
| Jant Düzeltme | Jant Düzeltme Mersin \| Çant Düzeltme Hizmeti \| Gökalp | Profesyonel Jant Düzeltme (Çant Düzeltme) Hizmeti |
| Akü Satışı | Bosch Akü Satışı Mersin \| Akü Değişimi \| Gökalp Lastikçilik | Bosch Yetkili Bayi — Akü Satışı ve Değişimi Mersin |
| 7/24 Yol Yardım | 7/24 Yol Yardım Mersin \| Acil Lastik & Akü Servisi \| Gökalp | 7/24 Yol Yardım Servisi — Mersin'in Her Yerine |
| Akü Takviyesi | Akü Takviyesi Mersin \| 7/24 Yerinde Akü Şarj \| Gökalp | 7/24 Yerinde Akü Takviyesi Hizmeti — Mersin |
| Blog | Blog \| Lastik & Akü Rehberi \| Gökalp Lastikçilik Mersin | Lastik ve Akü Hakkında Bilmeniz Gereken Her Şey |
| İletişim | İletişim \| Gökalp Lastikçilik Mersin \| 0534 030 77 59 | Bize Ulaşın — Gökalp Lastikçilik Mersin |

---

## 📋 BÖLÜM 7: GOOGLE ADS LANDING PAGE UYUMU

> ℹ️ Ads hesabı ve tracking kullanıcı kuracak. Bu bölüm SADECE sayfa yapısının Ads uyumunu kapsar.

### 7.1 Her Hizmet Sayfası = Potansiyel Landing Page
- Above the fold: net başlık + CTA + telefon numarası ZORUNLU
- Anahtar kelime → başlık uyumu yüksek (kalite puanı)
- Sayfa hızı < 2 saniye (kalite puanı)
- Mobil uyumluluk tam (kalite puanı)

### 7.2 Sayfada Bulunması Gereken Dönüşüm Noktaları
| Eleman | Zorunlu mu? |
|---|---|
| Click-to-call telefon | ✅ HER sayfada |
| WhatsApp butonu | ✅ HER sayfada |
| İletişim formu (isim + tel + mesaj) | ✅ HER hizmet sayfasında |
| Harita / yol tarifi | İletişim sayfasında zorunlu |

---

## 📋 BÖLÜM 8: MOBİL DENEYİM KURALLARI (EN KRİTİK BÖLÜM)

> ⚡ MÜŞTERİLERİN %80+'SI MOBİLDEN GELİR.
> MOBİL = ÖNCELİK #1. TASARIM MOBİLDEN BAŞLAR.
> 1 TIKLA ARA. 1 TIKLA WHATSAPP. HIZLI. ÇOK HIZLI. DELİRTECEK KADAR HIZLI.

### 8.1 Mobile-First Kuralları
- Tasarım MOBİLDEN başlayacak, desktop'a genişletilecek
- Breakpoints: 375px (mobil) → 768px (tablet) → 1024px (laptop) → 1440px (desktop)
- Touch target minimum 48x48px
- Font minimum 15px mobilde
- Line-height minimum 1.5

### 8.2 Sabit Mobil İletişim Barı (ZORUNLU — SİTENİN EN ÖNEMLİ ELEMENTİ)

```
┌──────────────────────────────────────┐
│  📞 HEMEN ARA   │  💬 WHATSAPP     │
│  (turuncu bg)    │  (yeşil bg)      │
└──────────────────────────────────────┘
```

**KURALLAR:**
- ASLA kaybolmaz, ASLA gizlenmez, scroll'dan bağımsız
- `tel:+905340307759` — direkt arama
- `https://wa.me/905340307759?text=Merhaba,%20bilgi%20almak%20istiyorum`
- Z-index en yüksek
- Minimum 48px yükseklik, parmak dostu
- Body'de padding-bottom ile içerik barın altında kalmaz
- Desktop'ta GİZLİ (header yeterli)
- Buton metinleri kısa ve net

### 8.3 Hızlı İletişim Kuralları
- Sayfanın HER noktasında MAX 1 tıkla iletişim
- Header'da telefon tıklanabilir
- Her hizmet sayfası: en az 2 CTA (Ara + WhatsApp)
- Desktop'ta floating WhatsApp butonu sağ alt köşe
- Form: isim + telefon + mesaj. BAŞKA ALAN YOK. ASLA.

### 8.4 Mobil Performans
| Metrik | Hedef | Kabul Edilemez |
|---|---|---|
| LCP | < 1.5s | > 2.5s |
| FID | < 50ms | > 100ms |
| CLS | < 0.05 | > 0.1 |
| TTI | < 2s | > 3.5s |
| Sayfa boyutu | < 500KB | > 1MB |
| JS boyutu | < 50KB | > 150KB |

### 8.5 Mobil Görsel Kuralları
- Hero mobilde max 200KB
- Responsive görseller (srcset + sizes)
- Above-the-fold eager, geri kalan lazy
- Gereksiz dekoratif görsel YASAK
- Harita: mobilde statik placeholder, tıklayınca embed yüklensin

---

## 📋 BÖLÜM 9: COMPONENT & LAYOUT KURALLARI

### 9.1 Header

**Desktop:**
```
┌────────────────────────────────────────────────────────────────┐
│ [LOGO]  Anasayfa  Hizmetler▾  Hakkımızda  Blog  İletişim  │  📞 0534 030 77 59  [WhatsApp] │
└────────────────────────────────────────────────────────────────┘
```
- Sticky — scroll'da küçülür, glassmorphism/blur backdrop
- Hizmetler = dropdown, tüm alt sayfalar erişilebilir
- Telefon HER ZAMAN görünür ve tıklanabilir

**Mobil:**
```
┌──────────────────────────┐
│ [LOGO]       [☰ Menü]   │
└──────────────────────────┘
```
- Hamburger → tam ekran koyu overlay
- İçinde: linkler + telefon + WhatsApp + e-posta
- Scroll kilitlenir menü açıkken

### 9.2 Hero Section (Anasayfa)
- Tam genişlik, koyu tonlu arka plan
- Dark overlay gradient
- Cesur H1 (beyaz) + alt başlık
- 2 CTA yan yana: "Hemen Ara" (turuncu) + "WhatsApp" (yeşil)
- Güven rozetleri: Hankook Bayi | Bosch Bayi | 7/24 Açık
- Desktop 70-80vh, mobil 60-70vh

### 9.3 Hizmet Kartları
- Grid: mobil 1 / tablet 2 / desktop 3-4 kolon
- İkon + başlık + kısa açıklama (max 2 satır) + "Detaylı Bilgi →"
- Hover: scale(1.02) veya turuncu border-glow
- Tüm kart alanı tıklanabilir link
- Glassmorphism veya subtle border stili

### 9.4 CTA Bölümü (Her sayfada EN AZ 1)
- Tam genişlik, koyu arka plan + turuncu vurgu
- Güçlü başlık + telefon + WhatsApp butonları
- Opsiyonel: subtle arka plan deseni

### 9.5 Footer
- Koyu arka plan (#0A0A0A)
- 4 kolon: Logo+açıklama | Hızlı linkler | Hizmetler | İletişim
- Tüm hizmetlere link (SEO)
- Telefon + WhatsApp tıklanabilir
- Mobilde tek kolon stack
- Alt satır: © 2025 Gökalp Lastikçilik

### 9.6 Breadcrumb
- Anasayfa hariç HER sayfada
- BreadcrumbList schema ile
- `Anasayfa > Hizmetler > Lastik Değişimi`

### 9.7 404 Sayfası
- Özel tasarım, ana sayfaya yönlendirme
- Telefon + WhatsApp CTA

---

## 📋 BÖLÜM 10: İÇERİK & COPYWRITING KURALLARI

### 10.1 Ton
- **Güvenilir** — kurumsal, sağlam
- **Samimi ama ciddi** — soğuk değil, profesyonel
- **Harekete geçirici** — her bölüm CTA'ya yönlendirir
- **Yerel** — "Mersin", "Toroslar" doğal geçmeli
- **Acil** — "7/24 buradayız", "15 dakikada yanınızdayız"

### 10.2 YASAK
- ❌ "Hoş geldiniz web sitemize"
- ❌ "Firmamız ... yılında kurulmuştur"
- ❌ "Müşteri memnuniyeti ilkemizdir"
- ❌ "Detaylı bilgi için tıklayın"
- ❌ "En iyi / En kaliteli" (kanıtsız)
- ❌ Gereksiz uzun paragraflar

### 10.3 KULLANIL
- ✅ "Lastik mi patladı? 15 dakikada yanınızdayız."
- ✅ "Hankook yetkili bayi güvencesiyle"
- ✅ "Mersin Toroslar'da 7/24 açığız"
- ✅ "0534 030 77 59'u arayın, yola çıkalım"
- ✅ "Bosch akü güvencesiyle kışa hazır olun"

### 10.4 Hizmet Sayfası İçerik Şablonu
```
1. H1 — Hizmet + "Mersin"
2. Giriş (2-3 cümle: sorun → çözüm)
3. CTA butonu
4. H2 — Ne yapıyoruz?
5. H2 — Neden Gökalp? (USP'ler)
6. H2 — Markalar (ilgili ise)
7. H2 — SSS (FAQPage schema, min 3 soru)
8. Tam genişlik CTA (tel + WhatsApp)
9. İlgili hizmetler (2-3 kart, internal link)
```

---

## 📋 BÖLÜM 11: GÖRSEL & MEDYA KURALLARI

| Kullanım | Format | Max Boyut |
|---|---|---|
| Hero/banner | WebP | 200KB |
| Hizmet ikonları | SVG | 5KB |
| Ürün görselleri | WebP | 100KB |
| Logo | SVG | 10KB |
| OG Image | JPG | 300KB |

- Türkçe, açıklayıcı alt tag zorunlu
- Dekoratif görselde `alt=""`
- İkon stili: line (thin), modern — hover'da turuncu

---

## 📋 BÖLÜM 12: PERFORMANS & ERİŞİLEBİLİRLİK

### Lighthouse Hedefleri
| Kategori | Hedef |
|---|---|
| Performance | 95+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

### Performans
- Montserrat self-hosted, subset (Latin + Türkçe), font-display: swap
- Critical CSS inline
- JS sadece island bileşenlerinde
- Üçüncü parti script yok (analytics kullanıcı ekleyecek)
- Görseller build time'da optimize

### Erişilebilirlik
- WCAG AA renk kontrastı
- Keyboard erişilebilirlik
- Aria-label'lar
- Focus state görünür
- Skip navigation

---

## 📋 BÖLÜM 13: ASTRO DOSYA YAPISI

```
gokalp-lastikcilik/
├── public/
│   ├── fonts/montserrat/
│   ├── images/ (logo, hero, hizmetler, markalar)
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── MobileMenu.astro
│   │   ├── Footer.astro
│   │   ├── MobileContactBar.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── CTASection.astro
│   │   ├── Breadcrumb.astro
│   │   ├── FAQSection.astro
│   │   ├── WhatsAppFloat.astro
│   │   ├── ContactForm.tsx (Preact island)
│   │   ├── GoogleMap.astro
│   │   ├── SchemaMarkup.astro
│   │   └── SEOHead.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ServiceLayout.astro
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── hakkimizda.astro
│   │   ├── iletisim.astro
│   │   ├── 404.astro
│   │   ├── blog/ (index + [slug])
│   │   └── hizmetler/ (index + her hizmet)
│   ├── content/ (hizmetler + blog — Content Collections)
│   ├── data/siteConfig.ts
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 📋 BÖLÜM 14: siteConfig.ts

```typescript
export const siteConfig = {
  name: "Gökalp Lastikçilik ve Akü Satışı",
  shortName: "Gökalp Lastikçilik",
  tagline: "Hankook Lastik Bayi",
  description: "Mersin Toroslar'da 7/24 lastik, akü, jant hizmetleri. Hankook yetkili bayi.",
  url: "https://gokalplastikcilik.com",
  phone: "+905340307759",
  phoneFormatted: "0534 030 77 59",
  whatsapp: "905340307759",
  whatsappLink: "https://wa.me/905340307759?text=Merhaba,%20bilgi%20almak%20istiyorum",
  email: "info@gokalplastikcilik.com",
  address: {
    street: "Mustafa Kemal, 201. Cd. No:34/A",
    district: "Toroslar",
    city: "Mersin",
    postalCode: "33250",
    country: "TR",
    full: "Mustafa Kemal, 201. Cd. No:34/A, 33250 Toroslar/Mersin"
  },
  geo: { lat: 36.807972, lng: 34.596781 },
  colors: { primary: "#DB5200", black: "#000000", white: "#FFFFFF" },
  font: "Montserrat",
  hours: "7/24",
  brands: {
    lastik: { primary: "Hankook", secondary: "Laufenn", others: true },
    aku: { primary: "Bosch" },
    jant: { allBrands: true }
  }
} as const;
```

---

## 📋 BÖLÜM 15: KONTROL LİSTESİ

### Her Sayfa ✅
- [ ] Benzersiz H1
- [ ] Title < 60 karakter
- [ ] Description < 160 karakter
- [ ] Canonical URL
- [ ] OG tagları
- [ ] Schema markup
- [ ] Breadcrumb (anasayfa hariç)
- [ ] Min 2 internal link
- [ ] CTA (tel + WhatsApp)
- [ ] Görsel alt tag
- [ ] Heading hiyerarşisi doğru
- [ ] Mobil iletişim barı görünür
- [ ] Above the fold CTA var
- [ ] Lighthouse 95+

### Yayın Öncesi ✅
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] 404 sayfası
- [ ] Tüm tel/WhatsApp linkleri çalışıyor
- [ ] Form test edildi
- [ ] Mobil test (iOS + Android)
- [ ] Responsive tüm sayfalar
- [ ] Font doğru (self-hosted)
- [ ] Görseller optimize
- [ ] Internal link kırık yok
- [ ] Console hata yok

---

> 🏁 **BU DOKÜMAN PROJENİN ANAHTARIDIR.**
> HER ADIMDA BURAYA DÖNÜLECEK. KISA YOL YOK.
> TASARIM RAKİPLERDEN AYRILACAK. MOBİL KUSURSUZ. SEO MÜKEMMEL.
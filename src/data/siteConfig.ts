export const siteConfig = {
  name: "Gökalp Lastikçilik ve Akü Satışı",
  shortName: "Gökalp Lastikçilik",
  tagline: "Hankook Yetkili Bayi | Bosch Akü Bayii",
  description: "Mersin'de 7/24 lastik, akü ve jant hizmetleri. Hankook yetkili bayi ve Bosch akü bayii güvencesiyle 20 yıldır profesyonel hizmet.",
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
  },
  mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.4401339431906!2d34.596780577009866!3d36.80797176725955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f3e0a578888b%3A0xf848d9a049d87e49!2zR8O2a2FscCBMYXN0aWvDp2lsaWsgdmUgQWvDvCBTYXTEscWfxLEgSGFua29vayBMYXN0aWsgQmF5aQ!5e0!3m2!1str!2str!4v1770225529022!5m2!1str!2str`,
} as const;

export const services = [
  {
    slug: "yol-yardim-servisi",
    title: "7/24 Yol Yardım",
    shortDesc: "Gece gündüz, Mersin'in her noktasına 15 dakikada yol yardım.",
    icon: "emergency",
    featured: true,
    seoTitle: "7/24 Yol Yardım Mersin | Acil Lastik & Akü Servisi | Gökalp",
    h1: "7/24 Yol Yardım Servisi — Mersin'in Her Yerine",
    metaDesc: "Mersin'de 7/24 yol yardım servisi. Acil lastik değişimi, akü takviyesi, yerinde servis. 15 dakikada yanınızdayız. 0534 030 77 59"
  },
  {
    slug: "lastik-satisi",
    title: "Lastik Satışı",
    shortDesc: "Hankook, Laufenn ve tüm markalarda uygun fiyatlı lastik.",
    icon: "tire",
    seoTitle: "Lastik Satışı Mersin | Hankook, Laufenn & Tüm Markalar | Gökalp",
    h1: "Mersin'de Her Marka Lastik Satışı — Hankook Yetkili Bayi",
    metaDesc: "Mersin'de Hankook yetkili bayi güvencesiyle lastik satışı. Laufenn, Michelin, Continental, Bridgestone ve tüm markalarda uygun fiyat. 0534 030 77 59"
  },
  {
    slug: "aku-satisi-degisimi",
    title: "Akü Satışı & Değişimi",
    shortDesc: "Bosch yetkili bayi güvencesiyle akü satış ve değişim.",
    icon: "battery",
    seoTitle: "Bosch Akü Satışı Mersin | Akü Değişimi | Gökalp Lastikçilik",
    h1: "Bosch Yetkili Bayi — Akü Satışı ve Değişimi Mersin",
    metaDesc: "Mersin'de Bosch yetkili bayi olarak akü satışı ve değişimi. Yerinde akü montajı, 7/24 hizmet. 0534 030 77 59"
  },
  {
    slug: "lastik-degisimi",
    title: "Lastik Değişimi",
    shortDesc: "Profesyonel ekipmanlarla hızlı ve güvenli lastik sökme/takma.",
    icon: "change",
    seoTitle: "Lastik Değişimi Mersin | Profesyonel Lastik Sökme Takma | Gökalp",
    h1: "Profesyonel Lastik Değişimi Hizmeti — Mersin",
    metaDesc: "Mersin'de profesyonel lastik değişimi hizmeti. Uzman ekip, modern ekipman, hızlı servis. Yaz ve kış lastiği değişimi. 7/24 hizmet. 0534 030 77 59"
  },
  {
    slug: "rot-balans",
    title: "Rot Balans",
    shortDesc: "Hassas rot-balans ayarı ile güvenli sürüş.",
    icon: "balance",
    seoTitle: "Rot Balans Ayarı Mersin | Hassas Balans Hizmeti | Gökalp",
    h1: "Hassas Rot Balans Ayarı — Güvenli Sürüş İçin",
    metaDesc: "Mersin'de hassas rot balans ayarı hizmeti. Modern cihazlarla doğru ayar, güvenli sürüş. Gökalp Lastikçilik — 0534 030 77 59"
  },
  {
    slug: "lastik-tamiri",
    title: "Lastik Tamiri",
    shortDesc: "Yama ve onarım ile lastiğinizi kurtarıyoruz.",
    icon: "repair",
    seoTitle: "Lastik Tamiri Mersin | Lastik Yama & Onarım | Gökalp Lastikçilik",
    h1: "Mersin'de Uzman Lastik Tamiri ve Onarım Hizmeti",
    metaDesc: "Mersin'de lastik tamiri ve yama hizmeti. Profesyonel lastik onarımı, uygun fiyat, 7/24 servis. Hemen arayın: 0534 030 77 59"
  },
  {
    slug: "jant-duzeltme",
    title: "Jant Düzeltme",
    shortDesc: "Hasarlı jantlarınızı fabrika ayarlarına getiriyoruz.",
    icon: "rim",
    seoTitle: "Jant Düzeltme Mersin | Çant Düzeltme Hizmeti | Gökalp",
    h1: "Profesyonel Jant Düzeltme (Çant Düzeltme) Hizmeti",
    metaDesc: "Mersin'de jant düzeltme ve çant düzeltme hizmeti. Hasarlı jantlarınız profesyonel ekipmanlarla onarılır. 0534 030 77 59"
  },
  {
    slug: "aku-takviyesi",
    title: "Akü Takviyesi",
    shortDesc: "Aracınız mı çalışmıyor? Yerinde akü takviyesi yapıyoruz.",
    icon: "charge",
    seoTitle: "Akü Takviyesi Mersin | 7/24 Yerinde Akü Şarj | Gökalp",
    h1: "7/24 Yerinde Akü Takviyesi Hizmeti — Mersin",
    metaDesc: "Mersin'de 7/24 yerinde akü takviyesi hizmeti. Aracınız çalışmıyorsa bizi arayın, 15 dakikada yanınızdayız. 0534 030 77 59"
  }
] as const;

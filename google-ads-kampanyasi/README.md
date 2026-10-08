# Akü Satışı & Değişimi — Google Ads Kampanyası

Bu klasördeki CSV dosyaları, **Google Ads Editor** (ücretsiz masaüstü uygulama:
https://ads.google.com/intl/tr_tr/home/tools/ads-editor/) üzerinden içe
aktarılmak üzere hazırlandı. Kaynak: sitedeki
[aku-satisi-degisimi](src/pages/hizmetler/aku-satisi-degisimi.astro) hizmet
sayfası (Bosch yetkili bayi, ücretsiz akü testi, yerinde değişim, 2 yıl
garanti, her gün 08:30-22:00, Toroslar/Mersin).

## Kampanya özeti

| Alan | Değer |
|---|---|
| Kampanya adı | Aku Satisi ve Degisimi - Mersin |
| Günlük bütçe | 100 TL |
| Teklif stratejisi | Manuel TBM (Max CPC anahtar kelime başına ayarlı) |
| Hedef bölge | Toroslar, Yenişehir, Akdeniz, Mezitli (Mersin merkez ilçeleri) |
| Dil | Türkçe |
| Final URL | https://gokalplastikcilik.com/hizmetler/aku-satisi-degisimi |
| Reklam grupları | 4: Akü Fiyatları (Genel), Bosch Akü, Akü Değişimi (Yerinde Servis), Start-Stop/AGM Akü |

## Dosyalar ve içe aktarma sırası

Google Ads Editor'de: **Hesap > İçe Aktar > Dosyadan...** yolunu izleyip
sırayla aşağıdaki dosyaları aktarın. Her aktarımda Editor size sütun
başlıklarını eşleştirmeniz için bir önizleme gösterir — önerilen eşleştirmeyi
kabul edin, "Değişiklikleri incele"yi seçip kontrol ettikten sonra kaydedin.
Hiçbir dosya canlıya (Google sunucularına) otomatik yayınlanmaz; Editor'de
"Yayınla" demeden hesabınıza dokunulmaz.

1. `01_kampanya.csv` — Kampanya (bütçe, ağ, teklif stratejisi)
2. `02_reklam_gruplari.csv` — 4 reklam grubu + varsayılan Max CPC
3. `03_anahtar_kelimeler.csv` — 33 anahtar kelime (Geniş/Sıralı/Tam eşleme karışık)
4. `04_negatif_kelimeler.csv` — Kampanya düzeyinde 20 negatif kelime
5. `05_reklamlar_rsa.csv` — 4 duyarlı arama reklamı (her grup için 15 başlık / 4 açıklama)
6. `06_sitelink_uzantilari.csv` — 4 site bağlantısı (Akü Takviyesi, Yol Yardım, İletişim, Hakkımızda)
7. `07_callout_uzantilari.csv` — 7 öne çıkan snippet (USP'ler)
8. `08_konum_hedefleme.csv` — 4 hedef ilçe

## Aktarma sonrası MUTLAKA yapılması gerekenler

Bunlar CSV ile aktarılamıyor, Editor veya Google Ads arayüzünden elle
eklenmesi gerekiyor:

- **Arama Ağı Ortakları**: Kampanya oluşurken "Google Arama Ağı"nı işaretli,
  "Arama Ağı Ortakları" ve "Display Ağı"nı kapalı tutun (kalite düşük trafiği
  önlemek için).
- **Arama sözcüğü eşleştirme genişliği**: Google 2024-2025'te "Geniş eşleme +
  Maximize Conversions" dışında geniş eşlemeyi agresif genişletiyor. Manuel
  TBM ile geniş eşlemeli kelimeleri (`akü satışı`, `akü nereden alınır` vb.)
  ilk 1-2 hafta yakından izleyin, gerekirse "Sıralı eşleme"ye çevirin.
- **Arama terimleri raporu**: Kampanya başladıktan 3-5 gün sonra "Arama
  terimleri" raporunu kontrol edip alakasız aramaları negatif listeye ekleyin.
- **Çağrı uzantısı (Call Asset)**: Telefon numarasını (0534 030 77 59) çağrı
  uzantısı olarak ekleyin — CSV ile desteklenmiyor, Editor'de
  Varlıklar > Çağrı Uzantısı Ekle'den elle eklenmeli.
- **Dönüşüm izleme**: Şu an conversion tracking kurulu değilse önce bunu
  kurun (telefon tıklaması, WhatsApp tıklaması, form gönderimi). Kurulu
  değilse bütçe verimliliği ölçülemez ve ileride "Maximize Conversions"
  stratejisine geçemezsiniz.
- **Konum hedefleme doğrulaması**: `08_konum_hedefleme.csv` içe aktarılırken
  Editor "Yenişehir" gibi çok yaygın ilçe adları için birden fazla eşleşme
  önerebilir — açılan listede **Mersin, Türkiye** içindeki olanı seçtiğinizden
  emin olun.
- **Rakip marka adları**: Listede rakip akü markası (Varta, Mutlu, İnci vb.)
  bilinçli olarak yok. İsterseniz ayrı bir "Rakip" reklam grubu ile
  eklenebilir — ama önce bu markaların ticari marka/AdWords politikasına
  uygunluğunu değerlendirin.

## Teklif (Max CPC) notu

Anahtar kelime bazlı Max CPC değerleri (2,00 - 4,00 TL) piyasa verisi
olmadan verilmiş **başlangıç tahminleridir**. İlk 1-2 haftalık gerçek
Gösterim Payı / Ortalama TBM verisine göre Editor üzerinden toplu
güncelleyin.

## Negatif kelime listesindeki önemli not

`akü takviyesi`, `akü doldurma` ve `yol yardım` bilinçli olarak negatif
eklendi çünkü bu kampanya sadece **akü satışı/değişimi** niyetine odaklı
(farklı sayfa: `/hizmetler/aku-takviyesi`). Akü takviyesi için ayrı bir
kampanya isterseniz aynı yapıda ayrıca hazırlanabilir.

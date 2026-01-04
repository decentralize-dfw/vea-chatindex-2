# 🚀 GitHub Pages Deployment Rehberi

Bu projeyi GitHub Pages üzerinde deploy etmek için aşağıdaki adımları takip edin.

## 📋 ADIM ADIM DEPLOYMENT

### ADIM 1: Pull Request'i Merge Et ✅
Pull request'inizi zaten yaptınız. Şimdi onu merge edin:

1. GitHub'da repository'nize gidin: https://github.com/decentralize-dfw/vea-chatindex-2
2. "Pull requests" sekmesine tıklayın
3. Pull request'inizi açın ve **"Merge pull request"** butonuna tıklayın
4. **"Confirm merge"** ile onaylayın

### ADIM 2: API Key Secret'ını Ekle 🔑

GitHub Actions'ın build sırasında API key'e erişebilmesi için secret eklemeniz gerekiyor:

1. Repository sayfanızda **Settings** (Ayarlar) sekmesine gidin
2. Sol menüden **Secrets and variables** > **Actions** seçin
3. **"New repository secret"** butonuna tıklayın
4. Secret bilgilerini girin:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** `[GERÇEK_API_KEY_NİZİ_BURAYA_YAPIŞTIRIN]`
5. **"Add secret"** butonuna tıklayın

### ADIM 3: GitHub Pages'i Aktifleştir 📄

1. Repository **Settings** > **Pages** sayfasına gidin
2. **Source** altında **"GitHub Actions"** seçeneğini seçin
3. Kaydet

### ADIM 4: Deployment'ı Tetikle 🎬

Merge işleminden sonra otomatik olarak deployment başlayacak. Manuel olarak tetiklemek için:

1. **Actions** sekmesine gidin
2. Sol taraftan **"Deploy to GitHub Pages"** workflow'unu seçin
3. Sağ üstten **"Run workflow"** > **"Run workflow"** butonuna tıklayın

### ADIM 5: Deployment'ı Takip Et 👀

1. **Actions** sekmesinde çalışan workflow'u görebilirsiniz
2. Workflow'a tıklayarak detayları görebilirsiniz
3. Build ve deployment tamamlandığında (yeşil ✓) siteniz yayında olacak

### ADIM 6: Sitenize Erişin 🌐

Deployment tamamlandıktan sonra sitenize şu adresten erişebilirsiniz:

**https://decentralize-dfw.github.io/vea-chatindex-2/**

---

## ⚙️ CUSTOM DOMAIN KULLANMAK (OPSİYONEL)

Eğer kendi domain'inizi kullanmak istiyorsanız:

1. **Settings** > **Pages** > **Custom domain** kısmına domain'inizi yazın
2. DNS ayarlarınızda CNAME kaydı oluşturun
3. `vite.config.ts` dosyasında `base: '/'` olarak değiştirin

---

## 🔧 DEPLOYMENT SORUNLARI

### Build Hatası Alıyorsanız:
1. **Actions** > Workflow loglarına bakın
2. API key'in doğru eklendiğinden emin olun
3. Build komutunu local'de test edin: `npm run build`

### Beyaz Ekran Görüyorsanız:
1. Browser console'u açın (F12)
2. Network sekmesinde dosyaların yüklenip yüklenmediğini kontrol edin
3. Base path ayarının doğru olduğundan emin olun

### API Çalışmıyorsa:
1. GEMINI_API_KEY secret'ının doğru eklendiğini kontrol edin
2. API key'in geçerli ve aktif olduğunu doğrulayın
3. Browser console'da hata mesajlarına bakın

---

## 📝 ÖNEMLİ NOTLAR

- ✅ Her `main` veya `master` branch'ine push otomatik deployment tetikler
- ✅ API key GitHub Secrets'ta güvenle saklanır
- ✅ Build süresi yaklaşık 1-2 dakika
- ✅ Değişiklikler 2-3 dakika içinde yayına girer

---

## 🆘 YARDIM

Sorun yaşıyorsanız:
1. GitHub Actions loglarını kontrol edin
2. Bu dosyadaki troubleshooting adımlarını takip edin
3. Issue açın: https://github.com/decentralize-dfw/vea-chatindex-2/issues

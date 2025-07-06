# Blog Uygulaması

Modern bir blog uygulaması React, Vite ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern UI/UX**: Tailwind CSS ile responsive tasarım
- **API Entegrasyonu**: JSONPlaceholder API'den blog postları
- **Component Yapısı**: Modüler ve yeniden kullanılabilir bileşenler
- **Hover Efektleri**: Smooth geçişler ve interaktif elementler
- **Responsive Tasarım**: Mobil ve desktop uyumlu

## 🛠️ Teknolojiler

- **React 19.1.0** - Modern React hooks ve functional components
- **Vite** - Hızlı build tool ve development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **React Router** - Client-side routing (kurulum gerekli)

## 📦 Kurulum

```bash
# Projeyi klonlayın
git clone [repository-url]
cd blog

# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev
```

## 🔧 Geliştirme

```bash
# Development modunda çalıştır
npm run dev

# Production build
npm run build

# Build'i önizle
npm run preview

# Linting
npm run lint
```

## 📁 Proje Yapısı

```
src/
├── components/
│   └── PostsCard.jsx      # Blog post kartı bileşeni
├── pages/
│   └── Home.jsx          # Ana sayfa
├── App.jsx               # Ana uygulama bileşeni
└── main.jsx             # Uygulama giriş noktası
```

## 🎨 Bileşenler

### PostsCard
- Blog postlarını kart formatında gösterir
- Hover efektleri ile interaktif
- Responsive tasarım
- API'den gelen verileri render eder

### Home
- Ana sayfa bileşeni
- API'den postları çeker
- Grid layout ile postları düzenler

## 🔌 API

Uygulama [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API'sini kullanır:
- **Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **Limit**: İlk 12 post gösterilir
- **Resimler**: Picsum Photos'dan rastgele resimler

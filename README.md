# 🎯 Executor Tracker - React

Modern web application untuk tracking status Roblox executors secara real-time dengan desain yang clean dan responsive.

## ✨ Features

- 🔍 **Search & Filter** - Cari executor berdasarkan nama dan filter berdasarkan status/platform
- 📱 **Responsive Design** - Tampilan optimal di semua perangkat
- 🎨 **Modern UI** - Interface yang clean dengan animasi smooth
- ⚡ **Fast Performance** - Dibangun dengan React + Vite untuk loading yang cepat
- 🌈 **Animated Components** - Smooth transitions dan hover effects

## 🚀 Tech Stack

- **React 18** - UI Library
- **Vite** - Build tool & dev server
- **Lucide React** - Icon library
- **CSS3** - Custom styling dengan animations

## 📁 Project Structure

```
executor-tracker-react/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx         # Header dengan navigation
│   │   │   ├── Hero.jsx           # Hero section dengan stats
│   │   │   └── Footer.jsx         # Footer dengan links
│   │   ├── search/
│   │   │   └── SearchBar.jsx      # Search input component
│   │   ├── filters/
│   │   │   └── FilterTabs.jsx     # Filter tabs untuk status/platform
│   │   └── executors/
│   │       ├── ExecutorGrid.jsx   # Grid container untuk cards
│   │       └── ExecutorCard.jsx   # Individual executor card
│   ├── data/
│   │   └── executorsData.js       # Data executors
│   ├── styles/
│   │   └── index.css              # Global styles & animations
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Steps

1. **Install dependencies**
```bash
npm install
```

2. **Run development server**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 🎨 Customization

### Adding New Executors

Edit file `src/data/executorsData.js`:

```javascript
{
  id: 13,
  name: "Your Executor",
  icon: "🚀",
  status: "working", // atau "patched"
  platform: "windows", // windows, android, atau ios
  keySystem: false,
  version: "1.0.0",
  robloxVersion: "version-db4634f0e27d4d36",
  sunc: ,
  unc: ,
  lastUpdate: "1 hour ago",
  description: "Your description here",
  downloadUrl: "#",
  discordUrl: "#"
}
```

### Changing Colors

Edit CSS variables di `src/styles/index.css`:

```css
:root {
  --primary: #3b82f6;      /* Primary color */
  --secondary: #8b5cf6;    /* Secondary color */
  --success: #10b981;      /* Success/Working color */
  --danger: #ef4444;       /* Danger/Patched color */
  /* ... more colors */
}
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push code ke GitHub repository
2. Import project di [Vercel](https://vercel.com)
3. Deploy automatically!

### Netlify

1. Build project: `npm run build`
2. Upload folder `dist` ke Netlify
3. Done!

### Manual Hosting

```bash
npm run build
# Upload folder 'dist' ke web hosting Anda
```

## 🎯 Features Breakdown

### Components

#### Layout Components
- **Header** - Fixed header dengan navigation dan social links
- **Hero** - Section utama dengan title, stats, dan features
- **Footer** - Footer dengan links dan social media

#### Functional Components
- **SearchBar** - Real-time search dengan clear button
- **FilterTabs** - Filter berdasarkan status dan platform
- **ExecutorGrid** - Grid responsive untuk executor cards
- **ExecutorCard** - Card dengan status badge, info, dan action buttons

### State Management
- React useState untuk search query
- React useState untuk active filter
- Auto-filter dengan useEffect

## 🎨 Design Features

- **Modern Gradients** - Gradient text dan buttons
- **Smooth Animations** - Fade in, float, dan pulse animations
- **Glassmorphism** - Backdrop blur effects
- **Hover Effects** - Interactive cards dengan transform
- **Responsive Grid** - Auto-adjust columns based on screen size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Silakan:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Icons by [Lucide](https://lucide.dev/)
- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)

## 📞 Support

Jika ada pertanyaan atau issue:
- Open issue di GitHub
- Contact via Discord

---

Made with ❤️ for the Roblox community

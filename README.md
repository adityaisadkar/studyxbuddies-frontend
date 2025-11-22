# 🎓 StudyXBuddies Frontend

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Frontend interface for StudyXBuddies - Your AI-powered last-minute revision companion

## 🌟 Features

- 💬 Real-time chat interface with AI tutor
- ⚡ Lightning-fast responses powered by Groq AI
- 🎨 Modern, clean UI with Tailwind CSS and shadcn/ui
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🚀 Built with React + TypeScript for type safety
- ✨ Smooth animations and intuitive UX

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Setup

1. Clone the repository
```bash
git clone https://github.com/adityaisadkar/studyxbuddies-frontend.git
cd studyxbuddies-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a `.env.local` file (if needed for additional config)
```env
VITE_API_URL=https://studyxbuddies-backend.onrender.com
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The app will be available at `http://localhost:5173`

## 🚀 Build for Production
```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

The production-ready files will be in the `dist/` folder.

## 📁 Project Structure
```
studyxbuddies-frontend/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── ChatInterface.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── NameInput.tsx
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🎨 Key Components

### ChatInterface
The main chat component that handles user messages and AI responses
```typescript
<ChatInterface username="Student" />
```

### Header
Navigation and branding
```typescript
<Header />
```

### Footer
Footer with social links and credits
```typescript
<Footer />
```

### NameInput
Component to collect user's name before starting chat
```typescript
<NameInput onNameSubmit={handleNameSubmit} />
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite configuration
5. Deploy!

The app will be live at: `https://studyxbuddies-frontend.vercel.app`

### Environment Variables (if needed)

Add these in your Vercel dashboard:
- `VITE_API_URL` - Backend API URL

## 🌐 Live Demo

🔗 **Live App:** [https://studyxbuddies-frontend.vercel.app](https://studyxbuddies-frontend.vercel.app)

🔗 **Backend API:** [https://studyxbuddies-backend.onrender.com](https://studyxbuddies-backend.onrender.com)

## 📱 Screenshots

### Desktop View
Clean, modern interface with chat on the side

### Mobile View
Fully responsive design that works seamlessly on mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- First response might be slow due to cold start on free tier hosting

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Aditya Isadkar**
- GitHub: [@adityaisadkar](https://github.com/adityaisadkar)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Deployment platform

## 🔗 Related Projects

- [StudyXBuddies Backend](https://github.com/adityaisadkar/studyxbuddies-backend) - API server

---

Made with ❤️ for students by students

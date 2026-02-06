# 🌌 Fusion Hubble Portfolio

A premium, immersive, and high-performance developer portfolio built with **React**, **Tailwind CSS**, and **Three.js**.

Designed with a strict **"Deep Space" Dark Mode** aesthetic, featuring a cinematic galaxy background, smooth animations, and a polished user experience.

<!-- You can replace the above path with a screenshot of the homepage later -->

## ✨ Features

- **Cinematic Galaxy 3D**: A custom, high-density starfield background with parallax depth and nebula effects (powered by `three.js` + `maath`).
- **Dark Mode Native**: Built from the ground up for a premium dark-themed experience.
- **Interactive UI**:
  - **Framer Motion** animations for smooth page transitions and scroll reveals.
  - **Glassmorphism** styling on cards and navigation.
  - **Project Modal**: Click-to-expand project details with large visuals and live links.
- **Fully Responsive**: Optimized for all devices (Mobile, Tablet, Desktop).
- **Performance First**: Optimized assets, code-splitting, and efficient 3D rendering loops.

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Utility**: [Maath](https://github.com/pmndrs/maath) (Math helpers for 3D)

## 🚀 Getting Started

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/fusion-hubble.git
    cd fusion-hubble
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run Development Server**:

    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/        # React Components (Hero, About, Projects, etc.)
│   └── 3d/           # Three.js Galaxy Component
├── data/             # Config files (constants.js for easy content updates)
├── assets/           # Images (Profile, Projects)
└── index.css         # Global Styles & Tailwind Directives
```

## 🎨 Customization

Go to `src/data/constants.js` to easily update:

- Your Name, Bio, and Details.
- Project Links and Descriptions.
- Skill Lists.
- Social Links.

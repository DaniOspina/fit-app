# 🏋️‍♀️ FitConnect – Plataforma para encontrar entrenadores personales

FitConnect es una aplicación web que permite a los usuarios encontrar entrenadores personales, explorar diferentes deportes, agendar sesiones y mejorar su bienestar físico. El objetivo del proyecto es conectar personas con profesionales certificados de manera rápida, sencilla y confiable.

---

## 🚀 Características principales

- 🌟 **Explorar deportes** con tarjetas visuales basadas en `sportsData`.
- 🧑‍🏫 **Conocer entrenadores** con perfiles detallados basados en `trainersData`.
- 📅 **Agenda flexible** para programar fácilmente sesiones (futuro).
- 💬 **Call to action en toda la experiencia** para mejorar conversión.
- 📱 **Diseño moderno, responsive y fácil de usar**.
- ⚡ **Desarrollado con Next.js + TailwindCSS**.

---

## 📂 Estructura del proyecto

app
│
├── agendar
│   └── page.tsx
│
├── beneficios
│   └── page.tsx
│
├── components
│   ├── Navbar.tsx
│   ├── SportsList.tsx
│   └── TrainerCard.tsx
│
├── data
│   ├── sportsData.ts
│   └── trainersData.ts
│
├── deportes
│   └── page.tsx
│
├── entrenadores
│   └── page.tsx
│
├── favicon.ico
├── globals.css
├── layout.tsx
└── page.tsx     ← (HomePage)


---

## 🛠️ Tecnologías utilizadas

- **Next.js 14** – Framework React  
- **TailwindCSS** – Estilos rápidos, modernos y responsivos  
- **TypeScript** – Tipado seguro y mantenible  
- **Unsplash (manual)** – Fotos profesionales  
- **Vercel** – Ideal para despliegue (por definir)

---

## 💾 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/DaniOspina/fit-app.git
cd fit-app

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar en local
npm run dev

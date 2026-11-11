# Credence 🚀

> **The Future of Skill Verification and Hiring**  
> Build your verified skill profile with real proof from GitHub and LeetCode. Let your work speak for itself.

---

## 🌟 Overview

**Credence** is an intelligent skill verification and hiring engine designed to bridge the gap between candidates, educational institutions, and recruiters. Instead of relying on static resumes, Credence creates a tamper-proof, verified skill graph by analyzing real-world proof of work across developer platforms such as GitHub and LeetCode.

---

## ✨ Features

### 👨‍💻 Student / Candidate Portal
- **Proof-of-Work Verification**: Connect GitHub repositories and LeetCode activity to build an undeniable record of skills.
- **Dynamic Skill Graph & Skill DNA**: Visual representation of your technical competency and growth over time.
- **Verified Public Profiles & QR Verification**: Shareable profiles with verifiable credentials and QR codes for seamless resume integration.
- **Achievement Badges & Interview Readiness**: Track your readiness scores across problem-solving and system design domains.

### 🏫 Institution Portal
- **Student Analytics**: Comprehensive cohort-level insights into student development and coding performance.
- **Skill Distribution & Matrix**: Monitor technical benchmarks across departments and batches.
- **Placement Pipeline**: Facilitate and track on-campus hiring drives with real-time student readiness scores.
- **Automated Reporting**: Export accreditation-ready skill and placement reports.

### 💼 Recruiter / Hiring Portal
- **AI-Powered Talent Search**: Filter and search through verified candidates matching exact stack and competency criteria.
- **Evidence-Based Evaluation**: View code commit patterns, algorithm problem histories, and project depth before interviewing.
- **Interview & Pipeline Management**: Coordinate shortlists, schedule interviews, and manage applicant progression.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Visualizations**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Export & Utility**: [html2canvas](https://html2canvas.hertzen.com/), [jspdf](https://parall.ax/products/jspdf), [qrcode.react](https://github.com/zpao/qrcode.react)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kchanakiyan/Credence.git
   cd Credence
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
Credence/
├── src/
│   ├── components/       # Reusable UI components & layouts
│   ├── context/          # Global application state (AppContext)
│   ├── pages/            # Route pages
│   │   ├── hiring/       # Recruiter & talent search dashboard
│   │   └── institution/  # College / institute analytics dashboard
│   ├── services/         # GitHub, LeetCode, Groq API services
│   ├── types/            # TypeScript data interfaces
│   ├── App.tsx           # Route definitions
│   ├── main.tsx          # Application entry point
│   └── index.css         # Tailwind styles & theme variables
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind styling config
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

---

## 📄 License

This project was developed for hackathon presentation and skill verification. All rights reserved.

# 🖨️ PrintShop SaaS

> A production-style SaaS platform for students and local print shops built during a 30-day full-stack bootcamp.

PrintShop lets students upload documents, configure print settings, and send print orders directly to nearby print shops through a modern web application.

---

## ✨ Current MVP

* 📄 Upload PDF, PNG, and JPG files.
* 🎯 Drag & drop file upload.
* 📋 Print settings (copies, color mode, paper size).
* 📝 Print instructions.
* 📦 Live order summary.
* 🆔 Client-side order object with unique ID and status.

---

## 🛠 Tech Stack

| Frontend             | Backend (Coming Soon) |
| -------------------- | --------------------- |
| Next.js (App Router) | FastAPI               |
| TypeScript           | Prisma                |
| Tailwind CSS         | PostgreSQL            |
| React Hooks          | OpenCV                |

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── print/page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/      # Coming in Day 2
├── lib/
└── types/
```

---

## 🚀 Roadmap

### ✅ Day 1

* Landing page UI.
* Upload workflow UI.
* File validation.
* Order summary.

### 🚧 Day 2

* Component architecture.
* Reusable UI components.
* TypeScript types.
* Project cleanup.

### 🔜 Coming Soon

* Authentication.
* Print shop dashboard.
* QR code generation.
* OCR with OpenCV.
* Auto-delete after printing.
* Deployment on Vercel.

---

## 💻 Running Locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

---

## 🎯 Why I'm Building This

I'm building PrintShop as a portfolio-quality SaaS project to learn modern full-stack development and create something that can be shown to recruiters, internship applications, and freelance clients.

# React Code Editor 🚀

A full-stack online React code editor with live preview, authentication, and project management. Write, run, and save your React components in real-time!

![React Code Editor](https://img.shields.io/badge/React-18.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.0-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🔐 **JWT Authentication** - Secure login/register with HttpOnly cookies
- 💾 **Project Management** - Create, save, load, and delete React projects
- 🎨 **Live Preview** - See your React components render in real-time
- ⚡ **JSX Support** - Write JSX with Babel transpilation in the browser
- 🌐 **Persistent Storage** - MongoDB database for saving your projects
- 📱 **Responsive UI** - Clean three-panel layout (Sidebar, Editor, Preview)
- 🎯 **React Hooks Support** - Full support for useState, useEffect, and more

## 🖼️ Screenshots
![Compiler](/frontend/images/image.png)

## 🚀 Quick Start

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/react-code-editor.git
cd react-code-editor
```

#### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Start the backend server:

```bash
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected
```

#### 3️⃣ Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will start at: `http://localhost:5173`


## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Babel Standalone** - JSX transpilation in browser

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie handling
- **cors** - Cross-origin resource sharing

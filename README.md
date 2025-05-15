# 🖥️ To-Do List Application – Frontend

This is the **frontend** for a To-Do List application built using **Vanilla JavaScript**, **HTML**, and **CSS**.  
It communicates with a separate **Java Spring Boot backend API** to perform CRUD operations on tasks.

👉 Backend repo: [https://github.com/yourusername/todo-backend](https://github.com/KacperCelejewski/TODOList)

---

## 🌐 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla ES6+)
- Fetch API (for HTTP requests)
- Responsive Design (mobile-friendly)

---

## 🛠 Features

- ✅ Display all tasks from backend
- ➕ Add new tasks
- ✏️ Edit existing tasks
- ❌ Delete tasks
- 🔄 Automatically refresh task list
- 🔗 Communicates with REST API

---

## 🚀 Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/todo-frontend.git
```

### 2. Open `index.html` in your browser

You can open the app by simply double-clicking `index.html`  
or run a local server with:

---



---

## 🧾 File Structure

```
todo-frontend/
├── index.html       # Main HTML file
├── style.css        # CSS styles
└── script.js        # JavaScript logic (API calls + DOM)
```

---

## 📸 UI Preview

![screenshot placeholder](assets/screenshot.png)

---

## ❓ Notes

- Ensure that the backend server is running and accessible (default: `http://localhost:8080`)
- The app assumes CORS is enabled on the backend (`@CrossOrigin(origins = "*")`)

---

## 📌 Possible Enhancements

- Task filters (e.g. completed, active)
- Full mobile optimization

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

[Kacper Celejewski]  
Frontend Repo: [todo-frontend](https://github.com/yourusername/todo-frontend)  
Backend Repo: [todo-backend](https://github.com/yourusername/todo-backend)

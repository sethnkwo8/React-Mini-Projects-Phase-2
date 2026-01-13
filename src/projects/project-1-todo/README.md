# Advanced Todo App

An advanced Todo application built to practice **global state management,
performance optimization, and scalable React architecture**.

---

## 🎯 Project Goals
- Centralize application state
- Avoid prop drilling
- Minimize unnecessary re-renders
- Apply real-world React patterns

---

## 🧠 Concepts Used
- useReducer
- useContext
- Custom Hooks
- React.memo
- useMemo
- useCallback
- Feature-based folder structure

---

## 🗂️ Architecture Overview

```
project-1-todo/
│
│── components/
│   └── TodoList.jsx
│   └── TodoItem.jsx
│   └── TodoForm.jsx
│   
│── context/
│   └── TodoContext.jsx
│   └── TodoProvider.jsx
│   
│── reducer/
│   └── todoReducer.js
│   
│── hooks/
│   └── useTodos.js
│   
└── pages/
    └── TodoPage.jsx
```

---

## ⚙️ How State Works
- Todo state lives in a **Reducer**
- Reducer is provided via **Context**
- Components access state using a **custom hook (`useTodos`)**
- UI interactions dispatch actions directly

---

## 🚀 Key Takeaways
- Context is for **shared, complex state**
- Reducers make state predictable
- Memoization is used **only where it matters**
- Clean separation of concerns

---

## 👤 Author
Seth Nkwo
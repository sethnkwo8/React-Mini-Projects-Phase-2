# Authentication State App

An authentication-focused React mini project built to practice
**global auth state management**, **protected routes**, and
**scalable application structure**.

---

## 🎯 Project Goals
- Manage authentication globally
- Separate auth logic from UI
- Introduce protected routes
- Prepare for routing-based apps

---

## 🧠 Concepts Used
- useReducer
- useContext
- Custom auth hook (`useAuth`)
- ProtectedRoute pattern
- Feature-based folder structure
- Page-level rendering

---

## 🗂️ Folder Structure

```
project-2-authstateapp/
│
│── components/
│   └── ProtectedRoute.jsx
│   
│── contexts/
│   └── AuthContext.jsx
│   └── AuthProvider.jsx
│   
│── features/
│   └── auth/
│       └── LoginForm.jsx
│       └── Profile.jsx
│       └── LogoutButton.jsx
│   
│── pages/
│   └── AuthPage.jsx
│   └── ProfilePage.jsx
│   
│── reducer/
│   └── authReducer.js
│   
│── hooks/
│   └── useAuth.js
│   
└── pages/
    └── TodoPage.jsx
```

---

---

## 🔐 Authentication Flow
1. User enters a username
2. LOGIN action updates global auth state
3. ProtectedRoute controls access to Profile
4. LOGOUT resets auth state
5. Pages decide what gets rendered

---

## 🧩 Architecture Notes
- **Auth logic** lives in reducer + context
- **Pages** decide which UI to show
- **Features** contain reusable UI logic
- **ProtectedRoute** handles access control
- Components remain clean and reusable

---

## 🚀 Key Takeaways
- Auth belongs in Context + Reducer
- Pages orchestrate UI
- Protected routes are reusable abstractions
- Structure scales naturally into React Router apps

---

## 👤 Author
Seth Nkwo
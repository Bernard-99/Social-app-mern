# Social App

Progetto personale che ho costruito per imparare lo sviluppo fullstack.
È una piattaforma social basilare dove gli utenti possono registrarsi, fare login e pubblicare post nel feed.

---

## Tecnologie usate

**Frontend**
- React + Vite
- React Router
- CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas
- Mongoose

**Autenticazione**
- JWT (JSON Web Token)
- bcrypt

---

## Funzionalità

- Registrazione e login utente
- Password cifrate con bcrypt
- Autenticazione tramite token JWT
- Feed con i post di tutti gli utenti
- Pubblicazione di nuovi post
- Logout

---

## Come avviarlo in locale

Clona la repository:

```bash
git clone https://github.com/tuonome/social-app-mern.git
```

**Avvia il backend:**

```bash
cd backend
npm install
npm run dev
```

Crea un file `.env` nella cartella backend con:

```
MONGO_URI=la_tua_stringa_mongodb
PORT=5000
JWT_SECRET=una_chiave_segreta
```

**Avvia il frontend:**

```bash
cd mio-social
npm install
npm run dev
```

Apri il browser su `http://localhost:5173`

---

## Struttura del progetto

```
social-app-mern/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   ├── app.js
│   └── .env
└── mio-social/
    └── src/
        ├── App.jsx
        ├── Login.jsx
        ├── Register.jsx
        ├── Feed.jsx
        ├── Navbar.jsx
        ├── PostCard.jsx
        └── PrivateRoute.jsx
```

---

## Note

Progetto sviluppato a scopo didattico — non è in produzione.
Alcune funzionalità come i like e i commenti sono ancora da completare.

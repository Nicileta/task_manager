# Task Manager

Aplicație frontend React + Vite pentru gestionarea sarcinilor. Permite adăugarea, finalizarea, ștergerea și filtrarea sarcinilor. Datele sunt păstrate în `localStorage`.

## Structura proiectului

1. **`src`** conține codul sursă al aplicației: componente React, stiluri și punctul de pornire al interfeței.
2. **`App.jsx`** este componenta principală. Păstrează starea listei, definește evenimentele și afișează componentele copil.
3. **`package.json`** conține metadatele proiectului, scripturile npm și dependențele necesare.
4. **`node_modules`** conține pachetele instalate de npm și dependențele lor. Nu se editează manual și nu se publică în repository.

## Pornire locală

```bash
npm install
npm run dev
```

Verificare build:

```bash
npm run build
```

## Git

```bash
git init
git add .
git commit -m "Initialize React project"
git commit -m "Add task form component"
git commit -m "Add task list functionality"
git commit -m "Add complete and delete functionality"
```

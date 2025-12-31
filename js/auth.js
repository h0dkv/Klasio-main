import { auth, db } from "./firebase-init.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ===== LOGIN ===== */
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = login - email.value.trim();
  const password = login - password.value.trim();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.replace("dashboard.html");
    alert("Успешен вход!");
  } catch (err) {
    alert(err.message);
  }
});

/* ===== REGISTER ===== */
document.getElementById("register-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCred.user.uid), {
      name: name,
      email: email,
      createdAt: new Date()
    });
    window.location.replace("dashboard.html");
  } catch (err) {
    alert(err.message);
  }
});


/* ===== CHECK LOGIN ===== */
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Логнат:", user.email);
  }
});

await setDoc(doc(db, "users", userCred.user.uid), {
  name,
  email,
  role: "student",
  createdAt: new Date()
});

if (userData.role !== "teacher") {
  document.getElementById("addCourseBtn")?.remove();
}


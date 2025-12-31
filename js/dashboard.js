// js/dashboard.js
import { auth, db } from "./firebase-init.js";
import { signOut } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const nameEl = document.getElementById("user-name");
const logoutBtn = document.getElementById("logoutBtn");

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const snap = await getDoc(doc(db, "users", user.uid));
    if (snap.exists()) {
      nameEl.textContent = snap.data().name;
    }
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "auth.html";
});

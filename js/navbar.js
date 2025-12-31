import { auth } from "./firebase-init.js";
import { signOut } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const nav = document.createElement("nav");
nav.className = "navbar";
nav.innerHTML = `
  <div class="nav-inner">
    <div class="logo">Klasio</div>
    <div style="display:flex;gap:10px">
      <a href="dashboard.html" class="tab-btn">Dashboard</a>
      <a href="courses.html" class="tab-btn">Курсове</a>
      <a href="profile.html" class="tab-btn">Профил</a>
      <button id="logoutBtn" class="tab-btn">Изход</button>
    </div>
  </div>
`;

document.body.prepend(nav);

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "auth.html";
});

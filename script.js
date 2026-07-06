const data = {
  memes: [
    "Когда сказал: последний депозит — и уже 5 часов играешь",
    "Казино: вот бонус 🎁 / Ты: слил всё за 2 минуты",
    "“Я контролирую игру” — классика каждого игрока"
  ],

  news: [
    "Индустрия усиливает контроль бонусных систем в 2026 году",
    "Новые правила отыгрыша становятся строже"
  ],

  breakdown: [
    "RTP — это статистика на миллионы спинов, а не удача",
    "Почему “почти выиграл” заставляет играть дальше"
  ]
};

function showPage(page) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(p => p.style.display = "none");

  const active = document.getElementById(page);
  active.style.display = "block";

  render(page);
}

function render(page) {
  const el = document.getElementById(page);
  el.innerHTML = "";

  if (page === "home") {
    el.innerHTML = `
      <div class="card">
        <h2>🔥 Добро пожаловать в RNG Society</h2>
        <p>Медиа о мемах, индустрии и культуре азартных игр</p>
      </div>
    `;
    return;
  }

  data[page].forEach(text => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p>${text}</p>`;
    el.appendChild(card);
  });
}

// стартовая страница
showPage("home");

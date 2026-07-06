const data = {
  memes: [
    "Когда сказал: последний депозит — и уже 3 часа играешь",
    "Казино: вот бонус 🎁 / Я: проигрываю всё за 2 минуты"
  ],
  news: [
    "Индустрия усиливает контроль бонусных систем",
    "Новые ограничения на отыгрыш в 2026 году"
  ],
  breakdown: [
    "RTP — это долгосрочная математика, а не удача",
    "Почему “почти выиграл” — это когнитивная ловушка"
  ]
};

function renderPage(page) {
  const el = document.getElementById(page);
  el.innerHTML = "";

  if (page === "home") {
    el.innerHTML = "<h2>🔥 Добро пожаловать в RNG Society</h2><p>Лента обновляется вручную через контент</p>";
    return;
  }

  data[page].forEach(text => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<p>${text}</p>`;
    el.appendChild(card);
  });
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(page).style.display = "block";
}

// старт
renderPage("memes");
renderPage("news");
renderPage("breakdown");
showPage("home");

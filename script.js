const pages = ["home", "memes", "news", "breakdown"];

const data = {
  memes: [
    "Когда сказал: последний депозит — и уже 4 часа играешь",
    "Казино: вот бонус 🎁 / Я: проигрываю за 2 минуты",
    "“Я контролирую игру” — сказал каждый игрок"
  ],
  news: [
    "Индустрия усиливает контроль бонусных систем в 2026",
    "Новые правила отыгрыша становятся строже"
  ],
  breakdown: [
    "RTP — это статистика на миллионы спинов",
    "Почему “почти выиграл” заставляет играть дальше"
  ]
};

function showPage(page) {
  pages.forEach(p => {
    const el = document.getElementById(p);
    if (!el) return;

    if (p === page) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });

  render(page);
}

function render(page) {
  const el = document.getElementById(page);
  if (!el) return;

  el.innerHTML = "";

  if (page === "home") {
    el.innerHTML = `
      <div class="card">
        <h2>🔥 RNG Society</h2>
        <p>Медиа о культуре азартных игр, мемах и индустрии</p>
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

// старт
showPage("home");

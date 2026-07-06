alert("JS работает");
const data = {
  feed: [
    { type: "🔥 Мем", text: "Последний депозит — это всегда не последний" },
    { type: "📰 Новость", text: "Индустрия усиливает контроль бонусов" },
    { type: "🧠 Разбор", text: "RTP работает на миллионы спинов, не на один" }
  ],

  memes: [
    { text: "Я: сегодня не играю / тоже я через 10 минут" },
    { text: "Когда почти выиграл — значит почти проиграл" },
    { text: "Казино всегда побеждает... кроме тех раз, когда нет (редко)" }
  ],

  news: [
    { text: "Новые ограничения на бонусные программы в 2026" },
    { text: "Рост контроля над онлайн-платформами в Европе" }
  ],

  breakdown: [
    { text: "RTP — математическое ожидание, а не удача" },
    { text: "Эффект почти-выигрыша усиливает вовлечение" }
  ]
};

function render(tab) {
  const el = document.getElementById(tab);
  el.innerHTML = "";

  data[tab].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <strong>${item.type ? item.type : ""}</strong>
      <p>${item.text}</p>
    `;

    el.appendChild(card);
  });
}

function setTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  render(tab);
}

/* старт */
setTab("feed");

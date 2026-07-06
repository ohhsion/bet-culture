const posts = [
  {
    type: "🔥 Мем дня",
    text: "Когда сказал: последний депозит — и уже 4 часа не выходишь"
  },
  {
    type: "📰 Новость",
    text: "Индустрия усиливает контроль бонусных систем в 2026 году"
  },
  {
    type: "🧠 Разбор",
    text: "RTP — это долгосрочная математика, а не гарантия выигрыша"
  },
  {
    type: "💬 История",
    text: "Игрок рассказал, как сначала проиграл всё, а потом “отбил” за ночь"
  }
];

const feed = document.getElementById("feed");

posts.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h2>${p.type}</h2><p>${p.text}</p>`;
  feed.appendChild(card);
});

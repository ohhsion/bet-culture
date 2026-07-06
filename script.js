const posts = [
  { type: "🔥 Мем дня", text: "Когда сказал: последний депозит — и уже 5 часов играешь" },
  { type: "📰 Новость", text: "Индустрия усиливает контроль бонусных систем" },
  { type: "🧠 Разбор", text: "RTP — это статистика на миллионы спинов, а не удача одного" },
  { type: "💬 История", text: "Игрок рассказал, как проиграл всё и вернулся через день" },
  { type: "⚡ Факт", text: "99% игроков недооценивают эффект “почти выиграл”" }
];

const feed = document.getElementById("feed");
const btn = document.getElementById("addPostBtn");

function renderPost(post) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h2>${post.type}</h2><p>${post.text}</p>`;
  feed.prepend(card);
}

function randomPost() {
  const index = Math.floor(Math.random() * posts.length);
  renderPost(posts[index]);
}

btn.addEventListener("click", randomPost);

// стартовая загрузка
posts.forEach(renderPost);

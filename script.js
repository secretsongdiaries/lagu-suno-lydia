const songs = [
  {
    title: "Gold Beneath the Dust",
    category: "Personal",
    description: "A cinematic reminder that beauty can still shine after difficult seasons.",
    // Paste the Suno song URL for "Gold Beneath the Dust" below.
    sunoUrl: "https://suno.com/s/9JBis30iiej8NJri"
  },
  {
    title: "Still Me",
    category: "Personal",
    description: "A tender anthem about identity, softness and remaining whole through change.",
    // Paste the Suno song URL for "Still Me" below.
    sunoUrl: "https://suno.com/s/SOsdvUfFEni9OjCV"
  },
  {
    title: "The Hem of His Garment",
    category: "Worship",
    description: "A worshipful song about reaching for faith, mercy and quiet miracles.",
    // Paste the Suno song URL for "The Hem of His Garment" below.
    sunoUrl: "https://suno.com/s/EdgmkKYvV0QSy3ap"
  },
  {
    title: "I Start Again",
    category: "English",
    description: "A hopeful new-beginning song for mornings after heartbreak and fear.",
    // Paste the Suno song URL for "I Start Again" below.
    sunoUrl: "https://suno.com/s/kXXVCYPnE74XLm5s"
  },
  {
    title: "Only Mine to Miss",
    category: "English",
    description: "A soft, private ballad about longing for someone in a way only you understand.",
    // Paste the Suno song URL for "Only Mine to Miss" below.
    sunoUrl: "https://suno.com/s/zslkfCAch08MYTPA"
  },
  {
    title: "When the Snow Remembers",
    category: "Bahasa Melayu",
    description: "A dreamy winter memory wrapped in longing, nostalgia and gentle wonder.",
    // Paste the Suno song URL for "When the Snow Remembers" below.
    sunoUrl: "https://suno.com/s/fh4PS9oeWu5gzook"
  }
];

const songGrid = document.querySelector("#song-grid");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#song-search");
const filterButtons = document.querySelectorAll(".filter-button");

let activeCategory = "All";

function createSongCard(song) {
  const card = document.createElement("article");
  card.className = "song-card";

  card.innerHTML = `
    <div class="cover-art" aria-label="Cover image placeholder for ${song.title}"></div>
    <span class="category-pill">${song.category}</span>
    <h3>${song.title}</h3>
    <p>${song.description}</p>
    <a class="song-link" href="${song.sunoUrl}" target="_blank" rel="noopener noreferrer">Listen on Suno</a>
  `;

  return card;
}

function getFilteredSongs() {
  const query = searchInput.value.trim().toLowerCase();

  return songs.filter((song) => {
    const matchesCategory = activeCategory === "All" || song.category === activeCategory;
    const matchesSearch = song.title.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}

function renderSongs() {
  const filteredSongs = getFilteredSongs();
  songGrid.innerHTML = "";

  filteredSongs.forEach((song) => {
    songGrid.appendChild(createSongCard(song));
  });

  emptyState.hidden = filteredSongs.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    renderSongs();
  });
});

searchInput.addEventListener("input", renderSongs);

renderSongs();

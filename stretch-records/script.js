'use strict';

// The roster, exactly where the JavaScript course's finale left it: an array
// of artist objects at the top of the file, and one repeatable rule that
// renders it. In this course the data moves out of this file, step by step.
const artists = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const cardArea = document.querySelector(".cards");

// One card from one artist: the shared builder, used by the first render
// and by the form below.
function buildCard(artist) {
  const card = document.createElement("article");
  const title = document.createElement("h3");
  title.textContent = artist.name;
  const line = document.createElement("p");
  line.textContent = `${artist.genre}, ${artist.total} of music`;
  card.append(title, line);
  return card;
}

function renderCards(list) {
  for (const artist of list) {
    cardArea.append(buildCard(artist));
  }
}

renderCards(artists);

// Shuffle: pick a random artist and feature them.
const shuffleButton = document.querySelector(".shuffle");

shuffleButton.addEventListener("click", () => {
  const pick = artists[Math.floor(Math.random() * artists.length)];
  document.querySelector(".featured").textContent = `Featured today: ${pick.name}`;
});

// The suggestion form: an empty submission does nothing, because an empty
// string is falsy.
const form = document.querySelector(".signup");
const nameInput = document.querySelector("#artist-name");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  if (name) {
    const artist = { name: name, genre: "Unsigned", total: "0:00" };
    artists.push(artist);
    cardArea.append(buildCard(artist));
    nameInput.value = "";
  }
});

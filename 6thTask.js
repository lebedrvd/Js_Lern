const newReleases = [
  {
    id: 1,
    title: "Die Hard",
    boxArt: "http://какая-то ссылка на постер.jpg",
    url: "http://какая-то ссылка на фильм.jpg",
    rating: [5.0],
    bookmark: [],
  },
  {
    id: 2,
    title: "Die Hard2",
    boxArt: "http://какая-то ссылка на постер2.jpg",
    url: "http://какая-то ссылка на фильм2.jpg",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 3,
    title: "Die Hard3",
    boxArt: "http://какая-то ссылка на постер3.jpg",
    url: "http://какая-то ссылка на фильм3.jpg",
    rating: [2.0],
    bookmark: [],
  },
  {
    id: 4,
    title: "Die Hard4",
    boxArt: "http://какая-то ссылка на постер4.jpg",
    url: "http://какая-то ссылка на фильм4.jpg",
    rating: [5.0],
    bookmark: [],
  },
];

const editingObjects = (films) => {
  return films.map((film) => ({
    id: film.id,
    title: film.title,
  }));
};

console.log(editingObjects(newReleases));

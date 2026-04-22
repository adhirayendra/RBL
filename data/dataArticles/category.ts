export interface CategoryArticle {
  id: number;
  name: string;
  label: string;
}

export const categoryArticles: CategoryArticle[] = [
  { id: 1, name: "all", label: "All" },
  { id: 2, name: "showbiz", label: "Showbiz" },
  { id: 3, name: "k-zone", label: "K-Zone" },
  { id: 4, name: "game", label: "Game" },
  { id: 5, name: "lo-ok", label: "LO-OK!" },
  { id: 6, name: "sport", label: "Sport" },
  { id: 7, name: "hard-news", label: "Hard News" },
  { id: 8, name: "liputan", label: "Liputan" },
  { id: 9, name: "musik", label: "Musik" },
];

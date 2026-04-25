import type { Article } from "@/data/dataArticles/articles";
import type { ContentArticle } from "@/data/dataArticles/contents";
import { articles } from "@/data/dataArticles/articles";
import { contents } from "@/data/dataArticles/contents";

// Fungsi untuk mengambil seluruh metadata Artikel
export function getArticleById(id: string): Article | null {
  const numId = parseInt(id, 10);
  return articles.find((article) => article.id === numId) || null;
}

// Fungsi untuk mengambil artikel terkait dengan kategori yang sama
export function getRelatedArticle(
  currentId: string | number,
  category: string,
) {
  const maxRelatedContent = 3;
  let selectedIds: (string | number)[] = [];

  for (let i = 0; i < articles.length; i++) {
    if (selectedIds.length < maxRelatedContent) {
      if (articles[i].category === category && articles[i].id !== currentId) {
        selectedIds.push(articles[i].id);
      }
    } else {
      break;
    }
  }

  let attempts = 0;
  while (selectedIds.length < maxRelatedContent && attempts < articles.length) {
    const randomIndex = Math.floor(Math.random() * articles.length);
    const randomArticle = articles[randomIndex];

    const isNotCurrent = randomArticle.id !== currentId;
    const isNotDuplicate = !selectedIds.includes(randomArticle.id);

    if (isNotCurrent && isNotDuplicate) {
      selectedIds.push(randomArticle.id);
    }
    attempts++;
  }

  return selectedIds
    .map((id) => articles.find((a) => a.id === id))
    .filter((a): a is any => a !== undefined);
}

// Fungsi untuk mengambil content artikel yang dibutuhkan atau yang ingin ditampilkan
export function getContentById(id: string): ContentArticle | null {
  const numId = parseInt(id, 10);
  const content = contents.find((content) => content.id === numId);

  return content || null;
}

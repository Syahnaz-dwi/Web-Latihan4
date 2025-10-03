import { getArticles } from "./services/getarticles";
import CardArticle from "./components/card_article";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Daftar Artikel</h1>
      <ul className="space-y-4">
        {articles.map((article: any) => (
          <li key={article.id} className="border-none">
            <CardArticle
              img={article.urlImage}
              title={article.title}
              desc={article.description}
              author={article.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

function ArticleManager() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onClickAdd = () => {
    setArticles([
      ...articles,
      { id: Date.now(), title, summary }
    ]);
    setTitle("");
    setSummary("");
  };

  const onClickRemove = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  return (
    <>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />
      <ArticleList
        articles={articles}
        onClickRemove={onClickRemove}
      />
    </>
  );
}

export default ArticleManager;

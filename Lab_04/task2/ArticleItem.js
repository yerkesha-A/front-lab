import { useState } from "react";

function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li>
      <a
        href={`#${article.id}`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpened(!isOpened);
        }}
      >
        {article.title}
      </a>

      <button onClick={() => onClickRemove(article.id)}>×</button>

      <p style={{ display: isOpened ? "block" : "none" }}>
        {article.summary}
      </p>
    </li>
  );
}

export default ArticleItem;

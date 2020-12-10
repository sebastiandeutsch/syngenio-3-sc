import ShoppingList from './ShoppingList';
import ArticleForm from './ArticleForm';

import { useState } from 'react';

import './App.css';

let id = 1;

function App() {
  const [articles, setArticles] = useState([
    {
      id: id++,
      name: "Cola",
      amount: 2,
      isBought: false
    },
    {
      id: id++,
      name: "Mate",
      amount: 5,
      isBought: true
    },
    {
      id: id++,
      name: "Bier",
      amount: 24,
      isBought: false
    }
  ]);

  const handleAddArticle = (article) => {
    setArticles([
      ...articles,
      {
        id: id++,
        ...article
      }
    ]);
  };

  const handleBoughtArticle = (id) => {
    const newArticles = articles.map((article) => {
      if(article.id === id) {
        return {
          ...article,
          isBought: !article.isBought
        };
      } else {
        return article;
      }
    });
    setArticles(newArticles);
  };

  const handleDeleteArticle = (id) => {
    const newArticles = articles.filter((article) => {
      return article.id !== id;
    });
    setArticles(newArticles);
  }

  const article = {
    name: "Neuer Artikel",
    amount: 42
  };

  return (
    <>
      <ShoppingList
        articles={articles}

        onBoughtArticle={handleBoughtArticle}
        onDeleteArticle={handleDeleteArticle}
      />
      <ArticleForm
        article={article}
        onAddArticle={handleAddArticle}
      />
    </>
  );
}

export default App;

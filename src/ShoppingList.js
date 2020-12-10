import PropTypes from 'prop-types';

const ShoppingList = (props) => {
  const { articles, headline, onBoughtArticle, onDeleteArticle } = props;

  const handleDeleteButtonClick = (id) => {
    onDeleteArticle(id);
  };

  return (
    <div>
      <h1>{headline}</h1>
      <ul>
        {articles.map(item => (
          <li key={item.id}>
            <span onClick={() => { onBoughtArticle(item.id) }}>
              {item.name}
              &nbsp;
              ({item.amount})
              &nbsp;
              {item.isBought && <span>(gekauft)</span>}
            </span>
            <button onClick={() => { handleDeleteButtonClick(item.id) }}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ShoppingList.propTypes = {
  headline: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isBought: PropTypes.bool.isRequired
  })).isRequired
};

ShoppingList.defaultProps = {
  headline: "Einkaufsliste"
};

export default ShoppingList;

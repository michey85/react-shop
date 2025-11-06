function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name}{' '}
      <button
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
        onKeyDown={e =>
          e.key === 'Enter' || e.key === ' ' ? decQuantity(id) : null
        }
        type="button"
        aria-label="Decrease quantity"
      >
        remove
      </button>{' '}
      x{quantity}{' '}
      <button
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
        onKeyDown={e =>
          e.key === 'Enter' || e.key === ' ' ? incQuantity(id) : null
        }
        type="button"
        aria-label="Increase quantity"
      >
        add
      </button>{' '}
      = {price * quantity} руб.
      <button
        className="secondary-content material-icons basket-delete"
        onClick={() => removeFromBasket(id)}
        onKeyDown={() => removeFromBasket(id)}
        type="button"
      >
        close
      </button>
    </li>
  );
}

export { BasketItem };

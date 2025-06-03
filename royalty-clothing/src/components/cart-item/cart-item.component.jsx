import {
  CartItemContainer,
  CartItemImg,
  CartItemDetails,
  CartItemName,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <CartItemDetails className="item-details">
        <CartItemName className="name">{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

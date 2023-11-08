import { CartItemContainer, CartImage, ItemDetails, ItemName } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <CartImage src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className='price'>
                    {quantity} * ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;

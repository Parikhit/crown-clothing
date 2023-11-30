import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { UserContext } from '../../contexts/user.context';
// import { CartContext } from '../../contexts/cart.context';
import { signOutStart } from '../../store/user/user.action';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
    // const { currentUser } = useContext(UserContext);
    // const { isCartOpen } = useContext(CartContext);
    const dispatch = useDispatch();

    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                    <div className='logo-name'>Royal Closet</div>
                </LogoContainer>
                <NavLinks>
                    <NavLink className='nav-link' to='/shop'>
                        SHOP
                    </NavLink>

                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink className='nav-link' to='/auth'>
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;

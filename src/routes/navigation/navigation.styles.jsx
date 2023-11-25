import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;

    .logo-name {
        font-size: 30px;
        font-weight: 500;
        margin-top: 10px;
        padding: 20px;
    }
`;

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

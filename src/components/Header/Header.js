import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon/Icon';
import UnstyledButton from '../UnstyledButton/UnstyledButton';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>
  const menu = 'menu';
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileAction>
          <UnstyledButton>
            <Icon id="shopping-bag">
              <VisuallyHidden>ShoppingBag</VisuallyHidden>
            </Icon>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search">
              <VisuallyHidden>Search</VisuallyHidden>
            </Icon>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="menu">
              <VisuallyHidden>Menu</VisuallyHidden>
            </Icon>
          </UnstyledButton>
        </MobileAction>
        <RightSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (${QUERIES.tablet}) {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

const MobileAction = styled.div`
  display: flex;
  gap: 33px;

  @media (${QUERIES.mobile}) {
    gap: 17px;
  }
`;

const Side = styled.div`
  flex: 1;

`;

const RightSide = styled(Side)`

  @media (${QUERIES.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

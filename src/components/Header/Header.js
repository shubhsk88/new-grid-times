import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <ActionGroup>
            <ProfileButton>
              <User size={24} />
            </ProfileButton>
            <RightHeader>
              <Button>SUBSCRIBE</Button>
              <a href="sdsa">Already a subscriber?</a>
            </RightHeader>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);

  color: white;
  @media ${QUERIES.laptopAndUp} {
    background: transparent;
    color: var(--color-gray-900);
  }
`;

const ProfileButton = styled.button`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;
const LogoWrapper = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;
const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  @media ${QUERIES.laptopAndUp} {
    align-items: center;
  }
`;

const RightHeader = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    a {
      text-decoration: underline;
      font-style: italic;
    }
  }
`;
const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

export default Header;

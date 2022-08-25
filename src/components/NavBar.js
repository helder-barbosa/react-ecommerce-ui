import React from 'react';
import styledComponents from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';

const Container = styledComponents.div`
  height: 60px;
  background-color: #000000;
`;

const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const Language = styledComponents.span`
  font-size: 14px;
  cursor: pointer;
  color:  #FFFFFF;
`;

const SearchContainer = styledComponents.div`
  border: 1px solid #E5E5E5;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styledComponents.input`
  background: #FFFFFF;
  border: none;
`;

const Logo = styledComponents.h1`
  font-weight: bold;
  color:  #FFFFFF;
`;

const Center = styledComponents.div`
  flex: 1;
  text-align: center;
`;
const Right = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #FFFFFF;
`;

const MenuItem = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: '#3A5A40', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Fashion.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;

import { Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
      height:60px;   
`
const Wrapper = styled.div`
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content:space-between;
   `
const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      `
const Language = styled.span`
      font-size: 14px;
      cursor: pointer;
`
const SearchContainer = styled.div`
      border: 0.5px solid lightgray;
      display: flex;
      align-items: center;
      margin-left: 16px;
      padding:2px;
`
const Input = styled.input`
      border:none;
`
const Center = styled.div`
      flex: 1;
      text-align: center;
      `
const Logo = styled.h3`
      margin-left: 10px;
      
`
const Right = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      `
const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
`
const Navbar = () => {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Language>EN</Language>
               <SearchContainer>
                  <Input/>
                  <Search style={ {color: 'gray', fontSize: 14} }/>
               </SearchContainer>
            </Left>
            <Center>
               <Logo>NAIMA.</Logo>
            </Center>
            <Right>
               <MenuItem>REGISTER</MenuItem>
               <MenuItem>SIGN IN</MenuItem>
               <MenuItem>
                  <Badge badgeContent={4} color="secondary">
                     <ShoppingCartOutlinedIcon/>
                  </Badge>
               </MenuItem>
            </Right>
         </Wrapper>
      </Container>
   )
}

export default Navbar

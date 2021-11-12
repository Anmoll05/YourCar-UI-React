import React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro';
import {slide as Menu} from "react-burger-menu";
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import foo from "./menuStyle"
const ListContainer = styled.ul`
${tw`
  flex
  list-none
`};
`;

const NavItem = styled.li<{menu?:any}>`
${tw`
 text-xs
 md:text-base
 text-black
 mr-1
 md:mr-5
 font-bold
 cursor-pointer
 transition
 duration-300
 ease-in-out
 hover:text-gray-700
`};
${({menu}) => menu && css`
${tw`
  text-white
  text-xl
  mb-3
  focus:text-white
 `};
`}
`;
export default function NavItems() {

    const isMobile=useMediaQuery({maxWidth:SCREENS.sm});
    if(isMobile)
    return(
        <Menu  right styles={foo}>
        <ListContainer>
                <NavItem menu>
                    <a href="#">Home</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Cars</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Services</a>
                </NavItem>
                <NavItem menu>
                    <a href="#">Contat Us</a>
                </NavItem>
                
            </ListContainer>
            </Menu>
    )
    return (
        
            <ListContainer>
                <NavItem>
                    <a href="#">Home</a>
                </NavItem>
                <NavItem>
                    <a href="#">Cars</a>
                </NavItem>
                <NavItem>
                    <a href="#">Services</a>
                </NavItem>
                <NavItem>
                    <a href="#">Contat Us</a>
                </NavItem>
                
            </ListContainer>
    )
}

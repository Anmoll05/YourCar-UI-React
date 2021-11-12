import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { Logo } from '../logo';
import NavItems from './navItems';


const NavbarContainer=styled.div`
min-height:68px;
${tw`
 w-full
 min-w-full
 max-w-xl
 flex
 flex-row
 items-center
 lg:pl-12
 lg:pr-12
 justify-between
`};
`;

const LogoContainer=styled.div`
`;
export default function Navbar() {
    return (
       <NavbarContainer>
         <LogoContainer>
             <Logo/>
         </LogoContainer>
         <NavItems></NavItems>
         
           </NavbarContainer>
    )
}

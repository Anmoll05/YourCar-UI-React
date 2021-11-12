import React from "react"
import styled from "styled-components"
import tw from "twin.macro";

import CarLogoImg from "../../../assets/images/car-logo.png"
interface ILogoProps{
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}
const LogoContainer = styled.div`
${tw`
flex
items-center
`};
`;

const LogoText = styled.div`
${tw`
text-xl
md:text-xl
font-bold
text-black
m-1
`};
`;

const Image = styled.div`
img{
    width:auto;
    height:100%;
}
${tw`
h-6 md:h-9
`};
`;


export function Logo(props:ILogoProps){
    return (
        <LogoContainer>
            <Image>
                <img src={CarLogoImg}  alt=""/>
            </Image>
            <LogoText>
                Yourcar
            </LogoText>
        </LogoContainer>
    )

}
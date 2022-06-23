import React from "react";
import styled from "styled-components"
import axios from "axios";


const MainHomePage = styled.div `
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

export function HomePage () {

return ( 
    <MainHomePage>
        <h1>LabeX</h1>
        <br></br>
        <div>
            <p>Somos uma empresa de Viagens espaciais, aqui você terá a sua melhor experiência em viagens espaciais!</p>
            <p>Conheça nossas viagens e se inscreva!</p>
        </div>
        <button>Ver Viagens</button>
        <button>Area Administrativa</button>
    </MainHomePage>
)
}




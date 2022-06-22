import React from "react";
import styled from "styled-components"
import axios from "axios";


const MainTripList = styled.div `
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Header = styled.div `
    display: flex;
    flex-direction: row;
    padding: 10px;
    justify-content: space-around;
`

export function ListTripPage () {

    return <MainTripList>
        <Header> 
            <button>Voltar</button>
            <h1>LabeX</h1>
            <button>Inscreva-se</button>
        </Header>
        <h2>Lista de viagens</h2>
        <div> Viagem</div>
        <br></br>

    </MainTripList>
    }
    
    
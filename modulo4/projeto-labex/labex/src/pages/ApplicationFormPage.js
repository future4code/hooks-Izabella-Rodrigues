import React from "react";
import styled from "styled-components"
import axios from "axios";

export function AplicationFormPage () {

    return (
        <main>
            <header> 
                <button>Voltar</button>
                    <h1>LabeX</h1>
                <button>Enviar</button>
            </header>
            <h3>Inscreva-se para sua viagem!</h3>
                <input type="text" value="Escolha uma viagem"/>
                <input type="text" value="Nome"/>
                <input type="text" value="Idade"/>
                <input type="text" value="Texto de Candidatura"/>
                <input type="text" value="Profissão"/>
                <input type="text" value="Escolha um país"/>
        </main>
    ) 
}
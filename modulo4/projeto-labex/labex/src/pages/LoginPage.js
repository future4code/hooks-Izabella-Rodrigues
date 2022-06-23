import React from "react";
import styled from "styled-components"
import axios from "axios";

export function LoginPage () {

    return (
        <main>
            <header> 
                <button>Voltar</button>
                    <h1>LabeX</h1>
            </header>
            <h3>Login</h3>
                <input type="text" value="Email"/>
                <input type="text" value="Senha"/>
        </main>
    ) 
}
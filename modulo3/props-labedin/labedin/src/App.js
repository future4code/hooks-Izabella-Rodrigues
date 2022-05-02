import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={"C:\Users\Izabella\Desktop\ESTUDOS PROGRAMAÇÃO\LABENU\hooks-Izabella-Rodrigues\modulo3\props-labedin\labedin\src\components\FotoPerfil"}
          nome="Izabella Mezeck Rodrigues" 
          descricao="Ola, me chamo Izabella, mas podem me chamar de Bella. Sou estudante de desenvolvimento Web Full Stack na Labenu. Apaixonada por backend e com muita sede de aprender!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div> 
        <CardPequeno 
          imagem={"C:\Users\Izabella\Desktop\ESTUDOS PROGRAMAÇÃO\LABENU\hooks-Izabella-Rodrigues\modulo3\props-labedin\labedin\src\components\IconeEmail"}
          descricao={"bella13mezeck@gmail.com"}
        />
      </div>
      
      <div> 
        <CardPequeno 
          imagem={"C:\Users\Izabella\Desktop\ESTUDOS PROGRAMAÇÃO\LABENU\hooks-Izabella-Rodrigues\modulo3\props-labedin\labedin\src\components\IconeLocalizacao"}
          descricao={"Rua Alameda da Serra 590 - Osório - RS"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={"C:\Users\Izabella\Desktop\ESTUDOS PROGRAMAÇÃO\LABENU\hooks-Izabella-Rodrigues\modulo3\props-labedin\labedin\src\components\Empresa1"} 
          nome="Todo Soluções em Trade" 
          descricao="Consultora de Sucesso do Cliente: análise de informações através do excel e dashboards, comunicação e relação B2B, trabalho em equipe e atendimentos ao cliente" 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

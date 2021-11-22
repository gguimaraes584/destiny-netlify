import styled from "styled-components";

const Container = styled.div`
body {
    margin: 0%;
    height: 100vh;
    width: 100vw;
}

* {
    box-sizing: border-box;
}

hr {
    color: "#a9a9a9";
    background-color: "a9a9a9";
    width: 450%;
}



.hr2 {
    width:100%;
}

.opcao {
    margin-top: 0.5em;
    align-items: center;
    align-content: center;
}

.titulo-pagina {
    font: 2.5em "Bebas Neue";
    padding: 0em 2em;
    text-align: center;
}

.preco {
    padding-left: 6em;
}

.total2 {
    padding-left: 8em;
}

.frete2 {
    padding-left: 11.5em;
}

.box-container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    margin: 0.5em 2em;
}

.box-p-b {
    display: flex;
    flex-direction: column;

    justify-content: center;
}

.a {
    display: flex;
    flex-direction: column;
  
    width: 42em;
  
    justify-content: center;
    align-items: flex-end;
  
    padding-top: 0.5em;
  }

.box-p-b button {
    padding: 1em;
}

.container-endereço {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;

    padding: 2.5em 30em 2.5em 2em;
    margin: 1.5em 1.5em 1.5em 3em;

    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0px 2px 3px 0px #888;;

    justify-content: center;
    align-content: center;
    align-items: center;
}


.endereço > div {
    display: flex;
    flex-direction: row;
    align-items: center;
}

input {
    align-items: center;
}


.box-endereço {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;

    justify-items: center;

    padding: 2em;
    margin: 2em;

    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 0px 2px 3px 0px #888;;
}

.endereço-desc, .desc, .c-t {
    display: flex;
    flex-direction: column;

    align-items: center;
}

.info h1 {
    text-align: center;
    font-size: 1em;
}

.f-p, .total {
    padding: 1em 0em;
    font: 1.2em "Oswald";
}

.f-p span, .total span {
    font: 1.2em "Bebas Neue";
}

.titulo-produto {
    font: 1.2em "Bebas Neue";
}

.cor, .tamanho {
    font: 1em "Oswald";
    font-weight: 400;
}

.cor span, .tamanho span {
    font: 1em "Oswald";
    font-weight: 200;
}

.botao {
    display: flex;
    flex-direction: column;
}

.botao button {
    display: flex;
    flex-direction: column;
    
    background-color: #5EC5FF;
    font: 1.2em "Bebas Neue";

    text-align: center;
    padding: 0em 4em;
    
    border-radius: 5px;
    border: none;

    cursor: pointer;
    transition-duration: 0.5s;
    text-decoration: none;

    align-content: flex-end;
}

.botao button {
    background-color: #5EC5FF;
    font: 1.2em "Bebas Neue";

    text-align: center;
    padding: 0em 2.5em;
    
    border-radius: 5px;
    border: none;

    cursor: pointer;
    transition-duration: 0.5s;
    text-decoration: none;

    align-content: flex-end;
}

.botao button:hover {
    background-color: #5EC5FF;
    opacity: 0.6;
    color: black;
}

.box-endereço {
    font: 1.5em "Bebas Neue";
}

.box-endereço {
    font: 1.5em "Bebas Neue";
}
`

export {Container}
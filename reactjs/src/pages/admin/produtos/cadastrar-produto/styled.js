import styled from 'styled-components';

export const Container = styled.div`

padding: 2em 6em;

h1 {
    font: 2.5em "Bebas Neue";
    padding: 0em 0.5em;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0.5em;
}


.box-cadastro {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
}

.box-acoes {
    display: flex;
    flex-direction: column;
    padding: 0.5em 3em;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
}

input, select {
  width: 29em;
  height: 1.75em;
  border-radius: 5px;
  outline: 0;
  border: 1px solid black;
}

.cadastrar, .cancelar{
    padding: 1.5em;
}

.cadastrar button {
width: 10em;
background-color: #5EC5FF;
border: 0px;
border-radius: 4px;
font: 1em "Bebas Neue";
cursor: pointer;
}

.cancelar button {
width: 10em;
background-color: #FF5E5E;
border: 0px;
border-radius: 4px;
font: 1em "Bebas Neue";
cursor: pointer;
}

.identificacao, .dados, .opcoes, .opcoes2 {
    display: flex;
    flex-direction: row;
}

.id, .cd-interno, .nome, .preco, .sexo, .cores, .categoria, .link, .descricao {
display: flex;
flex-direction: column;
font: 1.5em "Bebas Neue";
padding: 0.5em 1em;
justify-content: center;
}

.link input {
    width: 62em;
}

textarea {
    width: 62em;
    height: 8em;
    resize: none;
}

.imagem img {
    width: 350px;
    height: 350px;
    border: 1px solid black;
}
`
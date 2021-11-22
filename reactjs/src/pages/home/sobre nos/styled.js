import styled from 'styled-components'

const Container = styled.div`

    ::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar
    {
        width: 10px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb
    {
        background-color: #555;
    }

  .faixa-1 {
    padding: 2em 5em;
    
  }

  .titulos {
    font: 2.5em "Bebas Neue";
    text-align: center;
    padding: 1em;
  }

  .f1-img img {
    height: 100%;
   
  }
  
  .f1-img img{
    width: 90%;
    border-radius: 5%;
  }

  .f2-img img{
    width: 80%;
    border-radius: 5%;
    margin-left: 75px;
  }

  .f3img img{
    width: 70%;
    border-radius: 5%;
  }

  .f4img img{
    width: 50%;
    border-radius: 5%;
    margin-left: 350px;
  }

  .f1-conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .f1text {
    max-width: 40em;
    display: flex;
    flex-direction: column;
  }

  .f1textoo {
    margin-bottom: 1em;
    text-align: center;
    font: 1.8em "Oswald";
  }

  .f1textoo2 {
    text-align: center;
    font: 1.8em "Oswald";
  }

  .faixa-2 {
    padding: 3em 5em;;
  }

  .f2conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .f2text {
    max-width: 30em;
    display: flex;
    flex-direction: column;
  }

  .faixa-3 {
    display: flex;
    flex-direction: column;
    padding: 3em 5em;
  }

  .f3-img {
    height: 100%;
  }

  .f3conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .f3text {
    text-align: center;
    font: 1.8em "Oswald";
    width: 40%;
  }


  .faixa-4 {
    display: flex;
    flex-direction: column;
    padding: 3em 5em;
  }

  .f4conteudo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .f4-img {
    height: 100%;
  }

  .f4text {
    text-align: right;
    font: 1.8em "Oswald";
    width: 60%;
  }
`

export { Container }
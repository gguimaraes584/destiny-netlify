import styled from "styled-components";

export const Container = styled.div`
.container {
    display: flex;
    flex-direction: column;
}
    
    

    thead {
        background-color: #6CC3DF;
        padding: 0.5em 0em;
    }

    .pesquisar {
        background-color: #6CC3DF;
    }

    th{
        text-align: center;
        padding: 0em 4em;
        height:  61px;
        align-content: center;
        justify-items: center;
        align-items: center;
        font: 1.25em "Bebas Neue";
}

td {
        text-align: center;
        height:  61px;
        align-content: center;
        justify-items: center;
        align-items: center;
        font: 1em "Bebas Neue";
}

    .cor-alternada {
        background-color: #f9f9f9;
        align-items: center;
        align-content: center;
        justify-items: center;
    }


    input::-webkit-input-placeholder {
    text-align: right;
}

    .pesquisar input{
        display: flex;
        align-items: center;
        margin: 0.25em 0.5em;
    }

    .pesquisar img {
        position: relative;
        align-items: center;
    }

    .pesquisar {
    justify-content: space-between;
    padding: 0.5em;
  }

    input {
    text-decoration: none;
    border-radius: 20px;
    background-color: white;
    font: 1em "Bebas Neue";
    padding: 0em 2em;
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    width: 15em;
}
`
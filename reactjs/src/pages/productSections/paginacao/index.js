import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0em 0em 2em 0em;

    .page{
        font: 1em "Oswald";
        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid gray;
        border-left: none;
        width: 3em;
        height: 4em;
    }

    .page:hover {
        background-color: #f6f6f6;
        cursor: pointer;
    }

    .page:nth-child(1) {
        border-left: 1px solid gray;
    }

    .page:nth-child(${props => props.paginaAtual}) {
        font-weight: bold;
    }
`

export default function Paginas(props) {

    function getPages() {
        let paginas = [];
        for (let i = 1; i <= props.totalPaginas; i++) {
            paginas.push(i);
        }
        return paginas;
    }

    function irPara(pagina) {
        props.onPageChange(pagina);
    }

    return(
        <Container paginaAtual={props.pagina}>
            {getPages().map(p =>
                <div className='page' onClick={() => irPara(p)}>
                  {p}
                </div>
            )}
        </Container>
    )
}
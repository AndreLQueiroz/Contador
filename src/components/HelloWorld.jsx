import Botao from "./Botao"

const HelloWorld=()=>{

    //Declarando variavel
    let nome ="Fiap"

    //criando a funçao clique
    function clique(){
        alert(`Ola dev, ${nome}`)
    }




    return(
        <>
        <p>HelloWorld</p>
        <p>Olá, Dev {nome} </p>
        <button onClick={clique}>Clicar</button>
        <h3>Botão de um componente</h3>
        <Botao/>
        </>
    )
}
export default HelloWorld

const Botao=()=>{
  //criando a funçao handleClick
  const handleClick=()=>{
    alert("eu mudei a mensagem")
  }

    return(
        <>
        {/*criando um botão*/}
        <button onClick={handleClick}>Botão do Componente</button>
        </>
    )
}
export default Botao
//pegando os dados por destruct(destruturaçao)
const Dados=({nivel,nome,senha})=>{
    return(
        <>
        <p>O nivel do usuario é:{nivel}</p>
        <p>O nome de usuario:{nome}</p>
        <p>A senha do usuario:{senha}</p>
        </>
    )
}
export default Dados
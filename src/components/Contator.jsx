import {useState} from "react"

const Contador=()=>{
    //Hooks - useState - manipula o estado da variavel

    const [Contador,setContador]=useState(0);
    return(
        <>
        <p>Contador:{Contador}</p>
        <button onClick={()=>setContador(Contador +1)}>Aumentar</button>
        <button onClick={()=>setContador(Contador -1)}>Diminuir</button>
        </>
    )
}
export default Contador
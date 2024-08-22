//importando o componente HelloWorld
import Aluno from "./components/Aluno"
import HelloWorld from "./components/HelloWorld"
import Dados from "./components/Dados"
import Contador from "./components/Contator"

function App() {

  return (
    <>
     {/*Chamando o componente HelloWorld */}
       <HelloWorld/>
       {/*chamando o componente aluno*/}
       <Aluno nome="Cidade" email="cidade@gmail.com"/>
    
    {/*chamando o componente Dados*/}
    <Dados nive="Admin" nome="City" senha="123456"/>
    
    {/*chamando o componente Contador */}
    <Contador/>
    </>
  )
}

export default App

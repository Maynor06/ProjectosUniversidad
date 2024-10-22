import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import { Portada } from './Components/Portada'
import { Modelo1 } from './Components/Modulo1'
import { Parcial2 } from './Components/Parcial2';
import { Examen } from './Components/Examen';
import Glosario from './Components/Glosario';
import { Footer } from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Portada />
      <Modelo1 />
      <Parcial2 />
      <Examen />
      <Glosario/>
      <Footer/>

    </>
  )
}

export default App

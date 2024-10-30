import { useState } from 'react';
import './Portada.css'


export const Portada = () => {

    const [menuShow, setMenuShow] = useState(false)

    return (

        <div className="portada" >

            
            <button className='bg-transparent relative left-[80%] w-max p-3 top-6 phone:flex justify-center items-center hidden' onClick={() => setMenuShow(!menuShow)} ><img className='w-6 hover:transform hover:scale-110' src={menuShow ? "Close.svg": "Menu.svg" } alt="menu" /></button>

            <ul className={`navegacion sm:top-28 sm:relative phone:text-sm phone:flex phone:flex-col phone:gap-3 phone:w-max phone:top-16 phone:left-[55%] phone:absolute ${menuShow ? 'opacity-100 ': 'phone:opacity-0 phone:hidden ' } `} >
                <li className='sm:px-3'> <a href="#Modulo1" className='sm:text-lg sm:mx-0' >Parcial 1 </a></li>
                <li className='sm:px-3'><a href="#Parcial2" className='sm:text-lg sm:mx-0' >Parcial 2</a></li>
                <li className='sm:px-3'><a href="#Examen" className='sm:text-lg sm:mx-0'>Parcial 3</a></li>
                <li className='sm:px-3'><a href="#Glosario" className='sm:text-lg sm:mx-0'>Glosario</a></li>
            </ul>


 
            <div className='m-auto sm:m-10 phone:m-0' >
                <div className="fig" >
                    <img src="Factory.svg" alt="estado" />
                    <img src="Family.svg" alt="familia" />
                </div>

                <ul className="portafolio phone:text-[1.5rem] phone:gap-[15px] sm:text-[2.5rem] " >
                    <li>P</li>
                    <li>O</li>
                    <li>R</li>
                    <li>T</li>
                    <li>A</li>
                    <li>F</li>
                    <li>O</li>
                    <li>L</li>
                    <li>I</li>
                    <li className="resalto" >O</li>
                </ul>
                <ul className="micro phone:text-[1.5rem] phone:gap-[15px] sm:text-[2.5rem] " >
                    <li className="resalto" >M</li>
                    <li>I</li>
                    <li>C</li>
                    <li>R</li>
                    <li>O</li>
                    <li>E</li>
                    <li>C</li>
                    <li>O</li>
                    <li>N</li>
                    <li>O</li>
                    <li>M</li>
                    <li>Í</li>
                    <li>A</li>
                </ul>
                <div className="fig1" >
                    <img src="Estado.svg" alt="Empresa" />
                </div>

            </div>

        </div>

    )
};

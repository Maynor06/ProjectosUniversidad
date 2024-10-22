import './Modulo1.css'
import CardClass from '../Tools/CardClass'

export const Modelo1 = () => {

    return (
        <>
            <section className="modulo1">
                <div className="principal" >
                    <h2>Parcial 1</h2>
                </div>

                <div className="tarjetas sm:w-[90%] sm:mx-[5%] sm:gap-[4%] ">
                    <CardClass title={"Concepto Economia"} img={"Clase1.jfif"} description={"¿Qué es la economia?" } document={"https://view.genially.com/64c4151e028e410011204b80"} 
                    body={
                        <>
                            <div className='resumen' >
                                <h3 >¿Qué es la economía?</h3>
                                <p >La economía es una ciencia social que estudia la forma de administrar los recursos disponibles (que son limitados) para satisfacer las necesidades humanas (que son ilimitadas).</p>
                                <h3 >Anexos</h3>
                                <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                    <div className='presentacion'>
                                        <p >Presentacion clase</p>
                                        <iframe src="/Semana1.pdf" frameborder="1"></iframe>
                                    </div>
                                    <div className='presentacion'>
                                        <p>tarea clase 1</p>
                                        <iframe src="/EvaluacionConocimiento.pdf" frameborder="1"></iframe>    
                                    
                                    </div>
                                </div>
                                <h3>Comentario</h3>
                                <p>Esta clase es la que nos provee de los conceptos basicos pero muy necesarios para este curso ya que sin estos 
                                    nos dificultaria mucho el entender los nuevos conceptos que trataremos de entender en esta clase asi que 
                                    espero le den una leida a estos conceptos tan importantes :3
                                </p>
                            </div>
                        </>
                    } />
                    
                    <CardClass title={"Mercados, Micro y Macro Economía"} img={"Parcial1Clase2"} description={"¿Sabes de que trata el mercado, y cuales son sus protagonistas?"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={
                        <>
                        <div className='resumen' >
                            <h3 >La economía como ciencia</h3>
                            <p >La economía es una ciencia social que estudia la forma de administrar los recursos disponibles (que son limitados) para satisfacer las necesidades humanas (que son ilimitadas).</p>
                            <h3 >Anexos</h3>
                            <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                <div className='presentacion'>
                                    <p >Presentacion clase</p>
                                    <iframe src="https://view.genially.com/64c4151e028e410011204b80" frameborder="1"></iframe>
                                </div>
                            </div>
                            <h3>Comentario</h3>
                            <p>Esta clase es la que nos provee de los conceptos basicos pero muy necesarios para este curso ya que sin estos 
                                nos dificultaria mucho el entender los nuevos conceptos que trataremos de entender en esta clase asi que 
                                espero le den una leida a estos conceptos tan importantes :3
                            </p>
                        </div>
                    </>
                    }/>

                    <CardClass title={"Division Economía"} img={"Parcial1Clase3.webp"} description={"Division de la economia"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"jajaja ya no se que decir al final pos tenia razon, yo siempre tengo razon jajajaja :`>"} />

                    <CardClass title={"Micro y Macro Economia"} img={"Parcial1Clase4.jpg"} description={"diferencia entre micro y macroeconomía"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"ya no quiero tener razon en todo :`3"} />

                </div>

            </section>

        </>

    )
}
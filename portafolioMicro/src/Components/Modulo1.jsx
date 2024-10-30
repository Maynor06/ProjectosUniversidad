import './Modulo1.css'
import CardClass from '../Tools/CardClass'

export const Modelo1 = () => {

    return (
        <>
            <section className="modulo1 mb-24" id='Modulo1'>
                <div className="principal" >
                    <h2>Parcial 1</h2>
                </div>

                <div className="tarjetas sm:w-[90%] sm:mx-[5%] sm:gap-[4%] ">
                    <CardClass title={"Concepto Economia"} img={"Clase1.jfif"} description={"¿Qué es la economia?" } 
                    body={
                        <>
                            <div className='resumen' >
                                <h2 >¿Qué es la economía?</h2>
                                <p >La economía es una ciencia social que estudia la forma de administrar los recursos disponibles (que son limitados) para satisfacer las necesidades humanas (que son ilimitadas).</p>
                                <p>La Economía, en otras palabras, es el estudio de los modos de organización y distribución de los bienes escasos que cada sociedad requiere y por ende produce o adquiere mediante diferentes estrategias, de modo de satisfacer la mayor cantidad de demanda a partir de un número finito de bienes tangibles o intangibles.

                                </p>

                                <h2 >Anexos</h2>
                                <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                    <div className='presentacion'>
                                        <iframe src="/Semana1.pdf" frameborder="1"></iframe>
                                    </div>
                                    <div className='presentacion'>
                                        <iframe src="/EvaluacionConocimiento.pdf" loading='lazy' frameborder="1"></iframe>    
                                    
                                    </div>
                                </div>
                                <h2>Comentario</h2>
                                <p>Esta clase es la que nos provee de los conceptos basicos pero muy necesarios para este curso ya que sin estos 
                                    nos dificultaria mucho el entender los nuevos conceptos que trataremos de entender en esta clase asi que 
                                    espero le den una leida a estos conceptos tan importantes :3
                                </p>
                            </div>
                        </>
                    } />
                    
                    <CardClass title={"Mercados, Micro y Macro Economía"} img={"Parcial1Clase2"} description={"¿Sabes de que trata el mercado, y cuales son sus protagonistas?"} body={
                        <>
                        <div className='resumen' >
                            <h2 >¿Qué es el mercado?</h2>
                            <p >El mercado hacer referencia al sistema por el que se intercambian bienes y servicios en una economía. Para que exista el mercado, deben intervenir dos figuras: compradores y vendedores.</p>
                            
                            <h3 >Microeconomia</h3>
                            <p >La microeconomía estudia cómo las personas y las empresas toman decisiones para repartir recursos limitados, como dinero y tiempo.</p>
                            
                            <h3 >Macroeconomia</h3>
                            <p >La macroeconomía estudia el funcionamiento global de la economía como conjunto integrado, para así poder explicar la evolución de los agregados económicos.</p>
                            
                            <h2 >Anexos</h2>
                            <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                <div className='presentacion'>
                                    <iframe src="https://view.genially.com/64c4151e028e410011204b80" loading='lazy' frameborder="1"></iframe>
                                </div>
                                <div className='presentacion'>
                                    <iframe src="./AnexoClase2Parcial1.pdf" loading='lazy' frameborder="1"></iframe>
                                </div>
                            </div>
                            <h2>Comentario</h2>
                            <p>
                                En esta clase profundizaremos en que se basa el mercado y cuales son sus figuras asi como tambien 
                                en la Microeconomia y la Macro y en que se diferencian.
                            </p>
                        </div>
                    </>
                    }/>

                    <CardClass title={"Division Economía"} img={"Parcial1Clase3.webp"} description={"¿Conoces cuáles son las divisiones de la economía?"} body={
                        <>
                        <div className='resumen' >
                            <h2>¿Cuáles son las Ramas de la economía?</h2>
                            <p >Las ramas de la economía son una parte importante de todas las organizaciones, ya que desempeñan un papel vital en el funcionamiento de las empresas. </p>
                            <p>Y esta se divide en dos ramas principales: <strong >Economía Positiva y Normativa </strong></p>
                            
                            <h3 >Economía Positiva</h3>
                            <p >La economía positiva es una rama de la economía que se ocupa de la descripción y explicación de los fenómenos económicos. Esta área de estudio es importante para entender cómo funcionan las economías y las finanzas a pequeña y gran escala. <br/> Y de igual manera esta se divide en <strong>Microeconomía y Macroeconomía</strong></p>
                            
                            <h3 >Economía Normativa</h3>
                            <p >La economía normativa es una rama de la economía que se ocupa de los juicios sobre lo que debe o debería ocurrir en los sistemas económicos</p>
                            
                            <h2 >Anexos</h2>
                            <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                <div className='presentacion'>
                                    <img src="./DivisionClase3Parcial1.png" loading='lazy' frameborder="1"/>
                                </div>
                            </div>

                            <h2>Comentario</h2>
                            <p>
                                En esta clase conocemos en que ramas se divide la economía ya que esta no es solo una sino que se divide en varios campos 
                                para llegar a profundizar y llegar a mejores conclusiones de esta.
                            </p>
                        </div>
                    </>
                    } />

                    <CardClass title={"Micro y Macro Economia"} img={"Parcial1Clase4.jpg"} description={"¿Hay diferencia entre la Microeconomía y la Maroeconomía?"} body={
                         <>
                         <div className='resumen' >
                             <h2>¿Qué es la Microeconomía?</h2>
                             <p >es una subrama de la economía que se ocupa del comportamiento de los consumidores individuales, las empresas y otras pequeñas unidades económicas, como la familiar. Esta área de estudio es fundamental para entender cómo los individuos y las empresas toman decisiones, sobre qué comprar o vender, cuánto producir o cómo determinar los precios.  </p>
                             <p>La microeconomía suele ser utilizada para predecir o explicar los fenómenos económicos, como el comportamiento de los consumidores.</p>
                             
                             <h2>¿Qué es la Macroeconomía?</h2>
                             <p > la macroeconomía es otra subrama de la economía que se ocupa del comportamiento de grandes unidades económicas, como países o regiones. Esta área de estudio es importante para entender cómo crecen o decrecen las economías, cómo se maneja el desempleo o cómo se determina la inflación</p>
                             
                             <h2>Comentario</h2>
                             <p>
                                La clase es para conocer que es lo que estudia cada rama de esta, y saber la importancia que esta rama tiene en nuestra vida ya que cada una estudia 
                                algo diferente y por consiguiente cada una nos ayuda en diferentes cosas.
                             </p>
                         </div>
                     </>
                    } />

                </div>

            </section>

        </>

    )
}
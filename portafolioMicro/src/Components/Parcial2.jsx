import './Modulo1.css'
import CardClass from '../Tools/CardClass'

export const Parcial2 = () => {

    return (
        <>
            <section className="modulo1 phone:h-auto phone:my-64 phone:mb-32 mb-28" id='Parcial2'>
                <div className="principal " >
                    <h2>Parcial 2</h2>
                </div>

                <div className="tarjetas sm:w-[90%] sm:mx-[5%] sm:gap-[4%] ">
                    <CardClass title={"Evolucion de los sistemas economicos"} img={"https://economipedia.com/wp-content/uploads/Historia-econ%C3%B3mica.jpg"} description={"¿Conoces la historia de como se llego al sistema economico del cual nos regimos hoy en día?"} body={
                        <>
                            <div className='resumen' >
                                <h2 >Historia de la economia</h2>
                                <p >La historia de la economía estudia la economía desde sus inicios: desde el simple y local trueque que, con el paso de los milenios, ha acabado evolucionando en el complejo y globalizado capitalismo, pasando por otros modelos, como el esclavista, el feudal o el mercantilista.</p>
                                <p>Las principales etapas de la economía son:</p>

                                <ul>
                                    <li>- El periodo esclavista </li>
                                    <li>- Feudalismo</li>
                                    <li>- El mercantilismo y el nacimiento del capitalismo</li>
                                    <li>- Socialismo</li>
                                    <li>- El marginalismo</li>
                                    <li>- La gran Depresion 1929</li>
                                    <li>- NEOLIBERALISMO</li>
                                </ul>
                                <p>En la presentacion le explicamos con mas detalle cada etapa :D</p>
                                <h2 >Anexos</h2>
                                <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                    <div className='presentacion'>
                                        <iframe src="/Evolucion.pdf" loading='lazy' frameborder="1"></iframe>
                                    </div>
                                    <div className='presentacion'>
                                        <img src="/fotoEras.jpg" loading='lazy' frameborder="1"/>
                                    </div>
                                    
                                </div>
                                <h2>Comentario</h2>
                                <p>
                                    Alguna vez te has preguntado sobre como se formo el sistema economico, no? pues en esta clase te lo explicamos :3
                                </p>
                            </div>
                        </>
                    } />

                    <CardClass title={"Tasas Marginales"} img={"parcial2Clase2.jpg"} description={"¿Qué son las tasas marginales?"} body={
                        <>
                            <div className='resumen' >
                                <h2 >Las tasas marginales son:</h2>
                                <p >La tasa marginal es el cambio en un resultado que se produce al
                                    añadir una unidad adicional de un determinado recurso. Se
                                    utiliza comúnmente para describir el impacto de esa unidad
                                    adicional en contextos como impuestos, consumo, producción o
                                    sustitución de bienes.</p>
                                
                                <p>Las tasas marginales se clasifican en diferentes tipos y estos son: </p>
                                <ul className='relative left-8' >
                                    <li>1. Tasa marginal de impuestos</li>
                                    <li>2. Tasa marginal de consumo</li>
                                    <li>3. Tasa marginal de sustitución</li>
                                    <li>4. Tasa marginal de transformación</li>
                                </ul>
                                <p>te lo explicamos mejor en la presentacion de abajo :D</p>
                                <h2 >Anexos</h2>
                                <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                    <div className='presentacion'>
                                        <iframe src="/Tasas.pdf" loading='lazy' frameborder="1"></iframe>
                                    </div>
                                    <div className='presentacion'>
                                        <img src="/AnexoClase2Parcial2.png" loading='lazy' frameborder="1"/>
                                    </div>
                                </div>
                                <h2>Comentario</h2>
                                <p>
                                    Las tasas marginales nos ayudan al momento de que nosotros quisieramos saber cual es el impacto que causa el añadir una unidad adicional 
                                    ya sea Impuestos, consumo, produccion o sustitución de bienes.
                                </p>
                            </div>
                        </>
                    } />

                    <CardClass title={"Curvas de indiferencia"} img={"Parcial2Clase3.jpg"} description={"¿Qué representan las curvas de indiferencia?"} body={<>
                            <div className='resumen' >
                                <h2 >Teoria de la curva de indiferencia:</h2>
                                <p >
                                    Las curvas de indiferencia buscan explicar el comportamiento racional que adoptan las familiar, las empresas y el estado al 
                                    momento de tomar decisiones económicas de compra.
                                </p>
                                <p>
                                "En el mundo de la microeconomía existe un concepto que ayuda a comprender de qué forma es posible dar satisfacción a los consumidores cuando tratan de elegir 
                                entre un producto o servicio y otro. Se llama curva de indiferencia, y la necesitarás cuando la competencia entre dos bienes parezca un empate."
                                </p>
                                
                                <p>Entramos mas afondo en el tema en la presentacion de abajo :D. </p>
                                
                                <h2 >Anexos</h2>
                                <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                    <div className='presentacion'>
                                        <iframe src="Graficos.pdf" loading='lazy' frameborder="1"></iframe>
                                    </div>
                                </div>
                                <h2>Comentario</h2>
                                <p>
                                    En esta clase vemos lo que son las curvas que nos ayudan a medir el grado de satisfacción que nuestro producto les da a nuestros clientes 
                                    esto nos ayuda a saber si nuestro producto esta siendo un exito o al contrario y no nos produce nada. 
                                </p>
                            </div>
                        </>
                    } />


                    <CardClass title={"Teoria del consumidor"} img={"https://slideplayer.es/12/3402256/big_thumb.jpg"} description={"¿Qué es, y para que sirve la teoria del consumidor?"} body={
                        <>
                        <div className='resumen' >
                            <h2 >Teoria del consumidor:</h2>
                            <p >
                            "La economía es una disciplina que estudia cómo se asignan los recursos escasos entre necesidades ilimitadas. En este contexto, la teoría del consumidor es un campo de estudio fundamental que busca entender cómo los consumidores toman decisiones en la elección de bienes y servicios."
                            </p>
                            
                            <p>"Esta teoría se basa en la idea de que los consumidores tienen preferencias y enfrentan restricciones presupuestarias, lo que significa que deben elegir entre diferentes alternativas."</p>
                            
                            <p>En la presentacion de abajo te explicamos un poco mas a fondo :D</p>
                            <h2 >Anexos</h2>
                            <div className='presentaciones phone:left-[5%] phone:w-[90%]' >
                                <div className='presentacion'>
                                    <iframe src="https://www.canva.com/design/DAGUVjD8o-s/MfU1rnx9xYZigIs61JV2bA/view?embed" loading='lazy' frameborder="1"></iframe>
                                </div>
                                <div className='presentacion'>
                                    <iframe src="./CurvaDemanda1.pdf" loading='lazy' frameborder="1"></iframe>
                                </div>
                                <div className='presentacion'>
                                    <iframe src="./CurvaDemanda2.pdf" loading='lazy' frameborder="1"></iframe>
                                </div>
                            </div>
                            <h2>Comentario</h2>
                            <p>
                                En esta clase tratamos de entender las preferencias de nuestros clientes ya sea que clase de cosas les gusta y que es lo que no les gusta, que es lo que 
                                estan dispuestos a no comprar con tal de comprar el producto que mas les guste, esto para saber que le podes ofrecer a nuestros clientes.
                            </p>
                        </div>
                    </>
                
                    } />
                </div>

            </section>

        </>

    )
}
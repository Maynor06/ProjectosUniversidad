import './Modulo1.css'
import CardClass from '../Tools/CardClass'

export const Examen = () => {

    return (
        <>
            <section className="modulo1">
                <div className="principal" >
                    <h2>Examen</h2>
                </div>

                <div className="tarjetas sm:w-[90%] sm:mx-[5%] sm:gap-[4%] ">
                    <CardClass title={"Demanda y Oferta"} img={"ExamenClase1.webp"} description={"¿Qué es la economia?"} document={"./public/semana1.pdf"} body={"Testaño"} />
                    
                    <CardClass title={"La medida de las elasticidades"} img={"ExamenClase2.jpg"} description={"La economia como ciencia"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"it`s ok be not ok"} />
                    <CardClass title={"Costos de producción"} img={"ExamenClase3.jpg"} description={"cuales son los costos de produccion?"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"it`s ok be not ok"} />
                    <CardClass title={"Costos de producción"} img={"https://economipedia.com/wp-content/uploads/Estructuras-del-mercado.jpg"} description={"cuales son los costos de produccion?"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"it`s ok be not ok"} />
                
                </div>

            </section>

        </>

    )
}
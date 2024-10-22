import './Modulo1.css'
import CardClass from '../Tools/CardClass'

export const Parcial2 = () => {

    return (
        <>
            <section className="modulo1">
                <div className="principal " >
                    <h2>Parcial 2</h2>
                </div>

                <div className="tarjetas sm:w-[90%] sm:mx-[5%] sm:gap-[4%] ">
                    <CardClass title={"Teoria utilidad Marginal"} img={"parcial2Clase1.jpg"} description={"¿Qué es la economia?"} document={"./public/semana1.pdf"} body={"Testaño"} />
                    
                    <CardClass title={"Curvas utilidad Marginal"} img={"parcial2Clase2.jpg"} description={"La economia como ciencia"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"it`s ok be not ok"} />

                    <CardClass title={"Tasa marginal de sustitución"} img={"Parcial2Clase3.jpg"} description={"Division de la economia"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"jajaja ya no se que decir al final pos tenia razon, yo siempre tengo razon jajajaja :`>"} />


                    <CardClass title={"Teoria del consumidor"} img={"https://slideplayer.es/12/3402256/big_thumb.jpg"} description={"Division de la economia"} document={"https://view.genially.com/64c4151e028e410011204b80"} body={"jajaja ya no se que decir al final pos tenia razon, yo siempre tengo razon jajajaja :`>"} />
                </div>

            </section>

        </>

    )
}
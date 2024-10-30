import { useState } from "react";
import Modal from 'react-bootstrap/Modal';


const Glosario = () => {

    const glosario = [
        { palabra: "Microeconomía", definicion: "Rama de la economía que estudia el comportamiento individual de consumidores y empresas." },
        { palabra: "Demanda", definicion: "Cantidad de un bien o servicio que los consumidores están dispuestos a comprar a un precio determinado." },
        { palabra: "Oferta", definicion: "Cantidad de un bien o servicio que los productores están dispuestos a vender a un precio determinado." },
        { palabra: "Equilibrio de mercado", definicion: "Punto en el que la cantidad demandada es igual a la cantidad ofrecida." },
        { palabra: "Elasticidad", definicion: "Medida de la sensibilidad de la cantidad demandada o ofrecida ante cambios en el precio u otras variables." },
        { palabra: "Elasticidad precio de la demanda", definicion: "Cambio porcentual en la cantidad demandada debido a un cambio porcentual en el precio." },
        { palabra: "Elasticidad precio de la oferta", definicion: "Cambio porcentual en la cantidad ofrecida debido a un cambio porcentual en el precio." },
        { palabra: "Elasticidad ingreso de la demanda", definicion: "Medida de cómo varía la demanda de un bien cuando varía el ingreso de los consumidores." },
        { palabra: "Bien normal", definicion: "Bien cuya demanda aumenta cuando aumenta el ingreso." },
        { palabra: "Bien inferior", definicion: "Bien cuya demanda disminuye cuando aumenta el ingreso." },
        { palabra: "Bien sustituto", definicion: "Bien que puede reemplazar a otro en el consumo." },
        { palabra: "Bien complementario", definicion: "Bien que se consume conjuntamente con otro." },
        { palabra: "Utilidad", definicion: "Satisfacción que un consumidor obtiene al consumir un bien o servicio." },
        { palabra: "Utilidad marginal", definicion: "Incremento en la utilidad total que un consumidor obtiene al consumir una unidad adicional de un bien." },
        { palabra: "Ley de la demanda", definicion: "Principio que establece que, ceteris paribus, al aumentar el precio de un bien, la cantidad demandada disminuye." },
        { palabra: "Ley de la oferta", definicion: "Principio que establece que, ceteris paribus, al aumentar el precio de un bien, la cantidad ofrecida aumenta." },
        { palabra: "Costo de oportunidad", definicion: "Valor de la mejor alternativa sacrificada para tomar una decisión." },
        { palabra: "Producción", definicion: "Proceso mediante el cual las empresas transforman insumos en productos." },
        { palabra: "Función de producción", definicion: "Relación matemática entre la cantidad de insumos utilizados y la cantidad de producto obtenida." },
        { palabra: "Costo fijo", definicion: "Costos que no varían con la cantidad producida." },
        { palabra: "Costo variable", definicion: "Costos que varían con la cantidad producida." },
        { palabra: "Costo total", definicion: "Suma de los costos fijos y variables." },
        { palabra: "Costo marginal", definicion: "Incremento en el costo total asociado a la producción de una unidad adicional." },
        { palabra: "Ingreso total", definicion: "Cantidad total de dinero que una empresa recibe por la venta de sus productos." },
        { palabra: "Ingreso marginal", definicion: "Incremento en el ingreso total por la venta de una unidad adicional." },
        { palabra: "Monopolio", definicion: "Mercado en el que existe un único oferente de un bien o servicio." },
        { palabra: "Oligopolio", definicion: "Mercado en el que pocas empresas controlan la oferta de un bien o servicio." },
        { palabra: "Competencia perfecta", definicion: "Estructura de mercado donde hay muchos compradores y vendedores, todos los cuales venden un producto idéntico." },
        { palabra: "Competencia monopolística", definicion: "Mercado con muchos competidores que venden productos diferenciados." },
        { palabra: "Ceteris paribus", definicion: "Expresión en latín que significa 'todo lo demás constante'." },
        { palabra: "Discriminación de precios", definicion: "Práctica en la que una empresa cobra precios diferentes a distintos grupos de consumidores por el mismo bien." },
        { palabra: "Economía de escala", definicion: "Situación en la que el costo por unidad de producción disminuye a medida que se produce más." },
        { palabra: "Desconomía de escala", definicion: "Aumento del costo por unidad cuando se incrementa la producción a gran escala." },
        { palabra: "Bien público", definicion: "Bien que es no excluyente y no rival en el consumo, como el aire limpio." },
        { palabra: "Bien privado", definicion: "Bien que es excluyente y rival, como un automóvil." },
        { palabra: "Mercado", definicion: "Lugar o sistema donde los compradores y vendedores interactúan para intercambiar bienes y servicios." },
        { palabra: "Precio", definicion: "Valor de un bien o servicio expresado en términos monetarios." },
        { palabra: "Curva de demanda", definicion: "Representación gráfica de la relación entre el precio de un bien y la cantidad demandada." },
        { palabra: "Curva de oferta", definicion: "Representación gráfica de la relación entre el precio de un bien y la cantidad ofrecida." },
        { palabra: "Excedente del consumidor", definicion: "Diferencia entre lo que los consumidores están dispuestos a pagar y lo que efectivamente pagan." },
        { palabra: "Excedente del productor", definicion: "Diferencia entre lo que los productores reciben por un bien y el costo de producirlo." },
        { palabra: "Externalidad", definicion: "Efecto colateral de una actividad económica que afecta a terceros." },
        { palabra: "Externalidad positiva", definicion: "Beneficio que una actividad económica genera a terceros, como la educación." },
        { palabra: "Externalidad negativa", definicion: "Costo que una actividad económica impone a terceros, como la contaminación." },
        { palabra: "Fallos de mercado", definicion: "Situación en la que el mercado no asigna eficientemente los recursos." },
        { palabra: "Intervención del gobierno", definicion: "Acción tomada por el estado para corregir los fallos de mercado o redistribuir recursos." },
        { palabra: "Teoría de juegos", definicion: "Análisis de decisiones estratégicas entre agentes económicos interdependientes." },
        { palabra: "Precio tope", definicion: "Límite máximo que el gobierno impone a los precios de ciertos bienes." },
        { palabra: "Precio mínimo", definicion: "Límite mínimo que el gobierno impone a los precios de ciertos bienes." },
        { palabra: "Mercado laboral", definicion: "Mercado donde se intercambia trabajo por salarios." },
        { palabra: "Salario mínimo", definicion: "Pago mínimo que un empleador está legalmente obligado a dar a sus trabajadores." },
        { palabra: "Discriminación laboral", definicion: "Trato diferente en el mercado laboral basado en características no relacionadas con la productividad." },
        { palabra: "Competencia imperfecta", definicion: "Estructura de mercado donde una empresa o grupo de empresas tiene poder para influir en los precios." },
        { palabra: "Teoría del valor", definicion: "Análisis del valor de un bien basado en su costo de producción o utilidad." },
        { palabra: "Propensión marginal a consumir", definicion: "Fracción del ingreso adicional que los consumidores destinan al consumo." },
        { palabra: "Propensión marginal al ahorro", definicion: "Fracción del ingreso adicional que los consumidores destinan al ahorro." },
        { palabra: "Curva de indiferencia", definicion: "Representación gráfica de combinaciones de bienes que proporcionan el mismo nivel de satisfacción al consumidor." },
        { palabra: "Eficiencia económica", definicion: "Uso óptimo de los recursos para maximizar la producción de bienes y servicios." },
        { palabra: "Subsidio", definicion: "Transferencia de dinero del gobierno a los productores o consumidores para incentivar el consumo o producción de un bien." },
        { palabra: "Impuesto", definicion: "Carga financiera impuesta por el gobierno a individuos o empresas." },
        { palabra: "Impuesto directo", definicion: "Impuesto cobrado directamente a las personas sobre su ingreso o riqueza." },
        { palabra: "Impuesto indirecto", definicion: "Impuesto que se cobra sobre el consumo de bienes y servicios." },
        { palabra: "Economía de bienestar", definicion: "Estudio de cómo la asignación de recursos afecta el bienestar social." },
        { palabra: "Margen de beneficio", definicion: "Diferencia entre los ingresos por ventas y los costos de producción." },
        { palabra: "Teorema de Coase", definicion: "Afirma que, en ausencia de costos de transacción, las externalidades pueden resolverse mediante acuerdos privados." },
        { palabra: "Maximización de beneficios", definicion: "Objetivo de las empresas de obtener la mayor ganancia posible." },
        { palabra: "Producto marginal", definicion: "Incremento en la producción total que se obtiene al añadir una unidad adicional de un insumo." },
        { palabra: "Escasez", definicion: "Situación en la que los recursos son limitados en relación con las necesidades humanas." },
        { palabra: "Renta económica", definicion: "Pago adicional que recibe un factor de producción por encima de su costo de oportunidad." },
        { palabra: "Asignación eficiente", definicion: "Distribución de los recursos que maximiza el bienestar de la sociedad." },
        { palabra: "Costo hundido", definicion: "Gasto ya incurrido que no puede recuperarse y no debe influir en decisiones futuras." },
        { palabra: "Bien de Giffen", definicion: "Bien cuya demanda aumenta cuando aumenta su precio, debido a un fuerte efecto ingreso." }
    ];

    const [modalShow, setModalShow] = useState(false)

    const handleModalShow = () => {
        setModalShow(!modalShow)
    }

    return (
        <>
            <div id="Glosario" className="mb-10 flex items-center h-screen justify-center phone:w-[90%] ">

                <div className="flex flex-col items-center" >
                    <h3 className="text-2xl mb-5 phone:text-xl phone:font-bold text-center phone:border-0 font-semibold phone:relative phone:left-4 " > Listado de palabras aprendidas durante <br/> el semestre :D </h3>
                    <img src="Arrow.svg" alt="flecha" className="ml-8 phone:relative phone:left-4" />
                    <button onClick={handleModalShow} className="bg-purple-600 hover:bg-blue-400 hover:scale-110 text-xl w-28 h-8 mr-2 phone:w-40 phone:left-4 phone:relative font-bold "> GLOSARIO </button>
                </div>
                <img src="Adam.png" alt="padre de la economía" loading="lazy" className="phone:absolute phone:opacity-0 phone:hidden" />

            </div>

            <Modal
                size="lg"
                show={modalShow}
                onHide={() => setModalShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                scrollable="boo1"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Glosario (Microeconomía)
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body  >
                    {glosario.map((palabra, x) => {
                        const [description, setDescription] = useState(false)

                        return (

                            <div key={x} className="flex gap-2 flex-col p-1 mb-2 border-2 border-gray-400 rounded-xl " >
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold " >{x + 1})</p>
                                        <h3 className="font-bold text-purple-800" >{palabra.palabra} </h3>
                                    </div>
                                    <button className="w-5 text-center hover:bg-transparent " onClick={() => setDescription(!description)} ><img src={description ? "EyeClose.svg" : "Eye.svg"} alt="ver definicion" /></button>

                                </div>
                                <div>
                                    {description ? <p>{palabra.definicion} </p> : null}

                                </div>
                            </div>


                        )
                    })}
                </Modal.Body>
            </Modal>

        </>

    )
}

export default Glosario;
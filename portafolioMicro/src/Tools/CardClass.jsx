import { useState } from "react"
import { ModalUtil } from "./ModalUtil"
import './CardClass.css'

const CardClass = ({ title, description, img, body }) => {

    const [modalShow, setModalShow] = useState(false)

    const handleModalShow = () => {
        setModalShow(!modalShow)
    }

    return (
        <div className="card sm:w-[40%] phone:w-[300px] phone:h-[220px] phone:m-auto phone:mt-[inherit] ">
            <div className="face front" >
                <img className="imgClass" loading="lazy" src={img} alt="imagen clase" />
                <h3 className="title_front">
                    {title}
                </h3>
            </div>


            <div className="face back">
                <h3 className="title ">{title} </h3>
                <p className="description">{description} </p>
                <div className="vermas">
                    <button onClick={handleModalShow
                    } >ver mas...</button>

                </div>
            </div>

            <ModalUtil body={body} onHide={() => setModalShow(false)} show={modalShow} title={title} document={document} />
        </div>
    )
}

export default CardClass;
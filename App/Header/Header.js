import style from "../style.module.css"
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone"
import maskGroup from "../../images/MaskGroup.png"
import React from "react"
import vector from "../../images/Vector.png"

const Header = (props) => {
    return (
        <>
            <div className={style.userName}>
                <div>
                    <div  className={style.noneIcon}>
                        <img src={vector} alt="vector"/>
                    </div>
                </div>
                <div>
                    <div className={style.LineContainer}>
                        <div className={style.Line}></div>
                    </div>
                </div>
                <div className={style.maskGroupMain}>
                    <img src={maskGroup} alt="maskGroup"/>
                </div>
                <div className={style.nameUsers}>
                    <p>{props.name}</p>
                </div>
            </div>
        </>
    )
}

export default Header

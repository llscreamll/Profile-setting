import style from "./style.module.css"
import maskGroup from "../../images/MaskGroup.png"
import CreateIcon from '@material-ui/icons/Create'
import Button from "@material-ui/core/Button"
import CloseIcon from '@material-ui/icons/Close'

const Profile = (props) => {
    return (
        <>
            <div className={style.profile}>
                <div className={style.userImages}>
                    <img src={maskGroup} alt="UserImages"/>
                </div>
                <div className={style.userName}>
                    <p>{props.fullName}</p>
                </div>

                <div className={style.edit}>
                    <Button
                        onClick={props.editorProfile}>
                        {props.option
                        ?
                        <div><p>РЕДАКТИРОВАТЬ</p>
                            <CreateIcon style={{
                            color: "white",
                            width: "24px",
                            height: "24px",
                            position: "absolute",
                            right: "-40px",
                            top: "-7px"
                        }}/></div>
                        :
                        <div><p>ЗАКРЫТЬ</p>
                            <CloseIcon style={{
                            color: "white",
                            width: "24px",
                            height: "24px",
                            position: "absolute",
                            right: "-40px",
                            top: "-7px"
                        }}/></div>}</Button>
                </div>
                <div className={style.context}>
                    <p> ЛИЧНЫЙ ПРОФИЛЬ </p>

                </div>
                <div className={style.contextMenu}>
                    <p>Главная/Личный профиль</p>
                </div>
            </div>
        </>
    )
}

export default Profile
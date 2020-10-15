import style from "../style.module.css";
import vectorMail from "../../../images/VectorMail.png";
import vectorPhone from "../../../images/VectorPhone.png";

const UserContacts = (props) => {
    return (
        <div className={style.frameEditor}>
            <div className={style.linearDiv1}>
                <div className={style.vectorMail}>
                    <img src={vectorMail} alt="mail-Icon"/>
                    <p>{props.email}</p>
                </div>
            </div>
            <div className={style.vectorPhone}>
                <img src={vectorPhone} alt="phone-Icon"/>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}

export default UserContacts
import React from "react"
import style from "./style.module.css"
import Header from "./Header/Header"
import Profile from "./Personal/Personal"
import EditorProfile from "./EditorProfile/EditorProfile"


let App = (props) => {
    return (
        <>
            <div className={style.header}>
                <Header name={props.name}/>
                <Profile fullName={props.fullName}
                         editorProfile={props.editorProfile}
                         option={props.option}
                />
                <EditorProfile editorProfile={props.editorProfile}
                               getFormData={props.getFormData}
                               option={props.option}
                               phone={props.phone}
                               email={props.email}
                />
            </div>
        </>
    )
}
export default App


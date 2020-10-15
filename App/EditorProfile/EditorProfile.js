import React from "react"
import UserContacts from "./UserContacts/UserContacts"
import UserEditor from "./UserEditor/UserEditor"

const EditorProfile = (props) => {
    return (
        <>
            {props.option
                ? <UserContacts
                    email={props.email}
                    phone={props.phone}
                />
                : <UserEditor
                    getFormData={props.getFormData}
                    editorProfile={props.editorProfile}
                />
            }
        </>


    )
}

export default EditorProfile
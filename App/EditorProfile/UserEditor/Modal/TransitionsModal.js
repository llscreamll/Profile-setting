import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import style from "./style.module.css"
import CloseIcon from "@material-ui/icons/Close";
import React  from "react";
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function TransitionsModal({open, handleClose, preventDef, setModalSuccess, modalSuccess, successText}) {
    const profileSave = (e) => {
        preventDef(e)
        setModalSuccess(false)
    }
    const classes = useStyles();
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>

                    <div className={successText === "Данные успешно сохранены"? `${style.modalWindow} ${style.textModalMobile}` : style.modalWindow}>
                        <Button onClick={handleClose} style={{
                            float: "right",
                            borderRadius: "50px",
                            height: "30px",
                            width: "30px",
                            marginTop: "14px",
                            marginRight: "5px"
                        }}> <CloseIcon style={{color: "grey"}}/></Button>
                        {modalSuccess ?
                            <Grid
                                container
                                direction="column"
                                justify="flex-end"
                                alignItems="center"
                                style={{marginTop: "80px"}}>
                                <div className={style.textModal}>Сохранить изменения?</div>
                                <Button
                                    onClick={profileSave}
                                    color="secondary"
                                    type="submit"
                                    style={{
                                        textTransform: "none",
                                        borderRadius: "50px",
                                        height: "50px",
                                        width: "202px",
                                        backgroundColor: "#1EC3AF",
                                        marginTop: "30px"
                                    }}
                                    variant="contained" color="primary">
                                    Сохранить
                                </Button>
                                <Button
                                    onClick={handleClose}
                                    color="secondary"
                                    type="submit"
                                    style={{
                                        textTransform: "none",
                                        borderRadius: "50px",
                                        marginTop: "30px",
                                        height: "50px",
                                        backgroundColor: "white",
                                        color: "#1EC3AF",
                                        border: "1px solid #1EC3AF",
                                        width: "202px"
                                    }}
                                    variant="contained" color="primary">
                                    Не сохранять
                                </Button>

                            </Grid>
                            :
                            <div>
                                <Grid
                                    container
                                    direction="column"
                                    justify="flex-end"
                                    alignItems="center"
                                    style={{marginTop: "80px"}}>
                                    <div className={style.textModal} >{successText}</div>
                                    <Button
                                        onClick={handleClose}
                                        color="secondary"
                                        type="submit"
                                        style={{
                                            textTransform: "none",
                                            borderRadius: "50px",
                                            height: "50px",
                                            width: "202px",
                                            backgroundColor: "#1EC3AF",
                                            marginTop: "50px"
                                        }}
                                        variant="contained" color="primary">
                                        Хорошо
                                    </Button>
                                </Grid>
                            </div>
                        }
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default TransitionsModal
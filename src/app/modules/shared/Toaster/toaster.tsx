import { Toast, ToastContainer } from "react-bootstrap"


export const ToasterPage = ({toastMsg, show, setShow}: any) => {
    return (
        <ToastContainer position={'middle-center'}>
        <Toast onClose={() => setShow(false)} show={show} className="d-inline-block m-1" bg={"success"} delay={3000} autohide key={1}>
          <Toast.Body className="text-white">
            {toastMsg}
          </Toast.Body>
        </Toast>
        </ToastContainer>
    )
}
import { createPortal } from "react-dom"

export const Backdrop=({onClose})=>{
    return <BackdropContainer onClick={onClose}/>
}

const ModalId=document.getElementById('modal')
const BackdropId=document.getElementById('backdrop')

 export const ModalContent=({children})=>{
return <ModalContainer>{children}</ModalContainer>
}
const Modal = ({onClose,children})=>{
    return (
        <>
        {
          createPortal(<Backdrop onClose={onClose}/>,BackdropId)
        }

       {
         createPortal(<ModalContent >{children}</ModalContent>,ModalId)
       }
        
        </>
    )
}
export default Modal

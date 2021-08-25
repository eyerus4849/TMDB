import '../modal.css'
const Modal=({show=false,onClose,children})=>{
return(<>
//    show && 
{/* <div style={{border:"1px grey solid",width:"600px"}}>
<p style={{padding:"10px 10px 10px 550px",borderBottom:"1px grey solid"}} onClick={onClose}>X </p>
     {children}
</div> */}
<div className="modal">
        <div className="modal-content">
          <div className="modal-close-button-container">
            <button onClick={onClose}>X</button>
          </div>
          {children}
        </div>
      </div>
</>
)
}
export default Modal
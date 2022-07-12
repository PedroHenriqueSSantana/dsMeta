import NotImg from '../../assets/img/notificationIcon.svg'
import  './styles.css'


function notificationButton() {
    return (
        <>
      <div className="dsmeta-red-btn">
        <img src={NotImg} alt="Notificar"/>
      </div>
      </>
    )
  }
  
  export default notificationButton
  
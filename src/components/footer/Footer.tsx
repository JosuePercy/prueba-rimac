import './footer.scss'
import logo2Image from "../../assets/logo2.png";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__content">
            <img className='footer__image' src={logo2Image} alt="Logo" />
            <div className='footer__separator'></div>
            <span className='footer__text'>© 2023 RIMAC Seguros y Reaseguros.</span>
        </div>
    </footer>
  )
}

export default Footer

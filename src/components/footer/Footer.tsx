import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__content">
            <img className='footer__image' src="src/assets/logo2.png" alt="Logo" />
            <div className='footer__separator'></div>
            <span className='footer__text'>© 2023 RIMAC Seguros y Reaseguros.</span>
        </div>
    </footer>
  )
}

export default Footer

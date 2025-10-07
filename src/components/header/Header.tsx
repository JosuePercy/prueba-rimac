import './Header.scss';

function Header() {
  return (
    <header className="header-container">
      <div className="header">
        <div className="header__logo">
          <img src="src/assets/logo.png" alt="Rimac Logo" />
        </div>
        <div className="header__contact">
          <span>¡Compra por este medio!</span>
          <span className="header__phone">
            <svg width="20" height="20" fill="none"><path d="M6.667 3.333A1.667 1.667 0 0 0 5 5c0 7.364 5.97 13.333 13.333 13.333A1.667 1.667 0 0 0 20 16.667v-2.222a1.111 1.111 0 0 0-1.111-1.111h-2.222a1.111 1.111 0 0 0-1.111 1.111v.556A10.001 10.001 0 0 1 6.667 5.556h.556A1.111 1.111 0 0 0 8.333 4.444V2.222A1.111 1.111 0 0 0 7.222 1.111H5A1.667 1.667 0 0 0 3.333 2.778v.555Z" fill="#000"/></svg>
            (01) 411 6001
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
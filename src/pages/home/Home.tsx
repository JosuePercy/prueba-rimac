import Form from "../../components/form/Form";

import familyImage from "../../assets/family.png";

import "./Home.scss";

function Home() {
  return (
    <>
      <main className="home">
        <div className="home__image">
          <img src={familyImage} alt="Familia" />
        </div>
        <div className="home__content">
          <div className="presentation">
            <div className="presentation__title">
              <div>
                <span>Seguro Salud Flexible</span>
                <h1>Creado para ti y tu familia</h1>
              </div>
              <img src={familyImage} alt="Familia" />
            </div>
            <div className="presentation__separator" />
            <h5 className="presentation__description">
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría, 100% online.
            </h5>
          </div>
          <Form />
        </div>
      </main>
    </>
  );
}

export default Home;
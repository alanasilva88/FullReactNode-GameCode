import "./Banner.css";


const Banner = () => {
  return (
    <section className="banner">
      <div className="animacao">
        <h1>Bem-vindo ao Game Code!</h1>
        <p>Encontre os melhores jogos para PlayStation aqui!</p>
        <div className="banner-section">
          <h3>Sobre o PlayStation</h3>
          <p>
            O PlayStation é uma linha de consoles de videogame criada e desenvolvida pela Sony Interactive Entertainment. A marca foi lançada pela primeira vez em 3 de dezembro de 1994 no Japão com o lançamento do console PlayStation original.
          
            Desde então, a linha PlayStation evoluiu para incluir o PlayStation 2, PlayStation 3, PlayStation 4 e, mais recentemente, o PlayStation 5. Cada nova geração trouxe avanços tecnológicos significativos e uma vasta biblioteca de jogos incríveis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import "./Rodape.css";


const Rodape = () => {
  return (
    <footer>
      <section className="footer-section">
        <h3>Principais Jogos</h3>
        <ul>
          <li>The Last of Us Part II</li>
          <li>God of War</li>
          <li>Spider-Man</li>
          <li>Uncharted 4: A Thief's End</li>
          <li>Horizon Zero Dawn</li>
        </ul>
      </section>
      <section className="footer-section">
        <h3>Contato</h3>
        <p>Contato: contato@gamecode.com</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Endereço: Rua dos Jogos, 123, São Paulo, SP</p>
      </section>
      <p>© 2024 Game Code. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Rodape;

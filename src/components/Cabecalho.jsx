import "./Cabecalho.css";

const Cabecalho = () => {
  const handleClick = () => {
    alert('Olá! Bem-vindo ao Code Game!');
  };

  return (
    <header>
      <div>Logo aqui</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#jogos">Jogos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <button className="botao" onClick={handleClick}>Entrar</button>
    </header>
  );
};

export default Cabecalho;

import "./Card.css";


const Card = (props) => {
  return (
    <section className="card">
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
      <p>{props.preco}</p>
    </section>
  );
};

export default Card;
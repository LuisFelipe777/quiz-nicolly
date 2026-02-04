import "./Home.css";
import livro1 from "../../assets/livro1.svg";
import livro2 from "../../assets/livro2.svg";
import { Button } from "../../components/Button/Button";

export function Home() {
  const text = "🤍 Iniciar Quiz";
  return (
    <div className="home">
      <header className="header-home">
        <img src={livro2} />
        <img src={livro1} />
      </header>
      <div className="div-home">
        <h1>O Diário da Nicolly</h1>
        <div className="linha"></div>
        <p>Será que você conhece os segredos dela?</p>
      </div>
      <Button text={text} />
    </div>
  );
}

import { Header } from "../../components/Header/Header";
import "./Resultado.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { RespostasContext } from "../../context/RespostasContext";

export function Resultado() {
  const navigate = useNavigate();
  const { perguntasErradas, setPerguntasErradas } =
    useContext(RespostasContext);
  const [acertouMaisDaMetade, setAcertouMaisDaMetade] = useState(false);

  useEffect(() => {
    perguntasErradas.length < 2
      ? setAcertouMaisDaMetade(true)
      : setAcertouMaisDaMetade(false);
  }, []);

  return (
    <div className="resultado">
      <Header />
      <h1 className="h1-resposta">
        {acertouMaisDaMetade
          ? "Voçê conhece a Nicolly muito bem!🥰"
          : "Ops! Quase lá! 😜"}
      </h1>
      <p className="numero-acertos">
        {perguntasErradas.length == 0
          ? "Você acertou: 4/4"
          : `Você acertou: ${4 - perguntasErradas.length}/4`}
      </p>
      <div className="msg">
        <p>
          {" "}
          {acertouMaisDaMetade
            ? " Sua conexão com a Nicolly é algo raro e eterno, como uma história que atravessa séculos em Mystic Falls. Cada Detalhe que você lembrou prova que seu carinho por ela é profundo, verdadeiro e absolutamente épico"
            : "Sua conexão com a Nicolly ainda é um mistério… como os segredos que rondam Mystic Falls. Talvez você não tenha acertado a maioria, mas isso só prova uma coisa: essa história ainda não foi totalmente escrita… e ainda dá tempo de descobrir tudo."}
        </p>
        <span>❤️</span>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            navigate("/perguntas");
            setPerguntasErradas([]);
          }}
          className="tentar-novamente"
        >
          Tentar novamente
        </button>
        {perguntasErradas.length !== 0 && (
          <button
            className="ver-erros"
            onClick={() => {
              navigate("/respostas");
            }}
          >
            Ver erros
          </button>
        )}
      </div>
    </div>
  );
}

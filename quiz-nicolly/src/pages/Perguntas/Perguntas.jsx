import { useState, useEffect, useContext } from "react";

import { Header } from "../../components/Header/Header";
import "./Perguntas.css";

import { useNavigate } from "react-router";

import { RespostasContext } from "../../context/RespostasContext";

const perguntas = [
  {
    id: 1,
    titulo: "Qual série preferida da Nicolly?",
    alternativas: [
      "Sobrenatural",
      "Stranger Things",
      "The Vampire Diaries",
      "The Walking Dead",
    ],
    correta: 2,
  },
  {
    id: 2,
    titulo: "Qual a cor preferida da Nicolly?",
    alternativas: ["Rosa", "Verde", "Preto", "Roxo"],
    correta: 2,
  },
  {
    id: 3,
    titulo: "Qual a comida favorita da Nicolly?",
    alternativas: ["Feijoada", "Macarrão", "Lasanha", "Pizza"],
    correta: 0,
  },
  {
    id: 4,
    titulo: "Quantos perfumes a Nicolly tem?",
    alternativas: ["2", "4", "5", "6"],
    correta: 3,
  },
];

export function Perguntas() {
  const { setPerguntasErradas } = useContext(RespostasContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(-1);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [progresso, setProgresso] = useState((1 / 4) * 100);
  // const progresso = (2 / 20) * 100;
  const [respostasCorreta, setRespostasCorretas] = useState(0);

  function verificaResposta(respostaCerta, respostaSel, id) {
    if (selected < 0) return;
    setProgresso(((perguntaAtual + 2) / 4) * 100);
    console.log(perguntaAtual);
    if (respostaCerta == respostaSel) {
      setRespostasCorretas(respostasCorreta + 1);
    } else {
      setPerguntasErradas((prev) => [...prev, id]);
    }
    // console.log(perguntasErradas);
    setPerguntaAtual(perguntaAtual + 1);
    setSelected(-1);
  }
  useEffect(() => {
    if (perguntaAtual === perguntas.length) {
      navigate("/resultado");
    }
  }, [perguntaAtual, navigate]);

  return (
    <div className="perguntas">
      <Header />

      <div className="progresso">
        <div className="progresso-contagem">
          <p>PROGRESSO DO QUIZ</p>

          <span>1 de 4</span>
        </div>
        <div
          className="barrinha"
          style={{
            background: `linear-gradient(
        to right,
       var(--color-primary) 0%,
       var(--color-primary) ${progresso}%,
       var(--text-muted) ${progresso}%,
       var(--text-muted) 100%
      )`,
          }}
        ></div>
      </div>

      {perguntaAtual < perguntas.length && (
        <>
          <div className="pergunta">
            <h1>{perguntas[perguntaAtual].titulo}</h1>
          </div>
          <div className="alternativas">
            {perguntas[perguntaAtual].alternativas.map((alternativa, index) => (
              <button
                className={
                  selected == index ? "button-quiz selected" : "button-quiz"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                {alternativa}
              </button>
            ))}
          </div>
          <div className="button-next-pergunta">
            <button
              className="button"
              onClick={() =>
                verificaResposta(
                  perguntas[perguntaAtual].correta,
                  selected,
                  perguntas[perguntaAtual].id,
                )
              }
            >
              {perguntaAtual + 1 === perguntas.length
                ? "Ver resultado"
                : "Próxima pergunta"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

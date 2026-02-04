import { Header } from "../../components/Header/Header";
import "./Respostas.css";
import { useContext } from "react";
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

export function Respostas() {
  const navigate = useNavigate();
  const { perguntasErradas, setPerguntasErradas } =
    useContext(RespostasContext);
  console.log(perguntasErradas);
  return (
    <div className="respostas">
      <Header />
      <h1 className="h1-erros">Revisão de erros: </h1>
      <div className="respostas-corretas">
        {perguntasErradas.map((id) => (
          <div className="resposta-correta" key={id}>
            <h2 className="h2-pergunta">"{perguntas[id - 1].titulo}"</h2>
            <p>
              Reposta correta:{" "}
              {perguntas[id - 1].alternativas[perguntas[id - 1].correta]}{" "}
            </p>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button
          className="tentar-novamente"
          onClick={() => {
            navigate("/perguntas");
            setPerguntasErradas([]);
          }}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

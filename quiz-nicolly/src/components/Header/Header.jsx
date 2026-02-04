import previous from "../../assets/previous.svg";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { RespostasContext } from "../../context/RespostasContext";

import "./Header.css";

export function Header(props) {
  const { setPerguntasErradas } = useContext(RespostasContext);
  const navigate = useNavigate();

  return (
    <header className="header">
      {" "}
      <button
        onClick={() => {
          navigate("/");
          setPerguntasErradas([]);
        }}
        className="link-previous"
      >
        {" "}
        <img src={previous} className="previous" />
      </button>
      <p className="text-pergunta">O quanto você conhece a Nicolly?</p>
    </header>
  );
}

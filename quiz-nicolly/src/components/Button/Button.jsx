import { useNavigate } from "react-router";
import "./Button.css";
export function Button(props) {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate("/perguntas")}>
      {props.text}
    </button>
  );
}

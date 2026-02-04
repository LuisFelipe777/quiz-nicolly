import { createContext, useState, useEffect } from "react";

export const RespostasContext = createContext();

export function RespostasProvider({ children }) {
  const [perguntasErradas, setPerguntasErradas] = useState([]);
  useEffect(() => {
    console.log("Perguntas erradas:", perguntasErradas);
  }, [perguntasErradas]);
  return (
    <RespostasContext.Provider
      value={{ perguntasErradas, setPerguntasErradas }}
    >
      {children}
    </RespostasContext.Provider>
  );
}

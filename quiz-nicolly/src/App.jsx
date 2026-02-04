import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Perguntas } from "./pages/Perguntas/Perguntas";
import { Resultado } from "./pages/Resultado/Resultado";
import { Respostas } from "./pages/Respostas/Respostas";
import { RespostasProvider } from "./context/RespostasContext";

function App() {
  return (
    <BrowserRouter>
      <RespostasProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perguntas" element={<Perguntas />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/respostas" element={<Respostas />} />
        </Routes>
      </RespostasProvider>
    </BrowserRouter>
  );
}

export default App;

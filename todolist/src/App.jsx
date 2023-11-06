import Login from "./Pages/Login/Login";
import PagTodo from "./Pages/PagTodo/PagTodo";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/pagtodo" element={<PagTodo />} />
        {/* <Route path="/produtos:user" element={<Produtos />} /> */}
        <Route path="*" element={<h1>Pagina nao encontrada</h1>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;

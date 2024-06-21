import Categorias from "./components/Categorias";
import Depoimentos from "./components/Depoimentos";
import Destino from "./components/Destinos";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Destino />
        <Depoimentos />
        <Categorias />
      </div>
    </div>
  );
}

export default App;

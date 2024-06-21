import Categorias from "./components/Categorias";
import Depoimentos from "./components/Depoimentos";
import Destino from "./components/Destinos";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Navigation from "./compoenet/Navigation";
import Router from './utilities/Router';
import ProductsContext from "./contexts/ProductContext";

function App() {
  return (
    <div className={'bg-white border-gray-200 dark:bg-gray-900'}>
      <ProductsContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductsContext>


    </div>
  );
}

export default App;

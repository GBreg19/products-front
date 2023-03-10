import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductAdd from "./components/Products/ProductAdd";
import ProductList from "./components/Products/ProductList";
import Vardishi from "./vardishi/Vardishi";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route exact path="/product-add" element={<ProductAdd />}></Route>
        <Route exact path="/vardishi" element={<Vardishi />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

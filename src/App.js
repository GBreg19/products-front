import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductAdd from "./components/Products/ProductAdd";
import ProductList from "./components/Products/ProductList";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route exact path="/product-add" element={<ProductAdd />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

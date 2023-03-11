import axios from "axios";
import React, { Fragment } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: black;
  font-size: 16px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Container = styled.li`
  background-color: white;
  border-radius: 15px;
  width: 250px;
  padding: 10px 20px;
  position: relative;
`;

const Product = ({ item, data, setData }) => {
  const onRemove = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3004/products/${id}`
      );
      const filteredArr = data.filter((filItem) => filItem.id !== id);
      setData(filteredArr);
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteHandler = (id) => {
    onRemove(id);
  };

  return (
    <Container>
      <span>
        <h1>SKU: {item.sku}</h1>
        <h1>Name: {item.name}</h1>
        <h1>Price: {item.price}</h1>
        {item.dvd.size && <h1>Size: {item.dvd.size}</h1>}
        {item.book.weight && <h1>Weight: {item.book.weight}</h1>}
        {item.furniture.width &&
          item.furniture.height &&
          item.furniture.length && (
            <Fragment>
              <h1>Height: {item.furniture.height}</h1>
              <h1>Width: {item.furniture.width}</h1>
              <h1>Length: {item.furniture.length}</h1>
            </Fragment>
          )}
      </span>
      <span>
        <Button onClick={() => onDeleteHandler(item.id)} title="Remove Item">
          X
        </Button>
      </span>
    </Container>
  );
};

export default Product;

import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import Product from "./Product";
import ProductAdd from "./ProductAdd";

const Ulist = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const ProductList = () => {
  const [x, setX] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3004/products`);
        // console.log(response.data);
        setX(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className=" w-11/12 m-auto">
      <div className="flex justify-between items-center py-2">
        <div>
          <h1 className="text-4xl font-robotoReg">Product Add</h1>
        </div>
        <div>
          <ul className="flex justify-between w-48">
            <li>
              <Button
                onClick={() => {
                  navigate("product-add");
                }}
              >
                Add
              </Button>
            </li>
            <li>
              <Button>Mass Delete</Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full rounded-lgx border-y-2 border-y-stone-900">
        <Ulist>
          {x.map((item) => {
            return (
              <Product key={item.id} item={item} data={x} setData={setX} />
            );
          })}
        </Ulist>
      </div>
    </div>
  );
};

export default ProductList;

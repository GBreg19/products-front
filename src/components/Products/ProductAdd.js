import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import eCommerce from "../../Images/e-commerce.png";
import axios from "axios";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    sku: "",
    name: "",
    price: "",
    dvd: {
      size: "",
    },
    book: {
      weight: "",
    },
    furniture: {
      height: "",
      width: "",
      length: "",
    },
  });

  const [errorTxts, setErrorTxts] = useState({});
  const [validate, setValidate] = useState(false);
  const [selected, setSelected] = useState("Type Switcher");

  const onSelectHandler = (e) => {
    setSelected(e.target.value);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValues.sku.length >= 1) {
        setErrorTxts((prevState) => {
          return { ...prevState, sku: "" };
        });
      }
      if (inputValues.name.length >= 1) {
        setErrorTxts((prevState) => {
          return { ...prevState, name: "" };
        });
      }
      if (inputValues.price.length >= 1) {
        setErrorTxts((prevState) => {
          return { ...prevState, price: "" };
        });
      }
      if (selected !== "Type Switcher") {
        setErrorTxts((prevState) => {
          return { ...prevState, type: "" };
        });
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValues, selected]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const errorMsg = {};
    if (inputValues.sku.length < 1) {
      errorMsg.sku = "Please, submit required 'SKU";
    }
    if (inputValues.name.length < 1) {
      errorMsg.name = "Please, submit required name";
    }
    if (inputValues.price.length < 1) {
      errorMsg.price = "Please, submit required price";
    }
    if (selected === "Type Switcher") {
      errorMsg.type = "Please, submit required type";
    }
    setErrorTxts(errorMsg);
    setValidate(
      !errorMsg.sku && !errorMsg.name && !errorMsg.price && !errorMsg.type
    );

    console.log(errorTxts);
    console.log(validate);

    if (validate) {
      try {
        const response = await axios.post(
          "http://localhost:3004/products",
          inputValues
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler} className=" w-11/12 m-auto">
        <div className="flex justify-between items-center py-2">
          <div>
            <h1 className="text-4xl font-robotoLight text-white">
              Product Add
            </h1>
          </div>
          <div>
            <ul className="flex justify-between w-40">
              <li>
                <Button type="submit">Save</Button>
              </li>
              <li>
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Cancel
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-screen rounded-lgx border-t-2 border-white-900">
          <div className="flex items-center h-full py-5">
            <div className="h-full basis-2/5 bg-white rounded-l-lg md:px-20 md:pb-10">
              <div className="mb-5 w-8/12 m-auto flex flex-col justify-center items-center">
                <img src={eCommerce} width="300" className="my-10" />
                <h1 className="text-center font-robotoLight text-xl ">
                  Thank you for visiting our website! We're glad to hear that
                  you're interested in adding a product to our platform.
                </h1>
              </div>
              <div className="user-inputs">
                <label>SKU</label>
                <Input
                  name="sku"
                  value={inputValues.sku}
                  onChange={onChangeHandler}
                  placeholder="Stock keeping unit"
                />
                {errorTxts.sku && (
                  <p className="text-red-600 font-robotoLight font-bold">
                    {errorTxts.sku}
                  </p>
                )}
              </div>
              <div>
                <label>Name</label>
                <Input
                  name="name"
                  value={inputValues.name}
                  onChange={onChangeHandler}
                  placeholder="Name"
                />
                {errorTxts.name && (
                  <p className="text-red-600 font-robotoLight font-bold">
                    {errorTxts.name}
                  </p>
                )}
              </div>
              <div>
                <label>Price ($)</label>
                <Input
                  name="price"
                  value={inputValues.price}
                  onChange={onChangeHandler}
                  placeholder="Price in dollars"
                />
                {errorTxts.price && (
                  <p className="text-red-600 font-robotoLight font-bold">
                    {errorTxts.price}
                  </p>
                )}
              </div>
              <div>
                <label>Select type of product</label>
                <select
                  value={selected}
                  onChange={onSelectHandler}
                  className="form-select appearance-none
              block
      w-full
      px-1
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      mb-3
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
                >
                  <option value="Type Switcher" disabled>
                    Type Switcher
                  </option>
                  <option value="DVD">DVD</option>
                  <option value="book">Book</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>
              {selected === "DVD" ? (
                <div>
                  <label>Size (MB)</label>
                  <Input
                    value={inputValues.dvd.size}
                    onChange={(event) =>
                      setInputValues({
                        ...inputValues,
                        dvd: { ...inputValues.dvd, size: event.target.value },
                      })
                    }
                  />
                  <p>Please provide size in megabytes for the product</p>
                </div>
              ) : selected === "book" ? (
                <div>
                  <label>Weight (KG)</label>
                  <Input
                    name="weight"
                    value={inputValues.book.weight}
                    onChange={(event) =>
                      setInputValues({
                        ...inputValues,
                        book: {
                          ...inputValues.book,
                          weight: event.target.value,
                        },
                      })
                    }
                  />
                  <p>Please provide weight in kilograms for the product</p>
                </div>
              ) : selected === "furniture" ? (
                <div>
                  <label>Height (CM)</label>
                  <Input
                    name="height"
                    value={inputValues.furniture.height}
                    onChange={(event) =>
                      setInputValues({
                        ...inputValues,
                        furniture: {
                          ...inputValues.furniture,
                          height: event.target.value,
                        },
                      })
                    }
                  />
                  <label>Width (CM)</label>
                  <Input
                    name="width"
                    value={inputValues.furniture.width}
                    onChange={(event) =>
                      setInputValues({
                        ...inputValues,
                        furniture: {
                          ...inputValues.furniture,
                          width: event.target.value,
                        },
                      })
                    }
                  />
                  <label>Length (CM)</label>
                  <Input
                    name="length"
                    value={inputValues.furniture.length}
                    onChange={(event) =>
                      setInputValues({
                        ...inputValues,
                        furniture: {
                          ...inputValues.furniture,
                          length: event.target.value,
                        },
                      })
                    }
                  />
                  <p>Please provide dimensions in HxWxL format</p>
                </div>
              ) : null}
              {errorTxts.type && (
                <p className="text-red-600 font-robotoLight font-bold">
                  {errorTxts.type}
                </p>
              )}
            </div>
            <div className="basis-3/5 px-32 bg-hamLightBlue h-full lg:w-6/12 flex flex-col text-white justify-center items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
              <h1 className="uppercase font-robotoBold text-xl mb-10">
                add your product on our website and become a successful seller
              </h1>
              <p className="font-robotoLight text-lg mb-5">
                Our website is designed to be user-friendly, and we've made the
                process of adding a product as simple as possible.
              </p>
              <p className="font-robotoLight text-lg mb-5">
                To get started, simply enter all the necessary information about
                your product, such as the product SKU(Stock keeping unit) name,
                price and description of your product after choosing a type
              </p>
              <p className="font-robotoLight text-lg mb-5">
                Please be as detailed as possible when filling out the
                information, as this will help potential customers make an
                informed decision about your product.
              </p>
              <p className="font-robotoLight text-lg mb-5">
                Once you've entered all the necessary information, simply click
                the "Submit" button and your product will be added to our
                website. Our team will review the product to ensure it meets our
                guidelines and is a good fit for our platform. If there are any
                issues, we'll be sure to reach out to you directly.
              </p>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ProductAdd;

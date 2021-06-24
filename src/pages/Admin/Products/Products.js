import React, { useState, useEffect } from "react";
import Product from "../../../components/Product/Product";
import { getProductsByUserId } from "../../../services/api";
import { getUrlParams } from "../../../services";
const Products = ({ location }) => {
  const [products, getProducts] = useState({ products: [], user_id: null });
  const handleGetProducts = async (user_id) => {
    const productObj = {
      user_id,
      products: await getProductsByUserId(user_id),
    };
    getProducts(productObj);
  };

  useEffect(() => {
    handleGetProducts(getUrlParams(location).user_id);
  }, []);
  return (
    <>
      {products.products.map((product) => (
        <Product
          key={product.id}
          productData={product}
          user_id={products.user_id}
        />
      ))}
    </>
  );
};

export default Products;

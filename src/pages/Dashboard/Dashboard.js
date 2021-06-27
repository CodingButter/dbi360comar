import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { getUserProducts } from "../../services/api";
const Dashboard = () => {
  const [products, updateProducts] = useState([]);
  const handleGetProducts = async () => {
    const userProducts = await getUserProducts();
    updateProducts(userProducts);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </>
  );
};

export default Dashboard;

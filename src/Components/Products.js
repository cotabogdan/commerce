import React, { useEffect, useState } from "react";
import { Container } from "./Products.style";
import { popularProducts, allProducts } from "../data";
import ProductItem from "./ProductItem";
import AllProducts from "./AllProducts";

const Products = ({ categoryFilterValue, sizeFilterValue, sortingValue }) => {
  const [popularProductsState, setPopularProductsState] = useState(popularProducts);
  const [allProductsState, setAllProductsState] = useState(allProducts);
  useEffect(() => {
    setPopularProductsState(() => {
      const filtredProducts = popularProducts.filter((item) => {
        let isValid = true;
        if (categoryFilterValue && item.category !== categoryFilterValue) isValid = false;
        if (sizeFilterValue && item.size !== sizeFilterValue) isValid = false;
        return isValid;
      });
      if (sortingValue === "low") {
        return filtredProducts.sort((a, b) => {
          if (+a.price.split("$")[0] > +b.price.split("$")[0]) return 1;

          return -1;
        });
      } else if (sortingValue === "high") {
        console.log("high");
        return filtredProducts.sort((a, b) => {
          if (+a.price.split("$")[0] > +b.price.split("$")[0]) return -1;

          return 1;
        });
      }

      return filtredProducts;
    });
    setAllProductsState(() => {
      const filtredProducts = allProducts.filter((item) => {
        let isValid = true;
        if (categoryFilterValue && item.category !== categoryFilterValue) isValid = false;
        if (sizeFilterValue && item.size !== sizeFilterValue) isValid = false;
        return isValid;
      });

      if (sortingValue === "low") {
        return filtredProducts.sort((a, b) => {
          if (+a.price.split("$")[0] > +b.price.split("$")[0]) return 1;

          return -1;
        });
      } else if (sortingValue === "high") {
        return filtredProducts.sort((a, b) => {
          if (+a.price.split("$")[0] > +b.price.split("$")[0]) return -1;

          return 1;
        });
      }

      return filtredProducts;
    });
  }, [categoryFilterValue, sizeFilterValue, sortingValue]);

  return (
    (<p>Popular Products</p>),
    (
      <Container>
        {popularProductsState.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
        {allProductsState.map((all) => (
          <AllProducts all={all} key={all.id} />
        ))}
      </Container>
    )
  );
};

export default Products;

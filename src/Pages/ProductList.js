import React from "react";
import Announcement from "../Components/Announcement";
import FilterComp from "../Components/FilterComp";
import NavBar from "../Components/NavBar";
import Products from "../Components/Products";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/Newsletter";
import { useParams } from "react-router-dom";
import { useState } from "react";
const ProductList = () => {
  let { category } = useParams();

  const [categoryFilterValue, setCategoryFilterValue] = useState("");
  const [sizeFilterValue, setSizeFilterValue] = useState("");
  const [sortingValue, setSortingValue] = useState("");

  const handleCategoryFilterChange = (e) => {
    setCategoryFilterValue(e.target.value);
  };
  const handleSizeFilterChange = (e) => {
    setSizeFilterValue(e.target.value);
  };
  const handleSortingValue = (e) => {
    setSortingValue(e.target.value);
  };
  return (
    <div>
      <Announcement />
      <NavBar />

      <FilterComp
        categoryFilterValue={categoryFilterValue}
        sizeFilterValue={sizeFilterValue}
        sortingValue={sortingValue}
        handleCategoryFilterChange={handleCategoryFilterChange}
        handleSizeFilterChange={handleSizeFilterChange}
        handleSortingValue={handleSortingValue}
      />
      <Products
        categoryFilterValue={categoryFilterValue ? (categoryFilterValue === "none" ? "" : categoryFilterValue) : category}
        sizeFilterValue={sizeFilterValue}
        sortingValue={sortingValue}
      />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;

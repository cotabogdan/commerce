import React from "react";
import { Container, Title, FilterContainer, Filter, FilterText, SelectContainer } from "../Pages/ProductList.style";
// import { SelectBox } from '@toluna-ui-toolkit/selectbox';
// import { useState } from 'react';
// import AllProducts from './AllProducts';
// import { allProducts } from '../data';

const options1 = [
  { value: "sport", label: "Sport" },
  { value: "actual", label: "Actual" },
  { value: "iarna", label: "Winter" },
  { value: "geci", label: "Geci" },
  { value: "retro", label: "Retro" },
];
const options2 = [
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];
const options3 = [
  { value: "low", label: "Low to high" },
  { value: "high", label: "High to low" },
];
const FilterComp = ({
  categoryFilterValue,
  handleCategoryFilterChange,
  handleSizeFilterChange,
  sizeFilterValue,
  handleSortingValue,
  sortingValue,
}) => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <SelectContainer>
            <select value={categoryFilterValue} onChange={handleCategoryFilterChange}>
              <option value="none">Choose a category</option>
              {options1.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectContainer>
          <SelectContainer>
            <select onChange={handleSizeFilterChange} value={sizeFilterValue}>
              <option value="">Choose a size</option>
              {options2.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectContainer>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <SelectContainer>
            <select onChange={handleSortingValue} value={sortingValue}>
              <option value="">Choose how to filter</option>

              {options3.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </SelectContainer>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default FilterComp;

import React from 'react'
import { categories, categories2 } from '../data'
import { Container } from './Categories.style'
import CategoryItem from './CategoryItem'


const Categories = () => {

  return (
    <>
    <Container>
      {categories.map(item=>(
         
         <CategoryItem item={item} key={item.id}/>
      ) )}
    </Container>
     <Container>
     {categories2.map(item=>(
        
        <CategoryItem item={item} key={item.id}/>
     ) )}
   </Container>
   </>
  )
}

export default Categories;

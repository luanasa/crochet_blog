// src/components/Categories.tsx
import React from 'react';
import CategoryItem from './CategoryItem';

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-3xl mt-10 mb-2">Categorias</h1>
      <p className="text-2xl mb-10 text-teal-700">Veja minhas receitas de crochê🧶</p>

      <ul className="list-none p-0 flex gap-10 justify-center mb-16">
        <CategoryItem imageSrc="./amigurumi.png" altText="avenger amigurumi" label="AMIGURUMI" to="/amigurumi" />
        <CategoryItem imageSrc="./leitores.jpg" altText="kindle cover pink tulip" label="LEITORES" to="/leitores" />
        <CategoryItem imageSrc="./bags.png" altText="crochet bags" label="BOLSAS" to="/bolsas" />
        <CategoryItem imageSrc="./decor.png" altText="crochet pink heart pillow" label="DECOR" to="/decor" />
      </ul>
    </div>
  );
}

export default Categories;

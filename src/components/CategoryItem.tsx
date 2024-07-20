// src/components/CategoryItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  imageSrc: string;
  altText: string;
  label: string;
  to: string; 
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imageSrc, altText, label, to }) => {
  return (
    <li className="relative inline-block">
      <Link to={to} className="block">
        <img className="w-full" src={imageSrc} alt={altText} />
        <span className="absolute inset-0 flex items-center justify-center text-white text-1xl font-bold bg-black bg-opacity-10 hover:bg-opacity-20">
          {label}
        </span>
      </Link>
    </li>
  );
}

export default CategoryItem;

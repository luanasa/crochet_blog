import React from 'react';

interface ItemProps {
  link: string;
  imageSrc: string;
  altText: string;
}

const Item: React.FC<ItemProps> = ({ link, imageSrc, altText }) => {
  return (
    <li className="relative group">
      <a href={link} className="block">
        <img className='hover:opacity-70 transition-opacity duration-300' src={imageSrc} alt={altText} />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white bg-blue-500 py-2 px-4 rounded">Download</button>
        </div>
      </a>
    </li>
  );
};

export default Item;

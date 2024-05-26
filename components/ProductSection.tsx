"use client"

import React, { useState } from 'react';

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<{ id: number; name: string }>({ id: 1, name: 'Water Treatment Solutions' });

  const categories: { id: number, name: string }[] = [
    { id: 1, name: 'Water Treatment Solutions' },
    { id: 2, name: 'Waste Water Treatment' },
    { id: 3, name: 'Zero Liquid Discharge' },
  ];

  type Product = {
    id: number;
    name: string;
  };

  type CategoryName = 'Water Treatment Solutions' | 'Waste Water Treatment' | 'Zero Liquid Discharge';

  type Products = Record<CategoryName, Product[]>;

  const products: Products = {
    'Water Treatment Solutions': [
      { id: 101, name: 'Product 1' },
      { id: 102, name: 'Product 2' },
      { id: 103, name: 'Product 3' },
    ],
    'Waste Water Treatment': [
      { id: 201, name: 'Product 4' },
    ],
    'Zero Liquid Discharge': [
      { id: 301, name: 'Product 7' },
      { id: 302, name: 'Product 8' },
    ],
  };

  const handleCategoryHover = (categoryId: number) => {
    const category = categories.find((c) => c.id === categoryId);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const isCategoryName = (name: string): name is CategoryName => {
    return ["Water Treatment Solutions", "Waste Water Treatment", "Zero Liquid Discharge"].includes(name);
  };

  return (
    <div id='products' className='p-10 bg-white relative'>
      <h1 className='font-bold text-logoBlue text-4xl'>Our Products</h1>
      <div className="flex pt-5">
        {/* Categories on the left side */}
        <div className="w-1/4 items-center justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`py-4 cursor-pointer ${selectedCategory.id === category.id ? 'bg-logoBlue bg-opacity-20 rounded-lg mr-4 text-logoBlue font-bold' : 'text-textcolor'
                }`}
              onMouseEnter={() => handleCategoryHover(category.id)}
            >
              <h3 className='px-2'>{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Products on the right side */}
        <div className="w-3/4 p-4 border-l">
          <h2 className="text-2xl font-bold mb-4">
            {selectedCategory.id ? `Products in ${selectedCategory.name}` : 'Select a category'}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {isCategoryName(selectedCategory.name) &&
              products[selectedCategory.name].map((product: Product) => (
                <div key={product.id} className="border p-2 cursor-pointer">
                  <img src='machine.jpg' alt='' className='mb-2' />
                  <h3 className='text-center font-medium'>{product.name}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

import { urlFor } from '@/lib/sanity';
import React, { useState } from 'react';

export default function CompanyCategorySelector({ companies, categories, selectedCompany, selectedCategory, handleCompanySelect, handleCategorySelect }: any) {


  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold mb-4">Select Company</h2>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {companies.map((company: any) => (
          <div
            key={company.id}
            onClick={() => handleCompanySelect(company)}
            className={`
              p-4 border rounded-lg cursor-pointer text-center
              transition-all duration-300
              ${selectedCompany?.name === company.name
                ? 'bg-blue-100 border-blue-500 shadow-lg'
                : 'hover:bg-gray-100'}
            `}
          >
            <img
              src={company?.logo?.asset
                ? urlFor(company?.logo).url()
                : "/product-placeholder.jpg"}
              alt={company.name}
              className="mx-auto h-20 mb-2"
            />
            <p className='text-center'>{company.name}</p>
          </div>
        ))}
      </div>

      {selectedCompany && (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Select Categories
          </h3>

          <div className="grid grid-cols-3 gap-4">
            {categories?.filter((category: any) => category?.company?.name == selectedCompany?.name).map((category: any) => (
              <div
                key={category.name}
                onClick={() => handleCategorySelect(category)}
                className={`
                  p-4 border rounded-lg cursor-pointer text-center
                  transition-all duration-300
                  ${selectedCategory?.name === category?.name
                    ? 'bg-green-100 border-green-500 shadow-lg'
                    : 'hover:bg-gray-100'}
                `}
              >
                {category?.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
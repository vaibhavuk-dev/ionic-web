import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: 'cxmsgrac', // Replace with your local project ID
  dataset: 'production',         // Replace with your dataset name
  apiVersion: '2025-01-15',      // Use the current date
  useCdn: false,                 // Disable CDN for local fetch
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

export interface Product {
  name: string;
  slug: { current: string };
  category: string;
}

export interface NavItem {
  label: string;
  route: string;
}

export interface DropdownContent {
  [key: string]: { label: string }[];
}


export async function getProductsByCategory() {
  const query = `
  *[_type == "pi_products"]{
    name,
    "category": category->title,
    slug
  }
  `;

  const products: Product[] = await sanityClient.fetch(query);

  // Group products by category
  return products.reduce<any>((acc, product) => {
    const { category, name, slug } = product;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push({
      name: name,
      slug: slug
    });

    return acc;
  }, {});
}

export async function generateNavItems(): Promise<{
  dropdownContent: DropdownContent;
}> {
  const groupedProducts = await getProductsByCategory();

  console.log(groupedProducts)

  const dropdownContent: DropdownContent = {
    Products: [],
    Services: [
      { label: "Consulting" },
      { label: "Maintenance" },
      { label: "Installation" },
    ],
  };
  
  // Add the products from API response
  Object.keys(groupedProducts).forEach((category) => {
    groupedProducts[category].forEach((item: any) => {
      dropdownContent.Products.push({ label: item.category });
    });
  });

  return { dropdownContent };
}


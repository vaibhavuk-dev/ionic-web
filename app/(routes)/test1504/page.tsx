import { sanityClient } from '../../../lib/sanity';
import BlockRenderer from '../../../components/BlockRenderer';

const query = `
*[_type == "pi_products"][0]{
  name,
  shortDescription,
  slug,
  order,
  mainImage,
  "category": category->{
    title,
    slug,
    order
  },
  sections[]{
    title,
    content,
    "sectionType": sectionType->{
      name,
      description
    }
  }
}
`;

export default async function BlockPage() {

    const promises = [
        sanityClient.fetch(query)
    ]

    const [block] = await Promise.all(promises);

    console.log(block);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{block?.name}</h1>
      {
        block?.sections?.map((section: any) => (
          <div className='sectiongap flex flex-col gap-4'>
          <p>{section?.title}</p>
          <BlockRenderer content={section?.content} />
          </div>
        ))
      }
      <p className='text-left'>
        {JSON.stringify(block)}
      </p>
    </div>
  );
}

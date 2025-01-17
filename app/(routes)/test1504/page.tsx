import { sanityClient } from '../../../lib/sanity';
import BlockRenderer from '../../../components/BlockRenderer';

const query = `*[_type == "product"][0] {
    _id,
    name,
    description
  }`;
  
export default async function BlockPage() {

    const promises = [
        sanityClient.fetch(query)
    ]

    const [block] = await Promise.all(promises);

    console.log(block);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{block?.name}</h1>
      <BlockRenderer content={block?.description} />
    </div>
  );
}

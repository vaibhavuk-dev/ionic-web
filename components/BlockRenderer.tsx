import { PortableText } from '@portabletext/react';

const components = {
  types: {
    image: ({ value }: any) => <img src={value.asset.url} alt={value.alt || 'Image'} />,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        {children}
      </a>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({children}: any) => <ul className="mt-xl">{children}</ul>,
    number: ({children}: any) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}: any) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}: any) => <li style={{listStyleType: 'disclosure-closed'}} className='text-blueb-700'>{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({children}: any) => <li>✅ {children}</li>,
  },
};

const BlockRenderer = ({ content }: any) => {
  return <PortableText value={content} components={components} />;
};

export default BlockRenderer;

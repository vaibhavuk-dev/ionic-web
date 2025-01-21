import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

const SampleImageComponent = ({value, isInline}: any) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder()
        .image(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}


const components = {
  block: {
    // Ex. 1: customizing common block types
    h3: ({children}: any) => <h2 className="text-2xl font-semibold mt-4">{children}</h2>,
  },
  types: {
    image: ({value}:any) => <img src={value.imageUrl} />,
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
    bullet: ({children}: any) => <ul className="mt-xl p-4">{children}</ul>,
    number: ({children}: any) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}: any) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <li
        style={{ listStyleType: 'disc', paddingLeft: '0.5em', marginBottom: '0.5em' }}
        className="text-gray-800 text-md leading-relaxed"
      >
        {children}
      </li>
    ),
    
    // Ex. 2: rendering custom list items
    checkmarks: ({children}: any) => <li>✅ {children}</li>,
  },
};

const BlockRenderer = ({ content }: any) => {
  return <PortableText value={content} components={components} />;
};

export default BlockRenderer;

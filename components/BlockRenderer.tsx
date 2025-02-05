import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import { CheckCircle2 } from 'lucide-react';

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
    normal: ({children}: any) => <p className="text-md mt-4">{children}</p>,
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
    bullet: ({children}: any) => <div className="grid md:grid-cols-2 gap-4 mt-5">{children}</div>,
    number: ({children}: any) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}: any) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg border">
              <CheckCircle2 className="text-green-500 w-[5%]" />
              <span className='w-[95%]'>{children}</span>
            </div>
      // <li
      //   style={{ listStyleType: 'disc', paddingLeft: '0.5em', marginBottom: '0.5em' }}
      //   className="text-gray-800 text-md leading-relaxed"
      // >
      //   {children}
      // </li>
    ),
    
    // Ex. 2: rendering custom list items
    checkmarks: ({children}: any) => <li>✅ {children}</li>,
  },
};

const BlockRenderer = ({ content }: any) => {
  return <PortableText value={content} components={components} />;
};

export default BlockRenderer;

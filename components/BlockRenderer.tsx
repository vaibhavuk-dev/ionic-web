import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import { CheckCircle2 } from 'lucide-react';

const SampleImageComponent = ({value, isInline}: any) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder()
        .projectId(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '')
        .dataset(process.env.NEXT_PUBLIC_SANITY_DATASET || 'production')
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
    h2: ({children}: any) => <h2 className="text-2xl font-semibold mt-4">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-xl font-semibold mt-3">{children}</h3>,
    h4: ({children}: any) => <h4 className="text-lg font-medium mt-2">{children}</h4>,
    normal: ({ children, value }: any) => {
      // Check if the block only contains empty text
      const isEmpty = !value.children.some((child: any) => child.text.trim() !== '');
  
      return isEmpty ? <br /> : <p className="text-md mt-4 whitespace-pre-line">{children}</p>;
    },
  },
  types: {
    image: ({value}:any) => <SampleImageComponent value={value} />,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({children}: any) => <div className="grid md:grid-cols-2 gap-4 mt-5">{children}</div>,
    number: ({children}: any) => <ol className="mt-lg">{children}</ol>,
    checkmarks: ({children}: any) => <ol className="m-auto text-lg">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg border">
              <CheckCircle2 className="text-green-500 w-1/5" />
              <span>{children}</span>
            </div>
    ),
    checkmarks: ({children}: any) => <li>✅ {children}</li>,
    hardBreak: () => <><br /><br /><br /></>,
  },
};

const BlockRenderer = ({ content }: any) => {
  return <PortableText value={content} components={components} />;
};

export default BlockRenderer;

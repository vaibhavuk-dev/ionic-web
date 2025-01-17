import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'cxmsgrac', // Replace with your local project ID
  dataset: 'production',         // Replace with your dataset name
  apiVersion: '2025-01-15',      // Use the current date
  useCdn: false,                 // Disable CDN for local fetch
});

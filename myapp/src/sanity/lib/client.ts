import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
// import sanityClient from '@sanity/client';

// export const client = sanityClient({
//   projectId: process.env.SANITY_PROJECT_ID, // Your Sanity project ID
//   dataset: process.env.SANITY_DATASET, // Your Sanity dataset
//   useCdn: process.env.NODE_ENV === 'production', // Use the CDN for faster access in production
// });

// export const sanityClient = client; // Export the sanityClient as sanityClient


// Using this to communicate w/ Sanity
import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "z798a7fm",
    dataset: "production"
})
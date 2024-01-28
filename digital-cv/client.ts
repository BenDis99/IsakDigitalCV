import {createClient} from'@sanity/client'

export default createClient({
  projectId: 'y1daejsx', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2024-01-28"
})
import BatmanLogo from './Batman.png'
import ShazamLogo from './shazam.png'
import SupermanLogo from './Superman.png'
const ProductsData = [
    {
        ProductImg: { BatmanLogo },
        ProductName: 'WhatsApp Actions for HubSpot',
        ProductDescription: 'send WhatsApp messages from HubSpot workflow',
        ProductVotes: 213,
        CommentsNum: 27,
        ProductCategory: 'Productivity',
        CategoryLink: '#',
        id: 1,
    },
    {
        ProductImg: { ShazamLogo },
        ProductName: 'Sensity',
        ProductDescription: 'The deepfake detection platform',
        ProductVotes: 32,
        CommentsNum: 4,
        ProductCategory: 'Developer Tool',
        CategoryLink: '#',
        id: 2,
    },
    {
        ProductImg: { SupermanLogo },
        ProductName: 'Technically True Podcast',
        ProductDescription:
            'A podcast on developer relations and public speaking',
        ProductVotes: 23,
        CommentsNum: 2,
        ProductCategory: 'Marketing',
        CategoryLink: '#',
        id: 3,
    },
]
export default ProductsData

import BatmanLogo from './assests/images/Batman.png'
import ShazamLogo from './assests/images/shazam.png'
import SupermanLogo from './assests/images/Superman.png'
const ProductsData = [
    {
        ProductImg: BatmanLogo,
        ProductName: 'WhatsApp Actions for HubSpot',
        ProductDescription: 'send WhatsApp messages from HubSpot workflow',
        ProductVotes: 213,
        CommentsNum: 27,
        ProductCategory: 'Productivity',
        CategoryLink: '#',
        id: 1,
        ProductPhotos: [
            'http://placecorgi.com/1000/1000',
            'http://placecorgi.com/900/900',
            'http://placecorgi.com/800/800',
        ],
    },
    {
        ProductImg: ShazamLogo,
        ProductName: 'Sensity',
        ProductDescription: 'The deepfake detection platform',
        ProductVotes: 32,
        CommentsNum: 4,
        ProductCategory: 'Developer Tool',
        CategoryLink: '#',
        id: 2,
        ProductPhotos: [
            'http://placecorgi.com/1000/1000',
            'http://placecorgi.com/900/900',
            'http://placecorgi.com/800/800',
        ],
    },
    {
        ProductImg: SupermanLogo,
        ProductName: 'Technically True Podcast',
        ProductDescription:
            'A podcast on developer relations and public speaking',
        ProductVotes: 23,
        CommentsNum: 2,
        ProductCategory: 'Marketing',
        CategoryLink: '#',
        id: 3,
        ProductPhotos: [
            'http://placecorgi.com/1000/1000',
            'http://placecorgi.com/900/900',
            'http://placecorgi.com/800/800',
        ],
    },
]
export default ProductsData

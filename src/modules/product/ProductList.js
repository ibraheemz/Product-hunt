import Product from './index'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import ProductsData from '../../assests/ProductsData'

const ProductList = () => {
    const [data, setData] = useState([])
    const d = new Date().toString().split(' ').splice(1, 3).join(' ')
    // fetching data from the API
    useEffect(() => {
        var config = {
            method: 'Get',
            url: 'https://api.producthunt.com/v1/posts',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer ah7jK8UqHEpefPjplVqHJgMZx7rv0xQR4-BklgmenQU',
                Cookie: '__cfduid=dc36e2032b2ecf7f6b90a155ffb7ceca31616974459',
            },
        }
        axios(config)
            .then(function (response) {
                setData(response.data.posts)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [data])
    return (
        <div className="container-fluid main-div">
            <div className="main-div-margin">
                <div className="time-span">
                    <span className="main-div ml-0 ">{d}</span>
                </div>
                {data.map((item, id) => (
                    <div className="product" id={'a' + id}>
                        <Product
                            ProductImg={item.thumbnail.image_url}
                            ProductName={item.name}
                            ProductDescription={item.tagline}
                            ProductVotes={item.votes_count}
                            CommentsNum={item.comments_count}
                            ProductCategory={item.topics[0].name}
                            //CategoryLink={product.CategoryLink}
                            id={item.id}
                            //ProductPhotos={product.ProductPhotos}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductList

import { useState, useEffect } from 'react'
import { ArrowUpCircleFill, Chat } from 'react-bootstrap-icons'
import ProductModal from './ProductModal'
import $ from 'jquery'
import axios from 'axios'

const Product = ({
    ProductVotes,
    id,
    ProductImg,
    ProductName,
    ProductDescription,
    CategoryLink,
    ProductCategory,
    CommentsNum,
    ProductPhotos,
}) => {
    const [productVotes, setProductVotes] = useState(ProductVotes)
    const [showProduct, setShowProduct] = useState(false)
    const [voteButtonOff, setVoteButtonOff] = useState(true)
    const alt = `Product ${id}`
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
                console.log(JSON.stringify(response))
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <div
                className="product-info rounded"
                onClick={(e) => {
                    var elementType = $(e.target).prop('nodeName')
                    console.log(elementType)
                    if (
                        elementType === 'BUTTON' ||
                        elementType === 'svg' ||
                        elementType === 'path' ||
                        elementType === 'A' ||
                        elementType === 'P'
                    ) {
                        setShowProduct(false)
                    } else {
                        setShowProduct(true)
                    }
                }}
            >
                <div className="product-image-wrapper">
                    <img
                        className="product-image"
                        src={ProductImg}
                        alt={alt}
                    ></img>
                </div>
                <div className="product-description">
                    <h6 className="product-name">{ProductName}</h6>
                    <p className="product-breef">{ProductDescription}</p>
                    <div className="product-footer">
                        <button className="btn btn-white btn-sm comment-button">
                            <Chat />
                            {CommentsNum}
                        </button>
                        <a className="category-link" href={CategoryLink}>
                            {ProductCategory}
                        </a>
                    </div>
                </div>
                <div className="vote-button-warrper">
                    <button
                        id="vote-button"
                        className="btn btn-white vote-button row pt-3"
                        onClick={() => {
                            if (voteButtonOff) {
                                setProductVotes(productVotes + 1)
                                setVoteButtonOff(false)
                            }
                        }}
                    >
                        <ArrowUpCircleFill />
                        <p>{productVotes}</p>
                    </button>
                </div>
            </div>
            <ProductModal
                ProductVotes={productVotes}
                id={id}
                ProductImg={ProductImg}
                ProductName={ProductName}
                ProductDescription={ProductDescription}
                CategoryLink={CategoryLink}
                ProductCategory={ProductCategory}
                CommentsNum={CommentsNum}
                ProductPhotos={ProductPhotos}
                show={showProduct}
                onHide={() => setShowProduct(false)}
            />
        </div>
    )
}
export default Product

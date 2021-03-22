import { useState } from 'react'
import { ArrowUpCircleFill, Chat } from 'react-bootstrap-icons'
import ProductModal from './ProductModal'
import $ from 'jquery'
const Product = (props) => {
    const [productVotes, setProductVotes] = useState(props.ProductVotes)
    const [showProduct, setShowProduct] = useState(false)
    const alt = `Product ${props.id}`

    return (
        <div>
            <div
                className="product-info rounded"
                onClick={(e) => {
                    var elementType = $(e.target).prop('nodeName')
                    console.log(elementType)
                    if (
                        elementType == 'BUTTON' ||
                        elementType == 'svg' ||
                        elementType == 'path' ||
                        elementType == 'A'
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
                        src={props.ProductImg}
                        alt={alt}
                    ></img>
                </div>
                <div className="product-description">
                    <h6 className="product-name">{props.ProductName}</h6>
                    <p className="product-breef">{props.ProductDescription}</p>
                    <div className="product-footer">
                        <button className="btn btn-white btn-sm comment-button">
                            <Chat />
                            {props.CommentsNum}
                        </button>
                        <a className="category-link" href={props.CategoryLink}>
                            {props.ProductCategory}
                        </a>
                    </div>
                </div>
                <div className="vote-button-warrper">
                    <button
                        id="vote-button"
                        className="btn btn-white vote-button"
                        onClick={() => {
                            setProductVotes(productVotes + 1)
                        }}
                    >
                        <ArrowUpCircleFill />
                        {productVotes}
                    </button>
                </div>
            </div>
            <ProductModal
                {...props}
                show={showProduct}
                onHide={() => setShowProduct(false)}
            />
        </div>
    )
}
export default Product

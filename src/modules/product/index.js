import { useState } from 'react'
import { ArrowUpCircleFill, Chat } from 'react-bootstrap-icons'
import ProductModal from './ProductModal'
import $ from 'jquery'
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

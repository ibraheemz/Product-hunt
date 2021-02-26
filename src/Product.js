import { useState } from 'react'
import { ArrowUpCircleFill, Chat } from 'react-bootstrap-icons'
const Product = (props) => {
    const [productVotes, setProductVotes] = useState(props.ProductVotes)
    const alt = `Product ${props.id}`
    return (
        <div>
            <div className="product-info rounded">
                <div className="product-image-wrapper">
                    <img
                        className="product-image"
                        src={props.ProductImg}
                        alt={alt}
                    ></img>
                </div>
                <div className="product-description">
                    <h6 className="product-name">{props.ProductName}</h6>
                    <p className="product-descreption">
                        {props.ProductDescription}
                    </p>
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
    )
}
export default Product

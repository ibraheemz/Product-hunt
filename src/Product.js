import { useState } from 'react'
import { ArrowUpCircleFill, Chat } from 'react-bootstrap-icons'
const Product = (props) => {
    const [productVotes, setProductVotes] = useState(props.ProductVotes)
    const alt = `Product ${props.id}`
    return (
        <div>
            <div className="product-info">
                <div className="product-image-wrapper">
                    <img
                        className="product-image"
                        src={props.ProductImg}
                        alt={alt}
                    ></img>
                </div>
                <div className="product-description">
                    <h2>{props.ProductName}</h2>
                    <p>{props.ProductDescription}</p>
                    <button className="btn btn-light comment-button">
                        <Chat />
                        {props.CommentsNum}
                    </button>
                    <a className="category-link" href={props.CategoryLink}>
                        {props.ProductCategory}
                    </a>
                </div>
                <button
                    id="vote-button"
                    className="btn btn-light vote-button"
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

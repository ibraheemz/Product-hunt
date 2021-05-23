/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import ProductModal from './ProductModal'
import { ArrowUpCircleFill, Chat } from 'react-bootstrap-icons'
import $ from 'jquery'

const Product = ({
    productvotes,
    id,
    productimg,
    productname,
    productdescription,
    categorylink,
    productcategory,
    commentsnum,
}) => {
    const [currentProductVotes, setCurrentProductVotes] = useState(productvotes)
    const [showProduct, setShowProduct] = useState(false)
    const [voteButtonOff, setVoteButtonOff] = useState(true)
    const alt = `Product ${id}`

    return (
        <div>
            <>
                <div
                    className="product-info rounded"
                    onClick={(e) => {
                        console.log($(e.target).prop('nodeName'))
                        var elementType = $(e.target).prop('nodeName')
                        if (
                            elementType === 'BUTTON' ||
                            elementType === 'svg' ||
                            elementType === 'path' ||
                            elementType === 'A'
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
                            src={productimg}
                            alt={alt}
                        ></img>
                    </div>
                    <div className="product-description">
                        <h6 className="product-name">{productname}</h6>
                        <p className="product-breef" id="product-breef">
                            {productdescription}
                        </p>
                        <div className="product-footer">
                            <button className="btn btn-white btn-sm comment-button">
                                <Chat />
                                {commentsnum}
                            </button>
                            <a className="category-link" href={categorylink}>
                                {productcategory[0]}
                            </a>
                        </div>
                    </div>
                    <div className="vote-button-warrper">
                        <button
                            id="vote-button"
                            className="btn btn-white vote-button row pt-3"
                            onClick={() => {
                                if (voteButtonOff) {
                                    setCurrentProductVotes(
                                        currentProductVotes + 1
                                    )
                                    setVoteButtonOff(false)
                                }
                            }}
                        >
                            <i className="fas fa-caret-up mr-2 ml-2"></i>
                            <p>{currentProductVotes}</p>
                        </button>
                    </div>
                </div>
                {showProduct && (
                    <ProductModal
                        productvotes={currentProductVotes}
                        id={id}
                        productimg={productimg}
                        productname={productname}
                        productdescription={productdescription}
                        categorylink={categorylink}
                        productcategory={productcategory}
                        commentsNum={commentsnum}
                        //productlandingpage={post.install_links.redirect_url}
                        show={showProduct}
                        onHide={() => setShowProduct(false)}
                    />
                )}
            </>
        </div>
    )
}
export default Product

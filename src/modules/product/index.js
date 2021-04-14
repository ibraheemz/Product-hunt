/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'
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
    const [post, setPost] = useState({})
    const [allMedia, setAllMedia] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentProductVotes, setCurrentProductVotes] = useState(productvotes)
    const [showProduct, setShowProduct] = useState(false)
    const [voteButtonOff, setVoteButtonOff] = useState(true)
    const alt = `Product ${id}`

    useEffect(() => {
        var config = {
            method: 'Get',
            url: `https://api.producthunt.com/v1/posts/${id}`,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer ah7jK8UqHEpefPjplVqHJgMZx7rv0xQR4-BklgmenQU',
            },
        }
        // axios(config)
        //     .then(function (response) {
        //         setPost(response.data.post)
        //         setLoading(false)
        //         // for (let i = 0; i < 4; i++) {
        //         //     setAllMedia([
        //         //         ...allMedia,
        //         //         response.data.post.media[1].image_url,
        //         //     ])
        //         // }
        //         response.data.post.media.map((item) => {
        //             return setAllMedia([...allMedia, item.image_url])
        //         })
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
        async function getpost() {
            try {
                let response = await axios(config)
                let data = await response.data.post
                let postsMedia = response.data.post.media
                console.log(postsMedia)
                postsMedia.map((item) => {
                    if (item.video_id !== null) {
                        setAllMedia((allMedia) => [
                            ...allMedia,
                            item.metadata.url,
                            item.image_url,
                        ])
                    } else {
                        setAllMedia((allMedia) => [...allMedia, item.image_url])
                    }
                })
                setLoading(false)
                setPost(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getpost()
    }, [])
    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            ) : (
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
                            <p className="product-breef">
                                {productdescription}
                            </p>
                            <div className="product-footer">
                                <button className="btn btn-white btn-sm comment-button">
                                    <Chat />
                                    {commentsnum}
                                </button>
                                <a
                                    className="category-link"
                                    href={categorylink}
                                >
                                    {productcategory}
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
                                <ArrowUpCircleFill />
                                <p>{currentProductVotes}</p>
                            </button>
                        </div>
                    </div>
                    <ProductModal
                        productvotes={currentProductVotes}
                        id={id}
                        productimg={productimg}
                        productname={productname}
                        productdescription={productdescription}
                        categorylink={categorylink}
                        productCategory={productcategory}
                        commentsNum={commentsnum}
                        productphotos={allMedia}
                        show={showProduct}
                        onHide={() => setShowProduct(false)}
                    />
                </>
            )}
        </div>
    )
}
export default Product

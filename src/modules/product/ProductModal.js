import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './Carousel'
import axios from 'axios'
import $ from 'jquery'

const mediaUrls = (mediaArray) => {
    if (!mediaArray) return

    let urls = []
    mediaArray.map((item) => {
        if (item.video_id !== null) {
            urls.push({ video_url: item.metadata.url, img_url: item.image_url })
        } else {
            urls.push({ img_url: item.image_url })
        }
    })
    return urls
}

function ProductModal({
    productvotes,
    id,
    productimg,
    productname,
    productdescription,
    categorylink,
    productcategory,
    commentsnum,
    productlandingpage,
    show,
    onHide,
}) {
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
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
        async function getpost() {
            try {
                let response = await axios(config)
                let data = await response.data.post
                setLoading(false)
                setPost(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getpost()
    }, [])
    return (
        <Modal
            productvotes={productvotes}
            id={id}
            productimg={productimg}
            productname={productname}
            productdescription={productdescription}
            categorylink={categorylink}
            productcategory={productcategory}
            commentsnum={commentsnum}
            productphotos={mediaUrls(post.media)}
            productlandingpage={productlandingpage}
            show={show}
            onHide={onHide}
            dialogClassName="modal-73w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="modal-wrapper">
                <div className="modal-product-header">
                    <div className="modal-img-wrapper">
                        <img
                            className="modal-product-image"
                            src={productimg}
                            alt={alt}
                        ></img>
                    </div>
                    <div className="modal-product-descreption">
                        <h6 className="modal-product-name">{productname}</h6>
                        <p className="modal-product-breef">
                            {productdescription}
                        </p>
                        <div className="modal-product-cats">
                            {productcategory.map((item) => {
                                return (
                                    <a
                                        href={categorylink}
                                        className="modal-cat-button"
                                    >
                                        {item}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="app-trophy">
                        <button className="app-trophy-style">
                            #1 App Trophy
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="product-carousel">
                        {loading ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden"></span>
                                </div>
                            </div>
                        ) : (
                            <Carousel productphotos={mediaUrls(post.media)} />
                        )}
                    </div>
                    <div className="modal-side-div">
                        <div className="action-buttons">
                            <button
                                className="getit-button"
                                onClick={() => productlandingpage}
                            >
                                GET IT
                            </button>
                            <button className="upvote-button">
                                UPVOTE {productvotes}
                            </button>
                        </div>
                        <div className="rounded-images"></div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default ProductModal

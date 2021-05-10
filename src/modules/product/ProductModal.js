import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './Carousel'
import Api from '../../lib/Api'
import Comments from './Comments'
import placeholderImg from '../../assests/images/guest-user-avatar.webp'
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
    const [comments, setComments] = useState([])
    const alt = `Product ${id}`
    useEffect(() => {
        setLoading(true)
        Api(`/v1/posts/${id}`)
            .then((response) => {
                setPost(response.data.post)
                setComments(response.data.post.comments)
                setLoading(false)
            })
            .catch((e) => {
                setLoading(false)
                console.log(e)
            })
    }, [id])

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
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="xl"
        >
            {console.log('commets is here 4', comments)}
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
                        <div className="modal-product-breef">
                            {productdescription}
                        </div>
                        <div className="modal-product-cats">
                            {productcategory.map((item, index) => {
                                return (
                                    <a
                                        id={index}
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
                    <div className="product-right">
                        {/*className="modal-body" bg-not white*/}
                        <div className="product-carousel">
                            {/*className="product-carousel"*/}
                            {loading ? (
                                <div className="d-flex justify-content-center">
                                    <div
                                        className="spinner-border"
                                        role="status"
                                    >
                                        <span className="visually-hidden"></span>
                                    </div>
                                </div>
                            ) : (
                                <Carousel
                                    productphotos={mediaUrls(post.media)}
                                />
                            )}
                            <div className="carousel-footer">
                                <hr />
                                <p>{post.description}</p>
                                <div className="social-buttons">
                                    <a
                                        class="btn-floating btn btn-tw"
                                        type="button"
                                        role="button"
                                        title="Share on twitter"
                                        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com"
                                        rel="noopener"
                                    >
                                        <i class="fab fa-2x fa-twitter"></i>
                                    </a>
                                    <a
                                        class="btn-floating btn btn-tw"
                                        type="button"
                                        role="button"
                                        title="Share on facebook"
                                        href="https://www.facebook.com/sharer.php?u="
                                        rel="noopener"
                                    >
                                        <i class="fab fa-2x fa-facebook-f"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {loading && comments.length ? (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden"></span>
                                </div>
                            </div>
                        ) : (
                            <div className="discussion-container">
                                <div className="discussion-header">
                                    <span className="discussion-text">
                                        DISCUSSION
                                    </span>
                                    <a
                                        className="discussion-link"
                                        href={
                                            productcategory
                                        } /*productcategory is disscussion will be renamed*/
                                    >
                                        FOLLOW DISCUSSION
                                    </a>
                                </div>
                                <div className="discussion">
                                    <div className="post-thread">
                                        <div className="comments-header">
                                            <div className="recommendation row">
                                                <p>
                                                    Would you recommend this
                                                    product?
                                                </p>
                                                <div className="yes-no-buttons">
                                                    <button className="yes-btn">
                                                        <i class="far fa-smile mr-1"></i>
                                                        Yes
                                                    </button>
                                                    <button className="no-btn">
                                                        <i class="far fa-frown mr-1"></i>
                                                        No
                                                    </button>
                                                </div>
                                                <div className="review">
                                                    <a href="#">
                                                        {post.reviews_count}{' '}
                                                        {''}
                                                        Reviews
                                                    </a>
                                                    {/* (post.reviews_count = 1 ? (
                                                            <a href="#">
                                                                {
                                                                    post.reviews_count
                                                                }
                                                                Review
                                                            </a>
                                                        ) : (
                                                            <a href="#">
                                                                {
                                                                    post.reviews_count
                                                                }
                                                                Reviews
                                                            </a>
                                                        )) */}
                                                </div>
                                            </div>
                                            <form className="comment-form">
                                                <div className="user-pp-div">
                                                    <img
                                                        className="user-pp rounded-circle"
                                                        src={placeholderImg}
                                                    />
                                                </div>
                                                <input
                                                    type="text"
                                                    className="comment-text-area"
                                                    placeholder="  What do you think of this product?"
                                                    aria-label="user-comment"
                                                ></input>
                                                <button
                                                    className="btn btn-primary btn-sm comment-container-button"
                                                    type="submit"
                                                >
                                                    Send
                                                </button>
                                            </form>
                                        </div>
                                        <div className="comments-container">
                                            {comments.map((item, index) => (
                                                <Comments
                                                    id={index}
                                                    comments={item}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="modal-side-div">
                        <div className="action-buttons">
                            <button
                                className="getit-button btn-sm"
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

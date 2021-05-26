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

const showDropdown = () => {
    document.getElementById('dropdown').classList.add('dropdown-displayed')
}
const hideDropdown = () => {
    document.getElementById('dropdown').classList.remove('dropdown-displayed')
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
    const [installLinks, setInstallLinks] = useState({})
    const alt = `Product ${id}`
    useEffect(() => {
        setLoading(true)
        Api(`/v1/posts/${id}`)
            .then((response) => {
                setPost(response.data.post)
                setComments(response.data.post.comments)
                setLoading(false)
                setInstallLinks(response.data.post.install_links)
            })
            .catch((e) => {
                setLoading(false)
                console.log(e)
            })
    }, [id])
    const visitPage = () => {
        window.location = post.redirect_url
        console.log(post.redirect_url)
    }

    console.log(installLinks)
    return (
        <Modal
            productvotes={productvotes}
            id={id}
            productimg={productimg}
            productname={productname}
            productdescription={productdescription}
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
                                        href={`https://www.producthunt.com/topics/${item
                                            .toLowerCase()
                                            .split(' ')
                                            .join('-')}`}
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
                                id="gitit-button-id"
                                className="getit-button btn-sm"
                                onClick={() =>
                                    installLinks.length === 1 && visitPage()
                                }
                                onMouseOver={() => showDropdown()}
                                onMouseOut={() => hideDropdown()}
                            >
                                GET IT
                                {installLinks.length > 1 && (
                                    <i class="fas fa-chevron-down ml-3"></i>
                                )}
                            </button>
                            <button className="upvote-button">
                                UPVOTE {productvotes}
                            </button>
                        </div>
                        <div
                            className="dropdown-hidden"
                            id="dropdown"
                            onMouseOver={() => showDropdown()}
                            onMouseOut={() => hideDropdown()}
                        >
                            {installLinks.length > 1
                                ? installLinks.map((item) => (
                                      <a
                                          className="dropdown-container"
                                          href={item.redirect_url}
                                      >
                                          <div className="dropdown-site-placeholder">
                                              {item.platform === null ? (
                                                  <i class="fas fa-compass fa-2x  ml-2"></i>
                                              ) : item.platform ===
                                                'android' ? (
                                                  <i class="fab fa-android fa-2x  ml-2"></i>
                                              ) : item.platform === 'ios' ? (
                                                  <i class="fab fa-apple fa-2x  ml-2"></i>
                                              ) : item.platform === 'chrome' ? (
                                                  <i class="fab fa-chrome fa-2x  ml-2"></i>
                                              ) : (
                                                  ''
                                              )}
                                          </div>
                                          <div className="dropdown-desc">
                                              <a
                                                  href={item.redirect_url}
                                                  className="dropdown-website-headline"
                                              >
                                                  {item.platform === null
                                                      ? 'Website'
                                                      : item.platform}
                                              </a>
                                              <p className="dropdown-website-subtext">
                                                  {item.website_name}
                                              </p>
                                          </div>
                                          <div className="dropdown-arrow">
                                              <i class="fas fa-chevron-right fa-2x ml-3"></i>
                                          </div>
                                      </a>
                                  ))
                                : console.log('istallLinks not here')}
                        </div>
                        <div className="rounded-images"></div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default ProductModal

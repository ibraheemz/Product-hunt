import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './Carousel'
function ProductModal({
    productvotes,
    id,
    productimg,
    productname,
    productdescription,
    categorylink,
    productcategory,
    commentsnum,
    productphotos,
    show,
    onHide,
}) {
    const alt = `Product ${id}`
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
            productphotos={productphotos}
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
                        <div className="modal-product-footer">
                            <button className="cat-button">
                                {productcategory}
                            </button>
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
                        <Carousel productphotos={productphotos} />
                    </div>
                    <div className="modal-side-div">
                        <div className="action-buttons">
                            <button className="getit-button">GET IT</button>
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

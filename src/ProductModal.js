import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from './Carousel'
function ProductModal(props) {
    const alt = `Product ${props.id}`
    return (
        <Modal
            {...props}
            dialogClassName="modal-73w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="modal-wrapper">
                <div className="modal-product-header">
                    <div className="modal-img-wrapper">
                        <img
                            className="modal-product-image"
                            src={props.ProductImg}
                            alt={alt}
                        ></img>
                    </div>
                    <div className="modal-product-descreption">
                        <h6 className="modal-product-name">
                            {props.ProductName}
                        </h6>
                        <p className="modal-product-breef">
                            {props.ProductDescription}
                        </p>
                        <div className="modal-product-footer">
                            <button className="cat-button">
                                {props.ProductCategory}
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
                        <Carousel {...props} />
                    </div>
                    <div className="modal-side-div">
                        <div className="action-buttons">
                            <button className="getit-button">GET IT</button>
                            <button className="upvote-button">
                                UPVOTE {props.ProductVotes}
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

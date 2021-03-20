import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
function ProductModal(props) {
    const alt = `Product ${props.id}`
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="modal-wrapper">
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
                                <button>{props.ProductCategory}</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-side-div">
                        <div>
                            <button className="getit-button">GET IT</button>
                            <button className="upvote-button">
                                UPVOTE {props.ProductVotes}
                            </button>
                        </div>
                        <div className="rounded-images"></div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center"></Modal.Footer>
        </Modal>
    )
}
export default ProductModal

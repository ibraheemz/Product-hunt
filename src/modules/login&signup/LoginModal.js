import Modal from 'react-bootstrap/Modal'
import logo from '../../assests/images/kitty.webp'
function LoginModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="text-center ml-4 mr-4 d-flex justify-content-center row">
                <img
                    className="login-image"
                    src={logo}
                    alt="login kitty logo"
                />
                <div className="mt-4">
                    <h1>LOG IN here</h1>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros.
                    </p>
                    <div className="d-flex justify-content-center justify-content-between">
                        <a
                            class="btn btn-primary btn-sm m-1 "
                            href="#"
                            role="button"
                        >
                            LOG IN WITH TWITTER
                        </a>
                        <a
                            class="btn btn-primary btn-sm m-1 "
                            href="#"
                            role="button"
                        >
                            LOG IN WITH FACEBOOK
                        </a>
                        <a
                            class="btn btn-primary btn-sm m-1 "
                            href="#"
                            role="button"
                        >
                            LOG IN WITH GOOGLE
                        </a>
                        <a
                            class="btn btn-primary btn-sm m-1 "
                            href="#"
                            role="button"
                        >
                            LOG IN WITH ANGELLIST
                        </a>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <p className="login-footer">
                    We'll never post to any of your accounts without your
                    permission.
                </p>
            </Modal.Footer>
        </Modal>
    )
}
export default LoginModal

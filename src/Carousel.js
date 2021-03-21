import { useState } from 'react'
const Carousel = (props) => {
    const [photos] = useState(props.ProductPhotos)
    const [active, setActive] = useState(0)
    return (
        <div className="carousel">
            <img src={photos[active]} alt="product thumbnail" />
            <div className="carousel-smaller">
                {photos.map((photo, index) => (
                    <img
                        key={photo}
                        onClick={(e) => setActive(+e.target.dataset.index)}
                        data-index={index}
                        src={photo}
                        alt={'product'}
                        className={index === active ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    )
}
export default Carousel

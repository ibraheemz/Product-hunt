import { useState } from 'react'
const Carousel = ({ productphotos }) => {
    const [media] = useState(productphotos)
    const [active, setActive] = useState(0)
    const [videoLink, setVideoLink] = useState('')
    return (
        <div className="carousel">
            {media[active].includes('youtube') ? (
                (console.log('youtube'),
                (
                    <iframe
                        title="product-video"
                        width="500"
                        height="300"
                        source={media[active]}
                    ></iframe>
                ))
            ) : (
                <img src={media[active]} alt="product thumbnail" />
            )}
            <div className="carousel-smaller row">
                {media.map((item, index) => (
                    <img
                        key={index}
                        onClick={(e) => setActive(+e.target.dataset.index)}
                        data-index={index}
                        src={item}
                        alt={'product'}
                        className={index === active ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    )
}
export default Carousel

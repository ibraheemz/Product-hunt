import { useState } from 'react'
const Carousel = ({ productphotos }) => {
    const [media] = useState(productphotos)
    const [active, setActive] = useState(0)
    return (
        <div className="carousel">
            {media[active].hasOwnProperty('video_url') ? (
                <iframe
                    title="Embedded youtube"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    src={media[active].video_url
                        .replace('watch?v=', 'embed/')
                        .replace('&feature=youtu.be', '')}
                ></iframe>
            ) : (
                <img src={media[active].img_url} alt="product thumbnail" />
            )}
            <div className="carousel-smaller ">
                {media.map((item, index) =>
                    typeof item.hasOwnProperty('video_url') ? (
                        <img
                            key={index}
                            onClick={(e) => setActive(+e.target.dataset.index)}
                            data-index={index}
                            src={item.img_url}
                            alt={'product'}
                            className={index === active ? 'active' : ''}
                        />
                    ) : (
                        <img
                            key={index}
                            onClick={(e) => setActive(+e.target.dataset.index)}
                            data-index={index}
                            src={item}
                            alt={'product'}
                            className={index === active ? 'active' : ''}
                        />
                    )
                )}
            </div>
        </div>
    )
}
export default Carousel

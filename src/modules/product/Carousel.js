import { useState } from 'react'
import $ from 'jquery'
const Carousel = ({ productphotos }) => {
    const [media] = useState(productphotos)
    const [active, setActive] = useState(0)
    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url.match(regExp)

        return match && match[2].length === 11 ? match[2] : null
    }
    let src = ''
    if (media[active].hasOwnProperty('video_url')) {
        getId(media[active].video_url)
        const videoId = getId(media[active].video_url)
        src = '//www.youtube.com/embed/' + videoId
    } else {
        src = media[active].img_url
    }

    return (
        <div className="carousel">
            {media[active].hasOwnProperty('video_url') ? (
                <iframe
                    title="Embedded youtube"
                    frameBorder="0"
                    allow="autoplay" //accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture
                    src={src}
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

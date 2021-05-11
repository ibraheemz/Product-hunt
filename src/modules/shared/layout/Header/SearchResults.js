import { useState, useEffect } from 'react'
import Api from '../../../../lib/Api'
import ProductModal from '../../../product/ProductModal'
import axios from 'axios'
const SearchResults = ({ value }) => {
    const [results, setResults] = useState([''])
    const [showModal, setShowModal] = useState(false)
    const [postId, setPostId] = useState(0)
    const [post, setPost] = useState({})

    let api = {
        url: `https://0h4smabbsg-dsn.algolia.net/1/indexes/Post_production?query=${value}`,
        method: 'GET',
        timeout: 0,
        headers: {
            'X-Algolia-API-Key': '9670d2d619b9d07859448d7628eea5f3',
            'X-Algolia-Application-Id': '0H4SMABBSG',
        },
    }
    useEffect(() => {
        value != '' &&
            axios(api)
                .then((response) => {
                    setResults(response.data.hits.slice(0, 5))
                    console.log(results)
                })
                .catch((err) => console.log(err))
    }, [value])
    useEffect(() => {
        let response = Api(`/v1/posts/${postId}`)
            .then(function (response) {
                setPost(response.data.post)
            })
            .catch((err) => console.log(err))
    }, [postId])

    // only query string
    return (
        <div className="search-result-container">
            <a href="#" className="results-section1">
                PRODUCTS
            </a>
            <ul className="result-list ">
                {value !== '' ? (
                    results.length > 1 ? (
                        results.map((item) => {
                            return (
                                <li
                                    className="result"
                                    key={item.id}
                                    onMouseDown={() => {
                                        setShowModal(true)
                                        setPostId(item.id)
                                    }}
                                >
                                    <div className="list-item-image-container">
                                        <img
                                            className="list-item-image"
                                            src={item.thumbnail.image_url}
                                            alt="result-thumbnail"
                                        />
                                    </div>
                                    <div className="list-item-desc">
                                        <span className="bold-name">
                                            {item.name}
                                        </span>{' '}
                                        <br />
                                        <span className="list-item-tagline">
                                            {item.tagline}
                                        </span>
                                    </div>
                                </li>
                            )
                        })
                    ) : (
                        console.log('results is not here')
                    )
                ) : (
                    <div></div>
                )}
            </ul>
            {showModal && (
                <ProductModal
                    productvotes={post.votes_count}
                    id={post.id}
                    productimg={post.thumbnail.image_url}
                    productname={post.name}
                    productdescription={post.tagline}
                    categorylink={post.discussion_url}
                    productlandingpage={post.redirect_url}
                    productcategory={post.topics.map((item) => item.name)}
                    commentsNum={post.comments_count}
                    show={showModal}
                    onHide={() => setShowModal(false)}
                />
            )}
        </div>
    )
}
export default SearchResults

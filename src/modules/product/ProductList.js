import Product from './index'
import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'

const ProductList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPosts, setCurrentPosts] = useState([])
    const [postId, setPostId] = useState('')
    const d = new Date().toString().split(' ').splice(1, 3).join(' ')
    // fetching posts from the API
    useEffect(() => {
        var config = {
            method: 'Get',
            url: 'https://api.producthunt.com/v1/posts',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer ah7jK8UqHEpefPjplVqHJgMZx7rv0xQR4-BklgmenQU',
            },
        }
        axios(config)
            .then(function (response) {
                setPosts(response.data.posts)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    useEffect(() => {
        setCurrentPosts(posts.splice(0, 12))
        posts.length > 0 && setLoading(false)
    }, [posts])

    return (
        <div className="container-fluid main-div">
            <div className="main-div-margin">
                <div className="time-span">
                    <span className="main-div ml-0 ">{d}</span>
                </div>
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
                ) : (
                    <div>
                        {currentPosts.map((item, index) => (
                            <div
                                className="today-product"
                                id={'a' + index}
                                key={index}
                            >
                                <Product
                                    productimg={item.thumbnail.image_url}
                                    productname={item.name}
                                    productdescription={item.tagline}
                                    productvotes={item.votes_count}
                                    commentsnum={item.comments_count}
                                    //productCategory={item.topics[0].name}
                                    categorylink={item.discussion_url}
                                    id={item.id}
                                    //ProductPhotos={product.ProductPhotos} no photos for the carousel
                                />
                            </div>
                        ))}
                        <div className="container-footer d-flex justify-content-center bg-white">
                            SHOW {posts.length - 12} MORE
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ProductList

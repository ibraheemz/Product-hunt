/* eslint-disable jsx-a11y/anchor-is-valid */
import Product from './index'
import { useState, useEffect } from 'react'
import axios from '../../lib/Api'
import React from 'react'
import $ from 'jquery'

const ProductList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios('/v1/posts?page=1&per_page=30')
            .then(function (response) {
                setPosts(response.data.posts)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    useEffect(() => {
        setLoading(false)
    }, [posts])

    $(function () {
        $('.today-product').slice(0, 12).show()
        $('#loadMore').on('click', function (e) {
            e.preventDefault()
            $('.today-product:hidden').slice(0, 10).show()

            $('#loadMore').hide()
        })
    })
    return (
        <div className="container-fluid main-div">
            <div className="main-div-margin">
                <div className="time-span">
                    <span className="main-div ml-0 ">Today</span>
                </div>
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
                ) : (
                    <div>
                        {posts.map((item, index) => (
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
                                    productcategory={item.topics.map(
                                        (item) => item.name
                                    )}
                                    categorylink={item.discussion_url}
                                    id={item.id}
                                    //ProductPhotos={product.ProductPhotos} no photos for the carousel
                                />
                            </div>
                        ))}
                        <a
                            href="#"
                            id="loadMore"
                            className="container-footer bg-white"
                        >
                            SHOW {posts.length - 12} MORE
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ProductList

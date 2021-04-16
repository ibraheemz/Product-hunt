/* eslint-disable jsx-a11y/anchor-is-valid */
import Product from './index'
import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import $ from 'jquery'

const ProductList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    // const d = new Date().toString().split(' ').splice(1, 3).join(' ')
    let date = new Date()
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    const yyyy = date.getFullYear()
    if (dd < 10) {
        dd = `0${dd}`
    }

    if (mm < 10) {
        mm = `0${mm}`
    }
    const today = `${yyyy}-${mm}-${dd}`
    // fetching posts from the API
    useEffect(() => {
        var config = {
            method: 'Get',
            url: `https://api.producthunt.com/v1/posts?page=1&per_page=30`,
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
        // setPerPage(posts.slice(0, 12))
        setLoading(false)
    }, [posts])

    $(function () {
        $('.today-product').slice(0, 12).show()
        $('#loadMore').on('click', function (e) {
            e.preventDefault()
            $('.today-product:hidden').slice(0, 10).show()

            $('#loadMore').hide()

            // $("#loadMore").text('Load only the first 4');
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

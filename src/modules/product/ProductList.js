/* eslint-disable jsx-a11y/anchor-is-valid */
import Product from './index'
import { useState, useEffect } from 'react'
import Api from '../../lib/Api'
import React from 'react'
import $ from 'jquery'

const ProductList = ({ day, page, month }) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [dayName, setDayName] = useState('Today')
    // const d = new Date()

    var weekday = [
        'sunday',
        'monday',
        'tuseday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ]

    const abortCont = new AbortController()
    const getPosts = () => {
        Api(`/v1/posts?day=2021-${month}-${day}`, {
            signal: abortCont.signal,
        })
            .then(function (response) {
                setPosts([...posts, ...response.data.posts])
            })
            .catch(function (error) {
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    console.log(error.message)
                }
            })
    }
    useEffect(() => {
        getPosts()
        day === undefined && console.log('day is undefined', dayName)
        setDayName(weekday[new Date(`${month}/${day}/2021`).getDay()])
        return () => abortCont.abort()
    }, [day])
    useEffect(() => {
        setLoading(false)
    }, [posts])
    $(function () {
        $('#loadMore').on('click', function (e) {
            e.preventDefault()
            $('.today-product:hidden').show()
            $('#loadMore').hide()
        })
    })
    return (
        <div className="container-fluid main-div">
            <div className="main-div-margin">
                <div className="time-span">
                    <span className="main-div ml-0 ">{dayName}</span>
                </div>
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
                ) : (
                    <div>
                        {posts.map((item, index) =>
                            index <= 12 ? (
                                <div
                                    className="today-product2"
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
                                    />
                                </div>
                            ) : (
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
                                    />
                                </div>
                            )
                        )}
                        <button
                            id="loadMore"
                            className="container-footer bg-white"
                        >
                            SHOW {posts.length - 12} MORE
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ProductList

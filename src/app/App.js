import Header from '../modules/shared/layout/Header/index'
import ProductList from '../modules/product/ProductList.js'
import SideDive from '../modules/shared/layout/SideDiv'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import React from 'react'
const App = () => {
    const d = new Date()
    const [day, setDay] = useState([d.getDate() - 1])
    const [page, setPage] = useState([1])
    const [dayAndPage, setDayAndPage] = useState([
        { day: day[0], page: page[0] },
    ])

    // let scrolled = Math.round(window.scrollY)

    window.onscroll = function (ev) {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            // you're at the bottom of the page
            console.log('Bottom of page')
            setDay([...day, day[day.length - 1] - 1])
            setPage([...page, page[page.length - 1] + 1])
            console.log('i set day here')
        }
    }
    useEffect(() => {
        setDayAndPage([
            ...dayAndPage,
            {
                day: day[day.length - 1],
                page: page[page.length - 1],
            },
            console.log(dayAndPage, 'useEffect here'),
        ])
        dayAndPage[0] === dayAndPage[1] && setDayAndPage(dayAndPage.shift())
        console.log(dayAndPage)
        return console.log('cleanUp')
    }, [day])
    // const scrollToEnd = () => {
    //     setPage(page + 1)
    //     setDay(day - 1)
    // }
    // window.addEventListener('scroll', function () {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop ===
    //         document.documentElement.offsetHeight
    //     ) {
    //         console.log(
    //             window.innerHeight,
    //             document.documentElement.scrollTop,
    //             document.documentElement.offsetHeight
    //         )
    //         scrollToEnd()
    //     }
    // })

    // const handleScroll = (e) => {
    //     const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
    //     if (scrollHeight - scrollTop === clientHeight) {
    //         console.log(scrollHeight)
    //         setPage((prev) => prev + 1)
    //         setDay((prev) => prev - 1)
    //     }
    // }
    return (
        <div className="App bg-light">
            <Header />
            <div className="content">
                <div className="left-container-sizing" id="someId">
                    {dayAndPage.map((item) =>
                        item === undefined ? (
                            console.log('item is undefined')
                        ) : (
                            <ProductList
                                day={item.day}
                                page={item.page}
                                key={item.page}
                            />
                        )
                    )}
                </div>
                <div className="right-container-sizing">
                    <SideDive />
                </div>
            </div>
        </div>
    )
}

export default App

import Header from '../modules/shared/layout/Header/index'
import ProductList from '../modules/product/ProductList.js'
import SideDive from '../modules/shared/layout/SideDiv'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import React from 'react'
const App = () => {
    const d = new Date()
    const [day, setDay] = useState([d.getDate()])
    const [month, setMonth] = useState(d.getMonth() + 1)
    const [page, setPage] = useState([1])
    const [dateAndPage, setDateAndPage] = useState([
        { day: day[0], page: page[0], month: month },
    ])

    // let scrolled = Math.round(window.scrollY)

    window.onscroll = function (ev) {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            // you're at the bottom of the page
            console.log('Bottom of page')
            if (day[day.length - 1] - 1 === 0) {
                setDay([...day, day[day.length - 1] - 1 + 30])
                setMonth(month - 1)
            } else {
                setDay([...day, day[day.length - 1] - 1])
            }
            setPage([...page, page[page.length - 1] + 1])
        }
    }
    useEffect(() => {
        setDateAndPage([
            ...dateAndPage,
            {
                day: day[day.length - 1],
                page: page[page.length - 1],
                month: month,
            },
            console.log(dateAndPage, 'useEffect here'),
        ])
        console.log(dateAndPage)
        return console.log('cleanUp')
    }, [page])

    return (
        <div className="App bg-light">
            <Header />
            <div className="content">
                <div className="left-container-sizing" id="someId">
                    {dateAndPage.map((item) =>
                        item === undefined ? (
                            console.log('item is undefined')
                        ) : (
                            <ProductList
                                day={item.day}
                                page={item.page}
                                month={item.month}
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

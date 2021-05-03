import { useState, useEffect } from 'react'
// import axios from '../../../../lib/Api'
import algoliasearch from 'algoliasearch/lite'
const SearchResults = ({ value }) => {
    const [results, setResults] = useState([])
    const client = algoliasearch(
        '0H4SMABBSG',
        '9670d2d619b9d07859448d7628eea5f3'
    )
    const index = client.initIndex('Post_production')
    useEffect(() => {
        index.search({ value }).then(({ hits }) => {
            setResults(hits)
            console.log(hits)
        })
    }, [value])

    // only query string
    return (
        <div className="search-result">
            {results.map((item) => {
                return <div className="result">{item.name}</div>
            })}
        </div>
    )
}
export default SearchResults

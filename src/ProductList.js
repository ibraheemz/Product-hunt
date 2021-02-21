import Product from './Product'

const ProductList = () => {
    const d = new Date().toString().split(' ').splice(1, 3).join(' ')
    return (
        <div className="container-fluid w-50 main-div">
            <h1 className="main-div ml-0">{d}</h1>
            <div className="container-sm bg-dark rounded">
                <h1>
                    <Product n="1" />
                </h1>
                <h1>
                    <Product n="2" />
                </h1>
                <h1>
                    <Product n="3" />
                </h1>
                <h1>
                    <Product n="4" />
                </h1>
            </div>
        </div>
    )
}
export default ProductList

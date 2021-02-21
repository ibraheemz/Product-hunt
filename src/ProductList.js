import Product from './Product'

const ProductList = () => {
    const d = new Date().toString().split(' ').splice(1, 3).join(' ')
    return (
        <div className="container-fluid w-50 main-div">
            <h1 className="main-div ml-0">{d}</h1>
            <div className="container-sm bg-dark rounded">
                <div className="product">
                    <Product n="1" />
                </div>
                <div className="product">
                    <Product n="2" />
                </div>
                <div className="product">
                    <Product n="3" />
                </div>
                <div className="product">
                    <Product n="4" />
                </div>
            </div>
        </div>
    )
}
export default ProductList

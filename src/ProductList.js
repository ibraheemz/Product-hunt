import Product from './Product'
import ProductsData from './ProductsData'
import BatmanLogo from './Batman.png'

const ProductList = () => {
    const d = new Date().toString().split(' ').splice(1, 3).join(' ')
    return (
        <div className="container-fluid w-50 main-div">
            <h1 className="main-div ml-0">{d}</h1>
            <div className="container-sm bg-dark rounded">
                {ProductsData.map((product) => (
                    <div className="product">
                        <Product
                            ProductImg={BatmanLogo}
                            ProductName={product.ProductName}
                            ProductDescription={product.ProductDescription}
                            ProductVotes={product.ProductVotes}
                            CommentsNum={product.CommentsNum}
                            ProductCategory={product.ProductCategory}
                            CategoryLink={product.CategoryLink}
                            id={product.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductList

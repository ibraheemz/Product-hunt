import Product from './Product'
import ProductsData from './ProductsData'
import logoSample from './logoSample.webp'

const ProductList = () => {
    const d = new Date().toString().split(' ').splice(1, 3).join(' ')
    return (
        <div className="container-fluid main-div">
            <div className="main-div-margin">
                <div className="time-span">
                    <span className="main-div ml-0 ">{d}</span>
                </div>
                {ProductsData.map((product) => (
                    <div className="product">
                        <Product
                            ProductImg={logoSample}
                            ProductName={product.ProductName}
                            ProductDescription={product.ProductDescription}
                            ProductVotes={product.ProductVotes}
                            CommentsNum={product.CommentsNum}
                            ProductCategory={product.ProductCategory}
                            CategoryLink={product.CategoryLink}
                            id={product.id}
                            ProductPhotos={product.ProductPhotos}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductList

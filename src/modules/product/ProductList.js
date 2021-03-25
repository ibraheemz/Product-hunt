import Product from './index'
import ProductsData from '../../assests/ProductsData'

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
                            ProductImg={product.ProductImg}
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

import Header from '../modules/shared/layout/Header/index'
import ProductList from '../modules/product/ProductList.js'
import SideDive from '../modules/shared/layout/SideDiv'

const App = () => {
    return (
        <div className="App bg-light">
            <Header />
            <div className="content">
                <div className="left-container-sizing">
                    <ProductList />
                </div>
                <div className="right-container-sizing">
                    <SideDive />
                </div>
            </div>
        </div>
    )
}

export default App

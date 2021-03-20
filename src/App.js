import Header from './Header'
import ProductList from './ProductList'
import SideDive from './SideDiv'

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

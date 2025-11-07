// component->a js function which returns jsx
import "./App.css";
import productData from "./productData.json";

const Header = () => {
    return (<div id="header" style={{ display: "flex" }}>
        <img className="logo" alt="logo-here" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eSb4lGANjKmXnj-qOz6dX-tvglN7u-0STA&s"></img>
        <h2>Amazon</h2>
        <ul className="nav-items">
            <li>Home</li>
            <li>Cart</li>
            <li>About</li>
        </ul>
    </div>)
}
const Search = () => {
    return (
        <div id="search">
            <input type="text"></input>
            <button>search</button>
        </div>
    )
}
const Product = ({product}) => {
    return (<div id="product">
        <img className="product" alt="product-here" src={product.img}></img>
        <h3>{product.title}</h3>
    </div>)
}
const Body = () => {
    return (<div id="body">
        <Search />
        <div className="product-container">
            {productData.map((product)=><Product product={product}/>)}
        </div>
    </div>)
}
const Footer = () => {
    return (<div id="footer" style={{ backgroundColor: "black", color: "white" }}>
        <p>Copyright, 2025, ABES-CS-C</p>
    </div>)
}
const App = () => {

    return (<>
        <Header />
        <Body />
        <Footer />
    </>)
}
export default App;
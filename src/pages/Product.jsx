import "./Product.css";
import Products from "../components/Products/Products";
import Instagram from "../components/Instagram/Instagram";

function Product() {
  return (
    
    
       <div className="productpage">
        

      
      
      
      <Products />
      <div className="product-heading">
        {/* <h1>OUR PRODUCTS</h1> */}
       
       <h2>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit libero eros faucibus. Aenean commodo ligula eget
    <br />
  dolor. Etiam rhoncus….Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
    venenatis
    <br />
faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
   
  </h2>
        {/* <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit libero eros faucibus. Aenean commodo ligula eget dolor. Etiam rhoncus…. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.</h2> */}
      </div>
      <Instagram />
    </div>
    
  );
  
}

export default Product;
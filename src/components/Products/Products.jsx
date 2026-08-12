import "./Products.css";
import design from "../../assets/design.png"
import ProductCard from "../Reusable/ProductCard/ProductCard";

import productone from "../../assets/productone.jpg";
import producttwo from "../../assets/producttwo.jpg";
import productthree from "../../assets/productthree.jpg";
import productfour from "../../assets/productfour.jpg";
import productfive from "../../assets/productfive.jpg";
import productsix from "../../assets/productsix.jpg";
import productseven from "../../assets/productseven.jpg";
import producteight from "../../assets/producteight.jpg";



function Products() {
  return (
    <section className="products">

      <div className="heading-design">
         <img src={design} alt="Design" className="heading-design" />

        {/* <div className="heading-icon">
          <span></span>
          <p>❦</p>
          <span></span>
        </div> */}

        <h2>PRODUCT FOR SALE</h2>

      </div>
      <div className="product-list">

        <ProductCard
        id={1}
          image={productone}
          title="VINTAGE TELEPHONE"
          price="₹420.00"
        />

        <ProductCard
        id={2}
          image={producttwo}
          title="GOLDEN PLATE"
          price="₹350.00"
        />

        <ProductCard
        id={3}
          image={productthree}
          title="TABLE LAMP"
          price="₹280.00"
        />

        <ProductCard
        id={4}
          image={productfour}
          title="FRENCH WALL LAMP"
          price="₹180.00"
        />
          <ProductCard
          id={5}
          image={productfive}
          title="SABBATH LAMP"
          price="₹357.00"
        />
          <ProductCard
          id={6}
          image={productsix}
          title="SILVER WINE CUPS"
          price="₹268.00"
        />
          <ProductCard
         id={7} 
          image={productseven}
          title="CLOSEUP ANTIQUE JAR"
          price="₹635.00"
        />
          <ProductCard
          id={8}
          image={producteight}
          title="ANTIQUE ART OBJECT"
          price="₹360.00"
        />

      </div>

    </section>
    
  );
}

export default Products;
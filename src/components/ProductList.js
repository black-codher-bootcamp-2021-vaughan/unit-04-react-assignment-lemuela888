import react from "react";
import Product from "./Product";

const ProductList = (props) => {
  console.log("These are the product list props", props)
  const { Products } = props;
  console.log("This is the destructured products", Products)
  return Products.map((product) => {
    const {trackName, trackPrice, borderColour} = product
      // console.log(product.trackName)
      return <Product trackName={trackName} trackPrice={trackPrice} borderColour = {borderColour} />
  }); 
};

export default ProductList;
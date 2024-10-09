import React from "react";
import Product  from './product';

function Image() {
  return <img src={Product.imageUrl} alt={Product.name} />;
}

export default Image;
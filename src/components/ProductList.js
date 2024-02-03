import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {

  return (
    <div className="container mt-4">
    <div className="row row-col-1 row-cols-md-3 g-4">
      <div className="col">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={"https://picsum.photos/200"}
            class="card-img-top"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">My Product</h5>
            <p class="card-text">$19.99</p>
            <Link to={'cart'} class="btn btn-primary">
              Buy now
            </Link>
          </div>
        </div>
      </div>

      <div className="col">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={"https://picsum.photos/200"}
            class="card-img-top"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">My Product</h5>
            <p class="card-text">$19.99</p>
            <Link to={'cart'} class="btn btn-primary">
              Buy now
            </Link>
          </div>
        </div>
      </div>

      <div className="col">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={"https://picsum.photos/200"}
            class="card-img-top"
            alt="img"
          />
          <div class="card-body">
            <h5 class="card-title">My Product</h5>
            <p class="card-text">$19.99</p>
            <Link to={'cart'} class="btn btn-primary">
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductList;

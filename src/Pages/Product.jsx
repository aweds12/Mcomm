import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import { Context } from "../Context";
import { ProductShowCase } from "../Styles";

const Product = () => {
  const [thisProd, setThisProd] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  const { products, setCart } = useContext(Context);

  useEffect(() => {
    document.title = thisProd?.title ?? "...";

    setThisProd(products?.filter((x) => x.id === parseInt(id))[0]);
    //eslint-disable-next-line
  }, [products]);

  const AddToCart = () => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      setCart((x) => [...x, thisProd]);
    }
  };

  return (
    <ProductShowCase>
      <Header />
      <div className="body">
        <div className="imgbox">
          <img src={thisProd?.thumbnail} alt="" />
          <div className="thumbs">
            {thisProd &&
              thisProd.images &&
              thisProd.images.length > 0 &&
              thisProd.images.map((image, index) => (
                <img src={image} key={index} alt="" />
              ))}
          </div>
        </div>
        <div className="details">
          <p>
            Title: <b>{thisProd?.title}</b>
          </p>
          <p>
            Brand: <b>{thisProd?.brand}</b>
          </p>
          <p>
            Description: <b>{thisProd?.description}</b>
          </p>
          <p>
            Price: <b>${thisProd?.price}</b> (sale:{" "}
            <small style={{ color: "#f00" }}>
              {thisProd?.discountPercentage}%
            </small>
            )
          </p>
          <p>
            Stock: <b>{thisProd?.stock}</b>
          </p>
          <p>
            Rating: <b>{thisProd?.rating}</b>
          </p>
          <p>
            <small>
              Category: <b>{thisProd?.category}</b>
            </small>
          </p>

          <button onClick={AddToCart}>Add to shopping cart</button>
        </div>
      </div>
    </ProductShowCase>
  );
};

export default Product;

import Rating from "react-rating";
import { BsStarFill,BsStarHalf } from "react-icons/bs";
import "./Product.css";
const Product = ({ products }) => {
  const { _id, image, name, price, rating, brand_name, type } = products;
  const hendelUpdated = (id) => {
    console.log(id);
  };
  return (
    <div className="shadow-xl rounded-xl">
      <img src={image} alt="Shoes" className="rounded-t-xl h-[300px] w-full" />
      <div className="px-5 py-4">
        <h2 className="text-center text-2xl font-bold"> {name}</h2>
        <h2 className="text-3xl">Brand {brand_name}</h2>
        <div className="flex justify-between items-center text-xl py-2">
          <p>Type {type}</p>
          <p>
            Price : <span className="text-[#034192]">${price}</span>
          </p>
        </div>
        <div className="flex gap-6 text-xl items-center py-2">
          <p>Type {rating}</p>
          <Rating
            placeholderRating={rating}
            emptySymbol={< BsStarHalf/>}
            placeholderSymbol={<BsStarFill />}
            fullSymbol={<BsStarFill />}
            className="text-orange-600"
          />
        </div>
        <div className="flex gap-6 justify-between items-center mt-4">
          <div className=" w-[50%]">
            <button className="btn">
              <span> Details button</span>
            </button>
          </div>
          <div className=" w-[50%]">
            <button onClick={() => hendelUpdated(_id)} className="btn">
              <span>Update button</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

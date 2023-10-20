import Swal from "sweetalert2";
import "./AddProduct.css";
import { useState } from "react";
const AddProduct = () => {
  const [selectedBrandValue, setSelectedBrandValue] = useState('')
  const addProduct = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const image = target.image.value;
    const brand_name = selectedBrandValue;
    const type = target.type.value;
    const price = target.price.value;
    const rating = target.reting.value;
    const description = target.description.value;
    const products = {
      name,
      image,
      brand_name,
      type,
      price,
      rating,
      description,
    };
    fetch("http://localhost:5000/products", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Success add the product",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="py-10 w-11/12 mx-auto bg-base-300 h-[91vh] flex items-center">
      <div>
        <div>
          <h1 className="text-center text-xl md:text-3xl">Add Product</h1>
          <h1 className="text-center font-rancho  text-4xl py-2">
            Technology Brands Innovative Products and Solutions
          </h1>
          <p className="w-8/12 text-center mx-auto pb-6">
            Discover a world of cutting-edge technology with Technology Brands
            innovative products and solutions. From state-of-the-art gadgets to
            groundbreaking software, we bring you the future today. Stay ahead
            of the curve with the latest offerings from the industry is leading
            innovators.
          </p>
        </div>
        <div className="w-7/12 mx-auto ">
          <form onSubmit={addProduct}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  type="text"
                  name="name"
                />
                <label id="label-input">Name</label>
              </div>
              <div className="relative w-full">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  type="text"
                  name="image"
                />
                <label id="label-input">Image URL</label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="relative w-full">
                <select
                  id="input"
                  name="brand"
                  className="input-cal input-base w-full "
                  value={selectedBrandValue}
                  onChange={(e) => setSelectedBrandValue(e.target.value)}
                >
                  <option>Select Option Brand</option>
                  <option value="Google" >Google</option>
                  <option value="Nokia">Nokia</option>
                  <option value="Intel">Intel</option>
                  <option value="Sony">Sony</option>
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                </select>
                <label id="label-input">Brand Name</label>
              </div>
              <div className="relative w-full">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  type="text"
                  name="type"
                />
                <label id="label-input">Type </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative w-full">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  type="text"
                  name="price"
                />
                <label id="label-input">Price</label>
              </div>
              <div className="relative w-full">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  name="reting"
                  type="text"
                />
                <label id="label-input">Rating</label>
              </div>
            </div>
            <div className="relative pt-4">
              <textarea
                name="description"
                cols="10"
                rows="4"
                placeholder="Short description"
                className="input-cal p-4 outline-none input-base w-full"
              ></textarea>
            </div>
            <div  className="mt-4">
              <button  className="btn">
                <span> Add product</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

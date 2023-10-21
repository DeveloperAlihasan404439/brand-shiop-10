import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCrat = () => {
  const loaderProduct = useLoaderData();
  const { id } = useParams();
  const product = loaderProduct?.find((product) => product._id === id);

  const { name, image, brand_name, type, price, rating, description } = product;
  const [selectedBrandValue, setSelectedBrandValue] = useState(brand_name);
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
     fetch(`https://brand-shop-two.vercel.app/products/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      })
        .then((res) => res.json())
        .then(data =>{
          console.log(data)
          if(data.modifiedCount){
            e.target.reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Success Updated the product",
            showConfirmButton: false,
            timer: 1500,
          })
          }
        })
         
  };
  return (
    <div className="py-10 w-11/12 mx-auto md:h-[91vh] flex items-center">
      <div>
        <div>
          <h1 className="text-center text-xl md:text-3xl ">Updated Product</h1>
          <h1 className="text-center font-rancho text-xl  md:text-4xl py-2 ">
            Technology Brands Innovative Products and Solutions
          </h1>
          <p className="lg:w-8/12 text-center mx-auto pb-6 ">
            Discover a world of cutting-edge technology with Technology Brands
            innovative products and solutions. From state-of-the-art gadgets to
            groundbreaking software, we bring you the future today. Stay ahead
            of the curve with the latest offerings from the industry is leading
            innovators.
          </p>
        </div>
        <div className="lg:w-7/12 mx-auto ">
          <form onSubmit={addProduct}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative w-full">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  type="text"
                  name="name"
                  defaultValue={name}
                />
                <label id="label-input">Name</label>
              </div>
              <div className="relative w-full mb-4 md:mb-0">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  type="text"
                  name="image"
                  defaultValue={image}
                />
                <label id="label-input">Image URL</label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative w-full">
                <select
                  id="input"
                  name="brand"
                  className="input-cal input-base w-full "
                  defaultValue={brand_name}
                  onChange={(e) => setSelectedBrandValue(e.target.value)}
                >
                  <option value="Google">Google</option>
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
                  defaultValue={type}
                />
                <label id="label-input">Type </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative w-full mt-4 md:mt-0">
                <input
                  className="input-cal input-base w-full "
                  id="input"
                  placeholder=""
                  type="text"
                  name="price"
                  defaultValue={price}
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
                  defaultValue={rating}
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
                defaultValue={description}
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="btn">
                <span> Updated product</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCrat;

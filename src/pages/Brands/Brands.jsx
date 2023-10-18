import { useEffect, useState } from "react";
import BrandCrad from "../../companent/BrandCrad/BrandCrad";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="bg-base-300 py-6 md:py-10">
      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl text-center pb-4 font-rancho">Technology Trends for 2023 or The <br /> <span className="text-orange-500">Future of Technology...</span></h1>
        <p className="md:w-8/12 mx-auto text-center ">
          In 2023, the technology landscape will be shaped by several key
          trends. These include the rise of AI and automation, increased focus
          on cybersecurity, advancements in quantum computing, the proliferation
          of 5G and IoT, and sustainable tech solutions to address environmental
          challenges. The future promises transformative innovations across
          various industries.
        </p>
        <div className="pt-4 md:pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {brands?.map((brand) => (
            <BrandCrad key={brand._id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

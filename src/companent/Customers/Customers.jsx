import support from "../../assets/support.png";
const Customers = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h1 className="text-center text-2xl md:text-4xl font-rancho py-5 ">Technology Support for E-commerce Customers </h1>
      <div className="md:flex justify-between items-center">
        <div className="md:w-[50%]">
          <p className="text-center md:text-left pb-5 text-sm md:text-xl ">
            Technology Support for E-commerce Customers: In the digital era,
            online shopping has become an integral part of our lives. However,
            technical glitches and challenges can sometimes disrupt this
            experience. Thats where our specialized E-commerce Technology
            Support steps in.
          </p>
          <p className="text-center md:text-left text-sm md:text-xl">
            Our dedicated team is here to ensure your online shopping journey is
            smooth and hassle-free. We assist you with a wide range of technical
            issues, from payment problems to website navigation challenges. Our
            experts have an in-depth understanding of the e-commerce landscape,
            and they are committed to resolving issues promptly.
          </p>
        </div>
        <div className="md:w-[50%]">
          <img src={support} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Customers;

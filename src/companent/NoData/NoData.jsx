import nodata from "../../assets/3371471.jpg";
const NoData = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h1 className="md:w-8/12 mx-auto text-xl md:text-2xl text-center">
        Unfortunately, there are no products to show.
      </h1>
      <p className="pt-3 text-center md:w-9/12 mx-auto">
        In this section, you'll find a blank canvas awaiting your input. 'No
        Data' signifies an absence of information, allowing you to add,
        customize, or populate content as needed for your specific requirements.
      </p>
      <div className="w-full flex justify-center">
        <img src={nodata} alt="" className="h-[600px]" />
      </div>
    </div>
  );
};

export default NoData;

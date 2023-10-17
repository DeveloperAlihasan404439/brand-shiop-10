const BrandCrad = ({ brand }) => {
    const {brandURL,brandName} = brand;
  console.log(brand);
  return (
    <div className="card bg-base-100 shadow-xl">
        <img
          src={brandURL}
          alt="Shoes"
          className="rounded-t-xl h-[300px]"
        />
      <div className="card-body">
        <h2 className="card-title">{brandName}</h2>
      </div>
    </div>
  );
};

export default BrandCrad;

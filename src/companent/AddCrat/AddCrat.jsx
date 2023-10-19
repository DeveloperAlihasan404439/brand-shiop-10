import './AddCrat.css'
const AddCrat = ({ myCrat,hendelDelete }) => {
  const {_id, image, name, price } = myCrat;
  return (
    <div>
      <div className="card bg-base-200 shadow-xl p-4">
        <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <h1 className="text-xl">Price : ${price}</h1>
          <div className=" mt-4">
            <button onClick={() => hendelDelete(_id)} className="btn">
              <span>Delete button</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCrat;

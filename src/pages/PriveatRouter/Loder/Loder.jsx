import "./Loder.css";
const Loder = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loder;

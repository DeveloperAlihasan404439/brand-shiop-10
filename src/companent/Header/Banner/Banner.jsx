const Banner = () => {
  return (
    <div className="pt-6 md:pt-0">
      <div
        className="h-[70vh] "
        style={{
          backgroundImage: "url('https://i.ibb.co/vVPYDmc/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#0932605b] h-full flex items-center">
          <div className="w-11/12 mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-white drop-shadow-2xl pb-3">
            Your Source for Web and Technology Insights
            </h1>
            <p className="text-white text-xl md:w-9/12 mx-auto text-center">
            WebTech our tech hub for insights, trends, and web development. Stay updated on the latest in the world of technology and innovation. Your source for digital enlightenment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

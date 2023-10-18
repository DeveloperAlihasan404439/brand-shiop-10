import { useLoaderData } from "react-router-dom";
import Product from "../../companent/Product/Product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Products.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Products = () => {
  const productsData = useLoaderData();

  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[80vh] w-full mx-10"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img
                src="https://i.ibb.co/N1fZ5D5/appy-2.jpg"
                alt=""
                className="h-full w-full"
              />
              <div className=" absolute bottom-0 left-0 text-center flex justify-end h-full w-full">
                <div className="">
                <img src="https://i.ibb.co/NYJc7sn/offer3.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-full">
          <img
              src="https://i.ibb.co/FXqbzdS/intel.jpg"
              alt=""
              className="h-full w-full"
            />
              <div className=" absolute bottom-0 left-0 ">
                <div>
                <img src="https://i.ibb.co/x5SykxZ/offer2.png" alt="" />
                </div>
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-full">
          <img
              src="https://i.ibb.co/87JQHwG/google.jpg"
              alt=""
              className="h-full w-full"
            /><img
            src="https://i.ibb.co/87JQHwG/google.jpg"
            alt=""
            className="h-full w-full"
          />
              <div className=" absolute top-0 left-0 flex items-start justify-center h-[100%] w-full">
                <img src="https://i.ibb.co/VM70n3c/offer1.png" alt="" />
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-full">
          <img
              src="https://i.ibb.co/RSJ8nWS/svmsung.jpg"
              alt=""
              className="h-full w-full"
            />
              <div className=" absolute top-0 left-0 flex items-start justify-start h-[100%] w-full">
                <img src="https://i.ibb.co/NYJc7sn/offer3.png" alt="" />
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-full">
          <img
              src="https://i.ibb.co/3MC2FbN/sony.jpg"
              alt=""
              className="h-full w-full"
            />
              <div className=" absolute top-0 left-0 flex items-center justify-end h-[100%] w-full">
                <img src="https://i.ibb.co/zSQGRRS/offer5.png" alt="" />
              </div>
            </div>
           
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative h-full">
          <img
              src="https://i.ibb.co/BsrLPvD/apply.png"
              alt=""
              className="h-full w-full"
            />
              <div className=" absolute top-0 left-0 flex items-center justify-end h-[100%] w-full">
                <img src="https://i.ibb.co/k8PP5Zm/offer4.png" alt="" />
              </div>
            </div>
            
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-xl font-rancho md:text-3xl pt-5 md:pt-10 text-center pb-4">Upgrade Your Tech Arsenal with Our Products</h1>
        <p className="text-lg md:text-xl w-7/12 mx-auto text-center">iscover the latest in tech innovation at our Products Page. Explore cutting-edge gadgets, from smartphones to smart home devices. Elevate your digital lifestyle today!"</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
          {productsData?.map((products) => (
            <Product key={products._id} products={products} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

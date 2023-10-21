import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "./Galary.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import video from '../../assets/booking.mp4'
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
const Gallary = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="w-11/12 mx-auto py-10 ">
      <h1 className="text-center text-3xl font-rancho">Prodacts Gallery </h1>
      <p className="md:w-8/12 mx-auto text-center text-xl font-medium py-5">
        Webtech Technologies: A Glimpse into the Future of Online
        Retail. Explore AI, AR, VR, Blockchain, and More for Seamless Shopping
        Experiences
      </p>
      <div className=" md:flex gap-4 justify-between">
        <div className="md:[50%]">
        <Video autoPlay loop>
          <source src={video} type="video/webm" />
        </Video>
        </div>
        <div className="md:w-[50%]">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a href="https://i.ibb.co/M5QPXKP/nokia-1.jpg">
              <img
                alt="Nokia"
                src="https://i.ibb.co/M5QPXKP/nokia-1.jpg"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
            <a href="https://i.ibb.co/Bz4Vwnf/nokia-4.webp">
              <img
                alt="Apple"
                src="https://i.ibb.co/Bz4Vwnf/nokia-4.webp"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
            <a href="https://i.ibb.co/jL7Fjbg/nokia-3.webp">
              <img
                alt="Google"
                src="https://i.ibb.co/jL7Fjbg/nokia-3.webp"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
            <a href="https://i.ibb.co/4m2qq0W/nokia-2.webp">
              <img
                alt="Sony"
                src="https://i.ibb.co/4m2qq0W/nokia-2.webp"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
            <a href="https://i.ibb.co/MMZzk77/apply-1.jpg">
              <img
                alt="Samsung"
                src="https://i.ibb.co/MMZzk77/apply-1.jpg"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
            <a href="https://i.ibb.co/N1fZ5D5/appy-2.jpg">
              <img
                alt="Intel"
                src="https://i.ibb.co/N1fZ5D5/appy-2.jpg"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
            <a href="https://i.ibb.co/w6m3Xg2/svmsung-1.jpg">
              <img
                alt="Intel"
                src="https://i.ibb.co/w6m3Xg2/svmsung-1.jpg"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
            <a href="https://i.ibb.co/zJwbfDF/sony-headphone.jpg">
              <img
                alt="Intel"
                src="https://i.ibb.co/zJwbfDF/sony-headphone.jpg"
                className="w-[300px] h-[300px] m-2 rounded-xl"
              />
            </a>
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default Gallary;

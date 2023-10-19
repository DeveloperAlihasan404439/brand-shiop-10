import { FaFacebookF,FaGithub,FaGoogle,FaTwitter,FaInstagram } from 'react-icons/fa6';
import "./Contact.css";
const Contact = () => {
  return (
    <div
      className="my-10 py-20"
      style={{ backgroundImage: "url('https://i.ibb.co/ncrXDYP/bg-1.jpg')" }}
    >
      <div className="w-11/12 mx-auto md:flex gap-4 justify-between">
        <div className="text-white md:w-[50%] ">
          <h1 className="text-2xl text-center md:text-4xl md:text-left font-bold drop-shadow-2xl">
            Contact Us for Webtech Website <br />{" "}
            <span className="text-orange-600">Support and Assistance..</span>
          </h1>
          <p className="pt-5 text-center md:text-left">
            Feel free to reach out to us for comprehensive support and
            assistance regarding the Webtech website. Our responsive team is
            ready to address your inquiries, provide guidance, and resolve any
            issues, ensuring your experience with us is seamless and productive.
          </p>
          <div className="w-[90%] md:w-[60%] mx-auto mt-16 pb-5 border-2 border-white rounded-lg">
            <ul className="wrapper">
              <li className="icon google">
                <span className="tooltip">Google</span>
                <span>
                  <FaGoogle/>
                </span>
              </li>
              <li className="icon github">
                <span className="tooltip">Github</span>
                <span>
                  <FaGithub/>
                </span>
              </li>
              <li className="icon facebook">
                <span className="tooltip">Facebook</span>
                <span>
                <FaFacebookF/>
                </span>
              </li>
              <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <span>
                  <FaTwitter/>
                </span>
              </li>
              <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span>
                  <FaInstagram/>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <form className="form w-full md:w-[50%] border-4 mt-5 md:mt-0 border-gradient-to-r from-red-600 to-orange-500">
          <h1 className="text-white text-2xl">Fill The Contact Form</h1>
          <div className="md:flex gap-5 w-full">
            <input className="input" type="text" placeholder="Your Name" />
            <input className="input" type="text" placeholder="Phon" />
          </div>
          <div className="md:flex gap-5 w-full">
            <input className="input" type="email" placeholder="Email Address" />
            <input className="input" type="text" placeholder="Website URL" />
          </div>
          <textarea className="textarea" placeholder="Enter message"></textarea>
          <center>
            <button className="button">Submit</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Contact;

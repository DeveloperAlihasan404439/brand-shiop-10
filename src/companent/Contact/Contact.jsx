import { FaFacebookF,FaGithub,FaGoogle,FaTwitter,FaInstagram } from 'react-icons/fa6';
import "./Contact.css";
import Swal from 'sweetalert2';
const Contact = () => {
  const hendelContact = e =>{
    e.preventDefault()
    const target = e.target;
    const name = target.name.value;
    const phone = target.phone.value;
    const email = target.email.value;
    const website_url = target.website_url.value;
    const message = target.message.value;
    const contact = {name, phone, email, website_url, message}
    console.log(contact);
    fetch('https://brand-shop-two.vercel.app/contact',{
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        e.target.reset()
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Contact message in the successfull',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
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
        <form onSubmit={hendelContact} className="form w-full md:w-[50%] border-4 mt-5 md:mt-0 border-gradient-to-r from-red-600 to-orange-500">
          <h1 className="text-white text-2xl">Fill The Contact Form</h1>
          <div className="md:flex gap-5 w-full">
            <input className="input" type="text" name='name' placeholder="Your Name" required/>
            <input className="input" type="text" name='phone' placeholder="Phon" required/>
          </div>
          <div className="md:flex gap-5 w-full">
            <input className="input" type="email" name='email' placeholder="Email Address" required/>
            <input className="input" type="text" name='website_url' placeholder="Website URL" required/>
          </div>
          <textarea className="textarea" name='message' placeholder="Enter message" required></textarea>
          <center>
            <button className="button">Submit</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Contact;

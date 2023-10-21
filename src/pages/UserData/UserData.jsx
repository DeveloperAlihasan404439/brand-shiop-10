import { useLoaderData } from "react-router-dom";
import technology from "../../assets/technology .jpg";
const UserData = () => {
  const userLoder = useLoaderData();
  console.log(userLoder);
  return (
    <div>
      <div className="h-[70vh] relative">
        <img src={technology} alt="" className="h-full w-full" />
        <div className="md:w-6/12 absolute top-0 right-0 flex justify-center md:justify-end px-5 md:px-0 pt-5 md:pt-0 items-center h-[100%]">
          <div className="md:pr-10 ">
            <h1 className="text-center text-xl md:text-3xl font-rancho pb-5">
              Tech Revolution: Explore Cutting-Edge Gadgets. Stay Connected and
              Entertained with Our Latest Innovations.
            </h1>
            <p className="text-center ">
              Discover our latest technology products designed to enhance your
              daily life. From smart home devices to high-performance gadgets,
              our innovations keep you connected, entertained, and efficient in
              today is digital world. Upgrade your lifestyle with our tech
              solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto my-10">
      <table className="w-full">
        <tr className="">
          <th className="pl-2 text-left py-2 w-[15%]">Name</th>
          <th className="pl-2 text-left py-2 w-[20%]">phone</th>
          <th className="pl-2 text-left py-2 w-[25%]">Email</th>
          <th className="pl-2 text-left py-2 ">Message</th>
        </tr>
        {
            userLoder?.map(data => <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.message}</td>
            </tr>)
        }
      </table>
      </div>
    </div>
  );
};

export default UserData;

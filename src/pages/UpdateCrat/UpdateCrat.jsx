import { useLoaderData, useParams } from "react-router-dom";

const UpdateCrat = () => {
    const loaderProduct = useLoaderData()
    const {id} = useParams()
    const product = loaderProduct.find(product => product._id === id)
    console.log(id, product);
    return (
        <div>
            helkdfjgkgfhfg
        </div>
    );
};

export default UpdateCrat;
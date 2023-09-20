import { useLoaderData } from "react-router-dom"
import Productsall from "./Productsall";


export default function Product() {
    const datas = useLoaderData();
    const maindata = datas.products;
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 w-11-12 mx-auto my-20 ">
            {
                maindata.map(data => <Productsall key={data.id} data={data}></Productsall>

                )
            }
        </div>
    )
}

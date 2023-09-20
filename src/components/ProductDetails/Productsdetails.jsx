import { NavLink, useLoaderData } from "react-router-dom"


export default function Productsdetails() {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <div className="md:w-3/12 mx-auto mt-10 border py-2">
                <img className="w-38 mx-auto mb-2 h-48" src={details.images[0]} alt="" />
                <h3 className="text-2xl ">{details.brand}</h3>
                <h2 className="text-xl mt-2">${details.price}</h2>
            </div>
            <NavLink className='py-2 mt-4 px-4 bg-blue-600 block w-32 mx-auto text-white font-semibold' to='/product'>Go Home </NavLink>
        </div>
    )
}

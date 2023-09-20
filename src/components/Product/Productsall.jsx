import { NavLink } from "react-router-dom";

 
export default function Productsall({data}) {
    const {images, title, price , brand ,rating} = data;
  return (
    <div className="border-2 p-2">
        <img className="h-60 w-full" src={images[0]} alt="" />
        <h2>{title}</h2>
        <h3>${price}</h3>
        <ul className="flex gap-1 justify-center my-2 text-orange-400">
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star-half'></i></li> 
            <li className="text-black">{rating}</li>
        </ul>
        <br />
        <NavLink to={`${data.id}`} className="bg-blue-600 text-white my-2 px-6 py-2 rounded ">Details</NavLink>
    </div>
  )
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardPic1 from '../../../assets/1.png'
import cardPic2 from '../../../assets/2.png'
import cardPic3 from '../../../assets/3.png'
import moment from 'moment';


const LeftSideNav = () => {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="space-y-5 px-4">
            <h2 className="text-2xl">All Caterogy</h2>
            {
                categories.map(category=> <Link className="block ml-3" 
                to={`/category/${category.id}`}
                key={category.id}>
                    {category.name}</Link>)
            }  
            {/* card static */}
            <div className=" shadow-xl p-2 ">
  <figure> <img src={cardPic1} alt="" /></figure>
  <div className=" space-y-3 p-2 font-semibold">
    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
    <div className=" flex justify-between  ">
      <div className="font-normal ">Sports</div> 
      <div className="font-thin  text-gray-400"> {moment().format(" MMMM D, YYYY")} </div>
    </div>
  </div>
            </div>
            <div className=" shadow-xl p-2">
  <figure><img src={cardPic2} alt="" /></figure>
  <div className=" space-y-3 p-2 font-semibold">
    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
    <div className=" flex justify-between  ">
      <div className="font-normal ">Sports</div> 
      <div className="font-thin  text-gray-400"> {moment().format(" MMMM D, YYYY")} </div>
    </div>
  </div>
            </div>
            <div className=" shadow-xl p-2">
  <figure><img src={cardPic3} alt="" /></figure>
  <div className=" space-y-3 p-2 font-semibold">
    <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
    <div className=" flex justify-between  ">
      <div className="font-normal ">Sports</div> 
      <div className="font-thin text-gray-400"> {moment().format(" MMMM D, YYYY")} </div>
    </div>
  </div>
            </div>

        </div>
    );
};

export default LeftSideNav;
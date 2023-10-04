import { FaGoogle,FaGithub, FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
           <div className='p-4 space-y-3 mb-3'>
           <h2 className="text-2xl font-bold">Login with</h2>
           <button className="btn btn-outline w-full font-normal ">
            <FaGoogle ></FaGoogle>
              Login with Google
          </button>
           <button className="btn btn-outline w-full font-normal ">
            <FaGithub ></FaGithub>
              Login with Github
          </button>
            </div>
           <div className='p-4  mb-3'>
           <h2 className="text-2xl font-bold">Find Us On</h2>
               <a href="" className='p-3 flex items-center rounded-t-lg border' >
               <FaFacebookF className='mr-3'></FaFacebookF>
               <span> Facebook</span>
               </a>
               <a href="" className='p-3 flex items-center rounded-t-lg border' >
               <FaTwitter className='mr-3'></FaTwitter>
               <span> Twitter</span>
               </a>
               <a href="" className='p-3 flex items-center rounded-b-lg border' >
               <FaInstagramSquare className='mr-3'></FaInstagramSquare>
               <span> Instagram</span>
               </a>
            </div> 
     {/* q zone */} 

     <div className='p-4  mb-3'>
           <h2 className="text-2xl font-bold">Q Zone</h2>
             <img src={qZone1} alt="" />
             <img src={qZone2} alt="" />
             <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;
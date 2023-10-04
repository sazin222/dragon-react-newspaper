import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {Singin} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    const navigate= useNavigate()
    const handelLogin = e =>{
        e.preventDefault()
       
        const form = new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')
        console.log(form.get('password')); 
       Singin(email,password)
       .then(result=>{
          console.log(result.user);
          // navigate after login 
          navigate(location?.state ? location.state : '/')
       })
       .catch(error=>{
        console.error(error)
       })
    }
    return (
        <div>
            <Navber></Navber>
           
           <div>
           <h2 className="my-4 text-center text-2xl">Login your account</h2>
             <form onSubmit={handelLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
             <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
             </form>
             <p className="text-center my-4">Do not Have An Account ? <Link to={"/register"} className="text-red-400">Register</Link></p>
           </div>
          
         </div>

    );
};

export default Login;
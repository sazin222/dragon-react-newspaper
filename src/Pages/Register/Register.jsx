import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const {createUSer} = useContext(AuthContext)
    
    const handelRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name= form.get('name')
        const photo= form.get('photo')
        const email= form.get('email')
        const password= form.get('password')
        console.log(name,photo,email,password);

       createUSer(email,password)
       .then(result=>{
        console.log(result.user);
       })
       .catch(error=>{
        console.error(error)
       })


     }





    return (
        <div>
            <Navber></Navber>
          
            <div>
           <h2 className="my-4 text-center text-2xl">Register your account</h2>
             <form onSubmit={handelRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
             <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name="name" placeholder="Name" className="input input-bordered" required />
        </div> <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"  name="photo" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
             <p className="text-center my-4"> Already Have An Account ? <Link to={"/login"} className="text-red-400">Login</Link></p>
           </div>
        </div>
    );
};

export default Register;

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit, formState: {errors},} = useForm();
    const{signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate =  useNavigate();

    useEffect(()=>{
        if (isAuthenticated)navigate("/reports");
    },[isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });
    
    return (
        <div className="form-container bg-zinc-800 max-w-md  p-10 rounded-md">
            {
            registerErrors.map((errors, i)=>(
                <div className="bg-red-500 p-2 text-white" key={i}>
                    {errors}
                </div>
            ))
            }
            <form onSubmit={onSubmit}>
                <input
                    className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                    type="text" {...register("username", { required: true })}
                    autoComplete="username"
                    placeholder="username" 
                    />
                    {
                        errors.username && 
                        <p className="text-red-500">Username is required</p>
                    }
                <input
                    className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                    type="email"  {...register("email", { required: true })}
                    autoComplete="email"
                    placeholder="email" 
                    />
                    {
                        errors.email && 
                        <p className="text-red-500">Email is required</p>
                    }
                <input
                    className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                    type="password"  {...register("password", { required: true })}
                    autoComplete="current-password"
                    placeholder="password" 
                    />
                    {
                        errors.password && 
                        <p className="text-red-500">Password is required</p>
                    }
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage
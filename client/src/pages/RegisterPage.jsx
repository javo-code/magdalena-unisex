import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values);
//                    console.log(res)
    });
    
    return (
        <div className="form-container bg-zinc-800 max-w-md  p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input
                    className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                    type="text" {...register("username", { required: true })}
                    autoComplete="username"
                    placeholder="username" />
                <input
                    className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                    type="email"  {...register("email", { required: true })}
                    autoComplete="email"
                    placeholder="email" />
                <input
                    className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                    type="password"  {...register("password", { required: true })}
                    autoComplete="current-password"
                    placeholder="password" />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage
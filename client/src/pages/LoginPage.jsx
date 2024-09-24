import { useForm } from "react-hook-form";

function RegisterPage() {

    const { register, handleSubmit } = useForm();
    
    return (
        <form onSubmit={handleSubmit((values) => {
            console.log(values);
        })}
        >
            <input
                className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                type="email"  {...register("email", { required: true })}
                autoComplete="email"
                placeholder="email"
            />
            <input
                className="py-2 my-2 w-full bg-zinc-700 text-white px-4 rounded-md"
                type="password"  {...register("password", { required: true })}
                autoComplete="current-password"
                placeholder="pasword"
            />
            <button type="submit">
                Log in
            </button>
        </form>
    );
}

export default RegisterPage
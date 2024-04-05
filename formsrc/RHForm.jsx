import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("firstName"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: true,
            minLength: 3,
            maxLength: 10,
          })}
        />
        {errors.firstName && <p>First name is required.</p>}
        <input
          {...register("email", {
            required: true,
            maxLength: 20,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <p>Email is invalid.</p>}
        <input type="submit" />
      </form>
    </>
  );
}

export default App;

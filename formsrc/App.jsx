import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {

  const validationSchema = yup.object({
    firstName: yup.string().max(3).required("First name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("firstName"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        {errors.firstName && <p>First name is required.</p>}
        <input {...register("email")} />
        {errors.email && <p>Email is invalid.</p>}
        <input type="submit" />
      </form>
    </>
  );
}

export default App;

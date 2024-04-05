import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const App = () => {
  const validationSchema = yup.object({
    firstName: yup.string().max(3).required("First name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h1>App Component</h1>
      <Formik
        initialValues={{ firstName: "", email: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" /> <br />
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;

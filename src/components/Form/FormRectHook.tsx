import { FieldValues, useForm } from "react-hook-form";

const FormRectHook = () => {
  // first step
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSubmit = (data: FieldValues) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(handelSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">name filed is required.</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">name must be at least 3 characters</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true, minLength: 3 })}
            id="age"
            type="number"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default FormRectHook;

import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 1 step
const schema = z.object({
  name: z.string().min(3, { message: "must be at least 3 characters." }),
  age: z.number({ invalid_type_error: "Age fiele is required." }).min(18),
});

type FormData = z.infer<typeof schema>;

const FormRectHook = () => {
  // 2 step
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handelSubmit = (data: FieldValues) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(handelSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />

          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>

        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRectHook;

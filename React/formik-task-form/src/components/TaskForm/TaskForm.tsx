import { useFormik } from "formik";
import styles from "./TaskForm.module.css";
import * as Yup from "yup";

const initialValues = {
  title: "",
  description: "",
  assignee: "",
  dueDate: "",
};

const TaskForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .required("title is required")
          .max(20, "title length should be 20 or less"),
        description: Yup.string().required("description is required"),
        assignee: Yup.string().required("assignee is required"),
        dueDate: Yup.date()
          .typeError("dueDate required")
          .required("dueDate is required")
          .min(
            new Date(new Date().setHours(0, 0, 0, 0)),
            "Due date cannot be less than current date",
          ),
      }),
    });

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.formTitle}>Task Form</h1>
      <div className={styles.inputField}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.title && errors.title ? (
          <span className={styles.error}>{errors.title}</span>
        ) : null}
      </div>

      <div className={styles.inputField}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.description && errors.description ? (
          <span className={styles.error}>{errors.description}</span>
        ) : null}
      </div>

      <div className={styles.inputField}>
        <label htmlFor="assignee">Assignee</label>
        <input
          type="text"
          name="assignee"
          value={values.assignee}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.assignee && errors.assignee ? (
          <span className={styles.error}>{errors.assignee}</span>
        ) : null}
      </div>

      <div className={styles.inputField}>
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={values.dueDate.toString()}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.dueDate && errors.dueDate ? (
          <span className={styles.error}>{String(errors.dueDate)}</span>
        ) : null}
      </div>

      <button type="submit" className={styles.submitBtn}>
        Submit
      </button>
    </form>
  );
};

export default TaskForm;

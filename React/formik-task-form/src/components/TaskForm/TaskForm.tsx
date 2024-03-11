import { useFormik } from "formik";
import {
  taskFormInitialValues,
  taskFormValidationSchema,
} from "../../helpers/task";
import styles from "./TaskForm.module.css";

const TaskForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: taskFormInitialValues,
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: taskFormValidationSchema,
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

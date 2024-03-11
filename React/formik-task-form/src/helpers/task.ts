import * as Yup from "yup";

export const taskFormInitialValues = {
  title: "",
  description: "",
  assignee: "",
  dueDate: "",
};

export const taskFormValidationSchema = Yup.object({
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
});

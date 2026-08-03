import { Box, Button, MenuItem, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Header from "../../Components/Header/Header";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

function submit() {
  console.log("doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  toast.success('Account Created Successfully')
}

export default function ProfileForm() {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters"),

    lastName: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    contactNumber: Yup.string()
      .required("Contact number is required")
      .matches(/^[0-9]+$/, "Contact number must contain only numbers")
      .min(10, "Contact number must be at least 10 digits"),

    address1: Yup.string().required("Address 1 is required"),

    address2: Yup.string().nullable(),

    role: Yup.string().required("Role is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      address1: "",
      address2: "",
      role: "",
    },
    validationSchema,
    onSubmit: submit,
  });

  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
<Header title="CREATE USER" subTitle="Create a New User Profile" isDashboard={false} />
      <Box
        onSubmit={formik.handleSubmit}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Stack sx={{ flexDirection: "row", gap: 2 }}>
          <TextField
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            sx={{ flex: 1 }}
            label="FirstName"
            variant="filled"
          />
          <TextField
            name="lastName"
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ flex: 1 }}
            label="LastName"
            variant="filled"
          />
        </Stack>
        <TextField
          name="email"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Email"
          variant="filled"
        />
        <TextField
        name="contactNumber"
          error={
            formik.touched.contactNumber && Boolean(formik.errors.contactNumber)
          }
          helperText={
            formik.touched.contactNumber && formik.errors.contactNumber
          }
          value={formik.values.contactNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Contact Number"
          variant="filled"
        />
        <TextField
          name="address1"
          value={formik.values.address1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address1 && Boolean(formik.errors.address1)}
          helperText={formik.touched.address1 && formik.errors.address1}
          label="Adress 1"
          variant="filled"
        />
        <TextField
        name="address2"
          value={formik.values.address2}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address2 && Boolean(formik.errors.address2)}
          helperText={formik.touched.address2 && formik.errors.address2}
          label="Adress 2"
          variant="filled"
        />
        <TextField
        name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
          id="filled-select-currency"
          select
          label="Role"
          defaultValue="User"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right", textTransform: "capitalize" }}>
          <Button type="submit" variant="contained">
            Create New User
          </Button>
        </Box>
      </Box>
    </>
  );
}

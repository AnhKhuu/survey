import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginLayout from "../../Layout/LoginLayout/LoginLayout";
import { useRegister } from "../../hooks/mutations";
import { UserInfo } from "../../types/user";

export default function SignupPage() {
  return (
    <LoginLayout>
      <div className="flex items-center justify-center flex-grow w-full bg-slate-100">
        <div className="bg-white rounded-2xl py-10 px-10 min-w-[960px] min-h-[500px] border-solid border-2 border-gray-200">
          <h1 className="text-2xl font-bold text-center text-anger">
            Become a member of Environmental Survey
          </h1>
          <SignupForm />
        </div>
      </div>
    </LoginLayout>
  );
}

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: register } = useRegister({handleSuccess, handleError});
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => register(values as UserInfo)
  });
  function handleSuccess() {
    navigate('/login');
  }
  function handleError(error: any) {
    console.log(error)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <TextField
          fullWidth
          // name="fullName"
          label="Fullname"
          variant="outlined"
          // onChange={formik.handleChange}
          required
        />
        <TextField
          fullWidth
          name="rollNo"
          label="Roll No"
          variant="outlined"
          onChange={formik.handleChange}
          required
        />
        <TextField
          fullWidth
          name="userClass"
          label="Class"
          variant="outlined"
          onChange={formik.handleChange}
          required
        />
        <TextField
          fullWidth
          name="specification"
          label="Specification"
          variant="outlined"
          onChange={formik.handleChange}
          required
        />
        <TextField
          fullWidth
          name="section"
          label="Section"
          variant="outlined"
          onChange={formik.handleChange}
          required
        />
        <DatePicker 
          // onChange={(newValue: any) => formik.setFieldValue('admissionDate', newValue.$d)}
          label="Admission Date"
        />
        <TextField
          fullWidth
          name="userName"
          label="Username"
          variant="outlined"
          onChange={formik.handleChange}
          required
        />
        <FormControl sx={{ width: "100%" }} onChange={formik.handleChange}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={formik.handleChange}
            required
          />
        </FormControl>
      </div>
      <div className="mx-auto mt-10 mb-5 w-full flex justify-center">
        <Button variant="contained" color="anger" type="submit">
          Sign up
        </Button>
      </div>
      <hr />
      <div className="mx-auto mt-5 w-full flex justify-center">
        <Link to={"/login"}>
          <Button variant="text" color="anger">
            Already have an account?
          </Button>
        </Link>
      </div>
    </form>
  );
}

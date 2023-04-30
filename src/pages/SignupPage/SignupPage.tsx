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
import React from "react";
import LoginLayout from "../../Layout/LoginLayout/LoginLayout";
import { Link } from "react-router-dom";

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
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4 mt-10">
        <TextField fullWidth label="Fullname" variant="outlined" />
        <TextField fullWidth label="Roll No" variant="outlined" />
        <TextField fullWidth label="Class" variant="outlined" />
        <TextField fullWidth label="Specification" variant="outlined" />
        <TextField fullWidth label="Section" variant="outlined" />
        <DatePicker label="Admission Date" />
        <TextField fullWidth label="Username" variant="outlined" />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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
          />
        </FormControl>
      </div>
      <div className="mx-auto mt-10 mb-5 w-full flex justify-center">
        <Button variant="contained" color="anger">
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

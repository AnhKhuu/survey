import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import LoginLayout from "../../Layout/LoginLayout/LoginLayout";
import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <LoginLayout>
      <div className="flex items-center justify-center flex-grow w-full bg-slate-100">
        <div className="bg-white rounded-2xl py-16 px-10 min-w-[480px] min-h-[500px] border-solid border-2 border-gray-200">
          <h1 className="text-2xl font-bold text-center text-anger">
            Welcome to Environmental Survey
          </h1>
          <LoginForm />
        </div>
      </div>
    </LoginLayout>
  );
}

function LoginForm() {
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
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <div className="my-10">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </div>
        <div className="mb-3">
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
        <Link to={"/"}>
          <p className="mb-10 text-xs hover:text-gray-500">Forget your password?</p>
        </Link>
        <div className="mx-auto mb-5">
          <Button variant="contained" color="anger">
            Log in
          </Button>
        </div>
        <hr />
        <div className="mx-auto mt-5">
          <Link to={"/signup"}>
            <Button variant="text" color="anger">
              Create new account
            </Button>
          </Link>
        </div>
      </FormControl>
    </form>
  );
}

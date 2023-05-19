import { Button, FormControl, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useCreateSupportInformation } from "../../hooks/mutations";

export default function SupportForm() {
  let navigate = useNavigate();
  const { mutate: createSupportInformation } = useCreateSupportInformation({
    handleSuccess: () => navigate("/"),
    handleError: (e) => console.log(e)
  });

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values: any) => {
      createSupportInformation({
        ...values,
        userId: 1
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <div className="mb-8">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Support content"
            variant="outlined"
            name="supportInformationContent"
            onChange={formik.handleChange}
            required
            multiline
            rows={5}
          />
        </div>
        <div className="flex justify-end">
          <Button
            variant="outlined"
            color="anger"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
          <div className="ml-3">
            <Button variant="contained" color="anger" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </FormControl>
    </form>
  );
}
import { FormControl, FormLabel, TextField } from "@mui/material";

export default function TextQuestion({onChange, questionId}: {onChange: any, questionId: number}) {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Question:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the question..."
              name={`question-${questionId}`}
              onChange={onChange}
              required
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Answer:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the answer..."
              name={`answer-${questionId}`}
              onChange={onChange}
              required
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Point:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the point..."
              name={`point-${questionId}`}
              onChange={onChange}
              required
            />
          </FormControl>
        </div>
      </div>
    </>
  );
}

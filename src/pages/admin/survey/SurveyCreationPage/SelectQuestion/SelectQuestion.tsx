import {
  Button,
  FormControl,
  FormLabel,
  TextField
} from "@mui/material";
import { useState } from "react";
import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import { getRandomId } from "../../../../../utils";

export default function SelectQuestion({onChange, questionId}: {onChange: any, questionId: number}) {
  const [answerIds, setAnswerIds] = useState([getRandomId()]);

  const handleAddAnswer = () => {
    setAnswerIds([...answerIds, getRandomId()]);
  };

  const handleRemoveAnswer = (id: number) => {
    setAnswerIds(answerIds.filter((answerId) => answerId !== id));
  };
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
          <FormLabel>Correct answer:</FormLabel>
        </div>
        <div className="flex-grow">
          <FormControl sx={{ marginBottom: "30px" }} fullWidth>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter the correct answer..."
              name={`correct-answer-${questionId}`}
              onChange={onChange}
              required
            />
          </FormControl>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/5">
          <FormLabel>Incorrect answer:</FormLabel>
        </div>
        <div className="flex-grow">
          {answerIds.map((id, index) => (
            <>
              <div className="flex items-center w-full justify-between">
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    label={`Answer ${index + 1}`}
                    sx={{ marginBottom: "20px" }}
                    name={`incorrect-answer-${questionId}-${id}`}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <Button
                  variant="text"
                  color="anger"
                  onClick={() => handleRemoveAnswer(id)}
                  sx={{ width: "200px" }}
                >
                  <BsTrashFill />
                  <p className="ml-2">Remove answer</p>
                </Button>
              </div>
            </>
          ))}
          <Button
            variant="text"
            color="anger"
            onClick={() => handleAddAnswer()}
            sx={{ width: "200px", marginBottom: '30px' }}
          >
            <BsPlusLg />
            <p className="ml-2">Add more answer</p>
          </Button>
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

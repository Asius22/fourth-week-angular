import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import StackComponent from "./StackComponents";

export default function MyTextField() {
  const [counter, setCounter] = useState(0);
  return (
    <Stack spacing={5}>
      <TextField id="filled-basic" label=" Filled" variant="outlined" />
      <Button variant="outlined" onClick={() => setCounter(counter + 1)}>
        Incrementa
      </Button>
      <StackComponent value={"ciao"} />
      <p>{counter}</p>
    </Stack>
  );
}

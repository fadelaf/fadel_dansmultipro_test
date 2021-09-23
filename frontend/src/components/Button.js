import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function ButtonHandler() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">login</Button>
      <Button variant="contained">register</Button>
    </Stack>
  );
}

export default ButtonHandler;

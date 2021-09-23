import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { register } from "../API";

function Register() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const clickHandler = async (e) => {
    e.preventDefault();
    let data = { username, password };
    let reg = await register(data);
  };

  console.log(username);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-80  w-80 border-2 ">
        <div className="h-full flex justify-center items-center">
          <div>
            <div className="pb-2">
              <label for="username">username</label>
            </div>{" "}
            <input
              className="border-2 p-2"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="pt-2 pb-2">
              <label for="password">password</label>
            </div>{" "}
            <input
              className="border-2 p-2"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-8">
              <Stack spacing={2} direction="row">
                <Button onClick={(e) => clickHandler(e)} variant="contained">
                  Submit
                </Button>
                {/* <Button variant="contained">register</Button> */}
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

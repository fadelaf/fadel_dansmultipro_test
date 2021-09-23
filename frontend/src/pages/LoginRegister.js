import React from "react";
import { useState } from "react";
import { ButtonHandler } from "../components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { login } from "../API";
import Swal from "sweetalert2";
function LoginRegister({ userLogin }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  //   console.log(username);
  const clickHandler = async (e) => {
    e.preventDefault();
    let data = { username, password };
    let loginUser = await login(data);
    if (loginUser.status === 200) {
      userLogin(true);
      Swal.fire({
        icon: "success",
        title: "login success",
      });
    }
  };
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
              type="text"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-8">
              <Stack spacing={2} direction="row">
                <Button onClick={(e) => clickHandler(e)} variant="contained">
                  login
                </Button>
                <Link to={"/register"} className="text-bold">
                  Register
                </Link>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;

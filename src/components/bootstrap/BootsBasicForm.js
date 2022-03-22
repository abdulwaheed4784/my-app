import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Route, Switch, useHistory } from "react-router-dom";

import axios from "axios";

import { useState } from "react";

const BootsBasicForm = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [formError, setFormError] = useState();

  const [allEntry, setAllEntry] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      push("/home");
    }
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    const api = "https://cutme-api.herokuapp.com/api/v1/auth/sign_in";

    // key and value stor in veriable
    if (email && password) {
      const newEntry = {
        email,
        password,
      };
      try {
        const data = axios
          .post(api, newEntry)
          .then((Data) => {
            const { headers, data } = Data;
            console.log("token", headers["access-token"]);
            localStorage.setItem("token", headers["access-token"]);
            localStorage.setItem("auth", true);
            if (localStorage.getItem("token")) {
              setAuth(true);
              push("/home");
            }
          })
          .catch((error) => {
            setFormError(error.response.data.errors[0]);
            alert(error.response.data.errors[0]);
          });
        console.log("DATA: ", data);
      } catch (e) {
        console.log("E: ", e);
      }

      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);

      setEmail("");
      setPassord("");
    } else {
      alert("plaese Write Email and Password");
    }
  };
  const { push } = useHistory();

  return (
    <>
      <div className="center_div">
        <Form action="" onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassord(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default BootsBasicForm;
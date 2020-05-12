import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Wrapper from "../../components/Wrapper.js";

import axios from "axios";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Row from "../../components/Row";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Image from "../../components/Image";

import Heading1 from "../../components/Heading1";

const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            email,
            password,
        };
        axios({
            url: "/auth/login",
            data: body,
            method: "post",
        }).then(res => {
            localStorage.setItem("cwcToken", res.data.token);
            props.history.push("/");
        })
    }

    return (
        <Wrapper>
            <a href="#login_form">sign in, create an account, and more</a>
            <Heading1>Welcome to JuicingParty</Heading1>
            <Heading1>Where we celebrate nutritional food stuff with friends around the world</Heading1>
            <Image src="https://via.placeholder.com/500x300" />
            <Heading1>Where you can watch your favorite restaurant prepare food</Heading1>
            <Image src="https://via.placeholder.com/500x300" />
            <Heading1>Etc Etc</Heading1>
            <Image src="https://via.placeholder.com/500x300" />
            <Heading1>Sign in below</Heading1>

            <a id="login_form">
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Input
                            name="email"
                            placeholder="email"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Row>
                    <Row>
                        <Input
                            name="password"
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Row>
                    <Row>
                        <Button>Sign In</Button>
                    </Row>
                    <Row>
                        <Link to="/forgot">Forgot Password</Link>
                    </Row>
                    <Row>
                        <Link to="/signup">Create Account</Link>
                    </Row>
                </Form>
            </a>
        </Wrapper>







    );
};

export default Login;
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import BASE_URL from "./constants"



export default function Login ({setUserInfo}) {

    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function submit (event) {
        event.preventDefault()

        axios.post(`${BASE_URL}/signin`, {email: email, password: password})
            .then((ans) => {
                setUserInfo({token:ans.data})
                navigate("/home")})
            .catch((ans) => console.log(ans))
    }

    return (
        <Form onSubmit={submit}>
            <input placeholder="email"onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="senha" onChange={e => setPassword(e.target.value)} />
            <button type="submit">Entrar</button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    input {
        width: 770px;
        height: 60px;
        border-radius: 12px;
        margin: 12px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
        outline: none;
        border: none;
        padding-left: 20px;

    }
    button {
        width: 180px;
        height: 60px;
        border-radius: 12px;
        background-color: #5D9040;
        color: white;
        margin-top: 20px;
        outline: none;
        border: none;
        cursor: pointer;
    }
`
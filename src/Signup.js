import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BASE_URL from "./constants"
import axios from "axios"
import styled from "styled-components"



export default function Signup () {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()


    function signup (event) {
        event.preventDefault()
        axios.post(`${BASE_URL}/signup`, {name: name, email:email, password:password, confirmPassword:confirmPassword})
            .then((ans) => {
                alert("Cadastro realizado!")
                navigate("/login")
            })
            .catch ((ans) => console.log(ans))
    }

    return (
        <Form onSubmit={signup}>
            <input placeholder="Nome"onChange={e => setName(e.target.value)} />
            <input placeholder="Email"onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder="Consfirmar senha" onChange={e => setConfirmPassword(e.target.value)} />
            <button type="submit">Cadastrar</button>
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
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
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
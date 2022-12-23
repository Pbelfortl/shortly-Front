import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import shortLogo from "./images/Logo.png"


export default function TopBar ({userInfo, setUserInfo}) {

    const navigate = useNavigate()

    function logout () {
        setUserInfo()
        navigate("/")
        alert("Lougout realizado!")
    }

    return (
        <>
        {(userInfo?.token) ? 
        <Top>
            <Wellcome>Seja bem-vindo!</Wellcome>
            <Options onClick={() =>navigate("/home")} >Home</Options>
            <Options onClick={() =>navigate("/")} >Ranking</Options>
            <Options onClick={() => {logout()}} >Sair</Options>
        </Top>
        :
        <Top>
            <Options onClick={() =>navigate("/login")} >Entrar</Options>
            <Options onClick={() => navigate("/signup")}>Cadastrar-se</Options>
        </Top>
        }
        <Logo>
            <img src={shortLogo} alt="shortly"/>
        </Logo>
        </>
    )
}


const Top = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    color: grey;
    position: absolute;
    top: 0px;
    width: 98vw;
    height: 40px;
    display: flex;
    justify-content: right;
    margin: 15px;
`

const Logo = styled.div`
    position: absolute;
    top: 120px;
    display: flex;
    justify-content: center;
    img{
        width: 400px;
        height: 120px;
    }
`

const Options = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
`

const Wellcome = styled.div`
    position: absolute;
    top: 0;
    left: 15px;
`
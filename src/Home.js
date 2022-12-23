import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import BASE_URL from "./constants"



export default function Home ({userInfo, setUserInfo}) {

    const [urls, setUrls] = useState()
    const [link, setlink] = useState()
    let ref = 0
    const [refresh, setRefresh] = useState()

    useEffect (() => {
        axios.get(`${BASE_URL}/users/me`, {headers: {"Authorization": `Bearer ${userInfo?.token}`}})
            .then((ans) => setUrls(ans.data))
            .catch((ans) => {
                console.log(ans)
                setUserInfo()
                alert("Não foi possível obter os dados. Tente logar novamente!")
            })
    }, [refresh, userInfo, setUserInfo])

    function shortenUrl (event) {
        event.preventDefault()
        axios.post(`${BASE_URL}/urls/shorten`, {url: link}, {headers: {"Authorization": `Bearer ${userInfo.token}`}})
            .then((ans) => {
                alert("link ecurtado")
                setRefresh(ref+1)
            })
            .catch((ans) => console.log(ans))
    }

    function deleteUrl (urlId) {
        axios.delete(`${BASE_URL}/urls/${urlId}`, {headers: {"Authorization": `Bearer ${userInfo.token}`}})
            .then((ans) => {
                alert("Link excluído")
                setRefresh(ref+1)
            })
            .catch((ans) => {
                alert("Não foi possível excluir. Tente relogar!")
                setUserInfo()
                console.log(ans)})
    }


    if(!urls) return ( <>
        <Form onSubmit={shortenUrl}>
            <input placeholder="Links que cabem no bolso!" onChange={e => setlink(e.target.value)}/>
            <button type="submit">Encurtar link!</button>
        </Form>
    </> )

    return (
        <>
        <Form onSubmit={shortenUrl}>
            <input placeholder="Links que cabem no bolso!" onChange={e => setlink(e.target.value)}/>
            <button type="submit">Encurtar link!</button>
        </Form>
        <LinksContainer>
            {urls.shortenedUrls.map((url) => 
                <Link key={url.id}>
                 <Short>{url.url} </Short>
                 <Short onClick={() => window.open(url.url)}>{`${url.shortUrl}`}</Short> 
                 <span>Quantidade de visitantes: {url.visitCount}</span> 
                 <button onClick={()=> deleteUrl(url.id)}><ion-icon name="trash-outline"></ion-icon></button></Link>
            )}
        </LinksContainer>
        <Footer>
            Para enviar um link insira o código encurtado em: <strong>https://shortly-rt8v.onrender.com/urls/open/[CÓDIGO]</strong>
        </Footer>
        </>
    )
}

const Form = styled.form`
    font-family: 'Lexend Deca', sans-serif;
    input {
        width: 770px;
        height: 60px;
        border-radius: 12px;
        margin-right: 12px;
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
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
        color: white;
        margin-top: 20px;
        outline: none;
        border: none;
        cursor: pointer;
    }
`

const LinksContainer = styled.div`
    height: 300px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    overflow-y: scroll;
`
const Link = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
    margin: 15px;
    font-weight: 500;
    padding-left: 15px;
    width: 985px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #80CC74;
    color: white;
    border-radius: 12px;
    button{
        background-color: white;
        width: 130px;
        height: inherit;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        border: none;
        cursor: pointer;
    }
    ion-icon{
        height: 26px;
        width: 22px;
        color: red;
    }
`

const Short = styled.div`
    max-width: 300px;
    cursor: pointer;
    overflow-x: hidden;
`

const Footer = styled.footer`
`
import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import BASE_URL from "./constants.js"


export default function Ranking () {

    const [urls, setUrls] = useState()

    useEffect( () => {

        axios.get(`${BASE_URL}/ranking`)
            .then((ans) => {
                setUrls(ans.data)
                
            })
            .catch((ans) => {
                console.log(ans.data)
                alert("Não foi possível obter os dados")
            })
    }, [])

    if(!urls) return <>Carregando...</> 

    return (
        <>
        <Trophy>
            <ion-icon name="trophy-outline"></ion-icon>
            Ranking
        </Trophy>
        <Rank>
            {urls.map( (url, i) => 
                <Line key={url.id}>{i+1}. {url.name} - {url.linkCount} Links - {url.visitCount} visualizações</Line>
            )}
        </Rank>
        </>
    )
}

const Rank = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 300px;
    border: solid, black, 1px;
    border-radius: 8px;
    box-shadow: 2px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Line = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    width: 750px;
    height: 30px;
    margin-top: 15px;
`

const Trophy = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 36px;
    font-weight: 500;
    margin-top: 15px;
    ion-icon{
        height: 56px;
        width: 56px;
        color: yellow;
    }
`
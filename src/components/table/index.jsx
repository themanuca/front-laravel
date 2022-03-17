import React, {useEffect, useState} from "react";
import { Container } from "./styles.js";
//import Table from 'react-bootstrap/Table';
import { Table, Button } from 'react-bootstrap';
import api from '../services/api';


export default function Index() {

    const [cardPost, setCardpost] = useState([]);
    const [id, setid] = useState();

    console.log(cardPost);

    var url = process.env.REACT_APP_API_URL;



    function hunderClick(){
        window.location.href ='/adicionar';
      }
    
    useEffect(()=>{
        async function carregaPost(){
            const response = await api.get(url + '/api/');
            setCardpost(response.data)
        }
        carregaPost();
    },[])

  return (
    <Container>
        <Table >
            <thead>
                <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Sexo</th>
                <th>Endereço</th>
                <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                
            {cardPost.map((item)=>{
                return(
                  <tr key={item.id}>
                      <td>h1</td>
                      <td>{item.name}</td>
                      <td>{item.cpf}</td>
                      <td>{item.sexo}</td>
                      <td>{item.endereco}</td>
                      <td>
                          <Button onClick={(e)=>(setid(item.id)) + (window.location.href='/'+ item.id) } variant="primary">Editar</Button>{''}
                          <Button variant="danger">Delete</Button> 
                          <Button variant="info">Info</Button>{''}

                         </td>
                  </tr>
             
                )
             })
      }
            </tbody>
        
        </Table>
        
    
      <Button onClick={hunderClick} variant="primary">Adicionar</Button>
    </Container>
  
  
  )
}

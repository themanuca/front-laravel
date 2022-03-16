import React from "react";
import { Container } from "./styles.js";
//import Table from 'react-bootstrap/Table';
import { Table, Button } from 'react-bootstrap';

export default function index() {


    function hunderClick(){
        window.location.href ='/adicionar';
      }
    

  return (
    <Container>
        <Table >
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                    <Button variant="primary">Primary</Button>{' '}
                </td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                    <Button variant="primary">Primary</Button>{' '}
                </td>
                </tr>
                <tr>
                <td>3</td>
                
                <td>@twitter</td>
                <td>asd</td>
                <td>asd</td>
                
                <td>
                    <Button variant="primary">Primary</Button>{' '}
                </td>

                

                </tr>
            </tbody>
        </Table>
    
      <Button onClick={hunderClick} variant="primary">Adicionar</Button>
    </Container>
  
  
  )
}

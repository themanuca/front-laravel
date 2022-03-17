import React, {useState, useEffect} from "react";
import { Container,Content, Alermsg } from "./styles";
import api from '../services/api';
//import { redirect } from "express/lib/response";
//require("dotenv/config");

export default function Forms(){

    var url = process.env.REACT_APP_API_URL;

    const [nome, setNome] = useState('');
    const [cpf, setcpf] = useState('');
    const [sexo, setsexo] = useState('');
    const [endereco, setendereco] = useState('');

    const[msg, setMsg] = useState();

    async function salvar(e){
        e.preventDefault();
        const data = {
            nome_user:nome, 
            cpf_user:cpf,
            sexo_user:sexo,
            endereco_user:endereco
        } 
       
        console.log(data);
        const res = await api.post(url + '/api/salvar',data);
       
        

            if(res.status === 200){
                
                window.location.href ='/';

            }else if (res.status === 299){

                setMsg(res.data.msg)
            }
            else {
                alert('ERRO NO SERVIDOR')
            }
        
            console.log(res.data);

    }
    var pad = 0;
    useEffect(()=>{
        var pad = 1;
    },[msg])



    return (
        <Container>
            <Alermsg tlerro ={pad}>{msg}</Alermsg>
            <Content>
               
                <h2>Adicionar Paciente</h2>
                <form >
                <div className="field-1">
                        <label><span>Nome</span></label>
                        <input 
                        type="text" 
                        name='fistname' 
                        value={nome} 
                        onChange={e=>setNome(e.target.value)} required/>
                    
                    </div>

                  

                    <div className="field">
                        <label><span>CPF</span></label>
                        <input 
                        pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                        type="number" 
                        name='cpf'
                        value={cpf}
                        onChange={e=>setcpf(e.target.value)}required

                        />
                    </div>

                    
                    <div className="field">
                        <label><span>Sexo</span></label>
                        <select id="sexo" name="sexo" value={sexo} onChange={e=>setsexo(e.target.value)} required>

                            <option  value="default">Selecione</option>
                            <option value="Masculino ">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            
                        </select>
                    </div>

           

                    <div className="field">
                        <label><span>Endereço</span></label>
                        <input 
                        type="locale" 
                        name='locale'
                        value={endereco}
                        onChange={e=>setendereco(e.target.value)}
                        required
                        autoComplete="current-password"

                        />
                    </div>


                    <input 
                    type="submit" 
                    value='Registrar' 
                    onClick={salvar}/>
                

                </form>

              

            </Content>
        </Container>
    )
}
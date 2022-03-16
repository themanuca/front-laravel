import styled from 'styled-components';

export const Container = styled.div`
   
`;

export const Content = styled.div`
>h2{
    font-weight: 600;
    margin-bottom: 2rem;
    position: relative;
    left: -10px;
}
>h2::before{
    content: "";
    position: absolute;
    height: 4px;
    width: 25px;
    bottom: 1px;
    left: 0;
    border-radius: 8px;
    background:linear-gradient(45deg,#8e2de2, #4a00e0 );
}
>form {
    color: black;
    display: flex;
    flex-direction: column;
   
}
>form label {
        font-weight: 500;
    
    }
>form label span {
    font-size: 1.1rem;
    margin-top: 2rem;
}
>form input {
    
    background:#E5EAEE ;
    width: 300px;
    height: 40px;
    padding: 0 0.5rem;
    margin-top: 1rem;
    outline: none;
    border-radius: 4px;
    font-size: 0.9rem;
}
>form input[type="submit"]{
    margin-top: 2rem;
    padding: 0.4rem;
    background: linear-gradient(to left, #4776e6, #8e54e9);
    width: 150px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size:0.9rem;
    border-radius: 6px;
    transition: all 0.3s ease;
}
>form input[type="submit"]:hover{
letter-spacing: 0.5px;
background: linear-gradient(to right, #4776e6, #8e54e9);
}
.Logeer{
    
    margin-top: 2rem;
    padding: 0.4rem;
    background: linear-gradient(to left, #4776e6, #8e54e9);
    width: 110px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    font-size:0.9rem;
    border-radius: 6px;
    transition: all 0.3s ease;
}
`;


export const Alermsg = styled.div`
    
    margin-bottom: 30px;
    padding: ${(props)=>props.tlerro}rem;
    font-size: 18px;
    font-weight: 600;
    width: 60vw;
    @media(min-width:600px){
        width: 60%;
        margin-bottom: 30px;
        
    }
    height: 100%;
    background-color: #cc1100;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
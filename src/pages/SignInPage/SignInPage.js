import { Container, ContainerConfirm, ContainerContent, ContainerInput, Divider, Title } from './Styleds';
import { AiFillEye } from "react-icons/ai";
import { Navigate } from 'react-router';

export default function SignInPage() {

  const navigate = Navigate();

  return (
    <Container>
      <Title> Repo<span>Provas</span> </Title>
      <ContainerContent>
        <h1> Login </h1>
        <button>ENTRAR COM O GITHUB</button>
        <Divider>
          <div></div>
          <h1>ou</h1>
          <div></div>
        </Divider>
        <ContainerInput>
          <input
            placeholder='Email'
          ></input>
        </ContainerInput>
        <ContainerInput>
          <input
            placeholder='Senha'
          ></input>
          <div><AiFillEye size="22px" color="rgba(0, 0, 0, 0.54)"/> </div>
        </ContainerInput>
        <ContainerConfirm>
          <div className='otherPage' onClick={() => navigate('/signup')}> Não possuo cadastro</div>
          <button className='confirm'>Entrar</button>
        </ContainerConfirm>
      </ContainerContent>
    </Container>
  );
}
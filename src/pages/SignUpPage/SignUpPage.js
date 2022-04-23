import { Container, ContainerConfirm, ContainerContent, ContainerInput, Divider, Title } from './Styleds';
import { AiFillEye } from "react-icons/ai";

export default function SignUpPage() {
  return (
    <Container>
      <Title> Repo<span>Provas</span> </Title>
      <ContainerContent>
        <h1> Cadastro </h1>
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
        <ContainerInput>
          <input
            placeholder='Confirme a senha'
          ></input>
          <div><AiFillEye size="22px" color="rgba(0, 0, 0, 0.54)"/> </div>
        </ContainerInput>
        <ContainerConfirm>
          <div className='otherPage'> Já possuo cadastro</div>
          <button className='confirm'>CADASTRAR</button>
        </ContainerConfirm>
      </ContainerContent>
    </Container>
  );
}
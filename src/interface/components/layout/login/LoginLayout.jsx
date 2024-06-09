import { useState } from 'react';
import * as Components from './Components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function LoginLayout() {
    const [signIn, toggle] = useState(true);
    return (
        <CenteredContainer>
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Criar Conta</Components.Title>
                        <Components.Input type='text' placeholder='Nome' />
                        <Components.Input type='email' placeholder='Email' />
                        <Components.Input type='password' placeholder='Senha' />
                        
                        <Link to="/">
                            <Components.Button>Cadastrar</Components.Button>
                        </Link>
                        

                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Entrar na Conta</Components.Title>
                        <Components.Input type='text' placeholder='Nome' />
                        <Components.Input type='password' placeholder='Senha' />
                        <Components.Anchor href="#">Esqueceu sua senha?</Components.Anchor>

                        <Link to="/">
                            <Components.Button>Entrar</Components.Button>
                        </Link>

                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Bem Vindo de Volta!</Components.Title>
                            <Components.Paragraph>Para se manter conectado conosco, por favor insira suas informações</Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Entrar
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Bem Vindo!</Components.Title>
                            <Components.Paragraph>Entre com suas informações para começar sua jornada na Modelly!</Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Cadastrar
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                            
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </CenteredContainer>
    )
}

export default LoginLayout;

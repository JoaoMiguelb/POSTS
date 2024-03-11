// react
import { useEffect, useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/user/actions';

// CSS
import * as Styled from './styles';


const Login = () => {
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const { error } = useSelector((rootReducer) => rootReducer.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ displayName, password }));
        setRedirect(true)
    }
    useEffect(() => {
        // Redirecione apenas se não houver erro após o login
        if (!error && redirect) {
            navigate('/')
        }
    }, [error, redirect]);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
   

    return (
        <Styled.Form onSubmit={handleLogin}>
            <Styled.H2>Entre</Styled.H2>
            <Styled.Input
                type='text'
                placeholder='Digite seu email ou usuário'
                onChange={(e) => setDisplayName(e.target.value)}
                required
            />
            <Styled.Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Digite sua senha'
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Styled.Block>
            <Styled.CheckBoxPassword 
            type='checkbox' 
            onClick={handleShowPassword}
             id='show-password'
             />
            <Styled.LabelCheckBox htmlFor='show-password'>Mostrar senha</Styled.LabelCheckBox>
            </Styled.Block>
            <Styled.Button type='submit'>Entrar</Styled.Button>
            <Styled.Link to='/register'>Não possui conta? Crie uma!</Styled.Link>
            {error && <Styled.Error>{error}</Styled.Error>}
        </Styled.Form>
    );
};

export default Login;

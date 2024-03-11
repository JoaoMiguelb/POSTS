// react
import { useEffect, useState } from 'react'

// react-router-dom
import { useNavigate } from 'react-router-dom'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, setError } from '../../redux/user/actions'

// CSS
import * as Styled from './styles'


const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { error } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setError(""))

      if (password !== confirmPassword) {
          dispatch(setError("As senhas precisam ser idênticas!"));
          return;
      } else {
          dispatch(registerUser({ displayName, email, password }));
          setRedirect(true)
      }
  };

  useEffect(() => {
      if (!error && redirect) {
          navigate('/');
      }
  }, [error, redirect])

  return (
    <Styled.RegisterContainer onSubmit={handleSubmit}>
      <Styled.H2>Crie sua conta</Styled.H2>
      <Styled.Input
        type='text'
        placeholder='Defina seu apelido'
        onChange={(e) => setDisplayName(e.target.value)}
        minLength={4}
        required
      />

      <Styled.Input
        type='email'
        placeholder='Digite seu Email'
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Styled.Input
        type={showPassword ? 'type' : 'password'}
        placeholder='Digite sua senha'
        onChange={(e) => setPassword(e.target.value)}
        minLength={8}
        required
      />

      <Styled.Input
        type={showPassword ? 'type' : 'password'}
        placeholder='Digite sua senha novamente'
        onChange={(e) => setConfirmPassword(e.target.value)}
        minLength={8}
        required
      />
       <Styled.Block>
            <Styled.CheckBoxPassword type='checkbox' onClick={handleShowPassword} id='show-password'/>
            <Styled.LabelCheckBox htmlFor='show-password'>Mostrar senhas</Styled.LabelCheckBox>
            </Styled.Block>
      <Styled.Button type='submit' >Criar conta</Styled.Button>
      {error && <Styled.Error >{error}</Styled.Error>}
    </Styled.RegisterContainer>
  )
}

export default Register
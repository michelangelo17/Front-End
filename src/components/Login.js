import React, {useState} from 'react';

import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import Spinner from './Spinner';
import {StyledLoginDiv, StyledLoginForm, StyledLabel, StyledButton, BottomLoginDiv } from './Styles';


    

const Login = (props) => {

  const [user, setUser] = useState({ 
    username: '', 
    password: '' 
  });

  const [ isLoading, setIsLoading ] = useState(false);
  const history = useHistory();

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
    .post('/api/login', user)
    .then(res => {
      setIsLoading(false)
      console.log('authentication response', res);
      localStorage.setItem('token', res.data.token);
      history.push('/Dashboard');
    })
    .catch(err => console.log(err));
  };

  return (
    <StyledLoginDiv>
      <StyledLoginForm onSubmit={handleSubmit}>
        <StyledLabel>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </StyledLabel>
        <StyledButton>Submit!</StyledButton>
        {
          !!isLoading && <Spinner />
        }

       <BottomLoginDiv>
          {'Not Registered?'} <div style={{cursor: 'pointer', color: 'black', textDecoration: 'underline'}} onClick={ (e) => {props.setShowLogin(false)}}>Create New Account</div>
      </BottomLoginDiv>

       
      </StyledLoginForm>
      
    </StyledLoginDiv>
  )
}

export default Login;


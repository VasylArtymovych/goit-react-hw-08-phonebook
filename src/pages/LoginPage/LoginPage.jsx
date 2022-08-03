import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { authOperations, authSelectors } from 'redux/auth';
import {
  LoginBtn,
  LoginForm,
  Input,
  ErrorMsg,
  AvatarText,
} from './LoginPage.styled';
import Spiner from 'components/Spinner';
import { Box } from 'components/Box/Box';

let loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.logIn(value));
    resetForm();
  };

  return (
    <>
      {isFetchingCurrentUser ? (
        <Box display="flex" justifyContent="center" mt="120px">
          {Spiner.customSpinner}
        </Box>
      ) : (
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <LoginForm>
            <div>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <AvatarText>LogIn</AvatarText>
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
            ></Input>
            <ErrorMessage name="email">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>
            <Input
              type="password"
              name="password"
              placeholder="password"
            ></Input>
            <ErrorMessage name="password">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>
            <LoginBtn>LogIn</LoginBtn>
          </LoginForm>
        </Formik>
      )}
    </>
  );
}

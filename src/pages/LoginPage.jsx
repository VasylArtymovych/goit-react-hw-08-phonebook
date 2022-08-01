import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { authOperations } from 'redux/auth';

let loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.logIn(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form>
        <div>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>LogIn</h2>
        </div>
        <Field type="email" name="email" placeholder="Enter your email"></Field>
        <ErrorMessage name="email" />
        <Field type="password" name="password" placeholder="password"></Field>
        <ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>
        <button type="submit">login</button>
      </Form>
    </Formik>
  );
}

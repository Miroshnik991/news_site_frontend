import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .when('value', {
      is: 'sign-up',
      then: Yup.string()
        .min(1, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
    }),
  email: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default SignupSchema;

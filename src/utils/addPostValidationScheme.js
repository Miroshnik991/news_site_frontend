import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  content: Yup.string()
    .min(10, 'Too Short!')
    .max(700, 'Too Long!')
    .required('Required'),
  tags: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  file: Yup.string()
    .required('Required'),
});

export default SignupSchema;

import * as Yup from 'yup';

const EditProfileSsheme = Yup.object().shape({
  username: Yup.string()
    .min(1, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

export default EditProfileSsheme;

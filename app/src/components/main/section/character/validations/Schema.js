import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  height: Yup.string().required('Height is required!'),
  mass: Yup.string().required('Mass is required!'),
  hair_color: Yup.string().required('Hair color is required!'),
  skin_color: Yup.string().required('Skin color is required!'),
  eye_color: Yup.string().required('Eye color is required!'),
  birth_year: Yup.string().required('Birth date is required!'),
  gender: Yup.string().required('Gender is required!'),
});

export default Schema;

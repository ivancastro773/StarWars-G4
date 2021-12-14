import * as Yup from "yup";

const Schema = Yup.object().shape({
    name: Yup.string().required("El nombre es requerido!"),
    height: Yup.string().required("La altura es requerida!"),
    mass: Yup.string().required("La masa es requerida!"),
    hair_color: Yup.string().required("El color de pelo es requerido!"),
    skin_color: Yup.string().required("El color del skin es requerido!"),
    eye_color: Yup.string().required("El color de ojos es requerido!"),
    birth_year: Yup.string().required("La fecha de nacimiento es requerida!"),
    gender: Yup.string().required("El sexo es requerido!")
  });
  
export default Schema;

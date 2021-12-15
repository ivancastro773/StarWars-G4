import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  model: Yup.string().required('Model is required!'),
  manufacturer: Yup.string().required('Manufacturer is required!'),
  cost_in_credits: Yup.string().required('Cost is required!'),
  crew: Yup.string().required('Crew number is required!'),
  passengers: Yup.string().required('Passenger number is required!'),
  cargo_capacity: Yup.string().required('Cargo capacity is required!'),
  vehicle_class: Yup.string().required('Vehicle class is required!'),
});

export default Schema;

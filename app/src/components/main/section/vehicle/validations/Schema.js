import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido!'),
  model: Yup.string().required('El modelo es requerido!'),
  manufacturer: Yup.string().required('El productor es requerido!'),
  cost_in_credits: Yup.string().required('El costo es requerido!'),
  crew: Yup.string().required('El equipo es requerido!'),
  passengers: Yup.string().required('El número de pasajeros es requerido!'),
  cargo_capacity: Yup.string().required('La capacidad de carga es requerida!'),
  vehicle_class: Yup.string().required('La clase del vehículo es requerida!'),
});

export default Schema;

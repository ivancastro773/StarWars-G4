import React from 'react';
import { Formik, Form, Field } from 'formik';
import Schema from './validations/Schema';
import errorHandle from './validations/Errors';
//css
import './character.css';
/* ANIMACION : animate__animated animate__flipInY */
const initialValue = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
};
const CharacterFormEdit = () => {
  return (
    <Formik initialValues={initialValue} validationSchema={Schema}>
      {({ errors }) => {
        return (
          <div className="description-chac animate__animated animate__flipInY">
            <Form>
              <Field
                className="form-control"
                id="name"
                name="name"
                type="text"
                placeholder="Nombre..."
              />
              {errorHandle(errors).name()}
              <Field
                className="form-control"
                id="height"
                name="height"
                type="text"
                placeholder="Altura..."
              />
              {errorHandle(errors).height()}
              <Field
                className="form-control"
                id="mass"
                name="mass"
                type="text"
                placeholder="Masa..."
              />
              {errorHandle(errors).mass()}
              <Field
                className="form-control"
                id="hair_color"
                name="hair_color"
                type="text"
                placeholder="Color del pelo..."
              />
              {errors.hair_color}
              <Field
                className="form-control"
                id="skin_color"
                name="skin_color"
                type="text"
                placeholder="Color del skin..."
              />
              {errorHandle(errors).skin_color()}
              <Field
                className="form-control"
                id="eye_color"
                name="eye_color"
                type="text"
                placeholder="Color de ojo..."
              />
              {errorHandle(errors).eye_color()}
              <Field
                className="form-control"
                id="birth_year"
                name="birth_year"
                type="text"
                placeholder="Fecha de nacimiento..."
              />
              {errorHandle(errors).birth_year()}
              <Field
                className="form-control"
                id="gender"
                name="gender"
                type="text"
                placeholder="Sexo..."
              />
              {errorHandle(errors).gender()}
              <button type="submit" class="btn btn-primary btn-edit-chac">
                Editar
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default CharacterFormEdit;

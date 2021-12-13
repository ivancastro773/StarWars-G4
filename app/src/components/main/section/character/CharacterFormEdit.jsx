import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Schema from './validations/Schema';
//css
import './character.css';
import './validations/Errors.css';
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
  const fnShow = (v) => {
    console.log(v);
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Schema}
      onSubmit={fnShow}
    >
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
              <ErrorMessage className='required-validation'  name="name" component="div" />
              <Field
                className="form-control"
                id="height"
                name="height"
                type="text"
                placeholder="Altura..."
              />
              <ErrorMessage className='required-validation' name="height" component="div" />
              <Field
                className="form-control"
                id="mass"
                name="mass"
                type="text"
                placeholder="Masa..."
              />
              <ErrorMessage className='required-validation' name="mass" component="div" />
              <Field
                className="form-control"
                id="hair_color"
                name="hair_color"
                type="text"
                placeholder="Color del pelo..."
              />
              <ErrorMessage className='required-validation' name="hair_color" component="div" />
              <Field
                className="form-control"
                id="skin_color"
                name="skin_color"
                type="text"
                placeholder="Color del skin..."
              />
              <ErrorMessage className='required-validation' name="skin_color" component="div" />
              <Field
                className="form-control"
                id="eye_color"
                name="eye_color"
                type="text"
                placeholder="Color de ojo..."
              />
              <ErrorMessage className='required-validation' name="eye_color" component="div" />
              <Field
                className="form-control"
                id="birth_year"
                name="birth_year"
                type="text"
                placeholder="Fecha de nacimiento..."
              />
              <ErrorMessage className='required-validation' name="birth_year" component="div" />
              <Field
                className="form-control"
                id="gender"
                name="gender"
                type="text"
                placeholder="Sexo..."
              />
              <ErrorMessage className='required-validation' name="gender" component="div" />
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
{
  /* <div className="description-chac animate__animated animate__flipInY">
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
          </div> */
}

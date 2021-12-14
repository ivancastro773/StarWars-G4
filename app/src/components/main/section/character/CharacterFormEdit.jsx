import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Schema from './validations/Schema';

//css
import './validations/Errors.css';
import ShowError from './validations/ShowError';
/* ANIMACION : animate__animated animate__flipInY */
/* TOAST */
/* Toast('Something bad happen', 'error') */
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
        const {
          name,
          height,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
        } = errors;
        return (
          <div className="description-chac animate__animated animate__flipInY">
            <Form className="form-edit-character">
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="name"
                  component={ShowError}
                />
                <span title={name ? name : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      name
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="height"
                  name="height"
                  type="text"
                  placeholder="Altura..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="height"
                  component={ShowError}
                />

                <span title={height ? height : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      height
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="mass"
                  name="mass"
                  type="text"
                  placeholder="Masa..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="mass"
                  component={ShowError}
                />

                <span title={mass ? mass : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      mass
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="hair_color"
                  name="hair_color"
                  type="text"
                  placeholder="Color del pelo..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="hair_color"
                  component={ShowError}
                />

                <span
                  title={hair_color ? hair_color : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      hair_color
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="skin_color"
                  name="skin_color"
                  type="text"
                  placeholder="Color del skin..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="skin_color"
                  component={ShowError}
                />

                <span
                  title={skin_color ? skin_color : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      skin_color
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="eye_color"
                  name="eye_color"
                  type="text"
                  placeholder="Color de ojo..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="eye_color"
                  component={ShowError}
                />
                <span
                  title={eye_color ? eye_color : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      eye_color
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="birth_year"
                  name="birth_year"
                  type="text"
                  placeholder="Fecha de nacimiento..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="birth_year"
                  component={ShowError}
                />
                <span
                  title={birth_year ? birth_year : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      birth_year
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="gender"
                  name="gender"
                  type="text"
                  placeholder="Sexo..."
                />
                <ErrorMessage
                  className="required-validation"
                  name="gender"
                  component={ShowError}
                />
                <span title={gender ? gender : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      gender
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <button
                type="submit"
                className="btn-action confirm-edit btn-edit-chac"
              >
                Confirmar
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default CharacterFormEdit;

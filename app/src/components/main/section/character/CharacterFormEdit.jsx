import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

//import { AxiosRequest } from '../../../helpers/axios-request';
import { Toast } from '../../../helpers/sweet-alert';
import Schema from './validations/Schema';
import Loader from '../loader/Loader';

const CharacterFormEdit = ({ character, setInfo }) => {
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const initialValues = { ...character };
  const handleSubmit = async (values) => {
    setEditing(true);
    setTimeout(() => {
      setEditing(false);
      Toast('Edit complete', 'success');
      setInfo(true);
      setTimeout(() => navigate('/characters'), 3000);
    }, 3000);
    /*
    // send the new values to the server
    try {
      const { status, data } = await AxiosRequest({ url: '' });
      if (status === 200) {}
    } catch (error) {
      return Toast('Something bad happen', 'error');
    }
    */
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={handleSubmit}
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
                <span title={name ? name : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      name
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                <span title={height ? height : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      height
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                <span title={mass ? mass : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      mass
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                <span
                  title={hair_color ? hair_color : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      hair_color
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                <span
                  title={skin_color ? skin_color : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      skin_color
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                <span
                  title={eye_color ? eye_color : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      eye_color
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                <span
                  title={birth_year ? birth_year : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      birth_year
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                <span title={gender ? gender : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      gender
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
                    }
                  ></i>
                </span>
              </div>
              {editing ? (
                <div>
                  <button
                    type="submit"
                    className="btn-action confirm-edit btn-edit-chac"
                    disabled={true}
                  >
                    Editing
                  </button>
                  <Loader className="edition-loader" />
                </div>
              ) : (
                <button
                  type="submit"
                  className="btn-action confirm-edit btn-edit-chac"
                >
                  Confirm
                </button>
              )}
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default CharacterFormEdit;

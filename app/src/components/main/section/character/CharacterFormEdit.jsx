import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { AxiosRequest } from '../../../helpers/axios-request';
import './validations/Errors.css';
import { Toast } from '../../../helpers/sweet-alert';
import Schema from './validations/Schema';
import Loader from '../loader/Loader';
import ShowError from './validations/ShowError';

const CharacterFormEdit = ({ character, setInfo, btnAction }) => {
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const initialValues = { ...character };
  const btnAdd = btnAction === 'add';
  const handleSubmit = async (values) => {
    setEditing(true);
    const id = values.id;
    delete values.id;
    try {
      let status, responsePost, responsePut;
      if (btnAdd) {
        responsePost = await AxiosRequest({
          method: 'POST',
          url: `/characters/new`,
          data: values,
        });
      } else {
        responsePut = await AxiosRequest({
          method: 'PUT',
          url: `/characters/edit/${id}`,
          data: values,
        });
      }
      status = responsePost?.status || responsePut?.status;
      if (status === 200) {
        setEditing(false);
        if (btnAdd) {
          Toast('Add complete', 'success');
        } else {
          Toast('Edit complete', 'success');
        }
        setInfo(true);
        setTimeout(() => navigate('/characters'), 2000);
      }
    } catch (error) {
      return Toast('Something bad happen', 'error');
    }
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
                  placeholder="Name"
                />
                <ErrorMessage
                  className="required-validation"
                  name="name"
                  component={ShowError}
                />
                <span title={name ? name : 'Complete the field'}>
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
                  placeholder="Height"
                />
                <ErrorMessage
                  className="required-validation"
                  name="height"
                  component={ShowError}
                />
                <span title={height ? height : 'Complete the field'}>
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
                  placeholder="Mass"
                />
                <ErrorMessage
                  className="required-validation"
                  name="mass"
                  component={ShowError}
                />
                <span title={mass ? mass : 'Complete the field'}>
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
                  placeholder="Hair color"
                />
                <ErrorMessage
                  className="required-validation"
                  name="hair_color"
                  component={ShowError}
                />
                <span title={hair_color ? hair_color : 'Complete the field'}>
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
                  placeholder="Skin color"
                />
                <ErrorMessage
                  className="required-validation"
                  name="skin_color"
                  component={ShowError}
                />
                <span title={skin_color ? skin_color : 'Complete the field'}>
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
                  placeholder="Eye color"
                />
                <ErrorMessage
                  className="required-validation"
                  name="eye_color"
                  component={ShowError}
                />
                <span title={eye_color ? eye_color : 'Complete the field'}>
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
                  placeholder="Birth year"
                />
                <ErrorMessage
                  className="required-validation"
                  name="birth_year"
                  component={ShowError}
                />
                <span title={birth_year ? birth_year : 'Complete the field'}>
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
                  placeholder="Gender"
                />
                <ErrorMessage
                  className="required-validation"
                  name="gender"
                  component={ShowError}
                />
                <span title={gender ? gender : 'Complete the field'}>
                  <i
                    className={
                      gender
                        ? 'fas fa-times field-warning'
                        : 'fas fa-check field-correct'
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
                    {btnAdd ? 'Adding' : 'Editing'}
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

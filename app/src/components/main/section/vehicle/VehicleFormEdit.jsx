import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

/* import { AxiosRequest } from '../../../helpers/axios-request'; */
import { Toast } from '../../../helpers/sweet-alert';
import Schema from './validations/Schema';
import Loader from '../loader/Loader';
import ShowError from './validations/ShowError';

const VehicleFormEdit = ({ vehicle, setInfo, btnAction }) => {
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const initialValues = { ...vehicle };
  const btnAdd = btnAction === 'add';
  const handleSubmit = async (values) => {
    setEditing(true);
    setTimeout(() => {
      setEditing(false);
      if (btnAdd) {
        Toast('Add complete', 'success');
      } else {
        Toast('Edit complete', 'success');
      }
      setInfo(true);
      setTimeout(() => navigate('/vehicles'), 3000);
    }, 3000);
    /*
    try {
      const { status, data } = await AxiosRequest({ url: '/' });
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
          model,
          manufacturer,
          cost_in_credits,
          crew,
          passengers,
          cargo_capacity,
          vehicle_class,
        } = errors;
        return (
          <div className="description-chac animate__animated animate__flipInY">
            <Form className="form-edit-vehicle">
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
                  id="model"
                  name="model"
                  type="text"
                  placeholder="Model"
                />
                <ErrorMessage
                  className="required-validation"
                  name="model"
                  component={ShowError}
                />
                <span title={model ? model : 'Complete the field'}>
                  <i
                    className={
                      model
                      ? 'fas fa-times field-warning'
                      : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="manufacturer"
                  name="manufacturer"
                  type="text"
                  placeholder="Manufacturer"
                />
                <ErrorMessage
                  className="required-validation"
                  name="manufacturer"
                  component={ShowError}
                />
                <span
                  title={
                    manufacturer ? manufacturer : 'Complete the field'
                  }
                >
                  <i
                    className={
                      manufacturer
                      ? 'fas fa-times field-warning'
                      : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="cost_in_credits"
                  name="cost_in_credits"
                  type="text"
                  placeholder="Cost"
                />
                <ErrorMessage
                  className="required-validation"
                  name="cost_in_credits"
                  component={ShowError}
                />
                <span
                  title={
                    cost_in_credits
                      ? cost_in_credits
                      : 'Complete the field'
                  }
                >
                  <i
                    className={
                      cost_in_credits
                      ? 'fas fa-times field-warning'
                      : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="crew"
                  name="crew"
                  type="text"
                  placeholder="Crew"
                />
                <ErrorMessage
                  className="required-validation"
                  name="crew"
                  component={ShowError}
                />
                <span title={crew ? crew : 'Complete the field'}>
                  <i
                    className={
                      crew
                      ? 'fas fa-times field-warning'
                      : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="passengers"
                  name="passengers"
                  type="text"
                  placeholder="Passenger"
                />
                <ErrorMessage
                  className="required-validation"
                  name="passengers"
                  component={ShowError}
                />
                <span
                  title={passengers ? passengers : 'Complete the field'}
                >
                  <i
                    className={
                      passengers
                      ? 'fas fa-times field-warning'
                      : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="cargo_capacity"
                  name="cargo_capacity"
                  type="text"
                  placeholder="Cargo capacity"
                />
                <ErrorMessage
                  className="required-validation"
                  name="cargo_capacity"
                  component={ShowError}
                />
                <span
                  title={
                    cargo_capacity ? cargo_capacity : 'Complete the field'
                  }
                >
                  <i
                    className={
                      cargo_capacity
                      ? 'fas fa-times field-warning'
                      : 'fas fa-check field-correct'
                    }
                  ></i>
                </span>
              </div>
              <div className="input-field-container">
                <Field
                  className="input-field-data"
                  id="vehicle_class"
                  name="vehicle_class"
                  type="text"
                  placeholder="Vehicle class"
                />
                <ErrorMessage
                  className="required-validation"
                  name="vehicle_class"
                  component={ShowError}
                />
                <span
                  title={
                    vehicle_class ? vehicle_class : 'Complete the field'
                  }
                >
                  <i
                    className={
                      vehicle_class
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

export default VehicleFormEdit;

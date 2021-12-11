import React from 'react';
import { Formik, Form, Field } from 'formik';

import { Toast } from '../../../helpers/sweet-alert';
import Schema from './validations/Schema';

const VehicleFormEdit = ({ values, setInfo }) => {
  const initialValues = { ...values };
  const handleSubmit = (values) => {
    Toast('Edit complete', 'success');
    setInfo(true);
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
                  id="model"
                  name="model"
                  type="text"
                  placeholder="Modelo..."
                />
                <span title={model ? model : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      model
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                  placeholder="Productor..."
                />
                <span title={manufacturer ? manufacturer : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      manufacturer
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                  placeholder="Costo..."
                />
                <span
                  title={cost_in_credits ? cost_in_credits : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      cost_in_credits
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                  placeholder="Equipo..."
                />
                <span
                  title={crew ? crew : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      crew
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                  placeholder="Pasajeros..."
                />
                <span
                  title={passengers ? passengers : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      passengers
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                  placeholder="Capacidad de carga..."
                />
                <span
                  title={cargo_capacity ? cargo_capacity : 'Ingresá los nuevos datos'}
                >
                  <i
                    className={
                      cargo_capacity
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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
                  placeholder="Clase del vehículo..."
                />
                <span title={vehicle_class ? vehicle_class : 'Ingresá los nuevos datos'}>
                  <i
                    className={
                      vehicle_class
                        ? 'fas fa-info field-warning'
                        : 'fas fa-info field-correct'
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

export default VehicleFormEdit;

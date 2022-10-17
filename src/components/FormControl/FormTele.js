import React from "react";
import { Field, ErrorMessage } from "formik";
import { Alert, Form } from "react-bootstrap";
import Mandatory from "./Mandatory";
import ExclaimationMark from "./ExclaimationMark";
import PhoneInput from "react-phone-number-input";

const FormTele = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ form }) => {
        return (
          <Form.Group className="mb-2">
            <Form.Label htmlFor={name}>
              {label}
              <Mandatory />
            </Form.Label>
            <PhoneInput
              id={name}
              {...rest}
              name={name}
              value={form.values[name]}
              onChange={(e) => form.setFieldValue(name, e)}
              className="mb-2"
              onBlur={(e) => {
                form.setTouched({
                  ...form.touched,
                  [e.currentTarget.name]: true,
                });
              }}
              inputComponent={Form.Control}
              defaultCountry="IN"
            />
            <ErrorMessage name={name}>
              {(errorMsg) => (
                <Alert variant="danger">
                  <ExclaimationMark />
                  <span> </span>
                  {errorMsg}
                </Alert>
              )}
            </ErrorMessage>
          </Form.Group>
        );
      }}
    </Field>
  );
};

export default FormTele;

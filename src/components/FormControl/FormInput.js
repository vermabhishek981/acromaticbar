import React from "react";
import { Field, ErrorMessage } from "formik";
import { Alert, Form } from "react-bootstrap";
import Mandatory from "./Mandatory";
import ExclaimationMark from "./ExclaimationMark";

const FormInput = (props) => {
  const { label, name, ...rest } = props;

  return (
    <Form.Group>
      <Form.Label htmlFor={name}>
        {label}
        <Mandatory />
      </Form.Label>
      <Field id={name} name={name} {...rest} className="form-control mb-2" />
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
};

export default FormInput;

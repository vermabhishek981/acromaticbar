import React from "react";
import { Field, ErrorMessage } from "formik";
import { Alert, Col, Form } from "react-bootstrap";
import Mandatory from "./Mandatory";
import ExclaimationMark from "./ExclaimationMark";

const FormCheckBox = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <Field id={name} name={name} {...rest}>
      {({ field, form }) => {
        return (
          <Form.Group>
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Mandatory />
            <Col className="d-flex justify-content-between">
              {options.map((option) => {
                return (
                  <Form.Check inline key={option.key}>
                    <Form.Check.Input
                      type="checkbox"
                      name={option.value}
                      value={option.value}
                      checked={field.value === option.value}
                      onChange={(e) =>
                        form.setFieldValue(name, e.currentTarget.value)
                      }
                    />
                    <Form.Check.Label>{option.key}</Form.Check.Label>
                  </Form.Check>
                );
              })}
            </Col>
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

export default FormCheckBox;

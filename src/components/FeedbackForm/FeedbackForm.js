import React from "react";
import "./styles.css";
import { Formik, Form } from "formik";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import * as Yup from "yup";
import FormControl from "../FormControl/FormControl";
import FormTele from "../FormControl/FormTele";
import FormCheckBox from "../FormControl/FormCheckBox";
import { setModalShow } from "../../redux/features/formSlice";
import { useDispatch } from "react-redux";
import FormModal from "./FormModal";

// Checkbox options
const checkBoxOptions = [
  { key: "Excellent", value: "excellent" },
  { key: "Good", value: "good" },
  { key: "Fair", value: "fair" },
  { key: "Bad", value: "bad" },
];

// Initial values for Formik
var initialValues = {
  customerName: "",
  email: "",
  qos: "",
  qob: "",
  clean: "",
  dining: "",
  phone: "",
};

// Validation Schema's for Formik
const validationSchema = Yup.object({
  customerName: Yup.string().required(
    "Please enter the value for the above field."
  ),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter the value for the above field."),
  phone: Yup.string()
    .required("Please enter the value for the above field.")
    .min(10, "to short")
    .max(13, "to long"),
  qos: Yup.string().required("Please select a value for the above field."),
  qob: Yup.string().required("Please select a value for the above field."),
  clean: Yup.string().required("Please select a value for the above field."),
  dining: Yup.string().required("Please select a value for the above field."),
});

const FeedbackForm = () => {
  // Handling form submission
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(setModalShow(true));
    resetForm({
      values: {
        customerName: "",
        email: "",
        qos: "",
        qob: "",
        clean: "",
        dining: "",
        phone: "",
      },
    });
  };

  return (
    <>
      <Container>
        <Col className="pb-3">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <>
                  <Form>
                    <Row className="p-4 formInput mb-3">
                      <Col>
                        <Row className="mb-4">
                          <Card style={{ border: "none" }}>
                            <Card.Body>
                              <Card.Title>Acromatic Bar</Card.Title>
                              <Card.Text>
                                We are committed to providing you with the best
                                dining experience possible, so we welcome your
                                comments. Please fill out this questionnaire.
                                Thank you.
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Row>
                        <Row>
                          <Card style={{ border: "none" }}>
                            <Card.Body>
                              <Col>
                                <Row className="mb-2" xs={12}>
                                  <Col xs={12} md={6}>
                                    <FormControl
                                      control="input"
                                      type={"text"}
                                      name={"customerName"}
                                      label={"Customer Name"}
                                      placeholder={"e.g john doe"}
                                    />
                                  </Col>
                                  <Col xs={12} md={6}>
                                    <FormControl
                                      control="input"
                                      type={"email"}
                                      name={"email"}
                                      label={"Email"}
                                      placeholder={"e.g johndoe@gmail.com"}
                                    />
                                  </Col>
                                </Row>
                                <Row className="mb-2" xs={12}>
                                  <Col xs={12} md={6}>
                                    <FormTele
                                      control="tele"
                                      type={"tel"}
                                      name={"phone"}
                                      label={"Phone"}
                                      placeholder={"+91 74549 96896"}
                                    />
                                  </Col>
                                </Row>
                                <Row className="mb-2" xs={12}>
                                  <Col xs={12} md={6}>
                                    <FormCheckBox
                                      control="checkbox"
                                      name="qos"
                                      label="Please rate the quality of services you recieved from your host."
                                      options={checkBoxOptions}
                                    />
                                  </Col>
                                  <Col xs={12} md={6}>
                                    <FormCheckBox
                                      control="checkbox"
                                      name="qob"
                                      label="Please rate the quality of your beverage."
                                      options={checkBoxOptions}
                                    />
                                  </Col>
                                </Row>
                                <Row className="mb-2" xs={12}>
                                  <Col xs={12} md={6}>
                                    <FormCheckBox
                                      control="checkbox"
                                      name="clean"
                                      label="Was our restaurant clean ?"
                                      options={checkBoxOptions}
                                    />
                                  </Col>
                                  <Col xs={12} md={6}>
                                    <FormCheckBox
                                      control="checkbox"
                                      name="dining"
                                      label="Please rate your overall dining experience."
                                      options={checkBoxOptions}
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Card.Body>
                          </Card>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="row">
                      <Col style={{ display: "flex", justifyContent: "end" }}>
                        <Button variant="success" type="submit">
                          Submit Review
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </>
              );
            }}
          </Formik>
        </Col>
      </Container>
      <FormModal />
    </>
  );
};

export default FeedbackForm;

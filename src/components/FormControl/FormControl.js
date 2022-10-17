import React from "react";
import FormInput from "./FormInput";
import FormTele from "./FormTele";
import FormCheckBox from "./FormCheckBox";

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <FormInput {...rest} />;
    case "checkbox":
      return <FormCheckBox {...rest} />;
    case "tele":
      return <FormTele {...rest} />;
    default:
      return null;
  }
};

export default FormControl;

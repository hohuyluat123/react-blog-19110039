import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button} from "react-bootstrap";
  
const BlogForm = (props) => {
  const validationSchema = Yup.object().shape({
    content: Yup.string().required("Required")
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <h1>Content</h1>
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="content" type="text" 
                className="form-control" />
            <ErrorMessage
              name="content"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default BlogForm;
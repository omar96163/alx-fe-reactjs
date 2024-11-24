import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log('Form Values:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

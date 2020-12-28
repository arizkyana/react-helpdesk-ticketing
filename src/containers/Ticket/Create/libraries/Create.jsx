import {
  Form,
  Button,
  Breadcrumb,
  ProgressBar,
} from 'react-bootstrap';

import {
  Formik,
} from 'formik';

import {
  CreateFormInitialValues,
  CreateFormSchema,
} from './Create.Form';

const Create = () => {

  const handleOnSubmit = (values, {
    setSubmitting,
    resetForm,
  }) => {
    setSubmitting(true);
    console.log('form values :: ', values);
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 3000);
  };

  const renderProgress = (isSubmitting) => {
    return isSubmitting && (
      <ProgressBar
        animated
        now={100}
        style={{ margin: '1rem 0' }}
      />
    );
  };

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Create new Ticket</Breadcrumb.Item>
      </Breadcrumb>
      <Formik
        initialValues={CreateFormInitialValues}
        validationSchema={CreateFormSchema}
        onSubmit={handleOnSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} noValidate>
            {renderProgress(isSubmitting)}
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="Title"
                placeholder="Enter Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Title}
                isValid={touched.Title && !errors.Title}
                isInvalid={!!errors.Title}
              />
              {
                (touched.Title && errors.Title) ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.Title}
                  </Form.Control.Feedback>
                ) : null
              }
            </Form.Group>
            <Form.Group controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                as="select"
                name="Priority"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Priority}
                isValid={touched.Priority && !errors.Priority}
                isInvalid={!!errors.Priority}
              >
                <option value>Choose priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </Form.Control>
              {
                (touched.Priority && errors.Priority) ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.Priority}
                  </Form.Control.Feedback>
                ) : null
              }
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Description}
                isValid={touched.Description && !errors.Description}
                isInvalid={!!errors.Description}
              />
              {
                (touched.Description && errors.Description) ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.Description}
                  </Form.Control.Feedback>
                ) : null
              }
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
                        </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Create;

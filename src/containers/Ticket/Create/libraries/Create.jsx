import React from 'react';
import {
    Form,
    Button,
    Breadcrumb,
} from 'react-bootstrap';
import {
    useFormik,
} from 'formik';

import CreateValidation from './Create.Validation';

const Create = () => {

    const formik = useFormik({
        initialValues: {
            Title: '',
            Priority: '',
            Description: '',
            Attachment: '',
        },
        onSubmit: (values) => {
            console.log('values :: ', values);
        },
        validationSchema: CreateValidation,

    });

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Create new Ticket</Breadcrumb.Item>
            </Breadcrumb>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        onChange={formik.handleChange}
                        value={formik.values.Title}
                        name="Title"
                    />
                </Form.Group>
                <Form.Group controlId="formPriority">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={formik.handleChange}
                        value={formik.values.Priority}
                        name="Priority"
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={formik.handleChange}
                        value={formik.values.Description}
                        name="Description"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Attachment</Form.Label>
                    <Form.File
                        id="formAttachment"
                        label="Upload Attachment"
                        name="Attachment"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
};

export default Create;

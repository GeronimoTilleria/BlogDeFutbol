import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Ingrese su nombre de usuario"),
    password: Yup.string().required("Ingrese su contraseña"),
});

const initialValues = {
    username: "",
    password: "",
};

const LoginForm = () => {

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 500);
    };

    return (
        <div className='main-container login-form d-flex flex-column justify-content-center'>
            <div className='card p-5'>
                <h3>Iniciar sesión</h3>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className='mt-5'>
                            <div>
                                <label htmlFor="username">Nombre de usuario:</label>
                                <Field className="form-control" type="text" name="username" />
                                <ErrorMessage name="username" />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="password">Contraseña:</label>
                                <Field className="form-control" type="password" name="password" />
                                <ErrorMessage name="password" />
                            </div>
                            <button className="btn btn-secondary mt-4" type="submit" disabled={isSubmitting}>
                                Iniciar sesión
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}

export default LoginForm

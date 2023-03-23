import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('El nombre es requerido'),
    email: Yup.string()
        .email('El correo electrónico es inválido')
        .required('El correo electrónico es requerido'),
    password: Yup.string()
        .required('La contraseña es requerida')
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
});

const RegisterForm = () => {
    return (
        <div className='main-container login-form d-flex flex-column justify-content-center'>
            <div className='card p-4'>
                <h3>Registrarse</h3>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        // Lógica para enviar los datos del formulario
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='mt-5'>
                            <div>
                                <label htmlFor="name">Nombre:</label>
                                <Field className="form-control" type="text" id="name" name="name" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="email">Correo electrónico:</label>
                                <Field className="form-control" type="email" id="email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="password">Contraseña:</label>
                                <Field className="form-control" type="password" id="password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <button className="btn btn-secondary mt-4" type="submit" disabled={isSubmitting}>Registrarse</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default RegisterForm

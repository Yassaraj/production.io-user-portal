import React from "react";
import bgImg from '../assets/LoginImg.jpg';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Styles from "../styles/login.css";

const LoginSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string().required('Required'),
});

export default function Register(){

    //Todo--- add proper validation for confirm password
    const LoginSchema = Yup.object().shape({
        fullName: Yup.string().required('Required'),
        phoneNumber: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().required('Required'),
    });

  return (
    <div className="login_page">
        <div className="picture">
        </div>
        <div className="login-form">
                <div>
                    <Formik
                    initialValues={{
                         fullName: '',
                         phoneNumber: '',
                         email: '',
                         password: '',
                         confirmPassword:'',
                        }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting,errors, touched }) => (
                        <Form>
                             <label className="form-label">Full Name</label>
                            <div style={{ marginBottom: '30px' }}>
                                <Field type="text" name="fullName" className="field" />
                                {errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}
                            </div>
                            <label className="form-label">Phone Number</label>
                            <div style={{ marginBottom: '30px' }}> 
                                <Field type="text" name="phoneNumber" className="field"/>
                                {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
                            </div>
                            <label className="form-label">Email Address</label>
                            <div style={{ marginBottom: '30px' }}>
                                <Field type="email" name="email" className="field"/>
                                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            </div>
                            <label className="form-label">Password</label>
                            <div style={{ marginBottom: '30px' }}>
                                <Field type="password" name="password" className="field" />
                                {errors.password && touched.password ? <div>{errors.password}</div> : null}
                            </div>
                            <label className="form-label">Confirm Password</label>
                            <div style={{ marginBottom: '30px' }}>
                                <Field type="password" name="confirmPassword" className="field" />
                                {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type="submit" disabled={isSubmitting} className="submit-button">
                                    REGISTER
                                </button>
                            </div>
                        </Form>
                    )}
                    </Formik>

                </div>
            </div>
    </div>
  )
}
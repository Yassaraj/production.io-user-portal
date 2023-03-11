import React from "react";
import bgImg from '../assets/LoginImg.jpg';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Styles from "../styles/login.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export default function Login(){
  return (
    <div className="login_page">
        <div className="picture">
        </div>
        <div className="login-form">
                <div>
                    <h2 className="form-heading" style={{ marginBottom: '15px' }}>Log In</h2>

                    <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                             <label className="form-label" style={{ marginLeft: '10px' }}>Email Address</label>
                            <div style={{ marginBottom: '30px' }}>
                                <Field type="email" name="email" className="field"/>
                            </div>
                            <label className="form-label" style={{ marginLeft: '10px' }}>Password</label>
                            <div style={{ marginBottom: '30px' }}>
                                <div><Field type="password" name="password" className="field"/></div>
                                <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'flex-end' }}>
                                    <a href="/forgot-password" style={{ color: 'rgba(255, 255, 255, 0.693)' }}>Forgot Password?</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type="submit" disabled={isSubmitting} className="submit-button">
                                    LOGIN
                                </button>
                            </div>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            Don't have an account? <a href="/register" style={{ fontWeight: 'bold',color: 'white' }}>Register here!</a>
                        </div>
                        </Form>
                    )}
                    </Formik>

                </div>
            </div>
    </div>
  )
}
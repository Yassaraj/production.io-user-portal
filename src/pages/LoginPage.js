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
                             <label className="form-label">Email Address</label>
                            <div>
                                <Field type="email" name="email" className="field" style={{ marginBottom: '30px' }}/>
                            </div>
                            <label className="form-label">Password</label>
                            <div>
                                <Field type="password" name="password" className="field" style={{ marginBottom: '30px' }}/>
                            </div>
                        <button type="submit" disabled={isSubmitting} className="submit-button">
                            LOGIN
                        </button>
                        </Form>
                    )}
                    </Formik>

                </div>
            </div>
    </div>
  )
}
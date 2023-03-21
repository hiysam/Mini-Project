import { useFormik } from "formik"
import * as Yup from 'yup';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';
import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Login(){
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .email('Invalid email address')
                .required('Please enter your email'),
            password: Yup.string()
                .required('Please enter your password')
        }),
        onSubmit: async (values) => {
            console.log({values})
            const credentials = await signIn(
                'credentials',
                {
                    email: values?.email,
                    password: values?.password,
                    redirect: false
                }
            )

            if(credentials.ok){
                router.push('/product')
            }

            console.log(credentials);
        }
    })

    return(
        <MDBContainer>
            <MDBRow className='mt-5'>
                <MDBCol size='md'/>
                <MDBCol size='md'>
                    <form onSubmit={formik.handleSubmit}>
                        <p className='text-center'>Login</p>
                        <MDBInput className='mb-4' type='email' name={'email'} label='Email address' value={formik?.values?.email} onChange={formik.handleChange} />
                        {
                            formik.errors &&
                            formik.touched &&
                            formik.errors?.email &&
                            formik.touched.email &&
                            (
                                <span className={'!text-red-500 !text-xs'}>{formik.errors?.email}</span>
                            )
                        }
                        <MDBInput className='mb-4' type='password' name={'password'} label='Password' value={formik?.values?.password} onChange={formik.handleChange} />
                        {
                            formik.errors &&
                            formik.touched &&
                            formik.errors?.password &&
                            formik.touched.password &&
                            (
                                <span className={'!text-red-500 !text-xs'}>{formik.errors?.password}</span>
                            )
                        }
                        <MDBBtn type='submit' block>
                            Sign in
                        </MDBBtn>
                    </form>
                </MDBCol>
                <MDBCol size='md'/>
            </MDBRow>
            
        </MDBContainer>
    )
}
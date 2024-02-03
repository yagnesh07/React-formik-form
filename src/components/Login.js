import { Formik } from 'formik'
import React from 'react'
import "../App.css"

const Login = () => {
  return (
    <div>
      <div className='login'>
        <Formik 
        initialValues={{name: '', email: '', password: ''}}
        validate={values => {
            const errors = {}
            if (!values.email) {
                errors.email = "Email is required"
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = "Invalid email address"
            }
            if(!values.name) {
                errors.name = "Name is required"
            }
            if(!values.password) {
                errors.password = "Password is required"
            }
            return errors
        }}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            })
        }}
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form className='login_form' onSubmit={handleSubmit}>
                        <h1>Login info 📝</h1>
                        <input 
                            id='name'
                            type='text'
                            placeholder='Name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='error_message'>{errors.name && touched.name && errors.name}</span>
                        <input 
                            id='email'
                            type='email'
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='error_message'>{errors.email && touched.email && errors.email}</span>
                        <input 
                            id='password'
                            type='password'
                            placeholder='Password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='error_message'>{errors.password && touched.password && errors.password}</span>
                        <button className='submit_btn' type='submit' disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )
            }
        </Formik>
      </div>
    </div>
  )
}

export default Login

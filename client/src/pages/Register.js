import React from 'react'
import { Form, Input } from 'antd'
import "../styles/RegisterStyles.css"
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {

    const navigate = useNavigate()

    // form handler 
    const onFinishHandler = (values) => {
        console.log(values)
    }
    return (
        <>
            <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
                    <h1>Register</h1>
                    <Form.Item label='First Name' name='firstName' rules={[{ required: true, message: 'Please input your first name!' }]}>
                        <Input type='text' placeholder='First Name' required />
                    </Form.Item>
                    <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input type='email' placeholder='Email' required />
                    </Form.Item>
                    <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input password!' }]}>
                        <Input type='password' placeholder='Password' required />
                    </Form.Item>
                    <Link to={"/login"} className='m-2'>Already a user? Login</Link>
                    <button className='btn btn-primary' type='submit'>Register</button>
                </Form>
            </div>
        </>
    )
}

export default Register
import React from 'react'
import { Form, Input } from 'antd'
import { Link } from 'react-router-dom';

const Login = () => {
    // form handler 
    const onFinishHandler = (values) => {
        console.log(values);
    }
    return (
        <>
            <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
                    <h1 className='text-center text-3xl'>Login</h1>
                    <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
                        <Input type='email' placeholder='Email' required />
                    </Form.Item>
                    <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input password!' }]}>
                        <Input type='password' placeholder='Password' required />
                    </Form.Item>
                    <Link to={"/register"} className='m-2'>New Here? Register</Link>
                    <button className='btn btn-primary' type='submit'>Login</button>
                </Form>
            </div>
        </>
    )
}

export default Login
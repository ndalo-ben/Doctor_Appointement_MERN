import React from 'react'
import { Form, Input } from 'antd'

const Register = () => {

    // form handler 
    const onFinishHandler = (values) => {
        console.log(values)
    }
    return (
        <>
            <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler}>
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
                    <button className='btn btn-primary' type='submit'>Register</button>
                </Form>
            </div>
        </>
    )
}

export default Register
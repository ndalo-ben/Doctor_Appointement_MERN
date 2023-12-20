import React from 'react'
import { Form, Input, message } from 'antd'
import "../styles/RegisterStyles.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate();
    // form handler 
    const onFinishHandler = async (values) => {
        try {
            const res = await axios.post('/api/v1/users/register', values);
            if (res.data.success) {
                message.success('Success!')
                navigate('/login');
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            message.error('Something Went Wrong')
        }
    };
    return (
        <>
            <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
                    <h1 className='text-center'>Register</h1>
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
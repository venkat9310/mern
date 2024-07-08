import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './App';

function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const { users } = useContext(FormContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const user = users.find(u => u.email === form.email && u.password === form.password);
        if (user) {
            navigate('/profile');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <form>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
                <button type="button" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;

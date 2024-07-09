import React, { useState, useContext } from 'react';
import { FormContext } from './App';

function Register() {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
    });

    const { users, setUsers } = useContext(FormContext);

    const handleSubmit = () => {
        setUsers([...users, form]);
        setForm({
            name: '',
            age: '',
            email: '',
            password: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <div>
            <form>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
                <button type="button" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
}

export default Register;

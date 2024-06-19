import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Create() {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        permission_level: '',
        company_id: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('members.store'), form);
    };

    return (
        <div>
            <h1>Add Member</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" />
                <input type="text" name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" />
                <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" />
                <select name="permission_level" value={form.permission_level} onChange={handleChange}>
                    <option value="">Select Permission Level</option>
                    <option value="Technician">Technician</option>
                    <option value="Tech - Billing">Tech - Billing</option>
                    <option value="Order Taker">Order Taker</option>
                    <option value="Dispatcher">Dispatcher</option>
                    <option value="Billing Staff">Billing Staff</option>
                    <option value="Assistant Manager">Assistant Manager</option>
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                </select>
                <input type="text" name="company_id" value={form.company_id} onChange={handleChange} placeholder="Company ID" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

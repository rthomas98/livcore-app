import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Create() {
    const [form, setForm] = useState({
        company_logo: '',
        company_name: '',
        contact_name: '',
        physical_address: '',
        mailing_address: '',
        email: '',
        phone: '',
        secondary_phone: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('companies.store'), form);
    };

    return (
        <div>
            <h1>Create Company</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" name="company_logo" onChange={handleChange} />
                <input type="text" name="company_name" value={form.company_name} onChange={handleChange} />
                <input type="text" name="contact_name" value={form.contact_name} onChange={handleChange} />
                <input type="text" name="physical_address" value={form.physical_address} onChange={handleChange} />
                <input type="text" name="mailing_address" value={form.mailing_address} onChange={handleChange} />
                <input type="email" name="email" value={form.email} onChange={handleChange} />
                <input type="text" name="phone" value={form.phone} onChange={handleChange} />
                <input type="text" name="secondary_phone" value={form.secondary_phone} onChange={handleChange} />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

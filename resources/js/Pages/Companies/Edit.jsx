import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Edit({ company }) {
    const [form, setForm] = useState({
        company_logo: null,
        company_name: company.company_name,
        contact_name: company.contact_name,
        physical_address: company.physical_address,
        mailing_address: company.mailing_address,
        email: company.email,
        phone: company.phone,
        secondary_phone: company.secondary_phone,
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(form).forEach(key => formData.append(key, form[key]));
        Inertia.post(route('companies.update', company.id), formData, {
            forceFormData: true,
            onFinish: () => setForm({ ...form, company_logo: null }),
        });
    };

    return (
        <div>
            <h1>Edit Company</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="company_logo" onChange={handleChange} />
                <input type="text" name="company_name" value={form.company_name} onChange={handleChange} placeholder="Company Name" />
                <input type="text" name="contact_name" value={form.contact_name} onChange={handleChange} placeholder="Contact Name" />
                <input type="text" name="physical_address" value={form.physical_address} onChange={handleChange} placeholder="Physical Address" />
                <input type="text" name="mailing_address" value={form.mailing_address} onChange={handleChange} placeholder="Mailing Address" />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
                <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
                <input type="text" name="secondary_phone" value={form.secondary_phone} onChange={handleChange} placeholder="Secondary Phone" />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

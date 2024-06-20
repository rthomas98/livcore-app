import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        contact_name: '',
        physical_address: '',
        mailing_address: '',
        email: '',
        phone: '',
        secondary_phone: '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('customers.store'));
    };

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add A New Customer</h2>}>
            <Head title="Add A New Customer" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" value={data.name} onChange={handleChange} />
                                    {errors.name && <div>{errors.name}</div>}
                                </div>
                                <div>
                                    <label htmlFor="contact_name">Contact Name</label>
                                    <input type="text" name="contact_name" value={data.contact_name} onChange={handleChange} />
                                    {errors.contact_name && <div>{errors.contact_name}</div>}
                                </div>
                                <div>
                                    <label htmlFor="physical_address">Physical Address</label>
                                    <input type="text" name="physical_address" value={data.physical_address} onChange={handleChange} />
                                    {errors.physical_address && <div>{errors.physical_address}</div>}
                                </div>
                                <div>
                                    <label htmlFor="mailing_address">Mailing Address</label>
                                    <input type="text" name="mailing_address" value={data.mailing_address} onChange={handleChange} />
                                    {errors.mailing_address && <div>{errors.mailing_address}</div>}
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={data.email} onChange={handleChange} />
                                    {errors.email && <div>{errors.email}</div>}
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" value={data.phone} onChange={handleChange} />
                                    {errors.phone && <div>{errors.phone}</div>}
                                </div>
                                <div>
                                    <label htmlFor="secondary_phone">Secondary Phone</label>
                                    <input type="text" name="secondary_phone" value={data.secondary_phone} onChange={handleChange} />
                                    {errors.secondary_phone && <div>{errors.secondary_phone}</div>}
                                </div>
                                <button type="submit" disabled={processing}>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

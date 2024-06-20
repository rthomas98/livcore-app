import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, customer }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Customer Details</h2>}
        >
            <Head title="Customer Details" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                <h3>{customer.name}</h3>
                                <p>Contact Name: {customer.contact_name}</p>
                                <p>Physical Address: {customer.physical_address}</p>
                                <p>Mailing Address: {customer.mailing_address}</p>
                                <p>Email: {customer.email}</p>
                                <p>Phone: {customer.phone}</p>
                                <p>Secondary Phone: {customer.secondary_phone}</p>
                            </div>
                            <Link href={route('customers.edit', customer.id)} className="btn btn-primary mt-3">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

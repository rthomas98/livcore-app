import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Edit({ auth, member }) {
    const { data, setData, put, processing, errors } = useForm({
        first_name: member.first_name || '',
        last_name: member.last_name || '',
        phone: member.phone || '',
        permission_level: member.permission_level || '',
        email: member.email || '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('members.update', member.id), {
            onSuccess: () => {
                console.log('Member updated successfully.');
            },
        });
    };

    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this member?")) {
            Inertia.delete(route('members.destroy', member.id), {
                onSuccess: () => {
                    console.log('Member deleted successfully.');
                },
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Member</h2>}
        >
            <Head title="Edit Member" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                        <h2 className="sr-only" id="profile-overview-title">Profile Overview</h2>
                        <div className="bg-white p-6">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <div className="sm:flex sm:space-x-5">
                                    <div className="flex-shrink-0">
                                        <img className="mx-auto h-20 w-20 rounded-full"
                                             src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt=""/>
                                    </div>
                                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">{member.first_name} {member.last_name}</p>
                                        <p className="text-sm font-medium text-gray-600">{member.permission_level}</p>
                                        <p className="text-sm font-medium text-gray-600">{member.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-white p-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="sm:col-span-1">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        value={data.first_name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.first_name && <div className="text-red-600">{errors.first_name}</div>}
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        value={data.last_name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.last_name && <div className="text-red-600">{errors.last_name}</div>}
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={data.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.phone && <div className="text-red-600">{errors.phone}</div>}
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="permission_level" className="block text-sm font-medium text-gray-700">Permission Level</label>
                                    <select
                                        name="permission_level"
                                        id="permission_level"
                                        value={data.permission_level}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
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
                                    {errors.permission_level && <div className="text-red-600">{errors.permission_level}</div>}
                                </div>

                                <div className="sm:col-span-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                    {errors.email && <div className="text-red-600">{errors.email}</div>}
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end">
                                <Link
                                    href={route('members.show', member.id)}
                                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    disabled={processing}
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Delete Member
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

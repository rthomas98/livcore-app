import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        phone: '',
        permission_level: '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data: ", data);
        post(route('members.store'), {
            onSuccess: () => {
                console.log("Member created successfully.");
                Inertia.visit(route('members.index'), {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: (page) => {
                        page.props.flash.message = 'Member created successfully.';
                    },
                });
            },
            onError: (errors) => {
                console.log("Errors: ", errors);
            }
        });
    };

    const handleCancel = () => {
        Inertia.visit(route('members.index'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add A New Member</h2>}
        >
            <Head title="Add A New Member" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="space-y-10 divide-y divide-gray-900/10">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                            <div className="px-4 sm:px-0">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div className="px-4 py-6 sm:p-8">
                                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    id="first_name"
                                                    value={data.first_name}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="First Name"
                                                />
                                                {errors.first_name && <div className="text-red-600">{errors.first_name}</div>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    id="last_name"
                                                    value={data.last_name}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Last Name"
                                                />
                                                {errors.last_name && <div className="text-red-600">{errors.last_name}</div>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                                Phone
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    value={data.phone}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    placeholder="Phone (optional)"
                                                />
                                                {errors.phone && <div className="text-red-600">{errors.phone}</div>}
                                            </div>
                                        </div>

                                        <div className="sm:col-span-6">
                                            <label htmlFor="permission_level" className="block text-sm font-medium leading-6 text-gray-900">
                                                Permission Level
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    name="permission_level"
                                                    id="permission_level"
                                                    value={data.permission_level}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={processing}>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

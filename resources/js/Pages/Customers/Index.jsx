import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';
    const phoneNumberString = phoneNumber.toString();
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
};


export default function Index({ auth, customers }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Customers</h2>}
        >
            <Head title="Customers" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg p-6">

                        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                            <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                                <div className="ml-4 mt-4">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900">Customers</h3>
                                    <p className="mt-1 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit quam corrupti consectetur.</p>
                                </div>
                                <div className="ml-4 mt-4 flex-shrink-0">

                                    <Link href={route('customers.create')}
                                          className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Add New Customer
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <ul role="list" className="divide-y divide-gray-100">
                            {customers.map((customer) => (
                                <Link href={route('customers.show', customer.id)} key={customer.id} class="relative flex justify-between gap-x-6 py-5 hover:bg-gray-50">
                                    <div class="flex min-w-0 gap-x-4">
                                        <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
                                             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt="" />
                                            <div class="min-w-0 flex-auto">
                                                <p class="text-sm font-semibold leading-6 text-gray-900">
                                                    <a href="#">
                                                        <span class="absolute inset-x-0 -top-px bottom-0"></span>
                                                        {customer.name}
                                                    </a>
                                                </p>
                                                <p class="mt-1 flex text-xs leading-5 text-gray-500">
                                                    <a href="mailto:{customer.email}"
                                                       class="relative truncate hover:underline">{customer.email}</a>
                                                </p>
                                            </div>
                                    </div>
                                    <div class="flex shrink-0 items-center gap-x-4">
                                        <div class="hidden sm:flex sm:flex-col sm:items-end">
                                            <p class="text-sm leading-6 text-gray-900">{customer.physical_address}</p>
                                            <p class="mt-1 text-xs leading-5 text-gray-500">{formatPhoneNumber(customer.phone)}</p>
                                        </div>
                                        <Link
                                            href={route('customers.show', customer.id)}
                                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                        >
                                        <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd"
                                                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                        </Link>
                                    </div>
                                </Link>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

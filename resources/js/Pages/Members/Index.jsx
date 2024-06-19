import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Index({ auth, members }) {
    const { flash } = usePage().props;

    console.log("Members: ", members);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Members</h2>}
        >
            <Head title="Members" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {flash && flash.message && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {flash.message}
                        </div>
                    )}
                    <div className="mb-4">
                        <Link
                            href={route('members.create')}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add New Member
                        </Link>
                    </div>
                    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member) => (
                            <li key={member.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                                <Link href={route('members.show', member.id)} className="block hover:bg-gray-50">
                                    <div className="flex w-full items-center justify-between space-x-6 p-6">
                                        <div className="flex-1 truncate">
                                            <div className="flex items-center space-x-3">
                                                <h3 className="truncate text-sm font-medium text-gray-900">
                                                    {member.first_name} {member.last_name}
                                                </h3>
                                                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                    {member.permission_level}
                                                </span>
                                            </div>
                                            <p className="mt-1 truncate text-sm text-gray-500">{member.phone}</p>
                                        </div>
                                        <img
                                            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                            src={`https://avatars.dicebear.com/api/initials/${member.first_name}-${member.last_name}.svg`}
                                            alt=""
                                        />
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

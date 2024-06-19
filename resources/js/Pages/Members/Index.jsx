import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';


export default function Index({ auth, members}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Members" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <Link href={route('members.create')} className="btn btn-primary">Add New Member</Link>
                    <ul>
                        {members.map((member) => (
                            <li key={member.id}>
                                <Link
                                    href={route('members.show', member.id)}>{member.first_name} {member.last_name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
);
}

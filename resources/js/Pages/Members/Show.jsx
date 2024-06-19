import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Show({ member }) {
    return (
        <div>
            <h1>{member.first_name} {member.last_name}</h1>
            <p>Phone: {member.phone}</p>
            <p>Permission Level: {member.permission_level}</p>
            <p>Company ID: {member.company_id}</p>
            <Link href={route('members.edit', member.id)} className="btn btn-primary">Edit</Link>
        </div>
    );
}

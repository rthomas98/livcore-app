import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Index({ companies }) {
    return (
        <div>
            <h1>Companies</h1>
            <Link href={route('companies.create')} className="btn btn-primary">Create New Company</Link>
            <ul>
                {companies.map((company) => (
                    <li key={company.id}>
                        <Link href={route('companies.show', company.id)}>{company.company_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

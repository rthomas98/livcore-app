<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companies = Company::all();
        return inertia('Companies/Index', ['companies' => $companies]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Companies/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'company_logo' => 'nullable|image',
            'company_name' => 'required|string|max:255',
            'contact_name' => 'required|string|max:255',
            'physical_address' => 'required|string',
            'mailing_address' => 'nullable|string',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|string|max:20',
            'secondary_phone' => 'nullable|string|max:20',
        ]);

        $company = Company::create($validated);

        return redirect()->route('companies.index')->with('success', 'Company created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        return inertia('Companies/Show', ['company' => $company]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        return inertia('Companies/Edit', ['company' => $company]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company)
    {
        $validated = $request->validate([
            'company_logo' => 'nullable|image',
            'company_name' => 'required|string|max:255',
            'contact_name' => 'required|string|max:255',
            'physical_address' => 'required|string',
            'mailing_address' => 'nullable|string',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|string|max:20',
            'secondary_phone' => 'nullable|string|max:20',
        ]);

        $company->update($validated);

        return redirect()->route('companies.index')->with('success', 'Company updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        $company->delete();
        return redirect()->route('companies.index')->with('success', 'Company deleted successfully.');
    }
}

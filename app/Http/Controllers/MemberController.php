<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function index()
    {
        $members = Member::all();
        return inertia('Members/Index', ['members' => $members]);
    }

    public function create()
    {
        return inertia('Members/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:255',
            'permission_level' => 'required|string|max:255',
        ]);

        Member::create($request->all());

        return redirect()->route('members.index')->with('message', 'Member created successfully.');
    }

    public function show(Member $member)
    {
        return inertia('Members/Show', ['member' => $member]);
    }

    public function edit(Member $member)
    {
        return inertia('Members/Edit', ['member' => $member]);
    }

    public function update(Request $request, Member $member)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:255',
            'permission_level' => 'required|string|max:255',
        ]);

        $member->update($request->all());

        return redirect()->route('members.index')->with('message', 'Member updated successfully.');
    }

    public function destroy(Member $member)
    {
        $member->delete();

        return redirect()->route('members.index')->with('message', 'Member deleted successfully.');
    }
}

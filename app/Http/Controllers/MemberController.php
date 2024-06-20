<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Mail\InvitationMail;

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
            'email' => 'required|email|unique:users,email|unique:invitations,email|unique:members,email',
        ]);

        $invitation = Invitation::create([
            'email' => $request->email,
            'token' => Str::random(32),
        ]);

        Mail::to($invitation->email)->send(new InvitationMail($invitation));

        Member::create($request->all());

        return redirect()->route('members.index')->with('message', 'Member created and invitation sent successfully.');
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
            'email' => 'required|email|unique:users,email|unique:invitations,email|unique:members,email,' . $member->id,
        ]);

        $member->update($request->all());

        return redirect()->route('members.show', $member)->with('message', 'Member updated successfully.');
    }

    public function destroy(Member $member)
    {
        $member->delete();

        return redirect()->route('members.index')->with('message', 'Member deleted successfully.');
    }

}

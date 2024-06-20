<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class InvitationController extends Controller
{
    public function accept($token)
    {
        $invitation = Invitation::where('token', $token)->firstOrFail();
        return view('invitations.accept', ['invitation' => $invitation]);
    }

    public function register(Request $request, $token)
    {
        $request->validate([
            'password' => 'required|string|min:8|confirmed',
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
        ]);

        $invitation = Invitation::where('token', $token)->firstOrFail();

        $user = User::create([
            'email' => $invitation->email,
            'password' => Hash::make($request->password),
            'name' => $request->first_name . ' ' . $request->last_name,
        ]);

        $invitation->delete();

        return redirect()->route('login')->with('message', 'Account created successfully. Please log in.');
    }
}

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    // Where to redirect users after login.
    protected $redirectTo = '/dashboard';

    // Create a new controller instance.
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    // Override the loggedOut method
    protected function loggedOut(Request $request)
    {
        return redirect('/');
    }
}

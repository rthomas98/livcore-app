<?php
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


// Your existing routes
Route::get('/', function () {
    return view('Welcome');
});

// Your existing routes
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');

// Member routes
Route::resource('members', MemberController::class)->middleware(['auth']);

// Invitation routes
Route::get('invitations/accept/{token}', [InvitationController::class, 'accept'])->name('invitations.accept');
Route::post('invitations/accept/{token}', [InvitationController::class, 'register'])->name('invitations.register');

// Profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Authentication routes
require __DIR__.'/auth.php';

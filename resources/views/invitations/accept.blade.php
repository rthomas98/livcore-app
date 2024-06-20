<form method="POST" action="{{ route('invitations.register', $invitation->token) }}">
    @csrf
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" required>
    </div>
    <div>
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" name="password_confirmation" required>
    </div>
    <button type="submit">Set Password</button>
</form>

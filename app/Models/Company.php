<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_logo',
        'company_name',
        'contact_name',
        'physical_address',
        'mailing_address',
        'email',
        'phone',
        'secondary_phone',
    ];

    public function members()
    {
        return $this->hasMany(Member::class);
    }
}

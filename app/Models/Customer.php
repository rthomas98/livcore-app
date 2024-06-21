<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'contact_name',
        'physical_address',
        'mailing_address',
        'email',
        'phone',
        'secondary_phone',
        'billing_address',
        'billing_country',
        'billing_address2',
        'billing_city',
        'billing_state',
        'billing_zip',
        'billing_county',
    ];
}

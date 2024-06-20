<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddEmailToMembersTable extends Migration
{
    public function up()
    {
        Schema::table('members', function (Blueprint $table) {
            if (!Schema::hasColumn('members', 'email')) {
                $table->string('email')->nullable()->after('permission_level');
            }

            // Ensure the unique constraint does not exist before adding it
            $table->unique('email', 'members_email_unique');
        });
    }

    public function down()
    {
        Schema::table('members', function (Blueprint $table) {
            $table->dropUnique('members_email_unique');
            $table->dropColumn('email');
        });
    }
}

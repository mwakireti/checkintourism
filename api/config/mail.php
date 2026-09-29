<?php

use Dotenv\Dotenv;

// Load .env from the api directory
$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

return [
    "booking" => [
        "host" => $_ENV["BOOKING_MAIL_HOST"],
        "username" => $_ENV["BOOKING_MAIL_USERNAME"],
        "password" => $_ENV["BOOKING_MAIL_PASSWORD"],
        "encryption" => $_ENV["BOOKING_MAIL_ENCRYPTION"],
        "port" => (int) $_ENV["BOOKING_MAIL_PORT"],

        "from_email" => $_ENV["BOOKING_FROM_EMAIL"],
        "from_name" => $_ENV["BOOKING_FROM_NAME"],
        "to_email" => $_ENV["BOOKING_TO_EMAIL"],
    ],

    "contact" => [
        "host" => $_ENV["CONTACT_MAIL_HOST"],
        "username" => $_ENV["CONTACT_MAIL_USERNAME"],
        "password" => $_ENV["CONTACT_MAIL_PASSWORD"],
        "encryption" => $_ENV["CONTACT_MAIL_ENCRYPTION"],
        "port" => (int) $_ENV["CONTACT_MAIL_PORT"],

        "from_email" => $_ENV["CONTACT_FROM_EMAIL"],
        "from_name" => $_ENV["CONTACT_FROM_NAME"],
        "to_email" => $_ENV["CONTACT_TO_EMAIL"],
        "cc_email" => $_ENV["CONTACT_CC_EMAIL"],
    ],
];

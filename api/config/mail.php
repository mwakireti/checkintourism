<?php

use Dotenv\Dotenv;

// Load .env from the api directory
$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

return [
    "host" => $_ENV["MAIL_HOST"],
    "username" => $_ENV["MAIL_USERNAME"],
    "password" => $_ENV["MAIL_PASSWORD"],
    "encryption" => $_ENV["MAIL_ENCRYPTION"],
    "port" => (int) $_ENV["MAIL_PORT"],

    "from_email" => $_ENV["MAIL_FROM_EMAIL"],
    "from_name" => $_ENV["MAIL_FROM_NAME"],

    "to_email" => $_ENV["MAIL_TO_EMAIL"],
];

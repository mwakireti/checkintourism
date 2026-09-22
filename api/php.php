<?php

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Method not allowed."
    ]);

    exit;
}

$input = json_decode(file_get_contents("php://input"), true);

if (!is_array($input)) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request data."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| Get form values
|--------------------------------------------------------------------------
*/

$fullName = trim($input["fullName"] ?? "");
$email = trim($input["email"] ?? "");
$phone = trim($input["phone"] ?? "");
$destination = trim($input["destination"] ?? "");

$departureDate = trim($input["departureDate"] ?? "");
$returnDate = trim($input["returnDate"] ?? "");

$travellers = trim($input["travellers"] ?? "");
$tripType = trim($input["tripType"] ?? "");
$message = trim($input["message"] ?? "");

/*
|--------------------------------------------------------------------------
| Basic validation
|--------------------------------------------------------------------------
*/

if ($fullName === "" || $email === "" || $phone === "" || $destination === "") {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please complete all required fields."
    ]);

    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| Email configuration
|--------------------------------------------------------------------------
*/

$to = "sales@checkintourism.com";

$subject = "New Travel Booking Request - Check In Travel & Tours";

/*
|--------------------------------------------------------------------------
| Build email
|--------------------------------------------------------------------------
*/

$emailBody = "NEW TRAVEL BOOKING REQUEST\n\n";

$emailBody .= "CUSTOMER DETAILS\n";
$emailBody .= "----------------\n";
$emailBody .= "Full Name: " . $fullName . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Phone / WhatsApp: " . $phone . "\n\n";

$emailBody .= "TRIP DETAILS\n";
$emailBody .= "------------\n";
$emailBody .= "Destination: " . $destination . "\n";
$emailBody .= "Departure Date: " . ($departureDate ?: "Not provided") . "\n";
$emailBody .= "Return Date: " . ($returnDate ?: "Not provided") . "\n";
$emailBody .= "Travellers: " . ($travellers ?: "Not provided") . "\n";
$emailBody .= "Trip Type: " . ($tripType ?: "Not provided") . "\n\n";

$emailBody .= "ADDITIONAL INFORMATION\n";
$emailBody .= "----------------------\n";
$emailBody .= ($message ?: "No additional information provided.") . "\n";

/*
|--------------------------------------------------------------------------
| Email headers
|--------------------------------------------------------------------------
*/

$headers = [];

$headers[] = "From: Check In Travel & Tours <sales@checkin.menu>";
$headers[] = "Reply-To: " . $email;
$headers[] = "Content-Type: text/plain; charset=UTF-8";

/*
|--------------------------------------------------------------------------
| Send email
|--------------------------------------------------------------------------
*/

$mailSent = mail(
    $to,
    $subject,
    $emailBody,
    implode("\r\n", $headers)
);

if (!$mailSent) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "We could not send your request. Please try again later."
    ]);

    exit;
}

echo json_encode([
    "success" => true,
    "message" => "Your trip request has been sent successfully."
]);
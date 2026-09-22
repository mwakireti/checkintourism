<?php

header("Content-Type: application/json; charset=UTF-8");

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Method not allowed."
    ]);

    exit;
}

// Read JSON request body
$rawInput = file_get_contents("php://input");

$input = json_decode($rawInput, true);

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

if (
    $fullName === "" ||
    $email === "" ||
    $phone === "" ||
    $destination === ""
) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please complete all required fields."
    ]);

    exit;
}


// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}


// Prevent excessively long input
if (strlen($fullName) > 150) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Full name is too long."
    ]);

    exit;
}

if (strlen($destination) > 200) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Destination is too long."
    ]);

    exit;
}

if (strlen($message) > 5000) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Your message is too long."
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

$headers[] = "From: Check In Travel & Tours <sales@checkintourism.com>";
$headers[] = "Reply-To: " . $email;
$headers[] = "MIME-Version: 1.0";
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


/*
|--------------------------------------------------------------------------
| Handle result
|--------------------------------------------------------------------------
*/

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
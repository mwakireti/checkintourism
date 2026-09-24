<?php

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Method not allowed."
    ]);

    exit;
}

$input = json_decode(
    file_get_contents("php://input"),
    true
);

if (!is_array($input)) {
    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request."
    ]);

    exit;
}

$name = trim($input["name"] ?? "");
$email = trim($input["email"] ?? "");
$phone = trim($input["phone"] ?? "");
$service = trim($input["service"] ?? "");
$subject = trim($input["subject"] ?? "");
$message = trim($input["message"] ?? "");

if ($name === "" || $email === "" || $phone === "" || $message === "") {
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

$to = "sales@checkintourism.com";

$emailSubject = "New Contact Enquiry - Check In Travel & Tours";

$headers = [];

$headers[] = "From: Check In Travel & Tours <sales@checkintourism.com>";
$headers[] = "Reply-To: " . $email;
$headers[] = "Cc: info@checkintourism.com";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

$emailBody = "NEW CONTACT ENQUIRY\n";
$emailBody .= "====================\n\n";

$emailBody .= "CONTACT DETAILS\n";
$emailBody .= "Name: " . $name . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Phone: " . $phone . "\n\n";

$emailBody .= "TRAVEL ENQUIRY\n";
$emailBody .= "Service: " . ($service ?: "Not specified") . "\n";
$emailBody .= "Subject: " . ($subject ?: "Not specified") . "\n\n";

$emailBody .= "MESSAGE\n";
$emailBody .= "-------\n";
$emailBody .= $message . "\n";

$sent = mail(
    $to,
    $emailSubject,
    $emailBody,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "We could not send your message. Please try again later."
    ]);

    exit;
}

echo json_encode([
    "success" => true,
    "message" => "Message sent successfully."
]);
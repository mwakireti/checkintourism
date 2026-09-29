<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Load mail configuration
$mailConfig = require __DIR__ . '/config/mail.php';

// Use the CONTACT mail configuration
$contactMail = $mailConfig["contact"];

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

// Get form values
$name = trim($input["name"] ?? "");
$email = trim($input["email"] ?? "");
$phone = trim($input["phone"] ?? "");
$service = trim($input["service"] ?? "");
$subject = trim($input["subject"] ?? "");
$message = trim($input["message"] ?? "");

// Required fields
if (
    $name === "" ||
    $email === "" ||
    $phone === "" ||
    $message === ""
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

// Build email body
$emailBody = "NEW CONTACT ENQUIRY\n";
$emailBody .= "====================\n\n";

$emailBody .= "CONTACT DETAILS\n";
$emailBody .= "---------------\n";
$emailBody .= "Name: " . $name . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Phone: " . $phone . "\n\n";

$emailBody .= "TRAVEL ENQUIRY\n";
$emailBody .= "--------------\n";
$emailBody .= "Service: " . ($service ?: "Not specified") . "\n";
$emailBody .= "Subject: " . ($subject ?: "Not specified") . "\n\n";

$emailBody .= "MESSAGE\n";
$emailBody .= "-------\n";
$emailBody .= $message . "\n";

try {

    $mail = new PHPMailer(true);

    // SMTP
    $mail->isSMTP();

    $mail->Host = $contactMail["host"];
    $mail->SMTPAuth = true;
    $mail->Username = $contactMail["username"];
    $mail->Password = $contactMail["password"];

    if ($contactMail["encryption"] === "ssl") {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->Port = (int) $contactMail["port"];

    // Character encoding
    $mail->CharSet = "UTF-8";

    // Sender
    $mail->setFrom(
        $contactMail["from_email"],
        $contactMail["from_name"]
    );

    // Main recipient
    $mail->addAddress(
        $contactMail["to_email"]
    );

    // CC
    if (!empty($contactMail["cc_email"])) {
        $mail->addCC(
            $contactMail["cc_email"]
        );
    }

    // Customer's email becomes Reply-To
    $mail->addReplyTo(
        $email,
        $name
    );

    // Plain-text email
    $mail->isHTML(false);

    $mail->Subject =
        "New Contact Enquiry - Check In Travel & Tours";

    $mail->Body = $emailBody;

    // Send
    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully."
    ]);

} catch (Exception $e) {

    error_log(
        "Contact email error: " . $mail->ErrorInfo
    );

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" =>
            "We could not send your message. Please try again later."
    ]);
}
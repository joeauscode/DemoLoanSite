<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $subscriber_email = $_POST['subscribe'] ?? '';

    if (!filter_var($subscriber_email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid email address.']);
        exit;
    }

    $company_email = "yourcompany@example.com"; 
    $subject = "New Subscription";
    $message = "New subscriber: $subscriber_email";

    try {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';       
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@example.com'; 
        $mail->Password = 'your_password';        
        $mail->SMTPSecure = 'tls';                 
        $mail->Port = 587;                         

        // Send to company
        $mail->setFrom('your_email@example.com', 'Your Company');
        $mail->addAddress($company_email);
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Subscription successful.']);

    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Mailer Error: {$mail->ErrorInfo}"]);
    }

} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>

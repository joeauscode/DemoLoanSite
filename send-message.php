<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $full_name = $_POST['full_name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message_content = $_POST['message'] ?? '';

    if (!$full_name || !$email || !$subject || !$message_content) {
        echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';      
        $mail->SMTPAuth = true;
        $mail->Username = 'support@eloanhub.com'; 
        $mail->Password = '#Pp@EWtD8';        
        $mail->SMTPSecure = 'tls';                
        $mail->Port = 587; 
        
        // Sender & recipient
        $mail->setFrom('support@eloanhub.com', 'eLoanHub');
        $mail->addReplyTo($email, $full_name);
        $mail->addAddress('loans@company.com', 'Company');

        // Email content
        $mail->isHTML(true);
        $mail->Subject = "Contact Form: $subject";
        $mail->Body    = "
            <h2>New Message from Contact Form</h2>
            <p><strong>Full Name:</strong> {$full_name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message_content)) . "</p>
        ";

        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>

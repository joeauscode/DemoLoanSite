<?php
// Manually include PHPMailer classes
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Collect form data
    $first_name = trim($_POST['first_name'] ?? '');
    $last_name = trim($_POST['last_name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $dob = trim($_POST['dob'] ?? '');
    $id_number = trim($_POST['id_number'] ?? '');
    
    $loan_type = trim($_POST['loan_type'] ?? '');
    $loan_amount = trim($_POST['loan_amount'] ?? '');
    $loan_term = trim($_POST['loan_term'] ?? '');
    $loan_purpose = trim($_POST['loan_purpose'] ?? '');
    
    $street = trim($_POST['street'] ?? '');
    $city = trim($_POST['city'] ?? '');
    $state = trim($_POST['state'] ?? '');
    $postal = trim($_POST['postal'] ?? '');
    
    $employment_status = trim($_POST['employment_status'] ?? '');
    $employer_name = trim($_POST['employer_name'] ?? '');
    $monthly_income = trim($_POST['monthly_income'] ?? '');
    $co_applicant = trim($_POST['co_applicant'] ?? '');
    $terms_agreed = isset($_POST['terms_agreed']) ? 'Yes' : 'No';
    
    // Validate required fields
    if (!$first_name || !$last_name || !$email || !$loan_type || !$loan_amount) {
        echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
        exit;
    }

    $company_email = "loans@company.com"; // where the application should go

    // Email content
    $subject_company = "New Loan Application from $first_name $last_name";
    $message_company = "
Loan Application Details:

Personal Info:
Name: $first_name $last_name
Email: $email
Phone: $phone
DOB: $dob
ID Number: $id_number

Loan Details:
Type: $loan_type
Amount: $loan_amount
Term: $loan_term months
Purpose: $loan_purpose

Address:
$street, $city, $state, $postal

Employment:
Status: $employment_status
Employer: $employer_name
Monthly Income: $monthly_income
Co-Applicant: $co_applicant

Terms Agreed: $terms_agreed
";

    try {
        $mail = new PHPMailer(true);
        
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';      // your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'support@eloanhub.com'; // your SMTP username
        $mail->Password = '#Pp@EWtD8';           // your SMTP password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Send to company
        $mail->setFrom('support@eloanhub.com', 'eLoanHub'); 
        $mail->addReplyTo($email, "$first_name $last_name"); 
        $mail->addAddress($company_email);
        $mail->Subject = $subject_company;
        $mail->Body = $message_company;
        $mail->send();

        // Send confirmation to applicant
        $mail->clearAddresses();
        $mail->setFrom('support@eloanhub.com', 'eLoanHub');
        $mail->addAddress($email);
        $mail->Subject = "Your Loan Application Submission";
        $mail->Body = "Dear $first_name,\n\nThank you for submitting your loan application. We have received your request and will contact you shortly.\n\nBest regards,\nLoan Company";
        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Application submitted successfully.']);

    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Mailer Error: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>

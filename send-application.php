<?php

require 'vendor/autoload.php';  // Composer autoload

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data
    $first_name = $_POST['first_name'] ?? '';
    $last_name = $_POST['last_name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $dob = $_POST['dob'] ?? '';
    $id_number = $_POST['id_number'] ?? '';

    $loan_type = $_POST['loan_type'] ?? '';
    $loan_amount = $_POST['loan_amount'] ?? '';
    $loan_term = $_POST['loan_term'] ?? '';
    $loan_purpose = $_POST['loan_purpose'] ?? '';

    $street = $_POST['street'] ?? '';
    $city = $_POST['city'] ?? '';
    $state = $_POST['state'] ?? '';
    $postal = $_POST['postal'] ?? '';

    $employment_status = $_POST['employment_status'] ?? '';
    $employer_name = $_POST['employer_name'] ?? '';
    $monthly_income = $_POST['monthly_income'] ?? '';
    $co_applicant = $_POST['co_applicant'] ?? '';
    $terms_agreed = isset($_POST['terms_agreed']) ? 'Yes' : 'No';

    // Company email
    $company_email = "loans@company.com"; 

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
        $mail->Host = 'smtp.example.com';      // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@example.com'; // SMTP username
        $mail->Password = 'your_password';         // SMTP password
        $mail->SMTPSecure = 'tls';                 // or 'ssl'
        $mail->Port = 587;                         // or 465 for SSL

        // Send to company
        $mail->setFrom($email, "$first_name $last_name");
        $mail->addAddress($company_email);
        $mail->Subject = $subject_company;
        $mail->Body = $message_company;
        $mail->send();

        // Send confirmation to applicant
        $mail->clearAddresses();
        $mail->setFrom($company_email, 'Loan Company');
        $mail->addAddress($email);
        $mail->Subject = "Your Loan Application Submission";
        $mail->Body = "Dear $first_name,\n\nThank you for submitting your loan application. We have received your request and will contact you shortly.\n\nBest regards,\nLoan Company";
        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Application submitted successfully.']);

    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Mailer Error: {$mail->ErrorInfo}"]);
    }
}
?>

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.core.mail import send_mail
import json
# api/views.py



@csrf_exempt
def send_application(request):
    if request.method != "POST":
        return JsonResponse({"status": "error", "message": "Invalid request method"})

    try:
        # Parse JSON data from React
        data = json.loads(request.body)

        # Required fields
        required_fields = ["first_name", "last_name", "email", "loan_type", "loan_amount"]
        for field in required_fields:
            if not data.get(field):
                return JsonResponse({"status": "error", "message": f"{field} is required"})

        # Extract all form fields
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        email = data.get("email")
        phone = data.get("phone")
        dob = data.get("dob")
        id_number = data.get("id_number")

        loan_type = data.get("loan_type")
        loan_amount = data.get("loan_amount")
        loan_term = data.get("loan_term")
        loan_purpose = data.get("loan_purpose")

        street = data.get("street")
        city = data.get("city")
        state = data.get("state")
        postal = data.get("postal")

        employment_status = data.get("employment_status")
        employer_name = data.get("employer_name")
        monthly_income = data.get("monthly_income")

        co_applicant = data.get("co_applicant")
        terms_agreed = "Yes" if data.get("terms_agreed") else "No"

        # ------------------------
        # Admin Email
        # ------------------------
        admin_message = f"""
New Loan Application Received

Personal Information:
Name: {first_name} {last_name}
Email: {email}
Phone: {phone}
DOB: {dob}
ID Number: {id_number}

Loan Details:
Type: {loan_type}
Amount: {loan_amount}
Term: {loan_term}
Purpose: {loan_purpose}

Address:
{street}, {city}, {state}, {postal}

Employment Information:
Status: {employment_status}
Employer: {employer_name}
Monthly Income: {monthly_income}

Co-Applicant: {co_applicant}
Terms Agreed: {terms_agreed}
"""

        send_mail(
            subject=f"New Loan Application - {first_name} {last_name}",
            message=admin_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
        )

        # ------------------------
        # Applicant Confirmation Email
        # ------------------------
        applicant_message = f"""
Hello {first_name},

Thank you for submitting your loan application to eLoanHub.

We have received your application and will review it shortly. Our team will contact you soon.

Best regards,
eLoanHub Team
"""
        send_mail(
            subject="Your Loan Application Was Received",
            message=applicant_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
        )

        return JsonResponse({"status": "success", "message": "Application submitted successfully"})

    except json.JSONDecodeError:
        return JsonResponse({"status": "error", "message": "Invalid JSON data"})
    except Exception as e:
        # Catch email sending errors and any other unexpected errors
        return JsonResponse({"status": "error", "message": f"Error: {str(e)}"})




















from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.mail import send_mail

@csrf_exempt
def send_contact(request):
    if request.method == 'POST':
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        body = f"""
        New contact message received:

        Name: {full_name}
        Email: {email}
        Phone: {phone}
        Subject: {subject}
        Message: {message}
        """

        try:
            send_mail(
                subject=f"New Contact: {subject}",
                message=body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
            )
            return JsonResponse({'message': 'Message sent successfully!'})
        except Exception as e:
            # return error for debugging
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'message': 'Invalid request'}, status=400)












from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
import json

@csrf_exempt
def subscribe(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')

            if not email:
                return JsonResponse({'error': 'Email is required.'}, status=400)

            # send email to admin
            send_mail(
                subject="New Subscription",
                message=f"Someone subscribed with email: {email}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
            )
            return JsonResponse({'message': 'Subscribed successfully!'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request.'}, status=400)

<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];
	
	$email_from='sonateresajossy@gmail.com';
	$email_subject="New Form submission";
	$email_body="User Name: $name.\n".
				"User Email: $visitor_email.\n".
				"User Message: $message.\n";
				
	$to="sonateresajossy@gmail.com";
	$headers="form: $email_from\r\n";
	$headers .="Reply-To: $visitor_email\r\n";
	mail($to,$email_subject,$email_body,$headers);
	header("Location: contact_us.html");
	?>
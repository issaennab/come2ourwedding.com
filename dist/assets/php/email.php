<?php
header('Content-type: application/json');
$errors = '';
if(empty($errors))
{
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    $from_name = $request->fullName;
    $from_email = $request->email;
    $isAttending = $request->isAttending;
    $mealChoice = $request->mealChoice;
    $allergies = $request->allergies;
    $isGuestComing = $request->isGuestComing;
    $guestFullName = $request->guestFullName;
    $mealChoicePlusOne = $request->mealChoicePlusOne;
    $allergiesPlusOne = $request->allergiesPlusOne;
    $songsSuggestion = $request->songsSuggestion; 

	//$to_email = "kefiliatrault@gmail.com";
	$to_email = "kefiliatrault@gmail.com";
	$contact = "<p><strong>Full Name: </strong> $from_name</p>
                <p><strong>Email: </strong> $from_email</p>
                <p><strong>Will you be attending?:</strong> $isAttending</p>
                <p><strong>Meal choice: </strong> $mealChoice</p>
                <p><strong>Allergies Restrictions:</strong> $allergies</p>
                <p><strong>Are you bringing a guest?: </strong> $isGuestComing</p>
                <p><strong>Guest's Full Name:</strong> $guestFullName </p>
                <p><strong>Meal choice:</strong> $mealChoicePlusOne </p>
                <p><strong>Guest's Allergies:</strong> $allergiesPlusOne </p>
                <p><strong>Suggested Songs:</strong> $songsSuggestion</p>";
                
	$email_subject = "RSVP for $from_name";
	$email_body = '<html><body>';
	$email_body .= "$contact";
	$email_body .= '</body></html>';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";
	mail($to_email,$email_subject,$email_body,$headers);
	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
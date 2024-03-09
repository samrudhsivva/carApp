<?php
$filename = "car-rent-app/src/contacts.txt";

if (!file_exists($filename)) {
    die('Error: File not found.');
}

$contacts = [];
$lines = file($filename, FILE_IGNORE_NEW_LINES);

foreach ($lines as $line) {
    $fields = explode(',', $line);
    $contact = [
        'name' => $fields[0],
        'phone' => $fields[1],
        'email' => $fields[2]
    ];
    $contacts[] = $contact;
}

// Set CORS headers
header('Access-Control-Allow-Origin: *'); // This allows requests from any origin, adjust as needed
header('Content-Type: application/json');

// Encode contacts array as JSON and output
echo json_encode($contacts);
?>

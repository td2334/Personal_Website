<?php
// Ensure the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Include the actual form processing script
    include '../php/process-form.php';
} else {
    // Handle invalid request methods
    echo "Invalid request method.";
}

<?php
require 'config/database.php';
require 'controllers/BookController.php';


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}


$method = $_SERVER['REQUEST_METHOD'];
$id = $_GET['id'] ?? null;

switch ($method) {
    case 'GET':
        if ($id) {
            getBook($conn, $id);
        } else {
            getBooks($conn);
        }
        break;
    case 'POST':
        addBook($conn);
        break;
    case 'PUT':
        updateBook($conn);
        break;
    case 'DELETE':
        deleteBook($conn, $id);
        break;
    default:
        echo json_encode(["message" => "Invalid request"]);
        break;
}

$conn->close();
?>

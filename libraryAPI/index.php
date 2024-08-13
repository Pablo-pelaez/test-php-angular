<?php
require 'config/database.php';
require 'controllers/BookController.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            getBook($conn, $_GET['id']);
        } else {
            getBooks($conn);
        }
        break;
    case 'POST':
        addBook($conn, $_POST);
        break;
    case 'PUT':
        parse_str(file_get_contents("php://input"), $_PUT);
        updateBook($conn, $_PUT);
        break;
    case 'DELETE':
        parse_str(file_get_contents("php://input"), $_DELETE);
        deleteBook($conn, $_DELETE['id']);
        break;
    default:
        echo json_encode(["message" => "Invalid request"]);
        break;
}

$conn->close();
?>

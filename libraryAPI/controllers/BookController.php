<?php
require 'models/Book.php';

function getBooks($conn) {
    $sql = "SELECT * FROM books";
    $result = $conn->query($sql);

    $books = [];
    while($row = $result->fetch_assoc()) {
        $books[] = new Book($row['id'], $row['title'], $row['author'], $row['genre'], $row['published_date']);
    }
    echo json_encode($books);
}

function getBook($conn, $id) {
    $stmt = $conn->prepare("SELECT * FROM books WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode(new Book($row['id'], $row['title'], $row['author'], $row['genre'], $row['published_date']));
    } else {
        echo json_encode(["error" => "No book found with id $id"]);
    }
    $stmt->close();
}

function addBook($conn, $data) {
    $stmt = $conn->prepare("INSERT INTO books (title, author, genre, published_date) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $data['title'], $data['author'], $data['genre'], $data['published_date']);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "New book created successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }
    $stmt->close();
}

function updateBook($conn, $data) {
    $stmt = $conn->prepare("UPDATE books SET title = ?, author = ?, genre = ?, published_date = ? WHERE id = ?");
    $stmt->bind_param("ssssi", $data['title'], $data['author'], $data['genre'], $data['published_date'], $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Book updated successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }
    $stmt->close();
}

function deleteBook($conn, $id) {
    $stmt = $conn->prepare("DELETE FROM books WHERE id = ?");
    $stmt->bind_param("i", $id);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Book deleted successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }
    $stmt->close();
}
?>

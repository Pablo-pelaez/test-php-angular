<?php
class Book {
    public $id;
    public $title;
    public $author;
    public $genre;
    public $published_date;

    function __construct($id, $title, $author, $genre, $published_date) {
        $this->id = $id;
        $this->title = $title;
        $this->author = $author;
        $this->genre = $genre;
        $this->published_date = $published_date;
    }
}
?>

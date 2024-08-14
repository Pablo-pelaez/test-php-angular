** Project Guidelines

1. Project Description
   * This project is a web application to manage books. It uses a PHP backend to handle CRUD
     operations (Create, Read, Update, Delete) and an Angular frontend to interact with the user.

2. PHP API for Library
   2.1 PHP Project Structure
     The backend is developed in PHP and is composed of the following files:
       *index.php: Main controller that handles HTTP requests and directs to the appropriate functions in BookController.php.
       *info.php: Additional system information (can be useful for debugging).
       *config/database.php: MySQL database connection configuration.
       *models/Book.php: Model that defines the structure of the book.
       *controllers/BookController.php: Controller that manages the CRUD operations on the books.

    2.1 API Endpoints
      2.1.1 Get all books
      * Method: GET
      * Endpoint: http://localhost/test-php-angular/libraryAPI/index.php
      * Description: Returns a list of all books.
      
      2.1.2 Get a book by ID
      * Method: GET
      * Endpoint: http://localhost/test-php-angular/libraryAPI/index.php?id={id}
      * Description: Returns a specific book based on the provided ID.
      
      2.1.3 Add a book
      * Method: POST
      * Endpoint: http://localhost/test-php-angular/libraryAPI/index.php
      * Description: Adds a new book. The data must be sent in the request body as JSON.
      
      2.1.4Update a book
      * Method: PUT
      * Endpoint: http://localhost/test-php-angular/libraryAPI/index.php?id={id}
      * Description: Updates an existing book based on the provided ID. The data must be sent in the request body as JSON.
      
      2.1.5 Delete a book
      * Method: DELETE
      * Endpoint: http://localhost/test-php-angular/libraryAPI/index.php?id={id}
      * Description: Deletes a book based on the provided ID.

   To Consider:
     When creating the database this one will have the name [library]. For this project it was used the DB mySQL and the manager phpMyAdmin with xampp.
     For the creation of the table [books] its data will be this:
       * id ==> type: number PRIMARY KEY
       * title ==> type: VARCHAR
       * author ==> type: VARCHAR
       * genre ==> type: VARCHAR
       * published_date ==> type: DATE

   3. Angular Frontend
      3.1 Project Structure
        The frontend is developed in Angular 17 and is composed of the following main components:

        * BookListComponent: displays a list of all books with options to view, edit and delete.
        * BookEditComponent: Allows editing an existing book.
        * BookFormComponent: Allows the addition of a new book.
        * BookService: Service to interact with the backend API and perform CRUD operations.

       3.2 Angular Routes
          * ===> "/:" Main path that shows the list of books.
          * ===> "/add:" Path to add a new book.
          * ===> "/edit/:id" Path to edit an existing book based on the ID.

       3.3 To Bear in Mind
          * For the package management in angular it was used npm and the angular CLI for serving/executing the project
          * For styling the views it was used the library Tailwind and the library SweetAlert for handling errors
          * The views would be empty just in case the DB (previously mentioned) is created but has no records. For this purpose, the DB will be created to check functionality

      4. Project Execution
         4.1 Backend:
           * Start the PHP server (e.g., with XAMPP).
           * Make sure the database is configured and accessible

         4.2 FrontEnd
            * Navigate to the Angular project directory.
            * Run npm install to install all necessary dependencies.
            * Run ng serve to start the Angular development server.
            * Open http://localhost:4200 in your browser to access the application.

      5. PokeApi Python
         5.1 Project Description
           This Python script consumes the Pokémon public API to get information about
           a list of Pokémon and then displays their images in desktop windows using tkinter for the GUI.

         5.2 Imports
            * import requests
              requests: Library for making HTTP requests.
            * from PIL import Image, ImageTk
              PIL (Pillow): Library to handle images.
            * import tkinter as tk
               tkinter: Library for creating graphical user interfaces.
            * from io import BytesIO
               BytesIO: Used to handle image data in memory.
            * import matplotlib.pyplot as plt

         5.3 Funtcions
           * get_list_pokemon()
                * Description: Makes a GET request to the Pokémon API to get a list of Pokémon.
                * Functionality:
                * Requests the first 5 Pokémon.
                * Prints the Pokémon list and returns it.


          * show_pokemon(img)
              * Description: Displays an image in a popup window using tkinter.
              * Functionality:
              * Creates a main window.
              * Displays the image in a Label widget.
              * Runs the main loop of the window to keep it open.
           
          * get_img_pokemon()
              * Description: Obtains images of Pokémon and displays them.
              * Function:
              * Calls get_list_pokemon() to get a list of Pokémon.
              * For each Pokémon in the list:
              * Performs a GET request to get the details of the Pokémon.
              * Extract the URL of the image.
              * Download and open the image.
              * Display the image using show_pokemon().

             
          5.4 To Keep in Mind:
             * For this project the extensions Python and Python Environment Manager were used to make the code better and execute and environment to execute properly
             * The version for the project is 3.12.4

           If something is missing, please let me know


         

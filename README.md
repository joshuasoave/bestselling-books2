# Bestselling Books

## About
[Bestselling Books](https://booksv2-1317d7b20530.herokuapp.com/) is a web application that displays the top ten books from the New York Times bestseller list. The project utilizes a custom-built [Books API](https://github.com/joshuasoave/books-api) to fetch data from the New York Times and present the top books to the users. Additionally, there are plans to implement wishlists, allowing users to create accounts and save their favorite books for future reference.

<img width="1082" alt="Screen Shot 2023-08-02 at 11 19 08 AM" src="https://github.com/joshuasoave/bestselling-books2/assets/62475382/c4bcb01d-c27f-41b1-a8cf-678f6eb4d5d4">

## Technology Stack
The Books API is built using Create React App. Throughout the code there is a combination of JavsScript, React, HTML, and CSS. Create react app allows for a single page application style. Additionally, Mocha has been utilized as the testing framework to ensure the reliability of calls to the API.

## Get Data
The "Get Data" feature in the application calls the custom-built books API to retrieve data from the New York Times. Initially, the API fetches the top 15 books from the bestseller list. Later, the application filters out the top ten books from this list. Each of the top ten books is then mapped through, and corresponding elements are dynamically created on the webpage, displaying the relevant book information.

<img width="602" alt="Screen Shot 2023-07-23 at 10 09 30 PM" src="https://github.com/joshuasoave/nyt-bestsellers/assets/62475382/7d1b9365-e766-4192-ab06-42131e666786">

<img width="473" alt="Screen Shot 2023-08-02 at 11 21 59 AM" src="https://github.com/joshuasoave/bestselling-books2/assets/62475382/ec9c9038-a5e6-4a0a-a26c-6d585123cf40">

## Testing
The application includes a testing component to ensure the functionality of the custom-built books API. The test checks whether a successful response with a status code of 200 is received from the API call. Furthermore, it verifies that the number of responses being sent back from the API is 15, as expected for fetching the top books from the New York Times bestseller list.

<img width="655" alt="Screen Shot 2023-07-23 at 10 18 32 PM" src="https://github.com/joshuasoave/nyt-bestsellers/assets/62475382/5623aad5-db24-4235-925c-16e6f3f73faf">

## Planned Enhancements
I'm dedicated to consistently improving the functionality of the Books API to provide users with an exceptional experience. In the upcoming update, the following enhancements are planned:

- User Accounts: A comprehensive user management system will be integrated into the API, enabling users to create accounts, log in, and manage their profiles.
- Wishlist Functionality: With the user accounts in place, a create, update, and delete route will be introduced to enable users to save their favorite books to a personalized wishlist.

## Conclusion
Thank you for exploring Bestselling Books. By utilizing our custom-built books API, we bring you the latest and most popular literary works available.

We hope you find joy and inspiration within the pages of these top ten books. Whether you are a dedicated bookworm or just discovering the world of literature, Bestselling Books is here to enrich your reading journey.

Happy reading and stay tuned for more updates and features on Bestselling Books!

# BookmarkManager

## A React application that allows users to manage their web bookmarks. 

### The application contains the following pages:

Home Page - Displays a list of the top 5 most bookmarked websites across all users. Displays the URL and the amount of users that have this link bookmarked.

Signup/Login - Provides pages for where users can sign up and log in.

My Bookmarks - On this page, the user is shown a list of bookmarks they've previously created. On each row, url (a clickable link) and the title of the bookmark are displayed. 
There is also be an Edit button and a delete button.
When Edit is clicked, the column in the table that displays the title turns into a textbox prefilled with the title, and the edit button changes to an Update button. 
When update is clicked, the title is updated in the database, and the textbox changes bock to a regular box.
When delete is clicked, that bookmark is deleted from the db and table.
When cancel is clicked, the textbox exits update mode, and the database remains unchanged.

Logout - logs out the current user, and redirects them back to the home page.

# Car Hire UI

This project is the front-end interface to the car hire application.

## Running the application

To run the application:

1. Install the node package manager.
2. In the project root directory type: npm install.
3. To run the application type: npm run start
4. If your running the code locally with the Chrome web browser then create a Chrome shortcut with this, changing the location of where your Chrome is installed:
   "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=c:\temp

### Improvements (if I had more time)

1. Tidy up the layout using css, using the BEM methodology, styles naming.
2. Create my own reusable components.
3. Use React functional components, with hooks instead of components.
4. Add some error handling to the application.
5. Made the select component which filters the vehicle list remember its last selection.
6. Created a node proxy so any UI code that the client shouldn't see (like security tokens or signature generation) can be place in there.

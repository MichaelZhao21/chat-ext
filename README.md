# Chat browser extension

Ever wanted to talk to your friends but didn't want it to be obvious? Let's say you had to be reading a PDF or writing on a Google Doc. With this extension, you get a chat window that basically looks like your pdf! And you can hide the chat with the click of a button.

## Deployment

The backend is a simple go application. The deployment is a simple Dockerfile, with no dependencies or environmental variables.

The current backend is hosted on `chat.mikz.dev`, which is the websocket url in `home.html` and `chat.html`. Make sure to change those for your own deployment!

## Extension

Because of inconsistencies between Firefox and Chrome (due to Manifest v3), the extension only works on chrome :(. To install it, the `extension` directory has everything you need to run it. For testing purposes, go to [chrome://extensions/](chrome://extensions/) and click "Load Unpacked" at the top left. Navigate to the `extension` directory and select it. Now it's loaded into Chrome!

To use the extension, simply click on the icon in the extensions menu. A white box will appear in the bottom middle of the page. Click on the text input (at the bottom denoted by a tiny `>` sign). Press enter to send a message and you should see it appear in the chat!

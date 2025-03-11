# Chat browser extension

Ever wanted to talk to your friends but didn't want it to be obvious? Let's say you had to be reading a PDF or writing on a Google Doc. With this extension, you get a chat window that basically looks like your pdf! And you can hide the chat with the click of a button.

## Deployment

The backend is a simple go application. The deployment is a simple Dockerfile, with no dependencies or environmental variables.

The current backend is hosted on `chat.mikz.dev`, which is the websocket url in `home.html` and `chat.html`. Make sure to change those for your own deployment!

## Extension

The `extension` directory has everything you need to run it. For testing purposes, go to [chrome://extensions/](chrome://extensions/) and click "Load Unpacked" at the top left. Navigate to the `extension` directory and select it. Now it's loaded into Chrome! (For Firefox, go to [about://debugging](about://debugging) and click "The Firefox" at the top left. Then hit "Load Temporary Add-on..." and select the `manifest.json` file in the `extension` directory.)

To use the extension, simply click on the icon in the extensions menu. A white box will appear in the bottom middle of the page. Click on the text input (at the bottom denoted by a tiny `>` sign). Press enter to send a message and you should see it appear in the chat!

> NOTE: Because of incompatibilities with FF and Chrome, both browsers will throw a warning/error. This is NOT a bug and can just be ignored. The reason for this is because Chrome has `service_worker` while Firefox has `scripts` in the `background` section of the manifest. Until Firefox adds service worker support, it will be like this...


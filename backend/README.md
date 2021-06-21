## What is this

A backend that has an API key for the flickr service and calls it using whatever parameters are passed through the URL to it.

For example, calling this backend like so:
http://localhost:3333/?method=flickr.photos.getRecent&format=json&user_id=193328962@N08&per_page=20&page=1&nojsoncallback=1&safe_search=1

Would be equivalent to calling the following URL:
https://api.flickr.com/services/rest/?api_key={your_api_key}&method=flickr.photos.getRecent&format=json&user_id=193328962@N08&per_page=20&page=1&nojsoncallback=1&safe_search=1


## Available functionality

In the project directory, you can run:


### `node app.js`

Runs the backend on http://localhost:3333\

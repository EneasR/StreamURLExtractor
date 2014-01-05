#StreamURLExtractor

Extracts the URL of the streamed file on many pages.

##Installing

Create a bookmark and change the url to following:

```
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3B%24.getScript(%22https%3A%2F%2Fraw.github.com%2FE-n-e-a-s%2FStreamURLExtractor%2Fmaster%2FStreamURLExtractor.js%22%2C%20function()%7BsearchURL()%3B%7D)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```

When you are on a webpage with a video, click on that bookmark.  
On success you'll get a popup with the url of the file.

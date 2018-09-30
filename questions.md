questions
==============================
**index.html AND grid-layout.js**
grid-layout.js takes a json object and makes an html grid of games along with their cover art. but the way i generated the html with javascript feels really clunky. is there a better practice or a library to use for this kind of thing?

```javascript
	html += `
  <figure name="${gameList[i][0]}" class="col-sm-${12/numColumns}">
    <p>${gameList[i][0]}</p>
    <img src="../img/cover_art/${gameList[i][0]}/${gameList[i][1]}"/>
  </figure>`;
```

**createGameList.js**
the goal of this file was to crawl through the /img folder to get a list of all games (silly way to do it, but just trying to practice navigating the file system). the problem is it can't be called from index.html because of a CORS issue. is there a best practice for getting info from the file system and bringing it back for use on the page?

**folder structure**
does the general project and layout look ok?
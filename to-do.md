To-Do Items for Rudder Project
==============================

*  re-work the logic to refresh the game config window and props when something changes
*  need to also manage state/refresh buddy view window whenever library.json is updated
*  set a default cover art when none is found
*  add loading transitions when searching for cover art
*  add some transitions/effects to make the app feel more lifelike
*  ellipses when game name is too long
*  try using path node module to avoid unix/windows complications
	*  should relative paths be used in import statements?
* ~~bad-ass search bar~~

*  other
	*  ~~create a mock-up of the UI windowed mode (for editing library, etc)~~
	*  ~~set default cover art when image could not be found~~
	*  ~~create folder in cover art folder for storing new image~~
	*  ~~figure out how to choose relative path correctly in AddNewGame.js and GridLayout.js~~
	*  ~~set hover attributes (pointer cursor) for cover arts and path pickers~~
	*  ~~add error handling/input validation to add new game function~~
	*  ~~move user selected image to cover_art folder~~
	*  ~~add ability to delete game~~
	*  ~~currently if no image is selected then jetpack will try to copy the entire root folder to the image folder~~

*  ~~add ability to add a game to the library from the front-end~~
	*  ~~file browser for finding cover art~~
	*  ~~file browser for finding executable~~
	*  ~~accept input for game name~~
	*  ~~update library.json with collected information~~
	*  ~~add a nice button to the front-end to trigger these functions~~
	*  ~~refactor/clean up code~~

*  ~~clean up library~~
	*  ~~update library.json with games that i own~~
	*  ~~get cover art from giant bomb~~

*  right click on a game to get cover art
	*  ~~organize DOM to have game name as an html attribute~~
	*  ~~set up API call~~
	*  ~~give game cover art a default/blank cover~~
	*  set up on-click
	*  set up right-click menu
	*  find new approach for insecure call in src/api_call.js
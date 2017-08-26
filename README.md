**Thanks for taking the time to complete this task.**

These are the directions we would like you to follow:
 1. Please spend on this around 45 minutes. 
 2. Please describe the areas of improvement that you would have worked on given more time. 
 3. Whenever in doubt use your best judgement.
 4. Please show your work & thinking for every logical step you take.
 5. Find & fix functional issues. 
 6. Tidy up the code to follow best practices & current web standards.
 7.  Create a starship details component.
	- Show the component when user clicks on a search result. (DONE)
	- It should be a place to display starship details. (DONE)
	- There should be a close button. (DONE)
	- The chosen starship should be highlighted in the search results. (DONE)
	- The box should be initially hidden. (DONE)
	
My work:

First step is to rewrite from AngularJS to Angular.
Improvments (to do):
- Autocomplete like search box should be displayed on panel above selected starship
- Add films under starship details as slides [movie] [movie] [movie]
- RWA (responsive web design)
- Change detection to onPush in every component, check if everything is working.
- Types in place of any
- HomeModule for separation from AppModule 
- Loading bar for search with search interval 1-2s
- linting, experimental-optimizations flag, production improvments
- imports size check (to import single part of libraries [vscode import cost])
- lazy loading
- update packages
- change element selectors in css to class selectors
- Multilang ngx-translate, not built in internationalization

- Rebuild component for reusable with config to display details in starthip.component as details.component by generic types
- Rebuild component for reusable with config search.component to search by generic types 


Issues in AngularJS: 
- no IIFE. (not an issue in Angular)
- single file app. (splited in Angular)
- we don't use scope binding. We bind to view model as let vm = this. (not an issue in Angular)
- http inside controller. (moved to service in Angular)
- "No results" displayed incorrectly with last search. (fixed in subscribe Angular) 
- issues with styles

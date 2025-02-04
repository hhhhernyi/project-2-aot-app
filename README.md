
# React Project

Attack on Titans anime database

[Link to the live app](https://aot-database.netlify.app/)

### MVP - Minimum Viable Product
* 5 components
* 4 props
* 2 useState
* 2 React router routes
* 1 lifting state

### Timeline
1 week

### Tech Stack
* HTML
* CSS
* JavaScript
* React + Vite
* React Bootstrap (Styling)
* Bruno (testing APIs)
* Airtable (data collection)
* Git + GitHub

## Project Planning

### Project Idea
This app contains all the details of the popular anime series "Attack On Titan", featuring the characters, episodes, titans etc.

### Stories
* As a user, i want this application to look nice and well formatted on a mobile device
* As a user, i want to see a homepage with the different tabs that i can go to
* As a user, i want to be able to click on a tab (Character/Episode/Titans etc)  and be brought to the relevant page displaying all the information as cards
* As a user, i want to be able click onto a card and see more detailed information
* As a user, i want to be able to add certain characters to a favourite list, and also be able to remove them from the favourites list
* As a user, i want to be able to toggle between seeing all the characters, and my favourite characters with a simple button click
* As a user, i want to be able to search for certain characters based on their name

### Development process
One of the key takeaways from my previous project is that, i learnt that a mobile first development process is very important, as it is easier to design on mobile and use media queries to make it look good on a bigger screen, compared to the other way round. Hence, i kept that goal in mind while i slowly developed the app. i started off by thinking of the layout of the pages, doing up a simple wireframe of the different pages and components needed. I ensured that all the different parts of the app which are duplicated over and over again are being made into components for reusability, like the list components etc. After i had done the initial wireframe, i begin to develop the individual react components. I used React Bootstrap to help me with the styling of components and also making the components easily resizable depending on the screen size. I also had to test the API fetch requests using Bruno in the meantime. After i had develop all of the individual pages and components, i used react router to link up all the different endpoints following Restful routing conventions. 



### Wireframe
![wireframe of page 1](/assets/images/Wireframes/1.jpg)
![wireframe of page 2](/assets/images/Wireframes/2.jpg)
![wireframe of page 3](/assets/images/Wireframes/3.jpg)
![wireframe of page 4](/assets/images/Wireframes/4.jpg)
![wireframe of page 5](/assets/images/Wireframes/5.jpg)
![wireframe of page 6](/assets/images/Wireframes/6.jpg)
![wireframe of page 7](/assets/images/Wireframes/7.jpg)
![wireframe of page 8](/assets/images/Wireframes/8.jpg)
![wireframe of page 9](/assets/images/Wireframes/9.jpg)
![wireframe of page 10](/assets/images/Wireframes/10.jpg)
![wireframe of page 11](/assets/images/Wireframes/11.jpg)
![wireframe of page 12](/assets/images/Wireframes/12.jpg)


## Future developments
* make the 'add to favourites' button turn into 'remove from favourites' once the user clicks it
* link the episodes details inside the episodes card to an external site with the actual episode
* Add in a placeholder text for the characters without a alias
* Add in more details to be displayed on each character card

## Attributions
### Libraries and Dependencies
* React - Frontend Framework
* React-Router - Routing
* React-Bootstrap - Styling and UI Components

### API 
* Attack on Titan API - https://api.attackontitanapi.com/

### Tools and Resources
* Bruno - API testing
* Airtable - Data storage
* Github - Version control and hosting
* Netlify - Deploying of live page
* Trello - Project tracking
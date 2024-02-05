# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Decisions and choices for the solution

I decided to rely mainly on ngrx for the storage of all the posts so that they'll be retrieved only once and will be cached. 
I also relied on it to pass the currently selected user ID to the header component since it wasn't a directely related component to the post component so I relied on a global state. 
This is also the reason why i decided to just use some normal data binding when sending the post value to the component and to select the previous component via a find operation(not sure it was the best approach but it seemed the simple in terms of complexity).
A factor in my choices was that I wanted to display some different tools available with the framework and libraries which prompted me to find a solution that made use of them. There's also some basic error handling given the reliabaility of the source in terms of data integrity.

Regarding the style I mainly followed the requirement of having a 10x10 grid which blocked me from making it adjustable/responsive(for example having a lower number of column would have helped making it more readable but as you mention I'd have a design to follow which does help). So I decided to go for a minimal yet with some details design choices with a palette of colors that I generated from a website.

I also decided that when a text is too long it just overflows so you can scroll within the square instead of having ellipses.

## Questions
  * We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a JWT is issued and our web-application uses this token for every request for authentication. Here's an example of such a token:
Why is it (or isn't it) safe to use this? (hint: the token is one string, the pdf might breaks it into multiple lines)
* * One of the immediate reasons that come to mind in favor of using JWT are the safe but quick practices like it's short expiration which minimizes the risk due to comprimisation of an issued token and the usage of a strong encoding algorithm for it's signature(which ensures integrity). By using HTTPS it also secure the transit of info from man-in-the-middle attacks. On the other hands the challenges it has come from issues coming from the key given(the document used to give it might have a peculiar interpretation when it reads/shows it)/

* In our web-application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors bad actors might try to abuse? And how would you mitigate these vectors?
* * One way of attacking can be via injections of malicious code or links(cross site scripting) or plainly using phising attempts where unless a user has a proper security or eye for details it may click of a fake link or resource which will trigger an unexpected action or redirection(generically security threats that move the user out of the safe environment). 
The ways to combat these 2 risks are Sanitization of the email content to make sure that nothing harmful is there(as is harmful scripts and code) and Strong security policies enforced by the user(not opening suspicious emails) or platform(using specific headers)

* Explain the difference between mutable and immutable objects.
  
  - What is an example of an immutable object in JavaScript?

  - What are the pros and cons of immutability?

  - How can you achieve immutability in your own code?

* * As it says in the name Mutable objects are data structures/object that can be changed after they are initialized/constructed by reassigning their value without having to create a new object. An immutable object is something I cannot modify directly it's primitive value so it needs to find indirect ways of doing so(creating a new object or using operators for example.)

An example are strings, boolean, null and numbers. It has a few  pros like the predictability/reliability since it'll always act the same, it's more performing since it can use references and pre existing rules and it's easier at a readable level for the developer since it'll be consisten with common knowledge.
A con is that it's not flexible so if it doesn't adapt it means the developer will have to find workarounds to change objects which goes against it's pros like its consistency and performance(more memory used due to creqtion of more objects)
By using the Object.freeze() command.

* If you would have to speed up the loading of a web-application, how would you do that? (no need to actually do it, just describe the steps you would take)
*  * A simple way would be to use paginations on the calls if the amount of data is too large or use lazy loading when displaying the code. When making a build also a good settings configuration might help by not using unneded/unused libraries so they can be discarded. Using CDNs instead of saving "things" in the package.json. Achieving a higher modularity in the code so that components/functions/chunks are loaded only when needed and the lower size of them will add up to something lower of a monolith loaded everytime with unnecessary pieces of code.

* What part of a new job do you think is more important:
* * Choose your own hardware, but work with a company supplied operating system image. 
I work better in a given structure where I can gain expertise without having to adapt to different choices. Basically having coordinated choices wothin the team to better share knowledge and help.


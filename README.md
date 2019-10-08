# The Nifty E-Commerce Store Final Project
_Special thanks to Tal Wolman for the original version of this project._

## Overview
This Final Project will cumulate what you've been learning in the course with an opportunity to design, develop, and implement a full-stack website. You will be responsible for fully implementing both the front and back-end of an E-Commerce store of your choosing. Pick your theme, pick your features from the module component list, and have fun with it!

Please understand that this assignment is not a Creative Project. For full credit, this project must be clearly independent of your previous Creative Project (and HW) work. Ask the staff if you are unsure about similarity between previous assignments and your Final Project implementation.

Also, given the nature of this being a cumulative Final Project demonstrating the knowledge you have gained in this class, **you may not use online resources in this assignment**. This means, but is not limited to, using any online tutorials, code, videos or projects as a reference for yours. **Citing these resources does not make it acceptable to use them**. If you feel strongly that you would like to use a certain online resource you must get explicit permission from the instructor as well as explicitly cite the source. Similarly to CP code, any code based on or taken from an online resource will _not_ count towards the requirements for this assignment and may be subject to deductions without explicit permission.

Whatever you create for this project is yours to share as you choose meaning you can publish it and/or show it off to others. That being said, we strongly encourage you to have fun and go (reasonably) above and beyond with this assignment. It is your chance to not only show off the valuable skills you've learned, but also develop a strong portfolio piece. Happy coding!

## Learning Objectives
- Choose appropriate HTML tags with an understanding of the semantic meaning of each tag and the context they are used in a webpage.
- Use CSS properties to style a webpage to be in line with a pre-drafted Design Document.
- Modify your web page using JS and DOM objects. Produce readable and maintainable code with unobtrusive modular JS.
- Fetch plain text and/or JSON data from a web service using AJAX with fetch.
- Design and implement an API that responds to HTTP requests.
- Retrieve information from a database with SQL.
- Demonstrate competence of full-stack code quality expectations modeled in lectures, sections, and the course's official Code Quality Guide.
- Produce readable and maintainable code with clear documentation conforming to class standards.
- Use GitLab to maintain personal source code and turn in an assignment.

## Important Deadlines
Below are the deadlines for _each_ part of this Final Project.

**Proposal due**: August 5th, 2019  
**Milestone due**: August 12th, 2019  
**Final Project due**: August 21st, 2019  
**Reflection due**: August 24th, 2019  

You may **not** use late days on any of these deadlines. Assignments turned in late will **not** be eligible for credit.

## Starter Files and Deliverables

### Proposal Requirements
The first submission for this Final Project will the proposal. This will be submitted on Canvas, not on GitGrade. Your milestone and final submission will be submitted on GitGrade, just like all of the previous CPs and HW assignments in this course.

#### Proposal
Your proposal should include the items listed below:

  - Wireframe of UI (2 or more "views" sketched out or done with an online tool, no need to be an artist). The wireframe should be labeled with text to include what each piece of the view does, either to the side or below the wireframe diagram(s).
    - [Here](https://courses.cs.washington.edu/courses/cse154/19su/final-project/sample-wireframe.pdf) is an example of a wireframe for one "view" of a hypothetical e-commerce store. This should give you an idea of the level of detail we expect from you. These wireframes are meant to help your get an idea of what your project is and help you design both your front-end and the needs of your back-end, and are also valuable to include in any web development portfolio. We suggest that each view have a number indicator representing a piece of the view. Each piece can then have a description of what the said piece is and does.
  - You may find [Figma](https://www.figma.com/) and/or [draw.io](https://www.draw.io/) helpful for creating your wireframes.

  - Proposal Document which can he found [here](https://docs.google.com/document/d/1ZVwy88BuNltKpwfakHw_0J383j_TmQQVpH7eNt8qxGs/edit). You should make a copy of this document and answer the questions as prompted to in the document. The questions in  the document are meant to help you guide your thinking as you choose what type of e-commmerce store you are interested in implementing.

All components of the proposal are due on **August 5th**. You must submit a proposal on due date to be eligible for credit for this deadline. It will be reviewed by your TA so that you can receive feedback. Your TA will provide feedback with on what looks good as well as suggestions on how and/or what is lacking. You are not bound to your proposal meaning that if you change your mind on the structure of your e-commerce store/color scheme/chosen feature points, you are welcome to change it. You should, however, have a solid idea of what you want to build. If you are feeling stuck refer to the bottom of this spec where we have listed some ideas introduced by TAs. You are welcome to use these ideas for your assignment.  

The submission for the Proposal **will be on Canvas** NOT through GitGrade. We encourage you to submit prior to the due date if you have a comprehensive proposal and design document. This will allow you to move on to working on the milestone which you definitely could (and should) work on before receiving the feedback.  

### Milestone Requirements
Your milestone submission should contain, at a minimum, the `.html` and `.css` files for your E-Commerce website as well as the `APIDOC.md`. You are free to submit more, depending on how far along you are in the project, but only your `.html` and `.css` will be graded. For this submission your `.html` and `.css` files should be _at least_ 75% completed meaning we should have a solid sense of the UI design. You are not bound to the files you submit and are welcome to change/update them prior to your final submission. However, you should have a solid idea of what e-commerce store you are creating which should be reflected in this milestone submission.

Please ensure that all `.html` and `.css` files meet the code quality standards outlined in the Code Quality Guide. This includes, but is not limited to proper spacing, indentation, appropriate use of semantic tags and minimizing redundancy. Additionally, make sure that your code validates using the validators linked on the course website.

The `APIDOC.md`, which is the documentation for your API, should be complete with all the endpoints you expect to have. Please refer to the example documentation that has been provided in the CP4 repository for an example of our expectations. You are not bound to the documentation you turn in for your final submission but, given your proposal, you should have a strong idea of what endpoints will be required to achieve your proposed final product.  

### Final Submission Requirements
Your Final Project repository contains no starter files outside of this `README.md` because you are choosing how to implement your nifty store. The repository for your final submission should be turned in with the files below:

| File | Repository file you will implement |
| --- | --- |
|`.html` | at least one `.html` file |
|`.css` | at least one `.css` file  |
|`.js` | At least one client-side `.js` file that will request the information from the server you've implemented and provide overall functionality to the page |
|`.js` | At least one `.js` file representing the Node.js/Express web service for your E-Commerce site  |
|`.sql`|  The `.sql` file that sets up the database/tables|
|`APIDOC.md`|The documentation file for your API|
|`CHOOSE.md`   |The documentation for the chosen features  |

**IMPORTANT NOTE:** All static "view" files (HTML/CSS/Client-side JS/any images) should be inside a "public" folder. All other files (e.g. your Node.js/Express web service) should be at the root, similar to the structure in HW4. You will almost definitely want to use images for your products - you can create your own, or find some online but you must cite where your images came from at the bottom of your HTML page. If you're not sure where to start, you can find some good "icon packs" on [flaticon.com](https://www.flaticon.com/) which has a [good overview](https://support.flaticon.com/hc/en-us/articles/207248209-How-I-must-insert-the-attribution-) of how to cite the icon sources for packs (you are free to use other images too).

Any files that were submitted for the milestone should be updated, if necessary, and pushed to your repository. Please do not include any files that are not relevant to your Final Project or include information in your `APIDOC.md` about an endpoint that is inaccurate and/or was not implemented.  

### External Requirements
Below are the external requirements for both the front- and back-end of your nifty e-commerce store. For both the front- and back-end you are required to implement the "Required Features." In order for you to customize this project and make it your own we are allowing you to choose a few other features from the "Chosen Features". At minimum you are to choose and implement 2 of the chosen features. You are welcome and encouraged to add more features beyond this - this makes for a really strong project and an amazing portfolio piece to show off. In order to meet the requirements of this assignment your 2 "Chosen Features" should be from the ones listed below. However, if you are think of a feature you would like to implement and is not on the list, you may fill out [this form](https://forms.gle/M6YZR1v9u8ksc4Ci6) to request permission to have that feature count as one of your two chosen features. Before submitting this form note that, to be considered for approval the requested feature must be one that requires both front- and back-end support (similarly to the other chosen features listed). The requested feature should not have a similar implementation to the other chosen features on the provided list. The last day to fill out this form in order to request features will be **August 14th**. No feature requests after that date will be considered.

Additionally, since you will be choosing and will be graded on your "Chosen Features" you will need to inform us of which ones you are choosing. You will do this by filling out the list in the `CHOOSE.md` file included in this repository. There are 2 bullet points you need to fill out each for each of the chosen features. There are instructions on how to fill out the list in the `CHOOSE.md` file. Please note that you **will not** be eligible for full credit on this assignment if this list is not filled out. This list ensures that there is no ambiguity and that your TA is clear on what features you chose to implement.

**Disclaimer:** You are welcome and encouraged to go above and beyond on this project. It is a chance for you to use and apply the skills you have acquired this quarter to a full stack project. That being said, if you do choose to go above and beyond you are responsible for  ensuring all code meets our code quality guidelines. Any work you turn in for the final submission will be held to the same code quality expectations. If you are choosing to implement something not discussed in this course and are unsure if what you have is good code quality please reach out to the course staff. Also, note, that it is in your best interest to validate all code before submitting this assignment.

#### Front End  
- **Required Features**:
  - A way to see all of your service's products on a "main view" page
  - A way to see one product in a “single view” (at least 3 pieces of information such as the price/rating/name/colors/sizes it's available in etc.). You may choose to implement each "view" as a separate HTML page (e.g. index.html, contact.html, cart.html, etc.) or dynamically using JS/DOM manipulation.
    - The single view should be applicable and functioning for all products on your main view page.
  - A customer service view (e.g. contact page), which, at a minimum, must have a form for users to submit complaints/questions.
    - You must include some level of input validation (HTML5 or JS) to prevent invalid messages (such as empty messages) from being sent
      - This includes indications to the user (such as a message displayed on the screen) indicating that there is an issue with the form if all parts of the form are not filled out
      - You must also indicate to user that their message has been received
  - A way to filter through the products to only display ones with certain properties
    - This can either be accomplished with a search bar _or_ a dropdown/other UI elements that, once selected, only display products matching the chosen query
  - You must create a "cart" view which displays a list of items that the user is interested in
      - A user should be able to add/remove items from the cart
  - You must have at least 10 CSS rule sets in your `.css` file and 10 unique rules **at minimum**
    - Must change at least 2 box model properties (border, padding, margin, height, width)
    - Must import and use at least one font from [Google Fonts](https://fonts.google.com/)
    - Must use at least 2 flex properties (this excludes setting `display: flex`)
  - Must use `fetch` to communicate with the back-end (your web service)
    - Errors should be gracefully handled and displayed to the user (you may not use `alert`, `console.log` or `console.error`)

#### Back End
- **Required Features**:
  - Must have at least one JSON response (including a plain text response is optional)
  - Must have a `GET` endpoint to request and return all of your service's products
  - Must have a `GET` endpoint to request and return information about a single item
    - This endpoint should be functional for each item in your e-commerce store
  - Must have a `GET` endpoint to request and returns some of your service's products based on a filter (price, category, type etc.)
  - Must format the data from each request appropriately to send to the front-end (You should be able to explain why the way you designed your outputs are effective)
  - Must have a `POST` endpoint to accept and store all feedback received via customer service form (see front-end requirements)
  - Must have at least 2 tables in your SQL database - your database and table creation code should be defined in your `.sql` file.
  - Each table must contain at least 4 columns that are used in queries to store or retrieve useful data (id can count as one of these columns)
  - There should be at least 15 items in your E-commerce store (although we encourage you to add more to create a more interesting storefront).
    - These items should be inserted into the table in your `.sql` file using `INSERT` statements

#### Chosen Features
**OPTION 1**: An additional view indicating when/what promotions are available at your e-commerce store. There should be at least 5 promotions/sales available. All the information for the sales/promotions should be retrievable from a `GET` endpoint.

**OPTION 2**: A way for a user to buy a product/item from your e-commerce store. You should update the page indicating to the user the item has been sold and/or the order is on it's way. The updates to the stock of the item should be supported with a `POST` endpoint. Each time an item is bought the overall stock should be decremented.

**OPTION 3**: A way for a user to leave a review on an item. This review should be displayed on the page for other users to see and should be persistent across page reloads (using the appropriate storage technology). This feature should be supported with a `POST` endpoint so that each review left will be added to your database.

**OPTION 4**: An additional view in your e-commerce store so that users have a way of becoming "loyal customers." This should be achieved with a form and should  require at least three pieces of information from the customer (name, email, address, phone number etc.). Once a user joins successfully there should be a message displayed on the page indicating this. This should be supported with a `POST` endpoint so that all information on "loyal users" is added to your database.

**OPTION 5**: A way for a user to customize a product. The user should be able to customize at least two features such as color of the product, material of the product etc. These changes should be supported by a `POST` endpoint which updates the item description with the new customizations.

**OPTION 6**: An additional view for a FAQ page. This should have at least 5 frequently asked questions and the answers displayed on the page for customers to read. This should be supported by  a `GET` endpoint from which all the frequently asked questions and answers can be retrieved.

**OPTION 7**: An additional admin view allowing an administrator to add and/or remove items from the store as well as update current inventory. This should be supported with a `POST` endpoint which appropriately updates the database with the correct information based on whether the admin has added/removed an item from the store.

**OPTION 8**: An additional admin view for managing the accounts that the e-commerce store users have created. An admin should be able to edit a user account and modify information. This should be supported with a `POST` endpoint which will appropriately update the user information based on the administrator's actions.

### Internal Requirements
You are expected to follow the same Internal Requirements as the previous homework assignments you have completed. These include but are not limited to the following:  

- **HTML/CSS**
  - appropriate use of semantic tags
  - consistent and readable spacing/indentation/etc.
  - using classes/ids appropriately
  - not having duplicate rules in your css
  - using group selectors to group together shared styles
  - appropriate file documentation
- **Client-side JS**
  - Must aim to minimize the use of module global variables unless strictly necessary. Prefer minimizing and localizing the scope.
    - Ex: DOM elements should never be stored as module globals as you _always_ have access to them. Variables only used in one function should not be stored as module globals as it is completely unnecessary
  - Must use functions to minimize redundancy in your code
  - Must not have "do all" functions - instead break down into several functions such that each has a specific purpose
  - You should not make any unnecessary fetch requests
    - should not make a request before the information is required
    - should not make a request if the given information is already available
  - You must have appropriate documentation for all functions and for files.
- **Server-side JS**
  - should use async/await appropriately
  - choose correctly between the type of request (`GET` vs `POST`)
  - should not override content headers
  - should set error types appropriately
- **SQL**
  - Must define appropriate data types for each column in each table
  - Must have appropriate documentation
    - When documenting your SQL file, a brief header comment is sufficient with your student information and what the database/table(s) represent.

### Reflection Requirements
The reflection for this Final Project will be due on August 24th, 2019.  This document should be at least 1 page (double spaced, 12pt font, Times New Roman) and should be a reflection of your experience with the implementation process. Questions you could address are:
- What were the hardest features to implement? How did you approach these problems?
- What resources were most helpful to you (either provided by the course or found online)?
- Were there features you tried to implement and were unsuccessful? What were they and what part of the implementation stumped you?
- If you had another week to work on this project, what would you add to your nifty store?
- What did you enjoy the most about this project? What was the most rewarding?
- Was the breakdown and checkpoints throughout the assignment helpful? Would you change how the assignment is broken down/what is due?

You can answer all of these questions, some of them or none. What we care about most is that you are reflecting on your experiences working on a full-stack project and evaluating your successes/failures along the way. You will submit this reflection on canvas.

The reflection should either be a word document (`.doc`) or a PDF (`.pdf`). No other submission formats will be accepted. Similarly to the Proposal and Design Document **you will submit your reflection on Canvas** and not through GitGrade. Note that you can submit your reflection until the day _after_ the quarter ends. This is to give you time to focus on Exam 2 (which is on the last day of the quarter) but the deadline is a hard deadline. **Absolutely no late submissions will be accepted.**  

## Development Strategies
Given the size of this project, you may find it hard to get started or know how to decide how to break down a problem. Below are some development strategies that may be helpful if you are unsure of how to proceed at some point of your development process. Don't be content with staying stuck. If, at any point in the development process you feel stuck, please be proactive about getting help. These tips will hopefully help:

- Brainstorming: Before even starting on the wireframe, it can help to just dump all of your ideas onto a piece of scratch paper (a text document works as well, but having the freedom to sketch out anything that comes to mind certainly supports the creative process).
  - Additionally, you can quickly draft some rough outlines for your site, and quickly gauge what works/doesn't work
- When reading the spec, highlight the parts and make a checklist of everything you see that is specific and needs to be accomplished and then check things off as you go.
- Before jumping into any HTML/CSS, draw a wireframe to outline your page idea, just starting with boxes (for containers) and lines (for text). Try to do this with a few drafts, adding a few more design elements each time. If you get stuck with layout/design ideas, go to other websites for inspiration (e.g. AWWards has a great showcase of different website designs, and you can never go wrong with CSSZenGarden). There are also some great wireframes featured from this class in the [CP1 showcase](https://courses.cs.washington.edu/courses/cse154/19su/creative/showcase.html)!
- For an APIDOC, it's almost always best to try to write this before starting your server-side code. What information do you _need_ from the service? What kind of parameters are good to have to filter a request? How can you represent the response data in JSON cleanly and in a way that is understandable to a client? What are the possible erroneous requests a client might make that your service should respond to with a useful error message?
- Talk to your TA/Melissa about your design process/brainstorming if you're having trouble getting started. Often you can get unexpected inspiration just by talking about different ideas, goals, and challenges you're having when planning a new project!
- Develop and test the API separately from the JS. Once it's done, you can just plug it into the JS and know it works. You can use Postman to test it.
- When developing the backend, it's a really good idea to include test code that populates your database with fake data so that you can easily test the output of each end-point of your API.
- Make use of the resources you have. Post to Piazza with questions, come to the WPL, talk to your TA after section/email your TA, use the lecture/section material we have provided.
- You may find it useful to draw diagrams if you are not sure where to start in terms of code. Think of what your problem is and what pieces you need in order to solve it. Drawing arrows/maps connecting the pieces can be helpful.

## Grading Breakdown
This assignment, in total, will be out of 55 points. The key areas we will be looking at directly relate to the listed learning objectives, your ability to meet the specifications for the external behavior, and the internal correctness of your code. A potential rubric might be summarized as:  

1. **Proposal:** - 5pt
2. **Checkpoint:** (`.html` file(s), `.css` file(s), `APIDOC.md`) - 8pt
3. **External Correctness:** - 25pt
4. **Internal Correctness:** - 12pt
5. **Documentation** - 2pt
5. **Reflection:** - 3pt

## Academic Integrity
All work submitted for your CSE 154 homework assignments must be your own and should not be shared with other students. This includes but is not limited to:
  * You may not use code directly from any external sources (no copying and pasting from external sites), other than the alias JS functions that are explicitly given to students for use in class.
  * We expect that the work you submit is your own and that you do not receive any inappropriate help from other people or provide inappropriate help to others.

Doing any of the above is considered a violation of our course academic integrity policy. As a reminder, this page states:

  The Paul G Allen School has an entire page on Academic Misconduct within the context of Computer Science, and the University of Washington has an entire page on how Academic Misconduct is handled on their Community Standards and Student Conduct Page. Please acquaint yourself with both of those pages, and in particular how academic misconduct will be reported to the University.

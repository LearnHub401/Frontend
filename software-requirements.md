# Software Requirements

## Vision

- What is the vision of this product?
Learnhub is an online learning platform that allows creators to build and share courses, and students to view/interact with the courses.

- What pain point does this project solve?
This app provides creators with a space to create digital courses, as well as connecting students who would like to take courses covering that content.

- Why should we care about your product?
This product provides tools that make it easy for creators to connect remotely with consumers anywhere they are, and also on multiple different connected devices that are web capable.

## Scope (In/Out)

### IN - What will your product do

- Users will be able to create courses
- Users will be able to create an account
- Users will be able to see if they've completed a course
- Users will be able to see the courses they have created
- Users will be able to see courses other users have created

### OUT - What will your product not do

- Our app will not be on mobile app stores
- Our app will not use a relational database
- Our app does not provide the content/courses, they are user created

## Minimum Viable Product

- What will your MVP functionality be?
Our MVP is to create a platform that allows courses to be created, saved, and viewed by users.

## Stretch

- What stretch goals are you going to aim for?
Ability to moderate (ban users), "teacher vs student" view, chat between users and course creators, theming, course layout customization

## Functional Requirements

### List the functionality of your product

- As a new user, I want to create an account and set up my profile, so I can have a personalized learning experience on Learn Hub.
- As a learner, I want to search and browse through various modules, so I can find and select the topics I'm interested in learning.
- As a learner, I want to be able to view the complexity level and estimated completion time of a module, so I can decide if it's suitable for me.

## Data Flow

[UML](./assets/Learnhub.png)

A user signs in through our web client, authentication is done on the backend and allows user access to requested assets associated with their account, assets are retrieved from the database and sent to the frontend client, the client renders and allows a user to interact with the content, and user data is updated to account for progress/creation of courses.

## Non-Functional Requirements

- Security
We will authenticate users on our backend using the AuthO library.

- Testability
We will test our frontend components so that they render course content correctly. We will test our backend endpoints to ensure our REST & CRUD functionality receives a request and provides a proper response.

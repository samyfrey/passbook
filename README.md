# Passbook 📊
Passbook is a banking transaction management tool that allows bankers to manage their client portfolio, providing a consolidated view of their revenue targets, outstanding loans and budget performance. Users also have access to all the latest business and client-specific news

## Solution 
This project aims to be a solution to issues I faced as an investment banking analyst: automate repetitive tasks and provide instant snapshot of business metrics avoiding manual work done through excel. Passbook also integrates NewsAPI to speed up the news summary process

## User Story
As a user, I want to quickly access a consolidated view of all my portfolio, create client profiles and add loans to my portfolio, track my budgets and follow news relevant to my clients 

## Main Features
* Dashboard: View all important information in one place, revenues year-over-year, budget progress, recent loan transactions, latest business news
* Loans: Track all loans in the portfolio, delete loans as needed
* Clients: Add new clients, edit details and delete as needed, follow relevant news on client page
* Budget: Edit my budgets as needed
* Newsfeed: Get all relevant news on my dashboard and for each client 


## Set Up
* ```npm install``` to install all dependencies 
* Creating a user account is not necessary to access all the functionalities, it is required for creating, editing and deleting resources though. 

## Architecture
* MongoDB resource models are created with mongoose, there is a one-to-many relationship between a client and loan documents and a one-to-one relationship between a loan and a client. A loan can only be created if a client exisits. 
* CRUD functions for each resource
* RESTful routes to hit each API endpoint 


resource | index | available routes 
--- | --- | ---
users | /account | /sign-up, /sign-in, /change password, /sign-out 
clients | /clients | /create, /:borrowerId, :borrowerId/edit 
loans | /loans | /create 
budget | /budget | /:budgetId

* React framework with features and pages components
* Styling applicable to multiple elements is done inside index.scss and component-specific is done inside each component folder 

## Stretch and Potential improvements
* Calculate loan interests
* Adding loans closed at different times (as opposed to chronologically) creates a bug 

## Glows and Grows
* Learned tremedously on react, manipulated arrays of data with nested objects (to calculate progress and feed charts dynamically), worked with Axios and complex requests (authenticated, mutliple data object properties etc.) 
* Could have used SQL database to faciliate working with loan resource (as opposed to mongoose subarrays)

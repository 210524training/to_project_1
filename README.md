# TRMS

## Tuition Reimbursement Management System

## Overview

TRMS, or Tuition Reimbursement Management System, is a full-stack web application that allows employees to submit requests for reimbursements for courses, events, and certifications. 
These requests can then be approved or rejected by the employee's direct supervisor, the employee's department head, and a benefits coordinator while the employee is able to track 
the status of their requests.

## Details

- The Employee may request tuition reimbursement for up to $1000 per calendar year, for relevant education. The education types eligible for reimbursement include 
University Courses at 80% of the tuition cost, Seminars at 60%, Certification Preparation Classes at 75%, Certifications at 100%, Technical Training at 90%, and other at 30%.

- The Employee must submit the following information: first name, last name, employee ID, date, time, location, description, cost, grading format, and work-related justification.

- The Employee must submit the request up to 1 week prior to the start date of the event. If the Employee does not submit the request within 1 week of the start date, the request cannot be made
in the system. If the employee makes the request within 2 weeks of the start date of the event, the request is marked urgent. 

- The Direct Supervisor of the employee may accept the request, reject the request (for various reasons), or request more information about the reimbursement 
request from the Employee. If the Direct Supervisor does not handle the request within 2 weeks of submission (or 3 days before the event starts), the request is auto-approved. 

- The Department Head may also accept the request, reject the request (for various reasons), or request more information about the reimbursement 
request from the Employee or the Direct Supervisor. If the Department Head is also the Direct Supervisor of said Employee, the process for seeking Department Head approval 
is skipped.  If the Department Head does not handle the request within 2 weeks of submission (or 3 days before the event starts), the request is auto-approved. 

- The Benefits Coordinator may also accept the request, reject the request (for various reasons), or request more information about the reimbursement request 
from the Employee, Direct Supervisor, or Department Head. The Benefits Coordinator can also edit the amount of the reimbursement, in which case a notification is sent to the Employee who 
made the request. The Employee can then choose to either cancel the request or accept the modified amount. The Benefits Coordinator is authorized to award an amount larger than the amount available
for the Employee. If the amount awarded exceeds the Employee's available amount, the Benefits Coordinator must provide a reason, and the request must be marked as "exceeds available funds". 
If the Benefits Coordinator does not handle the request within 2 weeks of submission (or 3 days before the event starts), the request is escalated to the Direct Supervisor
of the Benefits Coordinator (who also has the permissions of a Benefits Coordinator).

- Once approved, the reimbursement is pending until completion of the event. The employee must then provide a passing grade or presentation via upload to the request.

- If a grade is uploaded, the Benefits Coordinator must confirm that the grade is considered to be a pass. If a presentation is uploaded, the Direct Supervisor must confirm that the presentation 
contains a satisfactory amount of information, and that it has been presented to the relevant parties. Once either of these conditions are met, the reimbursement amount is awarded to the employee.

## Technologies

- JavaScript/TypeScript 
- Express.js 
- DynamoDB 
- React 
- HTML 
- CSS
- JSX
- Redux

## Features
- Log in
- Submit a reimbursement request
- Approve, reject, or request more info from a reimbursement request

## Getting Started

The app needs refactoring to function while hosted on the Internet. The version in this repo is hosted locally. Make sure you have all the necessary dependencies installed.

1) Clone this repository using the command below:

        git clone https://github.com/210524training/to_project_1.git
        
2) Once cloned, open 2 Git Bash terminals, one each for the front end and back end.

3) Make the current directory the src folder in both the front and back end directories.

4) Run the below command in the back end terminal:
        
        npm start
     
      The server should start listening on port 4000.

5) Run the above command in the front end terminal as well. The front end will be hosted on localhost:3000 (port 3000).

At this point, the application will start to run, and become available for use.

## Contributors

Taiwo Ogunseye


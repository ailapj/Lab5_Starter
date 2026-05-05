# Lab 5 - Starter
Name: Aila Jahromi 

# Check your understanding 
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- I probably would implmenet some units tests to check the individual parts of the functions, such as ensuring the writing of the function is captured, the delivery, the scope, and etc. but units tests will not be enough to test the entire system as unit tests do not capture how these individual components interact with each other

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- yes, this is a specific feature that can be easily checked with a unit test. Since it's one part of the entire system, it can be easily verified with unit tests. It also makes for an easy pass/fail scenario where the feature eitehr accepts the message or rejects it. 
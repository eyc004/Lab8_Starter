# Lab 8 - Starter
Names: Eric Chen (solo)

1. Choice 1 - Within a GitHub action that runs whenever code is pushed. The reason why we would want to fit automated tests when we push is we want to make sure that whatever code we are adding passes some sort of benchmark. Manually running automated tests is a contradiction and if we ran them all after development is completed, we wouldn't know if we were doing it correct the whole time. So the purpose of automated tests should be to consistently check when code is up to a certain standard before it is officially used. 
2. No, because that's too much work just to test a function. A unit test would be more fitting for this.
3. No, because testing the message feature would likely involve many components. To check if it executed correctly, you would likely have to see if the message was able to be sent out by one user, and if the message was received by another user. So you can't really test how it interacts outside with another user's inbox, or whatever is being used to receive the message. 
4. Yes, it's relatively quick to execute. We need to check the length of the message and it doesn't affect other tests. It's quite similar to checking if something is a valid message, which is what we did with emails and phone numbers.
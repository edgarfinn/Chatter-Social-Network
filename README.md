## Chatter:
A console-based social network application built using javascript.

Chatter is a simple social network application built to work within the console. Mimicking the functions of Twitter, Chatter allows users to post messages, follow other users, and view all messages posted by a particular user.

Specific functions that user's can undertake.

### Posting messages
You can post messages to a personal timeline using the command:

  ```<username> -> <message>```

For example:

```
Chatter $: edgar -> Wow, what an exciting week!
Chatter $: edgar -> We should do this more often!
Chatter $: john -> Cant believe I forgot my keys again!
```

  The first time a user posts a message, a profile is created automatically. All subsequent messages posted with that user's username are then saved to the same profile's timeline.

### Viewing a user's timeline
Your timeline stores all messages you've posted. Any user can view any other user's timeline simply by entering the username:

```
Chatter $: edgar
// We should do this more often! (3 minutes ago)
// Wow, what an exciting week! (4 minutes ago)

Chatter $: john
// Cant believe I forgot my keys again! (1 minute ago)
```

### Follow other users

You can follow other users so that their posts appear on your wall together with yours.

```<username> follows <anotherUsername>```

### Viewing your wall

You can view all of your own messages, together with those of anyone you follow by checking your wall:

```<username> wall```

### Demo

```
Chatter $: bridget -> I've got a spare ticket for the theatre, any takers?
Chatter $: edgar
// We should do this more often! (7 minutes ago)
// Wow, what an exciting week! (8 minutes ago)

Chatter $: bridget follows edgar
Chatter $: bridget wall
// bridget - I've got a spare ticket for the theatre, any takers? (30 seconds ago)
// edgar - We should do this more often! (8 minutes ago)
// edgar - Wow, what an exciting week! (9 minutes ago)
```

User stories:

How it will be built:
- Technology
  - [Vorpal:](http://vorpal.js.org/) a framework that helps to build immersive console applications with Javascript. This allows the application to run interactive sessions.

  - [Jest:](https://facebook.github.io/jest/) a javascript testing framework built by facebook.

  - [Vanilla Node:](https://nodejs.org/en/) the biggest open-source library of packages in the world. Node provides a run-time environment for the app to function in, as well as native modules such as ```file system``` that provides capability to write information on to files.

- How will the logic be structured?

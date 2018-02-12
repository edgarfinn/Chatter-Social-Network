## Chatter:
A console-based social network application built using javascript.

Chatter is a simple social network application built to work within the console. Mimicking the functions of Twitter, Chatter allows users to post messages, follow other users, and view all messages posted by a particular user.

### Installation instructions
```
$ git clone https://github.com/edgarfinn/Chatter-Social-Network.git
$ cd Chatter-Social-Network
$ npm install
$ npm start
$ sign in
```

#### Why do I have to type ```sign in```?

Chatter is an interactive application that can receive dynamically-defined commands (such as the [Read Timeline command, below](https://github.com/edgarfinn/Chatter-Social-Network#viewing-a-users-wall)). This is made possible using Vorpal.js' ```mode``` method, which requires, which requires the user to trigger this interactive mode once the application has started.

#### Exiting the application.
In order to exit the application, press ```ctrl``` + ```c``` twice.

#### Hard reset
Chatter is intended only to build on existing input. As such there is no current command to reset the users database. However, if - for any reason - you need to reset the app to blank, run the f

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

### Read a user's timeline
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

### Read your wall

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

Chatter $: bridget follows john
Chatter $: bridget wall
// bridget - I've got a spare ticket for the theatre, any takers? (1 minute ago)
// john - Cant believe I forgot my keys again! (7 minutes ago)
// edgar - We should do this more often! (9 minutes ago)
// edgar - Wow, what an exciting week! (10 minutes ago)
```

## User stories:
#### Posting messages

Command: ```<username> -> <message>```

- As a new user wanting to join Chatter, I can create a new account when I post my first message, by entering an unused username followed by a message, so that I can build a network of interactions with other Chatter users.

- As a returning user, I can post subsequent messages to my profile's timeline by entering my username, so that I can build a chronologically ordered archive of messages for other Chatter users to see.

#### Reading users' timelines
Command: ```<username>```

- As either a registered or unregistered user, I can view any existing user's timeline by typing their name in as a command, so that I can view all messages they have posted to Chatter in reverse-chronological order.

#### Following users

Command: ```<user name> follows <another user>```

As a registered user, I can follow other users, so that I can stay updated with new messages posted by that user.

#### Viewing a user's wall

Command: ```<username> wall```

- As either a registered user, I can view my profile's wall by entering my username followed by the command wall, so that I can view all messages that I have posted (in reverse chronological order) followed by all all messages posted by users that I follow (also in reverse chronological order).

### Data structure plan:

- userList
  - Data-type: ```object```
  - Description: contains all user objects.
  - Keys:
    - [user' username]: {user object}

- user
  - Data-type: ```object```
  - Description: contains user profile information.
  - Keys:
    - "userName": "username string"
    - "posts": [{array}, {of}, {post}, {objects}]
    - "following": ["array", "of", "userName", "strings"]

- post
  - Data-type: ```object```.
  - Description: contains data related to a specific post.
  - Keys:
    - "postedBy": "usernName string"
    - "contents": "message string"
    - datePosted: "ISO Date string" eg ```(YYYY-MM-DDTHH:MM:SSZ)```


### Technology / Tools
  - [Vorpal:](http://vorpal.js.org/) a framework that helps to build immersive console applications with Javascript. This allows the application to run interactive sessions.

  - [Jest:](https://facebook.github.io/jest/) a javascript testing framework built by facebook.

  - [Vanilla Node:](https://nodejs.org/en/) the biggest open-source library of packages in the world. Node provides a run-time environment for the app to function in, as well as native modules such as ```file system``` that provides capability to write information on to files.

- How will the logic be structured?

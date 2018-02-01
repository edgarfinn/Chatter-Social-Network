const userList = {
  users: [
    edgar: {
      userName: "edgar",
      posts: [
        {
          postedBy: "edgar",
          contents: "Wow, what an exciting week!",
          datePosted: "2018-02-01T13:54:30.586Z"
        },
        {
          postedBy: "edgar",
          contents: "We should do this more often!",
          datePosted: "2018-02-01T13:55:31.170Z"
        },
    ],
      following: []
    },
    john: {
      userName: "john",
      posts: [
        {
          postedBy: "john",
          contents: "Cant believe I forgot my keys again!",
          datePosted: "2018-02-01T14:33:34.533Z"
        },
      ],
      following: []
    },
    bridget: {
      userName: "bridget",
      posts: [
        {
          postedBy: "bridget",
          contents: "I've got a spare ticket for the theatre, any takers?",
          datePosted: "2018-02-01T14:35:16.093Z"
        },
      ],
      following: ["edgar", "john"]
    },
  ]
}

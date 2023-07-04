function getUser(username, callback) {
  // Simulating asynchronous operation with setTimeout
  setTimeout(() => {
    // Let's say there's an error when the username is 'BadUser'
    if (username === "BadUser") {
      callback(new Error("Failed to fetch user"));
    } else {
      console.log("User fetched");
      callback(null, { id: 1, username: username });
    }
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(null, [{ id: 1, userId: userId, content: "Post content" }]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(null, [{ id: 1, postId: postId, comment: "Great post!" }]);
  }, 1000);
}

// Fetch user
getUser("BadUser", (err, user) => {
  if (err) {
    console.log("Error: ", err.message);
    return;
  }

  // Fetch user's posts
  getPosts(user.id, (err, posts) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    // Fetch comments for the first post
    getComments(posts[0].id, (err, comments) => {
      if (err) {
        console.log("Error: ", err);
        return;
      }

      // All operations completed, we now have the user, their posts, and the comments on their first post
      console.log("All operations completed");
      console.log("User: ", user);
      console.log("First post: ", posts[0]);
      console.log("Comments on first post: ", comments);
    });
  });
});

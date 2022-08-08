const comments = require("./comments.json");
const posts = require("./posts.json");
const users = require("./users.json");

console.time("mapper");

for (var i = 0; i < posts.length; i++) {
    posts[i].user= users.find(x => x.id === posts[i].userId);
    posts[i].comments = comments.filter(x => x.postId === posts[i].id);
}

console.log(posts);


console.timeEnd("mapper");
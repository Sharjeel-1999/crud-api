//global varaiable bana diya
let post = [
  {
    id: 1,
    title: "This is my First post in this group",
    massage:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "This is my First post in this group",
    massage:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 3,
    title: "This is my First post in this group",
    massage:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 4,
    title: "This is my First post in this group",
    massage:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

//
// isme saray users ka data mil raha he easily and there is no more code
authGetAllpost = (req, res) => {
  res.statusCode = 200;
  res.json(post);
};




authCreatepost = (req, res) => {
  if (req.body.title && req.body.massage) {
    res.statusCode = 201;
    const newUser = post.length + 1;
    // console.log(newUser)
    post.push({
      id: newUser,
      title: req.body.title,
      massage:req.body.massage,
    });

    res.send("<h1>User Created Successfully</h1>");
  } else {
    res.statusCode = 400;
    res.send("<h1>Name Field is Missing  </h1>");
  }
};


// delete data api
authdeletepost = (req, res) => {
  res.statusCode = 200;

  const filterUser = post.filter((usr) => usr.id !== parseInt(req.params.id));
  post = filterUser;
  res.send("<h1>User Delete Successfully</h1>");
};

// Update ki api he bhai
authupdatepost = (req, res) => {
  const posts = post.find((usr) => usr.id === parseInt(req.params.id));
  posts.id = req.body.id;
  posts.title = req.body.title;
  posts.massage = req.body.massage;

  // users.name.splice();

  res.send("user update successfully");
};


module.exports = {
  authCreatepost,
  authGetAllpost,
  authdeletepost,
  authupdatepost,

};


const headers = {
    "Authorization" : "Token 2f34bca63d5d6a2074053886ec97c3a1cab7944b"
};

fetch('https://api.github.com/repos/VECHAPAVANKUMAR/toy-problems/pulls', {
    "method": "post",
    "headers": headers,
    "body": JSON.stringify({
        "title": "New Pull Request",
        "body": "Please pull these awesome changes in!",
        "head": "master",
        "base": "master",
    })
  })
.then((res) => res.json())
.then((json) => console.log(json));

fetch('http://localhost:3000/api/v1/messages', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
}).then(result => {
  return result.json();
}).then(json => {
  console.log(json);
}).catch(err => {
  console.log("Go away")
})

fetch('http://localhost:3000/api/v1/users', {
  method: "get",
  headers: {
    'Content-Type': 'application/json'
  }
}).then(result => {
  return result.json();
}).then(json => {
  json.data.users.forEach(user => {
    var users = `<div>${user.username}</div>`;
    document.querySelector(".persons").innerHTML += users;
  });
  console.log(json);
}).catch(err => {
  console.log("Go away")
})
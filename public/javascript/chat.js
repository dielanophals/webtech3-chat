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
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  },
}).then(result => {
  return result.json();
}).then(json => {
  json.data.users.forEach(user => {
    if(user.username !== localStorage.getItem('email')){
      var users = `<div>${user.firstname} ${user.lastname}</div>`;
      document.querySelector(".persons").innerHTML += users;    
  }
  });
  console.log(json);
}).catch(err => {
  window.location.href = "login.html";
})
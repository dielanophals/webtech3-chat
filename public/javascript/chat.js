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
      var users = `
        <div class="user" data-id="${user._id}">${user.firstname} ${user.lastname}</div>
      `;
      document.querySelector(".persons").innerHTML += users;    
  }
  });
  console.log(json);
}).catch(err => {
  window.location.href = "login.html";
})

document.querySelector(".imdchat").addEventListener("click", e => {
    if (e.target.classList.contains("user")) {
        fetch('http://localhost:3000/api/v1/messages', {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(result => {
          return result.json();
        }).then(json => {
          console.log(json);
        }).catch(err => {
          console.log("Go away")
        })
    }
});

let input = document.querySelector("#message");
input.addEventListener("keyup", e => {
  if(e.keyCode === 13){
    let text = input.value;

    fetch('http://localhost:3000/api/v1/messages', {
      method: 'post',
      'headers':{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        "text": text
      })
    }).then(result => {
      return result.json();
    }).then(json => {
      console.log(json)
    }).catch(err => {
      console.log(err);
    })
  }
  e.preventDefault();
})
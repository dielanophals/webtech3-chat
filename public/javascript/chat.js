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
        let receiver = e.target.getAttribute("data-id");

        fetch('http://localhost:3000/api/v1/messages/' + receiver, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(result => {
          return result.json();
        }).then(json => {
          document.querySelector(".messages").innerHTML = "";
          json.data.messages.forEach(message => {
              var messages = `
                <span class="message left" data-id="${message._id}">${message.text}</span>
              `;
              document.querySelector(".messages").innerHTML += messages;    
          });
          localStorage.setItem("receiver", receiver);
          console.log(json);
        }).catch(err => {
          console.log("Go away")
        })

        document.querySelector('.chat--form').classList.remove('hidden');
    }
});

let input = document.querySelector("#message");
input.addEventListener("keyup", e => {
  if(e.keyCode === 13){
    let text = input.value;

    fetch('http://localhost:3000/api/v1/messages/', {
      method: 'post',
      'headers':{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({
        "text": text,
        "receiver": localStorage.getItem('receiver')
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
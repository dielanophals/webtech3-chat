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
    if(e.target.classList.contains("group")){
      fetch('http://localhost:3000/api/v1/messages/', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }).then(result => {
        return result.json();
      }).then(json => {
        document.querySelector(".messages").innerHTML = "";
        json.data.messages.forEach(message => {
        if(message.sender === localStorage.getItem('receiver')){
              var messages = `
              <div class="wrapper left"><span class="message" data-id="${message._id}">${message.text}</span></div>
            `;
            }else{
              var messages = `
              <div class="wrapper"><span class="message" data-id="${message._id}">${message.text}</span></div>
            `;
            }
            document.querySelector(".messages").innerHTML += messages;    
        });
        console.log(json);
      }).catch(err => {
        console.log("Go away")
        window.location.href = "chat.html";
    })
    }else if(e.target.classList.contains("user")){
        let receiver = e.target.getAttribute("data-id");
        localStorage.setItem("receiver", receiver);

        fetch('http://localhost:3000/api/v1/messages/' + receiver, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(result => {
          return result.json();
        }).then(json => {
          document.querySelector(".messages").innerHTML = "";
          json.data.messages.forEach(message => {
          if(message.sender === localStorage.getItem('receiver')){
                var messages = `
                <div class="wrapper left"><span class="message" data-id="${message._id}">${message.text}</span></div>
              `;
              }else{
                var messages = `
                <div class="wrapper"><span class="message" data-id="${message._id}">${message.text}</span></div>
              `;
              }
              document.querySelector(".messages").innerHTML += messages;    
          });
          console.log(json);
        }).catch(err => {
          console.log("Go away")
          window.location.href = "chat.html";
      })

        document.querySelector('.chat--form').classList.remove('hidden');
    }
});

let input = document.querySelector("#message");
input.addEventListener("keyup", e => {
  if(e.keyCode === 13){
    let text = input.value;
    input.value = ""

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
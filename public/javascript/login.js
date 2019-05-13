var btnLogin = document.querySelector(".login button").addEventListener("click", () => {
    let username = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(username === ""){
      let feedback = document.querySelector(".alert");
      feedback.textContent = "Enter an email!";
      feedback.classList.remove('hidden');
  }else if(password === ""){
      let feedback = document.querySelector(".alert");
      feedback.textContent = "Enter a password!";
      feedback.classList.remove('hidden');
  }else{
    fetch('http://localhost:3000/users/login', {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    }).then(response => {
      return response.json();
    }).then(json => {
      if(json.status === "success"){
        let feedback = document.querySelector(".alert");
        feedback.textContent = "login complete!";
        feedback.classList.remove('hidden');
      }else{
        let feedback = document.querySelector('.alert');
        feedback.textContent = "Login failed!";
        feedback.classList.remove('hidden');
      }
    })
  }  
  })
  
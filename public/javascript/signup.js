var btnSignup = document.querySelector(".signup button").addEventListener("click", function(e) {
    let username = document.querySelector('#email').value;
     let password = document.querySelector('#password').value;
    fetch("http://localhost:3000/users/signup", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }).then(response =>{
        return response.json();
    }).then(json => {
        if(json.status == "succes"){
            let feedback = document.querySelector(".alert");
            feedback.textContent = "signup complete!";
            feedback.classList.remove = "hidden";
    
        }
    });
});
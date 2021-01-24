axios.get("https://panorbit.in/api/users.json").then((response)=>{
    var users=response.data.users; 
    users.forEach(element => {
        var div = document.createElement("DIV");

        var name = document.createElement("P");
        var namecontent = document.createTextNode("NAME: "+element.name);
        name.appendChild(namecontent);

        var username = document.createElement("P");
        var usernamecontent = document.createTextNode(" Username: "+element.username);
        username.appendChild(usernamecontent)

        var email = document.createElement("P");
        var emailcontent = document.createTextNode(" EMAIL: "+element.email);
        email.appendChild(emailcontent)

        var img = document.createElement('img'); 
        img.style.width="80px";
        img.style.height="80px";
        img.src = element.profilepicture;

        div.appendChild(img)
        div.appendChild(name);
        div.appendChild(username);
        div.appendChild(email);
        

        div.style.backgroundColor ='Lightblue'
        div.style.width='250px'
        document.getElementById("parent").appendChild(div);

    });

})

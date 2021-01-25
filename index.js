axios.get("https://panorbit.in/api/users.json").then((response)=>{
    var users=response.data.users; 
    users.forEach(element => {
        var div = document.createElement("DIV");

        var id = document.createElement("H1");
        var idcontent = document.createTextNode("ID: "+element.id);
        id.appendChild(idcontent);

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

        var profile = document.createElement("BUTTON");
        var profilecontent = document.createTextNode("PROFILE");
        profile.appendChild(profilecontent)
        profile.id=element.id;

        div.appendChild(img)
        div.appendChild(profile);
        div.appendChild(id)
        div.appendChild(name);
        div.appendChild(username);
        div.appendChild(email);

        div.style.backgroundColor ='Lightblue'
        div.style.width='250px'
        document.getElementById("parent").appendChild(div);

    });

})

var button= document.getElementsByTagName('BUTTON');

console.log(button);




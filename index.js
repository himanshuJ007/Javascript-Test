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
        img.style.width="100px";
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

        div.style.backgroundColor ="Lightgreen"
        div.style.width='250px'
        document.getElementById("parent").appendChild(div);

    });

})

setTimeout(()=>{
    var buttons= document.querySelectorAll('button');
    console.log(buttons[0]);
    for (var i = 0, element; element =buttons[i]; i++) {
        element.addEventListener('click',(event)=>{
            
            if(event.target.id>0 &&event.target.id<=10){
                sessionStorage.setItem('id', event.target.id);
                console.log(event.target.id);
                url = './homepage.html';
                document.location.href = url;
            }

        
        })


    }

},1000)

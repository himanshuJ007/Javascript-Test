
console.log("id===",sessionStorage.getItem('id'))
axios.get("https://panorbit.in/api/users.json").then((response)=>{
    var users=response.data.users; 
    users.forEach(element => {
        if(sessionStorage.getItem('id')==element.id){
            // console.log(element.profilepicture)

            document.getElementById("profile").src=element.profilepicture;
            document.getElementById("name").textContent=element.name;
            document.getElementById("username").innerHTML="USERNAME: "+element.username;
            document.getElementById("email").innerHTML="EMAIL: "+element.email;
            document.getElementById("phone").innerHTML="PHONE: "+element.phone;
            document.getElementById("website").innerHTML="WEBSITE: "+element.website;
            document.getElementById("cname").innerHTML="NAME: "+element.company.name;
            document.getElementById("catchphrase").innerHTML="CATCHPHRASE: "+element.company.catchPhrase;
            document.getElementById("bs").innerHTML="BS: "+element.company.bs;
            document.getElementById("street").innerHTML="STREET: "+element.address.street;
            document.getElementById("suite").innerHTML="SUITE: "+element.address.suite;
            document.getElementById("city").innerHTML="CITY: "+element.address.city;
            document.getElementById("zipcode").innerHTML="ZIPCODE: "+element.address.zipcode;



        }
    })
})
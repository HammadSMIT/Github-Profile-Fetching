let SearchBtn = document.querySelector("#SearchBtn")
let userName = document.querySelector("#username")
let name = document.querySelector("#name")
let disc = document.querySelector("#disc")
let follower = document.querySelector("#follower")
let following = document.querySelector("#following")
let repo = document.querySelector("#repo")
let link = document.querySelector("#link")
let visit = document.querySelector("#visit")



 
SearchBtn.addEventListener('click', ()=>{
    if(userName.value === ""){
        alert('Enter Username please')
    }
    else{
    fetch(`https://api.github.com/users/${userName.value}`)
    .then(data=>data.json())
    .then(data => {console.log(data)
        if(userName.value === data.login){
            
            img.src = "Profile" + data.avatar_url
            userName.innerHTML = "Name: " + ' ' + data.login
            disc.innerHTML = "BIO: " + ' ' + data.bio
            follower.innerHTML = "Followers:" + ' ' + data.followers
            following.innerHTML = "Following:" + ' ' +  data.following
            repo.innerHTML =  "Repository:" + ' ' + data.public_repos
            visit.href =  "Link:" + ' ' + data.html_url
            userName.value = ""
        }
        else
        {
            alert('user not found')
            userName.value = ""
        }

    
        
    
    
    })
    .catch(error=>{console.log(error)})
}
})














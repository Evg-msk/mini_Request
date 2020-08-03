const body= document.body;
let url = window.location.toString();
console.log(url);
const getUsername = (url) => {
    let urlGetName = url.split('=');
    let nameGet = urlGetName[1];
    console.log(nameGet);
    if (nameGet === undefined) {
        nameGet = 'Evg-msk';
        console.log(nameGet);
    }
    return nameGet;
};
   let nick = getUsername(url);

fetch('https://api.github.com/users/' + nick)
    .then(res => res.json())
    .then(json => {
        if(json.id) {

        const addUser = () => {
            const user = document.querySelector('.name');
            user.innerHTML = json.name;
        };
        const addImg = () => {
            const img = document.createElement('img');
            img.src = json.avatar_url;
            body.appendChild(img);
        };
        const addBio = () => {
           const bio = document.createElement('p');
           bio.innerHTML = json.bio;
            body.appendChild(bio);
        };
        const addLink = () => {
            const link = document.querySelector('.link');
            link.href = json.html_url;
        };
        addUser();
        addBio();
        addImg();
        addLink();
        } else {
            let div = document.querySelector('.Err');
            div.innerHTML = 'Извините запрашевыемый пользователь не найден :('
        }
    })
    .catch(err => {
        let div = document.querySelector('.Err');
        div.innerHTML ='Пользователь не найден :('
    });
const currentTime = new Date();
const currentHour = currentTime.getHours();
const greeting = () =>{
    if(currentHour > 5 || currentHour < 11){
        document.querySelector('.hello').innerText = "בוקר טוב אלירן";
        } else if(currentHour > 12 || currentHour < 15){
            document.querySelector('.hello').innerText = "צהריים טובים אלירן"
        }else if(currentHour > 16 || currentHour < 18){
            document.querySelector('.hello').innerText = "אחר הצהריים טובים אלירן";
        }else if(currentHour > 19 || currentHour < 22){
            document.querySelector('.hello').innerText = "ערב טוב אלירן";
        }else if(currentHour > 23 || currentHour < 4){
            document.querySelector('.hello').innerText  = "לילה טוב אלירן";
        }
    }


    greeting()
// const searchGoogle = (e) =>{
// e = document.querySelector(google,search);
// }
//TODO: const computerSearch
//TODO: const youtubeSearch
//TODO: const newsFeed of random(3 twitter, 3 facebook post, 3 instagram post)
//TODO: const news most new articles
const api_url = "https://api.github.com/users/zihanhannah/events"
//
// getInformation()
//     .then(response => {
//         console.log("done");
//     })
//     .catch(error => {
//         // console.log("error");
//         console.error(error);
//     })
async function getInformation() {
    const response = await fetch(api_url, {headers: {'Authorization': 'PersonalAccessToken'}});
    const data = await response.json();
    console.log(data[0].created_at);
}

var Interval = setInterval(getInformation, 4000);
setTimeout(() => {
    clearInterval(Interval);
}, 10000);

const delay = t => new Promise(resolve => setTimeout(resolve, t));
// delay(1000).then(() => console.log("you will see tis after 1 second"));
// delay(1000).then(getInformation);
delay(1000).then(() => {
    console.log("you will see tis after 1 second");
    getInformation();
});
delay(3000).then(() => console.log("you will see tis after 3 second"));


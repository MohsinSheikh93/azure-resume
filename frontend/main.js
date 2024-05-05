window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const funcApiURL = 'https://getresumecounter-eastus.azurewebsites.net/api/GetResumeCounter?code=IN3DDeoUZcw2rzgyjmSuam2zK2pjSdDMTFQHuDO6hhCYAzFusUet6Q==';
const localfuncApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 0;
    fetch(funcApiURL).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error) {
        console.log(error);
    })
    return count;
} 

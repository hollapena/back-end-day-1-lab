// submit buttons
const friendButton=document.getElementById('friend-submit')

// inputs
const friendInput = document.getElementById('friend-search');

// response section
const responseArea = document.getElementsByClassName('response-area')[0];

// handle submits
friendButton.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/users?item=${friendInput.value}`)
        .then(res => showResults(res.data))
});

// handle response
function showResults(resData) {
    responseArea.innerHTML = null;

    if (resData.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Your search came back with no results!");
        p.appendChild(t);

        responseArea.appendChild(p)
    } else {
        resData.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseArea.appendChild(p)
        })
    }
}
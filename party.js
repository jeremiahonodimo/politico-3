//const partyForm = document.querySelector('.party-form')
//const partyName = document.querySelector('.party-name')
//const partyDesc = document.querySelector('.party-desc')






//party form

//partyForm.addEventListener('submit', async (e) =>{
  //  e.preventDefault()
    //const name = partyName.value
    //const desc = partyDesc.value

    //try {
      //  await axios.post('/api/v1/party', {name, desc})
        //partyForm.innerHTML = `<h1>Successfully created ${name} party</h1><a class="button" href="admindashboard.html">Back</a>`
    //} catch (error) {
      //  partyForm.innerHTML = `<h1>Party could not be created due to an error</h1>`
    //}
//})let btnAdd = document.querySelector('button');
//let table = document .querySelector('table');

//let nameInput = document.querySelector('#name');
//let ageInput = document.querySelector('#age');
//let countryInput = document.querySelector('#country');

//btnAdd.addEventListener('click', () => {
  //  let name = nameInput.value;
    //let age = ageInput.value;
    //let country = countryInput.value;

    

let partyForm = document.querySelector('.party-form')

let nameInput = document.querySelector('party-name')
let descInput = document.querySelector('party-desc')

btn.addEventListener('click', () => {
    let name = partyName.value;
    let desc = partyDesc.value;

    
})
let template = `
<tr>
     <td>${partyName}</td>
     <td>${partyDesc}</td>
</tr>`;
form.innerHTML += template;   
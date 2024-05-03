//
//javascript recap
console.log('hello world');
const myElement= document.querySelector('.myElementsClass') // single object
const myGroup= document.querySelectorAll('.myElementsClass') // multiple objects

myElement.classList.add('classIWwantToAdd');
myElement.classList.remove('classIWwantToRemove');
myElement.classList.toggle('classIWwantToToggle');

myGroup.forEach(item =>{
    //do something for to the singular item
    //add/remove a class, attached an event listener
});

appendChild(myDiv) // inserting a new element into an existing one
 
const myDiv =createElement('DIV');
myElement.appendChild(myDiv) // intserting a new element into an existing one



const nycURL = 'https://data.cityofnewyork.us/resource/wewp-mm3p.json?$limit=50000'

const hours = document.querySelectorAll('.hour')

const workWithData = json => {

    const blockedDrivewayCalls = json.filter(item => item.inquiry_name == 'Blocked Driveway');

    const getResultsForHour = (requestedHour) => {

        const callsForHour = blockedDrivewayCalls.filter(item => {
            const time = item.time;
            // detect if it's AM or PM via the indexOf method searching for a keyword
            const AMorPM = time.indexOf('AM') == -1 // the condition
            ? 'PM' // is it true, then set it to PM
            : 'AM' // is it true, then set it to AM

            // split the text apart and just get the hour
            const hour = AMorPM == 'AM'
            ? parseInt(time.split(':')[0])
            : parseInt(time.split(':')[0]) + 12
            
            return hour == requestedHour
        })

        const volume = callsForHour.length;
        const hourEL = hours[requestedHour - 1];
        hourEL.innerText = requestedHour + ':00' + ' | ' + volume + ' calls';
        hourEL.style.width = volume + 'vw';
        hourEL.style.backgroundColor = `hsl(${260 + volume}, 100%, 50%)`;
        console.log(volume)
    }

    for (let index = 1; index <= 24; index++) {
        console.log(getResultsForHour(index))
    }
    

}


fetch(nycURL)
.then(response => response.json())
.then(json => {
    workWithData(json)
})
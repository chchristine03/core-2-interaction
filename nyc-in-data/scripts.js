window.scrollBy({
    top: 1000,
    left: 0,
    behavior: "smooth"
  });

  const nycURL = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json'

const hours = document.querySelectorAll('.hour')
g
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
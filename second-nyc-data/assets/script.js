const movableImages = document.querySelectorAll('.dragImg');
let activeImage = null;
let offsetX, offsetY;

movableImages.forEach(image => {
    image.addEventListener('mousedown', startDragging);
    image.addEventListener('mouseup', stopDragging);
});

function startDragging(e) {
    activeImage = this;
    offsetX = e.clientX - activeImage.getBoundingClientRect().left;
    offsetY = e.clientY - activeImage.getBoundingClientRect().top;

    activeImage.style.zIndex = 2;
    activeImage.style.cursor = 'grabbing';

    document.addEventListener('mousemove', dragImage);
    document.addEventListener('mouseup', stopDragging);
}

function dragImage(e) {
    if (!activeImage) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    activeImage.style.left = x + 'px';
    activeImage.style.top = y + 'px';
}

function stopDragging() {
    if (!activeImage) return;
    activeImage = null;

    document.removeEventListener('mousemove', dragImage);
    document.removeEventListener('mouseup', stopDragging);
}





document.addEventListener("DOMContentLoaded", function() {
    fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
        .then(response => response.json())
        .then(data => {
            // Filter data based on grade
            const filteredData = data.filter(item => item.grade);

            // Render restaurants
            renderRestaurants(filteredData);
        })
        .catch(error => console.error('Error fetching data:', error));

    function renderRestaurants(restaurants) {
        const restaurantsDiv = document.getElementById('restaurants');
        const informationDiv = document.querySelector('.information');
        restaurants.forEach(restaurant => {
            const restaurantDiv = document.createElement('div');
            restaurantDiv.classList.add('restaurant');

            // Add image based on grade
            const grade = restaurant.grade.toLowerCase();

             // Skip rendering if grade is 'n' and others
        if (['n', 'p','z'].includes(grade)) {
            return;
        }


            const imageUrl = getImageUrlByGrade(grade);
            const img = document.createElement('img');
            img.src = imageUrl;
            restaurantDiv.appendChild(img);


                    // Add click event to show additional information
        restaurantDiv.addEventListener('click', () => {
            const additionalInfo = `Cuisine: ${restaurant.cuisine_description}
            <br> DBA: ${restaurant.dba}
            <br>  Grade: ${restaurant.grade}`;
            informationDiv.innerHTML = additionalInfo; // Display additional information
        });

        restaurantsDiv.appendChild(restaurantDiv);
    
    
    const buttonA = document.getElementById('filter-a')
    buttonA.addEventListener ('click', () => {
        console.log("working?");

        document.getElementById("restaurants");
        restaurantsDiv.innerHTML = "" 
        console.log(restaurants)
         // Filter data based on grade
        const GradeAData = restaurants.filter(item => item.grade == 'A');

        // Render restaurants
        renderRestaurants(GradeAData);

    });
    });



}


    function getImageUrlByGrade(grade) {
        // Define image URLs based on grade
        // You can customize these URLs as per your requirement
        switch (grade) {
            case 'a':
                return 'imgs/a-banana.png';
            case 'b':
                return 'imgs/b-banana.png';
            case 'c':
                return 'imgs/c-banana.png';
        }
    }
});

const nycURL = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json'

const workWithData = data => {
console.log(data)
	// how do we get an array of a specific property value (dog breed == Boxer, in this case)
	const agrade = data.filter(object => object.grade == 'a');

    function checkGrade() {
        return agrade;
}

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("filter-a").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("restaurants").classList.toggle('hidden');
  console.log("working?");
}

    fetch(nycURL)
    .then(response => response.json())
    .then(json => {
        workWithData(json)
    })


}


// ask: how to filter, animate the falling bananas when clicked on the filter,
// or the filter system is drag and drop into the plate 


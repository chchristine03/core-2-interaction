// Function to render your items
// We "call" this function once our fetch method is completed below
// (collection) here is a placeholder (usually called a "parameter") that is the json
const renderItems = (collection) => {
	// Step 1: Decide where we will be inserting HTML into the page
	// We'll store `ul` where the items will be inserted in a variable called collectionList
	const collectionList = document.getElementById('collection');
	
	// Step 2: Iterate through the json/payload we get from the fetch method
	// forEach loops through each item/object in the collection/array
	collection.forEach(item => {
		
		// Step 3: Decide how to create the HTML, pulling from the object as needed
		// there are a few ways to do this, and we cover two below

		// Option 1) Use createElement, innerHTML, and appendChild to control each HTML separately

			const listItem = document.createElement('li') // Make the `li` 

			// You can make each element inside of that…
			const itemTitle = document.createElement('h2') // Make an `h2`
			itemTitle.innerHTML = item.title // Put the JSON title inside
			listItem.appendChild(itemTitle) // And add it to the `li`!

			const itemImage = document.createElement('img') // And an image
			itemImage.src = item.posterImage // Set the `src` attribute from the JSON
			listItem.appendChild(itemImage) // And add that too

			// we can an ID to the list item for unique styling
			listItem.id = item.id;
 
		// This can get annoying and repetative, leading us to…
		// Option 2) Use “template literals” to create a bundnle of HTML all at once
			// notice the tick marks `` wrapped around everything, with ${variable} used for dynamic content
			const itemDetails =
				`
					<li class="list-item">
						<img src="${item.posterImage}" class="list-item-image">
						<div class="list-item-content">
							<p>📍 Built in <span>${item.location}</span></p>
							<p>📐 Designed by ${item.architect}</p>
							<p>📖 ${item.description}</p>
						</div>
					</li>
				`;
			
		// Step 4: Insert our new HTML (stored in itemDetails) into the page (before the end the collectionList element )
		collectionList.insertAdjacentHTML('beforeend', itemDetails); 

		// You can build logic from your data, too
		// if (!item.otherAttr) { // If this is `false`
		// 	listItem.classList.add() // Add this class to the whole `li`
		// }
	})
}


// This is where we tie everything together
// Fetch gets your JSON file…
fetch('assets/collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		console.log(collection)
		renderItems(collection)
})
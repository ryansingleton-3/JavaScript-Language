/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

const Ryan = {
  name: "Ryan Singleton",
  photo: "./images/Ryan_Headshot_real_square.png",
  favoriteFoods: [
    "Chicken Alfredo",
    "Chipotles Burritos",
    "Biscuits and Gravy",
  ],
  hobbies: ["Basketball", "Coding", "Reading"],
  placesLived: [
    { place: "Ohio", length: "21 years" },
    { place: "Argentina", length: "2 years" },
    { place: "Tennessee", length: "2 years" },
    { place: "Kentucky", length: "1 years" },
  ],
};

document.getElementById("name").innerHTML = Ryan.name;
document.getElementById("photo").src = Ryan.photo;
document.getElementById("photo").style = "max-height: 40vh";
document.getElementById("photo").alt = Ryan.name;

Ryan.favoriteFoods.map((food) => {
  let parent = document.getElementById("favorite-foods");
  let li = document.createElement("li");
  li.innerHTML = food;
  parent.appendChild(li);
});
Ryan.hobbies.map((hobby) => {
  let parent = document.getElementById("hobbies");
  let li = document.createElement("li");
  li.innerHTML = hobby;
  parent.appendChild(li);
});
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

Ryan.placesLived.map((element) => {
    let placesLivedElement = document.getElementById("places-lived");
    let dt = document.createElement('dt')
    dt.innerHTML = element.place
    placesLivedElement.append(dt)

    let dd = document.createElement('dd')
    dd.innerHTML = element.length
    placesLivedElement.append(dd)
    
    
}); 
 
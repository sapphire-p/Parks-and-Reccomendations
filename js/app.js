//Javascript Code to go in here

// ARRAY OF PARK OBJECTS

// There are many methods for creating objects and this one seemed the most efficient.
// It creates a class of object (called ParkObject), which acts as a template for the creation of objects that each represent a park.

class ParkObject {
    constructor(name, area, size, toilets, cafe, parking, cyclistFriendly, nearestStation, description) {
        this.name = name;
        this.area = area;
        this.size = size;
        this.toilets = toilets;
        this.cafe = cafe;
        this.parking = parking;
        this.cyclistFriendly = cyclistFriendly;
        this.nearestStation = nearestStation;
        this.description = description;
    }
}

let arrayOfParks = []; // This creates an empty array which will contain all of the park objects. When looking for parks that match given criteria, we can search through this array to find them.

// Each of the below creates a new park object (using the ParkObject class template above)
// The new park object is then pushed into the arrayOfParks array

let greenwichPark = new ParkObject("Greenwich Park", "South", "Medium", true, true, true, true, "North Greenwich", "Greenwich Park is one of the Royal Parks of London and is situated in the south-east of the city. Its hills offer excellent views over the River Thames, the Isle of Dogs and the City of London. ");
arrayOfParks.push(greenwichPark);

let claphamCommon = new ParkObject("Clapham Common", "West", "Large", true, true, false, true, "Clapham Common", "Clapham Common is a large triangular urban park in Clapham, south London, England. It is 220 acres of green space, with three ponds and a Victorian bandstand. ")
arrayOfParks.push(claphamCommon);

let batterseaPark = new ParkObject("Battersea Park", "West", "Medium", true, true, true, true, "Queenstown Road (Battersea)", "Battersea Park is a 200-acre green space at Battersea in the London Borough of Wandsworth. It is situated on the south bank of the River Thames opposite Chelsea and occupies marshland reclaimed from the Thames and land formerly used for market gardens. ");
arrayOfParks.push(batterseaPark);

let hydePark = new ParkObject("Hyde Park", "Central", "Large", true, true, true, true, "Hyde Park Corner", "Hyde Park is a Grade I-listed major park in central London and the largest of the Royal Parks in central London. The park is divided by the Serpentine and the Long Water lakes. ");
arrayOfParks.push(hydePark);

let nunheadCemetery = new ParkObject("Nunhead Cemetery", "South", "Small", false, false, true, false, "Nunhead", "Nunhead Cemetery is one of the 'Magnificent Seven' large private cemeteries in London. It was originally known as All Saints' Cemetery, consecrated in 1840 and is a local nature reserve. ");
arrayOfParks.push(nunheadCemetery);

let crystalPalacePark = new ParkObject("Crystal Palace Park", "South", "Medium", true, true, true, true, "Crystal Palace", "Former site of the Crystal Palace which was built as part of the 1851 Great Exhibition. Today the park consists of statues of prehistoric monsters, geological strata, open parkland and pathways, sport and recreation facilities, an animal farm, playground, maze and cafe. ");
arrayOfParks.push(crystalPalacePark);

let barnsburyWood = new ParkObject("Barnsbury Wood", "Central", "Small", false, false, false, false, "Highbury & Islington", "Barnsbury Wood is London's smallest local nature reserve. The hidden woodland was eventually abandoned to nature and is now home to a wealth of wildlife. ");
arrayOfParks.push(barnsburyWood);

let victoriaPark = new ParkObject("Victoria Park", "East", "Large", true, true, true, true, "Hackney Wick", "Nicknamed Vicky Park or the People's Park, Victoria Park is a park in the London Borough of Tower Hamlets in East London, England. It is the largest park in Tower Hamlets and one of the most visited green spaces in London – approximately 9 million people visit each year. ");
arrayOfParks.push(victoriaPark);

let alexandraPark = new ParkObject("Alexandra Park", "North", "Medium", false, false, false, true, " Alexandra Palace", "Alexandra Park is situated in the Borough of Haringey in north London, adjacent to Hornsey, Muswell Hill and Wood Green. It has a mixture of hilly and flat terrain. Along with the neighbouring Alexandra Palace, the park was named in 1863, the year of the marriage of Alexandra of Denmark to the Prince of Wales who became King Edward VII. ");
arrayOfParks.push(alexandraPark);


// console.log(arrayOfParks); // To demonstrate, this displays the arrayOfParks array in the JS dev console

// console.log(arrayOfParks.length); // This displays the length of the arrayOfParks array (the array currently contains 7 park objects)


//CRITERIA

// Get the form from the document
let form = document.querySelector("form");

//Gets the options once the user has pressed submit
function submitForm() {
    
    //criteria
    let area = ""  // ('North' / 'South' / 'East' / 'West')
    let size = ""  //  ('Small' / 'Medium' / 'Large')
    let toilets = false  // (Boolean true or false)
    let cafe  = false // (Boolean true or false)
    let parking = false // (Boolean true or false)
    let cyclistFriendly = false // (Boolean true or false)

    area = document.getElementById("areacriteria").value;
    size = document.getElementById("sizecriteria").value;

    let checkboxes = document.querySelectorAll("input[type=checkbox][name=criteria]"); // Select all checkboxes with the name 'criteria' using querySelectorAll.
    let enabledCriteria = [] //empty array for enabled checkboxes

    checkboxes.forEach(function getCheckboxes() {
            enabledCriteria = 
                Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
                .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
                .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
        })
    console.log(enabledCriteria)

    enabledCriteria.forEach(function findTrueCriteria(x) { //changes variable to true if it was checked on
        if (x == "toilets") {
            toilets = true
        } else if (x == "cafe") {
            cafe = true
        } else if (x == "parking") {
            parking = true
        } else if (x == "cycling") {
            cyclistFriendly = true
        }
    });

    let results = identifyPark(area, size, toilets, cafe, parking, cyclistFriendly);
    
        function identifyPark(area, size, toilets, cafe, parking, cyclistFriendly) {
            let recommendation = [];
            for (var i = 0; i < arrayOfParks.length; i++) {
                if (arrayOfParks[i].area === area
                    && arrayOfParks[i].size === size
                    && arrayOfParks[i].toilets === toilets
                    && arrayOfParks[i].cafe === cafe
                    && arrayOfParks[i].parking === parking
                    && arrayOfParks[i].cyclistFriendly === cyclistFriendly
                ) {
                    recommendation.push("!", arrayOfParks[i].name,"!", arrayOfParks[i].nearestStation,"!", arrayOfParks[i].description)
                }
            }
            if (recommendation.length >= 1) {
                return recommendation;
            } else {
                return "Sorry, but we are unable to suggest a park that matches those specific criteria. Please try again.";
            }
        };

    localStorage.setItem("results", results);
    
    resultsPage = "./results.html";
    window.open(resultsPage);  

   return false
};


function retrieveData() {
    let resultsForSplice = localStorage.getItem("results")

    let splicedResults = resultsForSplice.split("!,")

    console.log(splicedResults)

    if (splicedResults.length == 1){
        document.getElementById("results-text").innerHTML = splicedResults 
    } else if (splicedResults.length == 4){
        document.getElementById("results-title").innerHTML = splicedResults[1].slice(0,-1)
        document.getElementById("nearest-station").innerHTML = splicedResults[2].slice(0,-1)
        document.getElementById("results-description").innerHTML = splicedResults[3].slice(0,-1)
    } else {
        document.getElementById("results-title").innerHTML = splicedResults[1].slice(0,-1)
        document.getElementById("nearest-station").innerHTML = splicedResults[2].slice(0,-1)
        document.getElementById("results-description").innerHTML = splicedResults[3].slice(0,-1)
        document.getElementById("results-title-2").innerHTML = splicedResults[4].slice(0,-1)
        document.getElementById("nearest-station-2").innerHTML = splicedResults[5].slice(0,-1)
        document.getElementById("results-description-2").innerHTML = splicedResults[6].slice(0,-1)
    }

}



// FUNCTION TO IDENTIFY PARKS WITHIN THE arrayOfParks ARRAY THAT MEET GIVEN CRITERIA

// The function then searches through the arrayOfParks array looking for park objects that match all those criteria.
// If it finds a match, it will push a string (containing that park object's name, nearestStation and decription) into an array called recommendation (initialised within the function).
// Once the function has finished looping through the arrayOfParks, it will see if any matches were found (i.e. is recommendation array still empty?)
// If matches are found, the function will return the recommendation array (containing name, nearestStation and decription of every park that matched) as a string.
// If no matches are found, it will return a string that is a "Sorry..." message.




// console.log(identifyPark("South", "Medium", true, true, true, true)); // example - details of Greenwich Park and Crystal Palace Park appear in JS dev console

// console.log(identifyPark("South", "Small", true, true, true, true)); // example - "Sorry..." message appears in JS dev console

// console.log(identifyPark("South", "Small", false, false, true, false)); // // example - details of Nunhead Cemetery appear in JS dev console






// FOR REFERENCE ONLY (we can delete later): this is what arrayOfParks looks like structurally, although a different method was used to build it:

// let arrayOfParks = [
//     {
//         name: "Greenwich Park",
//         area: "South",
//         size: Medium,
//         toilets: true,
//         cafe: true,
//         parking: true,
//         cyclistFriendly: true,
//         nearestStation: "North Greenwich",
//         description: "Greenwich Park is one of the Royal Parks of London and is situated in the south-east of the city. Its hills offer excellent views over the River Thames, the Isle of Dogs and the City of London."
//     },
//     {
//         name: "Clapham Common",
//         area: "West",
//         size: Large,
//         toilets: true,
//         cafe: true,
//         parking: false,
//         cyclistFriendly: true,
//         nearestStation: "Clapham Common",
//         description: "Clapham Common is a large triangular urban park in Clapham, south London, England. It is 220 acres of green space, with three ponds and a Victorian bandstand."
//     },
// ]

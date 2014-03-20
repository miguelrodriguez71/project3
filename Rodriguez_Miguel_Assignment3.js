// Author: Miguel Rodriguez Martinez
// 03-20-2014
// Deliverable 3


// Json Data

var jsonData = {
    "tvCodes":
    [
        {
         "tvBrand" : "SONY",
         "tvModel" : "so01",
         "tvCode"  : "10000"
        },
        {
         "tvBrand" : "SONY",
         "tvModel" : "so02",
         "tvCode"  : "10000"
        },
        {
         "tvBrand" : "SONY",
         "tvModel" : "so03",
         "tvCode"  : "10000"
        },
        {
         "tvBrand" : "SAMSUNG",
         "tvModel" : "sa01",
         "tvCode"  : "10101"
        },
        {
         "tvBrand" : "SAMSUNG",
         "tvModel" : "sa02",
         "tvCode"  : "10102"
        },
        {
         "tvBrand" : "LG",
         "tvModel" : "lg01",
         "tvCode"  : "10201"
        },
        {
         "tvBrand" : "SANYO",
         "tvModel" : "sy01",
         "tvCode"  : "10000"
        },
        {
         "tvBrand" : "VIZIO",
         "tvModel" : "vz01",
         "tvCode"  : "11718"
        }
    ]       
};

// Global Variables
var defaultBrand = "SONY"
var brand = "SONY";
var defaultModel = "Type a TV Model"
var model = "so01";


// function to pick a Tv Brand

var pickABrand = function(defaultb) {
    var nameBrand = prompt("Type the TV Brand, 0 to exit (use all CAPITAL letters)?", defaultb);
    for (var i = 0; i < jsonData.tvCodes.length; i++) {
        var codes = jsonData.tvCodes[i];
        if (nameBrand === "0") {
            console.log("Program Terminated!");
            return "0";
        } else {
           if (codes.tvBrand === nameBrand) {
                defaultBrand = nameBrand
                return nameBrand;
           };            
        };

        
    };
    console.log("Brand not found")
    return "0"
    
};

/* Function to get Models Number by Brand

var getModels = function() {
    var x = 0;
    var modelArray = [];
    for (var i = 0; i < jsonData.tvCodes.length; i++) {
        var codes = jsonData.tvCodes[i];
        if (brand === codes.tvBrand) {
            modelArray[x] = jsonData.tvModel[i];
            x++; 
        }
    
    };

    return modelArray;
};
*/

// Code starts with a loop to pick brand running to when a 0 is pressed

while ( brand !== "0") {
    brand = pickABrand(defaultBrand);
    console.log("Brand: " + brand)
    if (brand !== "0") {
        // Now we create an array with the TV models
//        var modelOptions = getModels();
//        console.log("Models: "+ modelOptions);        
    };
};



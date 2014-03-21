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
var defaultModel = "Type a TV Model";
var model = "so01";
var modelNumber;
var codesToShow = [];


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

// Function to get Models Number by Brand

var getModels = function() {
    var x = 0;
    var modelArray = [];
    for (var i = 0; i < jsonData.tvCodes.length; i++) {
        var codes = jsonData.tvCodes[i];
        if (brand === codes.tvBrand) {
            modelArray.push(codes.tvModel);
            x++; 
        }
    
    };
    

    return modelArray;
};

// Function to pick a Model
var getModelPick = function(nArray) {
    var pickAModel = prompt("Type a Model Displayed (0 = I dont my model):  "+nArray);
    if (pickAModel === "0") {
        //I dont know my model
        model = "Undefined";
        return false;
    } else {
        // get my model pick
        model = pickAModel;
        
        return true;
    };
    
    return false;
};

// function to show Codes

var getCodes = function(nBoolean,nModel) {
    if (nBoolean === true) {
        // only codes by model
       for (var i = 0; i < jsonData.tvCodes.length; i++) {
           var tCodes = jsonData.tvCodes[i];
           if (nModel === tCodes.tvModel) {
               codesToShow.push(tCodes.tvCode);
            }
       };
    } else {
        // All codes by brand
       for (var i = 0; i < jsonData.tvCodes.length; i++) {
           var tCodes = jsonData.tvCodes[i];
           if (brand === tCodes.tvBrand) {
               codesToShow.push(tCodes.tvCode);
            }
       };
        
    };
    
    return codesToShow.length; 

};


// Procedure to show codes
var codesDisplay = function() {
    var show = confirm("Try this Codes Please: "+codesToShow);
};


// Main Code

while ( brand !== "0") {
    codesToShow = [];
    
    brand = pickABrand(defaultBrand);

    if (brand !== "0") {
        // Now we create an array with the TV models
        var modelOptions = getModels();
        for (var i = 0; i < modelOptions.length;i++) {
            console.log("Modelo: "+modelOptions[i]);
        };
        var modelPick = getModelPick(modelOptions);
        if (modelPick === true) {
            //get only codes for a specific TV Model
            var showModels = getCodes(true,model);
        } else {
            // get all codes by a TV Brand
            var showModels = getCodes(false,model);
        }
        
        // Showing the codes
        var showProcess = codesDisplay();
        
        var exit = confirm("Do you want to start over?");
        if (exit === false) {
            //Exit
            break;
        }
        
        
    };
};



var summary = {

    "id": "0001",

    "type": "donut",

    "name": "Cake",

    "ppu": 0.55,

    "batters": {

        "batter": [

            { "id": "1001", "type": "Regular", "recipe": "pineaplee", "color": "yellow" },

            { "id": "1002", "type": "Chocolate", "recipe": "chocolava", "color": "black", "content": ["bread", "choco-cream"] },


        ],

    },

    "topping": [

        { "id": "5001", "type": "None", "recipe": "ava", "color": "blue", "content": ["bread", "cream"] },

        { "id": "5002", "type": "Glazed", "recipe": "ava", "color": "green", "content": ["bread", "cream-cream"] },

    ],

};

// Add recipe and color to topping  
var add = summary.topping.push({ "id": "5003", "type": "string", "recipe": "ava", "color": "red", "content": ["bread", "milk"] });
console.log(summary);

// pineapple name is spelled wrongly. Update it to * pineapple * 

var c = summary.batters.batter[0].recipe = "pineapple";
console.log(c);

// //List all the content of chocolate in batter
for (let i in summary.batters.batter) {
    if (summary.batters.batter[i].type = "chocolate") { var d = summary.batters.batter[i].content; }
}
console.log(d);

//Print the all topping type . 

for (let i in summary.topping) {
    var v = summary.topping[i].type;
    console.log(v);
}

//Print the total weight of employeeFriends 
// question irrelevant to json

//Add 2 more content to chocolate 

summary.batters.batter[1].content.push("add", "bull");
console.log(summary.batters.batter[1].content);
// ask sir to do it with loop after checking
//  for(let i in summary.batters.batter){
//     if( summary.batters.batter[i].type = "chocolate")
//     {var t = summary.batters.batter[i].content.push   ("add","bull");
//     }
// } console.log(t);

// Update the Glazed color of green to white 


for (let i in summary.topping) {
    if (summary.topping[i].type = "Glazed") {
        var g = summary.topping[i].color = "White";
    }
}
console.log(g);


// question 2

var sumary = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "image":
    {
        "url": "images/0001.jpg",
        "width": 200,
        "height": 200
    },
    "thumbnail":
    {
        "url": "images/thumbnails/0001.jpg",
        "width": 32,
        "height": 32
    }
}


var sumary = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "image":
    {
        "url": "images/0001.jpg",
        "width": 200,
        "height": 200
    },
    "thumbnail":
    {
        "url": "images/thumbnails/0001.jpg",
        "width": 32,
        "height": 32
    }
}


// Update the url of the *thumbnail* 
sumary.image.url = "images";

// Update the height and width of the *image* to 40 and 50 
sumary.image.width = 40;
sumary.image.height = 50;

sumary.imaginer = {
    "url": "abcd",
    "width": 23,
    "height": 45
}
console.log(sumary.imaginer);

// Add a new object name *imaginer* with url , width and height 
sumary.image.width + " " + sumary.thumbnail.width + " " + sumary.imaginer.width;
//............ in string..ask sir about json parse not working

// Print the total height and total weight of all three image ,thumbnail and imaginer 
console.log(sumary.image.width + sumary.thumbnail.width + sumary.imaginer.width);
console.log(sumary.image.height + sumary.thumbnail.height + sumary.imaginer.height);

// Change the url of the thumbnail to “images/thumbanail/0001.jpeg
sumary.thumbnail.urrl = "images/thumbanail/0001.jpeg";


var docuument = {
    "problems": [{
        "Diabetes": [{
            "medications": [{
                "medicationsClasses": [{
                    "className": [{
                        "associatedDrug": [{
                            "name": "asprn",
                            "dose": "45",
                            "strength": "150 mg"
                        }],
                        "associatedDrug#2": [{
                            "name": "manocry",
                            "dose": "2",
                            "strength": "220 mg"
                        }]
                    }],
                    "className2": [{
                        "associatedDrug": [{
                            "name": "vanprine",
                            "dose": "12",
                            "strength": "1500 mg"
                        }],
                        "associatedDrug#2": [{
                            "name": "crypson",
                            "dose": "333",
                            "strength": "5220 mg"
                        }]
                    }]
                }]
            }],
            "labs": [{
                "macro": "moris"
            }]
        }],
        "Asthma": [{}]
    }]
}

// Add name, dose and strength  in the *Asthama*
docuument.problems[0].Asthma = {"name":"asth","dose":"22","strength":"500 mg"};

// Update the dose  in  *associatedDrug#2* of the *ClassName* with “10”
docuument.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0]['associatedDrug#2'].dose = 10;


// Print the name of the person taken 12 dose

// Print the sum of the total stregth of className and className2

// Print the names who had dose>1000 


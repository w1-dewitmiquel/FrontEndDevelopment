

const teamleden= [
    {
        naam: "Jacob",
        leeftijd: "16",
        positie: "slagman",
        image: "./images/photo1.PNG"
    },
    {
        naam: "Micheal",
        leeftijd: "18",
        positie: "midden velder",
        image: "./images/photo2.PNG"
    },
    {
        naam: "Tim",
        leeftijd: "17",
        positie: "links velder",
        image: "./images/photo3.PNG"
    },
    {
        naam: "Jacob",
        leeftijd: "16",
        positie: "slagman",
        image: "./images/photo1.PNG"
    },
    {
        naam: "Micheal",
        leeftijd: "18",
        positie: "midden velder",
        image: "./images/photo2.PNG"
    },
    {
        naam: "Tim",
        leeftijd: "17",
        positie: "links velder",
        image: "./images/photo3.PNG"
    },
    {
        naam: "Jacob",
        leeftijd: "16",
        positie: "slagman",
        image: "./images/photo1.PNG"
    },
    {
        naam: "Micheal",
        leeftijd: "18",
        positie: "midden velder",
        image: "./images/photo2.PNG"
    },
    {
        naam: "Tim",
        leeftijd: "17",
        positie: "links velder",
        image: "./images/photo3.PNG"
    },
    {
        naam: "Jacob",
        leeftijd: "16",
        positie: "slagman",
        image: "./images/photo1.PNG"
    },
    {
        naam: "Micheal",
        leeftijd: "18",
        positie: "midden velder",
        image: "./images/photo2.PNG"
    },
    {
        naam: "Tim",
        leeftijd: "17",
        positie: "links velder",
        image: "./images/photo3.PNG"
    },
    {
        naam: "Jacob",
        leeftijd: "16",
        positie: "slagman",
        image: "./images/photo1.PNG"
    },
    {
        naam: "Micheal",
        leeftijd: "18",
        positie: "midden velder",
        image: "./images/photo2.PNG"
    },
    {
        naam: "Tim",
        leeftijd: "17",
        positie: "links velder",
        image: "./images/photo3.PNG"
    },
    {
        naam: "Jacob",
        leeftijd: "16",
        positie: "slagman",
        image: "./images/photo1.PNG"
    }
]

function generateTeam(){
    var article = document.getElementById("team");
    
    teamleden.forEach(lid=>{
        var section = document.createElement("section");
        var img = document.createElement("img");
        var name = document.createElement("span");
        var pos = document.createElement("span");

        img.setAttribute("src",lid.image);
        name.innerHTML = `${lid.naam} (${lid.leeftijd})`;
        pos.innerHTML = `${lid.positie}`;

        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(pos);

        article.appendChild(section);
    })
}

generateTeam()
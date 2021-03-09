const prizes =[
    {
        code:"123",
        prize:"knuppel",
        image:"./images/knuppel.jpg"
    },
    {
        code:"456",
        prize:"handschoen",
        image:"./images/handschoen.jpg"
    },
    {
        code:"789",
        prize:"honkbal",
        image:"./images/honkbal.jpg"
    }
]

function redeemTicket(){
    //gather information
    const name = document.getElementById("inputName").value;
    const ticket = document.getElementById("inputTicket").value;

    prizes.forEach(prize => {
        if(ticket == prize.code){
            prize.name = name;
            showWonPrize(prize);
            checkPrize(prize);
        }
    });
}

function showWonPrize(prize){
    prizeInWheel(prize);
    prizeInTxt(prize);
}

function prizeInTxt(prize){
    const txt = document.getElementById("gewonnenTekst");
    txt.innerHTML = `Gefeliciteerd! U hebt een ${prize.prize} gewonnen!`;
}

function prizeInWheel(prize){
    const wheel = document.getElementById("wheelOfFortune");
    var img = document.createElement("img");

    img.setAttribute("src",prize.image);

    wheel.innerHTML = new String();
    wheel.appendChild(img);
}

function checkPrize(prize){
    //gather data
    var dataArray = localStorage.wonPrizes;
    dataArray = (dataArray) ? JSON.parse(dataArray) : new Array(); 

    //check if prize hasnt won already
    for(const x in dataArray){
        if(dataArray[x].code == prize.code){
            console.log("prize already won");
            return;
        }
    }

    window.alert(`${prize.name} won de ${prize.prize}`)
    dataArray.push(prize);

    localStorage.wonPrizes = JSON.stringify(dataArray);
}

function generatePrizes(){
    const container = document.querySelector("#gewonnenLoten article");
    const wonPrizes = (localStorage.wonPrizes)? JSON.parse(localStorage.wonPrizes) : new Array();

    wonPrizes.forEach(prize=>{
        var section = document.createElement("section");
        var image = document.createElement("img");

        image.setAttribute("src",prize.image);

        section.appendChild(image);
        section.innerHTML += `door: "${prize.name}"`;

        container.appendChild(section)
    })
}
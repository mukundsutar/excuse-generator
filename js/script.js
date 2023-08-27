window.onload = async function () {
    // await updateSincerity();

    await updateExcuses();
    await updateFeel();
    await updatePlease();
};

async function updateSincerity() {
    // let arraySincerity = ["Heartfelt", "-", "Begrudging", "-", "Technical"]

    // for (let i = 0; i < arraySincerity.length; i++) {
    //     let textStr = arraySincerity[i];

    //     let newText = document.createElement("span")

    //     document.getElementById("sincerity-text").appendChild(newText);

    //     let idNumber= i+1;
    //     newText.id= "radioText" + idNumber;
    //     newText.innerText= textStr;
    // }

    // for (let i = 0; i < 8; i++) {
    //     let newInput = document.createElement("INPUT");
    //     newInput.setAttribute("type", "radio");
    //     newInput.setAttribute("name", "radio")
    //     let newLabel = document.createElement("label");

    //     document.getElementById("radio-group").appendChild(newInput);
    //     document.getElementById("radio-group").appendChild(newLabel);

    //     let idNumber= i+1;
    //     newInput.id = "radio" + idNumber;
    // }
}

async function updateExcuses() {
    let arrayExcuses = [
        "It is a Habit.",
        "I am a Naturally selfish person.",
        "I thought it would be funny.",
        "I didn't know it bothered you.",
        "You were never supposed to know.",
        "I was Hungry Lonely Intoxicated.",
        "It was my evil twin.",
    ];

    for (let i = 0; i < arrayExcuses.length; i++) {
        let labelStr = arrayExcuses[i];

        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("onclick", "isChecked()");

        let newLabel = document.createElement("label");
        let breakLine = document.createElement("br");

        document.getElementById("excuse-body").appendChild(newInput);
        document.getElementById("excuse-body").appendChild(newLabel);
        document.getElementById("excuse-body").appendChild(breakLine);

        let idNumber= i+1;
        newInput.id = "excuse" + idNumber;
        newLabel.innerText = labelStr;
    }
}

async function updateFeel() {
    let arrayFeel = [
        "Terrible.",
        "Guilty.",
        "Stupid.",
        "Sorry.",
        "Blameless.",
        "Vindicated.",
        "Better now.",
    ];

    for (let i = 0; i < arrayFeel.length; i++) {
        let labelStr = arrayFeel[i];

        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("onclick", "isChecked()");

        let newLabel = document.createElement("label");
        let breakLine = document.createElement("br");

        document.getElementById("feel-body").appendChild(newInput);
        document.getElementById("feel-body").appendChild(newLabel);
        document.getElementById("feel-body").appendChild(breakLine);


        let idNumber= i+1;
        newInput.id = "feel" + idNumber;
        newLabel.innerText = labelStr;
    }
}

async function updatePlease() {
    let arrayPlease = [
        "Forgive Me.",
        "Be patient with me.",
        "Give me another chance.",
        "Forget it ever happened.",
        "Do not try to get even.",
        "Do not call the police.",
        "Do not tell my parents.",
    ];

    for (let i = 0; i < arrayPlease.length; i++) {
        let labelStr = arrayPlease[i];

        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("onclick", "isChecked()");

        let newLabel = document.createElement("label");
        let breakLine = document.createElement("br");

        document.getElementById("please-body").appendChild(newInput);
        document.getElementById("please-body").appendChild(newLabel);
        document.getElementById("please-body").appendChild(breakLine);


        let idNumber= i+1;
        newInput.id = "please" + i;
        newLabel.innerText = labelStr;
    }
}

function isChecked() {
    var checkBox = document.getElementById("excuse1");
    
    if (checkBox.checked == true) {
        console.log("hello");
    } else {
        console.log("bye");
    }
}

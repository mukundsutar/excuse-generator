window.onload = async function () {
    await updateExcuses();
    await updateFeel();
    await updatePlease();
};

async function updateExcuses() {
    let arrayPlease = [
        "It is a Habit.",
        "I am a Naturally selfish person.",
        "I thought it would be funny.",
        "I didn't know it bothered you.",
        "You were never supposed to know.",
        "I was Hungry Lonely Intoxicated.",
        "It was my evil twin.",
    ];

    for (let i = 0; i < arrayPlease.length; i++) {
        const labelStr = arrayPlease[i];

        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        let newLabel = document.createElement("label");
        let breakLine = document.createElement("br");

        document.getElementById("excuse-body").appendChild(newInput);
        document.getElementById("excuse-body").appendChild(newLabel);
        document.getElementById("excuse-body").appendChild(breakLine);

        newLabel.id = "excuse" + i;
        newLabel.innerText = labelStr;
    }
}

async function updateFeel() {
    let arrayPlease = [
        "Terrible.",
        "Guilty.",
        "Stupid.",
        "Sorry.",
        "Blameless.",
        "Vindicated.",
        "Better now.",
    ];

    for (let i = 0; i < arrayPlease.length; i++) {
        const labelStr = arrayPlease[i];

        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        let newLabel = document.createElement("label");
        let breakLine = document.createElement("br");

        document.getElementById("feel-body").appendChild(newInput);
        document.getElementById("feel-body").appendChild(newLabel);
        document.getElementById("feel-body").appendChild(breakLine);

        newLabel.id = "feel" + i;
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
        const labelStr = arrayPlease[i];

        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        let newLabel = document.createElement("label");
        let breakLine = document.createElement("br");

        document.getElementById("please-body").appendChild(newInput);
        document.getElementById("please-body").appendChild(newLabel);
        document.getElementById("please-body").appendChild(breakLine);

        newLabel.id = "please" + i;
        newLabel.innerText = labelStr;
    }
}

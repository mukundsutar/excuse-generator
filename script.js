window.onload = async function () {
    await updatePlease();
};

async function updatePlease(){
    let arrayPlease = ["Forgive Me.", "Be patient with me.", "Give me another chance.", "Forget it ever happened.", "Do not try to get even.", "Do not call the police.", "Do not tell my parents."]

    for (let id = 0; id < array.length; id++) {
        const element = array[id];
        
    }
    let newInput = document.createElement("INPUT");
    newInput.setAttribute("type", "checkbox");
    let newLabel = document.createElement("label");

    document.getElementById("please-body").appendChild(newInput);
    document.getElementById("please-body").appendChild(newLabel);

    newLabel.id= "please1";

    let str="Forgive Me."
    newLabel.innerText= str;
}
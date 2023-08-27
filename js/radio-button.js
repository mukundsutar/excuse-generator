window.onload = async function () {
    await updateRadio();
};

async function updateRadio() {
    for (let i = 0; i < 8; i++) {
        // create a label
        let newLabel = document.createElement("label");
        let id= i+1;
        newLabel.id= "radioLabel" + id;
        newLabel.classList.add("control", "control-radio");

        // create a radio button
        let newRadio = document.createElement("input");
        newRadio.setAttribute("type", "radio");
        newRadio.setAttribute("name", "radio");

        // create a div
        let newDiv = document.createElement("div");
        newDiv.classList.add("control_indicator");

        // append label to radio-group
        document.getElementById("radio-group").appendChild(newLabel);

        // append radio button and div to Label
        document.getElementById("radioLabel" + id).appendChild(newRadio);
        document.getElementById("radioLabel" + id).appendChild(newDiv);
    }
}
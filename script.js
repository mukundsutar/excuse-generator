window.onload = async function () {
    let newElement = document.createElement("INPUT");
    newElement.setAttribute("type", "checkbox");

    document.getElementById("please-body").appendChild(newElement);

    newElement.id= "please1";

    document.getElementById("please1").innerText= "Forgive Me.";

    console.log(newElement);
};

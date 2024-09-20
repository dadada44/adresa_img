let i = 1;
function showImage() {
    var imageUrl = document.getElementById('imageUrl').value;
    var imgElement = document.getElementById('displayImage');
    imgElement.src = imageUrl;

    let input = document.getElementById("input"); 
    let output = document.getElementById("output"); 
    output.innerHTML += i + " " + input.value + "<br>"; 

    i++;
}

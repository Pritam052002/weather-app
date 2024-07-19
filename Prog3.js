async function display(){
    var name = document.getElementById("name").value;
    var response = await fetch('https://jsonplaceholder.typicode.com/posts');
    var data = await response.json();
    console.log(data);
    var temp="";
    for(var i=0;i<data.length;i++){
        {
            temp += data[i].title + "<br>";
        }
    
    document.getElementById("result").innerHTML = temp;
    }
}

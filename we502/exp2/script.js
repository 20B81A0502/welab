function getdetails(){
    let xhttp = new XMLHttpRequest();
    let div = document.getElementById("userData");
    xhttp.onreadystatechange=function(){
        if(this.status == 200 && this.readystate==4){
            let data = JSON.parse(xhttp.responseText);
            data.forEach(ele =>{
                console.log(ele.name + " :: "+ele.email);
                div.innerHTML +=   `<b>$(ele.name)</b>
                Email: ${ele.email}
                <br> `
            });
            console.log(..data:any[]: void arguments.main.temp_min);
        }
    }
}

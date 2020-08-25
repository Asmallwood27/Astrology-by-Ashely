function getAstro(sign){
    //Planet Position
    let position = $("#placement").val();
    //Index in data object 
    let index = data[position].findIndex(s => s.sign == sign);
    //Sign & Position Description
    let description = data[position][index]["description"];
    //Sign & Position Img Src
    let img = data[position][index]["img"] ? data[position][index]["img"] : "" ;
    
    //Set html data
    $(".card-position").text(position);
    $(".card-title").text(sign);
    $(".card-description").text(description);
    $(".card-img-top").attr("src", img);

    //Show Modal
    $('#zodiacModal').modal('show');

}

 


 

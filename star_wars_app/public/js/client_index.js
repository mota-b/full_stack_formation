let $body =$("body");
let $ul =$("#perso_list");
let colors =["#666666","#4d4d4d"]


for(let i =1;i<=16;i++){
    $.get("http://swapi.co/api/people/+"+i+"/?format=json",function(res){

      $ul.append(
        $("<li>").append(
          "<h3>"+res.name+"</h3><br>"+"<br>"+

          "height : "+res.height+"<br>"+
          "eye_color : "+res.eye_color+"<br>"+"<br>"
        ).css({
          padding:"20px",
          "background-color" :""+colors[i%2],
          color :"white",
          "border-radius" : "20px",
          margin : "4px"
        })
      )
    });

}

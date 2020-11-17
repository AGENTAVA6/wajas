var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var block_image_object="";
var player_object="";
superhero = "Iron man";

function player_update(){
    fabric.Image.fromUrl("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_height);
        block_image_object.scaleToHeight(block_image_width);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey == true && keyPressed == '80' ){
        console.log("P and shift press together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77' ){
        console.log("M and shift press together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
       document.getElementById("current_width").innerHTML = block_image_width;
       document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }













    if(keyPressed == '73'){
        superhero = "Iron man";
    }

    if(keyPressed == '85'){
        superhero = "Hulk";
    }

    if(keyPressed == '84'){
        superhero = "Thor";
    }
    
    if(keyPressed == '83'){
        superhero = "Spiderman";
    }
    
    if(keyPressed == '76'){
        if(superhero == "Hulk"){
            new_image('hulk_legs.png');
            console.log("legs of hulk");
        }
        if(superhero == "Iron man"){
            new_image('ironman_legs.png');
            console.log("legs of iron man");
        }
        if(superhero == "Spiderman"){
            new_image('spiderman_legs.png');
            console.log("legs of spiderman");
        }

    }
    

     if(keyPressed == '70'){
        if(superhero == "Hulk"){
            new_image('hulk_face.png');
            console.log("face of hulk");
        }
        if(superhero == "Iron man"){
            new_image('ironman_face.png');
            console.log("face  of iron man");
        }
        if(superhero == "Spiderman"){
            new_image('spiderman_face.png');
            console.log("face of spiderman");
        }
        if(superhero == "Thor"){
            new_image('thor_face.png');
            console.log("face of thor");
        }
        

     }



     if(keyPressed == '66'){
        if(superhero == "Hulk"){
            new_image('hulkd_body.png');
            console.log("body of hulk");
        }
        if(superhero == "Iron man"){
            new_image('ironman_body.png');
            console.log("body  of iron man");
        }
        if(superhero == "Spiderman"){
            new_image('spiderman_body.png');
            console.log("body of spiderman");
        }

        
    }







    if(keyPressed == '82'){
        if(superhero == "Hulk"){
            new_image('hulk_right_hand.png');
            console.log("Right hand  of hulk");
        }
        if(superhero == "Iron man"){
            new_image('ironman_right_hand.png');
            console.log("right hand  of iron man");
        }
        if(superhero == "Spiderman"){
            new_image('spiderman_right_hand.png');
            console.log("right hand of spiderman");
        }
        if(superhero == "Thor"){
            new_image('thor_right_hand.png');
            console.log("right hand of thor");
        }
        

    }



    if(keyPressed == '72'){
        if(superhero == "Hulk"){
            new_image('hulk_left_hand.png');
            console.log("left hand  of hulk");
        }
        if(superhero == "Iron man"){
            new_image('ironman_left_hand.png');
            console.log("left hand  of iron man");
        }
        if(superhero == "Spiderman"){
            new_image('spiderman_left_hand.png');
            console.log("left hand of spiderman");
        }
        if(superhero == "Thor"){
            new_image('thor_left_hand.png');
            console.log("left hand of thor");
        }
        

    }


}
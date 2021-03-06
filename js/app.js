var getHeight = window.innerHeight;
var getWidth = window.innerWidth;
var $container = $('#container');
var $relation_drop = $('#relation_drop');
var fullScreen = true; 

function lockLandscape(){    
    screen.orientation.lock("landscape-primary")
    .catch(function(error){
        console.log(error)
    })                               
    if(document.documentElement.requestFullscreen)        
        document.querySelector("html").requestFullscreen().catch(function(error){            
            setFullScreen(false)
            console.log(error);                        
        });                        
    else if(document.documentElement.webkitRequestFullScreen)
        document.querySelector("html").webkitRequestFullScreen().catch(function(error){
            console.log(error);            
            setFullScreen(false)
        });                                 
}

function setFullScreen(s_fullscreen){    
    fullScreen = s_fullscreen;    
}

function getFullScreen(){
    return fullscreen;
}
  
function setFullScreen_mode(){        
    if(fullScreen){
        fullscreen_mode();    
    }    
}

function unlockLandscape(){
    screen.orientation.unlock();	                      
}

if(getWidth <= 1463){
    $container.removeClass('container').addClass('container-fluid');           
}

if(getWidth <= 1004){
    $container.removeClass('container').addClass('container-fluid');
    $relation_drop.removeClass('row').addClass('d-flex');
    $relation_drop.find('li').removeClass('col')
}  

if(getWidth <= 933){
    $('.thinkers-sortable li.left-chevron').show();
    $('.thinkers-sortable li.right-chevron').show();
}

var drop_chevron = 0;

$('#left_relation_drop').click(function(){
    if(drop_chevron > 0) drop_chevron--;
    $($('.response_drag')[0]).css({
        'marginLeft' : '-'+drop_chevron+'00px',
        'transition' : '0.2s'
    });
});

$('#right_relation_drop').click(function(){
    if(drop_chevron <= 2) drop_chevron++;
    $($('.response_drag')[0]).css({
        'marginLeft' : '-'+drop_chevron+'00px',
        'transition' : '0.2s'
    });
});
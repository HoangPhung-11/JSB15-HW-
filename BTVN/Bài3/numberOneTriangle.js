document.getElementById("button").addEventListener("click", numberOneTriangle)
function numberOneTriangle() {
    var i;
    var j;
    for (i = 0; i <= 5; i++ ){
        document.write("</br>");
        for ( j = 6-i; j <= 5; j++ ){
        document.write( "*" );
        }
    }
}
//#Week 6 JQuery Code Challenge

function updateOutput() {
    var html = "<br>Box Height: " + Box.height + "<br>" + "Box Width: " + Box.width + "<br>" + "Box Volume: " + Box.volume();
    $('#output').html(html);
}
//Objects
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
var Box = {
    height: 3,
    width: 3,
    volume: function () {
        var volume = this.height * this.width;
        return volume;
    }
}
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume
$('#HeightDecrease').click(function () {
    if(Box.height > 1) {
        Box.height--;
        updateOutput();
    }
});
$('#HeightIncrease').click(function () {
    Box.height++;
    updateOutput();
});
$('#WidthDecrease').click(function () {
    if(Box.width > 1) {
        Box.width--;
        updateOutput();
    }
});
$('#WidthIncrease').click(function () {
    Box.width++;
    updateOutput();
});
//Create a button that prints the object and its attributes to the page (use the span "output".
$('#Print').click(function () {
    updateOutput()
});

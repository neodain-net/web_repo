var Body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
var Links = {
    setLinkColor: function (color) {
        // var links = document.querySelectorAll('a');
        // var i = 0;
        // while (i < links.length) {
        //     links[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
}

function dayNightHandler(self) {
    if (self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Links.setLinkColor('powderblue');
        self.value = 'day';
    } else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Links.setLinkColor('blue');
        self.value = 'night';
    }
}
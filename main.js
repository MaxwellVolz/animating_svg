


var animation = anime({
    targets: '#thing',
    // translateX: 10,
    rotate: '1turn',
    // backgroundColor: '#FFF',
    duration: 5000,
    borderRadius: ['0%', '15%', '30%', '50%', '50%', '30%','15%','10%', '7%','5%', '3%','0%', '0%','0%', '0%','0%', '0%','0%','0%', '0%','0%', '0%'],
});


document.querySelector('div').onclick = animation.play;
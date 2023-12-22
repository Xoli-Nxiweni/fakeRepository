let arrayOfColors = [
    '#000', '#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999',
    '#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#40dd00', '#55dd00', '#70dd00', '#85dd00', '#a0dd00',
    '#b5dd00', '#c040da', '#b55dda', '#a070da', '#8585da', '#70a0da', '#55b5da', '#40c0da', '#55c0da', '#70c0da',
    '#85c0da', '#a0c0da', '#b5c0da', '#ccc', '#bbb', '#aaa', '#999', '#888', '#777', '#666', '#555', '#444',
    '#333', '#222', '#111', '#000'
];

let currentIndex = 0;
let iteration = 0;
let arrayOfBoxShadows = [
    '0 0 10px #4d4d4d', '0 0 20px #4d4d4d', '0 0 30px #4d4d4d', '0 0 40px #4d4d4d', '0 0 50px #4d4d4d',
    '0 0 60px #4d4d4d', '0 0 70px #4d4d4d', '0 0 80px #4d4d4d', '0 0 90px #4d4d4d', '0 0 100px #4d4d4d',
    '0 0 110px #4d4d4d', '0 0 120px #4d4d4d', '0 0 130px #4d4d4d', '0 0 140px #4d4d4d', '0 0 150px #4d4d4d',
    '0 0 160px #4d4d4d', '0 0 170px #4d4d4d', '0 0 180px #4d4d4d', '0 0 190px #4d4d4d', '0 0 200px #4d4d4d',
    '0 0 210px #4d4d4d', '0 0 220px #4d4d4d', '0 0 230px #4d4d4d', '0 0 240px #4d4d4d', '0 0 250px #4d4d4d',
    '0 0 260px #4d4d4d', '0 0 270px #4d4d4d', '0 0 280px #4d4d4d', '0 0 290px #4d4d4d', '0 0 300px #4d4d4d',
    '0 0 310px #4d4d4d', '0 0 320px #4d4d4d', '0 0 330px #4d4d4d', '0 0 340px #4d4d4d', '0 0 350px #4d4d4d',
    '0 0 360px #4d4d4d', '0 0 370px #4d4d4d', '0 0 380px #4d4d4d', '0 0 390px #4d4d4d', '0 0 400px #4d4d4d',
    '0 0 410px #4d4d4d', '0 0 420px #4d4d4d', '0 0 430px #4d4d4d', '0 0 440px #4d4d4d', '0 0 450px #4d4d4d',
    '0 0 460px #4d4d4d', '0 0 470px #4d4d4d', '0 0 480px #4d4d4d', '0 0 490px #4d4d4d', '0 0 500px #4d4d4d',
    '0 0 510px #4d4d4d', '0 0 520px #4d4d4d', '0 0 530px #4d4d4d', '0 0 540px #4d4d4d', '0 0 550px #4d4d4d',
    '0 0 560px #4d4d4d', '0 0 570px #4d4d4d', '0 0 580px #4d4d4d', '0 0 590px #4d4d4d', '0 0 600px #4d4d4d',
    '0 0 610px #4d4d4d', '0 0 620px #4d4d4d', '0 0 630px #4d4d4d', '0 0 640px #4d4d4d', '0 0 650px #4d4d4d',
    '0 0 660px #4d4d4d', '0 0 670px #4d4d4d', '0 0 680px #4d4d4d', '0 0 690px #4d4d4d', '0 0 700px #4d4d4d',
    '0 0 710px #4d4d4d', '0 0 720px #4d4d4d', '0 0 730px #4d4d4d', '0 0 740px #4d4d4d', '0 0 750px #4d4d4d',
    '0 0 760px #4d4d4d', '0 0 770px #4d4d4d', '0 0 780px #4d4d4d', '0 0 790px #4d4d4d', '0 0 800px #4d4d4d',
    '0 0 810px #4d4d4d', '0 0 820px #4d4d4d', '0 0 830px #4d4d4d', '0 0 840px #4d4d4d', '0 0 850px #4d4d4d',
    '0 0 860px #4d4d4d', '0 0 870px #4d4d4d', '0 0 880px #4d4d4d', '0 0 890px #4d4d4d', '0 0 900px #4d4d4d',
    '0 0 910px #4d4d4d', '0 0 920px #4d4d4d', '0 0 930px #4d4d4d', '0 0 940px #4d4d4d', '0 0 950px #4d4d4d',
    '0 0 960px #4d4d4d', '0 0 970px #4d4d4d', '0 0 980px #4d4d4d', '0 0 990px #4d4d4d', '0 0 1000px #4d4d4d'
];

let currentIndex2 = 0;
let iteration2 = 0;

function changer() {
setInterval(() => {
let color = arrayOfColors[currentIndex];

if (iteration === 0) {
    document.querySelector('.center').style.background = color;
}

currentIndex = (currentIndex + 1) % arrayOfColors.length;

}, 500);
}
function changerFunction() {
    setInterval(() => {
        let boxShadow = arrayOfBoxShadows[currentIndex2];

        document.querySelector('.content').style.boxShadow = boxShadow;

        currentIndex2 = (currentIndex2 + 1) % arrayOfBoxShadows.length;

        if (currentIndex2 === 0) {
            iteration2 = (iteration2 + 1) % 3;
        }
    }, 200);
}
changer();
changerFunction();
var answers = ["Es tan sierto como mi puño en tu kara",
"See, creeme kolega se lo ke digo",
"venus asendente y jupiter en transito lento disen que si",
"totalmente si, komo ke me yamo Yoni",
"mecago en tó, po' claro!",
"po claro! Esto es capitalismo ke esperabas colega?",
"con la d preguntas ke podrias aserme y me preguntas esa mierda",
"po komo sigan votando a vox..",
"no kuentes con ello",
"si tubiera un sigarrito te lo diria",
"ke nooo",
"kitate esa idea de la kabesa o te la kito yo",
"con esa kara que tienes te digo yo k no",
"se oye komo entrecortado",
"si, tu asme kaso y veras",
"eso preguntas con normalidad? yo k tu me lo miraba",
"entre hoy o mañana te lo digo k aora me pillas liado",
"somos una mota de porvo en el universo, recuerdalo",
"k peresa responder a eso",
"preguntaselo a tu madre, anda",
"ni lo sueñes",
"no kuentes kon ello",
"komo te lo digo pa ke no yores?"];

window.onload = function () {
    var replace = document.getElementById("replace-me");
    var answer = document.getElementById("answer");
    var question = document.getElementById("question");
    var askButton = document.getElementById("ask_btn");

    askButton.addEventListener("click", function(){
        if (question.value.length < 1){
            alert('Pregunta algo!');
        } else {
            replace.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });
};
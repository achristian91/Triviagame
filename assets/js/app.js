$('#start').on('click', function(){
  game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

$("#startover").click(function(){
    location.reload();
});

var questions = [{
    question: "What was Walt Disneys first live-action film?",
    answers:["Treasure Island", "The Skeleton Dance", "Bambi", "On Ice"],
    correctAnswer: "Treasure Island"
}, {
    question: "What were Mickey and Minnies original names?",
    answers: ["Murphy and Monica" , "Mortimer and Minerva", "Mortimer and Minnola", "Mercury and Mona"],
    correctAnswer: "Mortimer and Minerva"
}, {
    question: "Who finds Simba in the desert and rescues him?",
    answers: ["Scar and Ed, Mufasa and Scar", "Timon and Pumba", "Nala and Sarabi"],
    correctAnswer: "Timon and Pumba"
}, {
    question: "What famous Princess attends Elsa’s coronation ceremony in frozen?",
    answers: ["Mulan", "Aurora", "Rapunzel", "Merida"],
    correctAnswer: "Rapunzel"
}, {
    question: "Who was Simbas mother?",
    answers: ["Sarabi", "Nala", "Zazu", "Sarafina"],
    correctAnswer: "Sarabi"
}, {
    question: "Captain Hook’s has a hook on which hand?",
    answers: ["Left", "Right"],
    correctAnswer: "Left"
}, {
    question: "Which glass slipper did Cinderella leave behind at the ball?",
    answers: ["Right", "Left"],
    correctAnswer: "Left"
}, {
    question: "Finish the Simba quote: “Oh I just can’t wait to be _____?",
    answers: ["5 years old!", "Me!", "King!", "A human!"],
    correctAnswer: "King!"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 45, 
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is Up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">45</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h3>' +questions[i].question+ '</h3>');
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type= 'radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    done: function(){
        $.each($("input[name='question-0']:checked"), function() {
            if($(this).val() == questions[0].correctAnswer) {
              game.correct++;
            } else {
              game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if($(this).val() == questions[1].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if($(this).val() == questions[2].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if($(this).val() == questions[3].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if($(this).val() == questions[4].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if($(this).val() == questions[5].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function() {
            if($(this).val() == questions[6].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function() {
            if($(this).val() == questions[7].correctAnswer){
              game.correct++;
            } else {
              game.incorrect++;
            }
        });

        this.result();    
        },
        
        result: function(){
            clearInterval(timer);
            $('#subwrapper h3').remove();
            $('#subwrapper').html("<h2>Finished!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>" );

    }
}
const correct = ["2009", "Astana", "197", "Palau", "44"];
const questions = ["Which year Nazarbayev University was founded?","Which year Nazarbayev University was founded?"]



$(document).ready(function(){
     choice_options = [["2009","2010","2011","2012"],["Astana","Almaty","Shymkent","Karaganda"], ["197", "201", "125", "221"], ["Kazakhstan", "Argentina", "Palau", "Madagascar"], ["35", "44", "52", "60"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 
//     $('.question').append ("<p class='d'> Q1. Which year Nazarbayev University was founded? </p>");
//     $('.question').append ("<label><input type='radio' name='q1' value='a'>2010</label>")
//     $('.question').append ("<label><input type='radio' name='q1' value='a'>2009</label>")
//     $('.question').append ("<label><input type='radio' name='q1' value='a'>2011</label>")
//     $('.question').append ("<label><input type='radio' name='q1' value='a'>2012</label>")
    
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
     countCorrect = 0;
     reset = false;
     
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         });
         $("input[name=q2]").each (function (index){
          choice = $(this).parent().text(); 
          if ($( this ).prop("checked") == true && correct [1] == choice){
               countCorrect += 1;
          }
   });
   $("input[name=q3]").each (function (index){
     choice = $(this).parent().text(); 
     if ($( this ).prop("checked") == true && correct [2] == choice){
          countCorrect += 1;
     }
});
$("input[name=q4]").each (function (index){
     choice = $(this).parent().text(); 
     if ($( this ).prop("checked") == true && correct [3] == choice){
          countCorrect += 1;
     }
});
$("input[name=q5]").each (function (index){
     choice = $(this).parent().text(); 
     if ($( this ).prop("checked") == true && correct [4] == choice){
          countCorrect += 1;
     }
});
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 

});

// const questions = [
//      "What is the capital of France?",
//      "Which planet is closest to the sun?",
//      "How many continents are there?"
//  ];
 
//  const answers = [
//      "Paris",
//      "Mercury",
//      "7"
//  ];
 
//  const choice_options = [
//      ["Paris", "London", "Berlin", "Madrid"],
//      ["Mercury", "Venus", "Earth", "Mars"],
//      ["5", "6", "7", "8"]
//  ];
 
//  $(document).ready(function() {
//      // Add questions and choices dynamically
//      for (let i = 0; i < questions.length; i++) {
//          let questionDiv = $('<div>').addClass('question').text(questions[i]);
//          let choicesDiv = $('<div>').addClass('choices');
 
//          for (let j = 0; j < choice_options[i].length; j++) {
//              let choice = $('<input>')
//                  .attr('type', 'radio')
//                  .attr('name', q&{i})
//                  .attr('value', choice_options[i][j]);
//              let label = $('<label>').text(choice_options[i][j]);
//              choicesDiv.append(choice, label);
//          }
 
//          $("#quiz-container").append(questionDiv, choicesDiv);
//      }
 
//      // Click event handler for the submit button
//      $("#submit").click(function() {
//          let score = 0;
 
//          // Check answers
//          for (let i = 0; i < questions.length; i++) {
//              let selectedAnswer = $(input[name=q&{i}],checked).val();
//              if (selectedAnswer === answers[i]) {
//                  score++;
//              }
//          }
 
//          // Display the overall score
//          $("#result").text("Your score: ${score} out of ${questions.length}");
//      });
//  });
$(function(){
    $(".human-form").on("submit", function(event){
        event.preventDefault();
        var newHome = {
            pet_type: $("question1-human").val(),
            residence: $("question2-human").val(),
            pet_size: $("question3-human").val(),
            hypo: $("question4-human").val(),
            activity: $("question5-human").val(),
            pet_age: $("question5-human").val(),
        };

        $.ajax("/api/humans", {
            type: "POST",
            data: newHome
          }).then(
            function() {
              console.log("created new human");
    

              $.ajax({
                url: "/results-pets",
                type: "GET"
              });
              
    });
});

    $(".pet-form").on("submit", function(event){
        event.preventDefault();
        var newPet = {
            pet_name: $("question1-pet").val(),
            pet_type: $("question2-pet").val(),
            residence: $("question3-pet").val(),
            size: $("question4-pet").val(),
            hypo: $("question5-pet").val(),
            activity: $("question6-pet").val(),
            age:$("question7-pet").val(),
            image:$("question8-pet").val().trim()
        };

        $.ajax("/api/pets", {
            type: "POST",
            data: newPet
          }).then(
            function() {
              console.log("created new pet");
              $.ajax({
                url: "/results-humans",
                type: "GET"
              });

            }
          );
              
    });


});
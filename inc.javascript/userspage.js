$(document).ready(function () {


    $("#userPageForm").submit(function (event) {




   //Assume there are no errors
        var errors = false;

   //hide error messages
        $(".error").hide();

 //Make sure each field is not blank


     if($("#grievance-date").val() === "") {
                     $("#grievanceDateError").show("slow");
      errors = true;
                 }

        if ($('#supervisor').val() ===''){
          $('#supervisor-error').show("slow");
          errors = true;
        }

         if ($("#machine").val() === "") {
        $("#machineNum").show("slow");
        errors = true;
                }
         if ($("#time-alone").val() === "") {
        $("#timeAlone").show("slow");
        errors = true;
                }
         if(!$('#radio-null').is(':checked') && !$('#radio-null2').is(':checked')) {
        $("#feedSweep").show("slow");
        errors = true;
                }
         if ($("#mail-processed").val() === "") {
        $("#mailProcessed").show("slow");
        errors = true;
                }
        if($("#hours-worked-alone").val()=== ""){
            $("#totalHoursWorkedAlone").show("slow")
            errors = true;
        }



 //If there are errors then show a general error message

if(errors){


  return false;
}

// If no errors show success message

  if(!errors){
                $( "#submit" ).click(function() {


});

                        $(".overlay").fadeIn();
                    return true;
                      }

 });        //Make the Close window button work
                    $(".close").click(function() {
        $(".overlay").fadeOut();


            });

});

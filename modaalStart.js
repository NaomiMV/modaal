
$(document).ready(function () {
    var ingangInhoud = $('#ingang').detach();
    var halInhoud = $('#hal').detach();
    var patroonInhoud = $('#patroon').detach();
  
    // events bij de thumbs
    $('#ingangThumb').on('click', function () {
        modaalVenObj.openen({inhoud: ingangInhoud, breedte: 600});
 
    });
    $('#halThumb').on('click', function () {
        modaalVenObj.openen({inhoud: halInhoud, breedte: 700});
    
    });
    $('#patroonThumb').on('click', function () {
        modaalVenObj.openen({inhoud: patroonInhoud, breedte: 500});
 
    });
});
    
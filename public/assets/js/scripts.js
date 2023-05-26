$(document).ready(function() {

    if(window.matchMedia('(max-width: 767px)').matches){
        $('.filtrage .collapse').removeClass('show');
        $('.filtrage .btn-primary').attr('aria-expanded', 'false'); 

    }
})
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import $ from "jquery";
window.$ = $;
import "select2";
import "select2/dist/css/select2.min.css"
import swal from 'sweetalert';

$(document).on("turbolinks:load", function() {
    $('.js-currency-select').select2({
    	width: 'element'
    });

    $('.js-tag-select').select2({
    	tags: true, 
    	placeholder: "Add your tags here",
    	selectOnClose: true, 
    });


    $(".js-submit-btn").click(function(event){
		event.preventDefault();
		swal({
		  title: "Are you sure?",
		  text: "You will create a product!?",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then(function(willSubmit){
			if(willSubmit){
				$(".js-form").submit();
			}else{
				
			}
		});
	});
});

console.log("!!")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

//bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//select2
import $ from "jquery";
window.$ = $;
import "select2";
import "select2/dist/css/select2.min.css";

//sweetalert2
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

//yarn add tempusdominus-bootstrap-4
import 'tempusdominus-bootstrap-4';
import 'tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css'

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
		Swal.fire({
		  title: "Are you sure?",
		  text: "You will create a product!?",
		  icon: "warning",
		  showCancelButton: true,
		  showConfirmButton: true, 
		  cancelButtonColor: '#DD3333',
		})
		.then(function(willSubmit){
			if(willSubmit.value){
				Swal.fire({
					title: 'Loading...', 
					showConfirmButton: false
				})
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

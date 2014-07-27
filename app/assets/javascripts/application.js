// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require angular
//= require angular-animate
//= require angular-resource
//= require_tree .

$(function() {
	$("ul.nav > li").click(function(e) {
		if ($(this).hasClass("active")) {
			console.log("active");
			$(".expanded").slideUp().removeClass("expanded");
			$(this).removeClass("active");
			$(".arrow").removeClass("rotate");
		}
		else {
			console.log("unactive");
			var navIndex = $(this).index();
			$(".active").removeClass("active");
			$(".expanded").slideUp().removeClass("expanded");
			$(".arrow").removeClass("rotate");
			$(".subNav").eq(navIndex).slideDown().addClass("expanded");
			$(this).addClass("active");
			$(this).children(".arrow").addClass("rotate");
		}
		e.stopPropagation();
	});

	$("nav.filters .subNav li a").click(function() {
		$(this).toggleClass("selected");
	});
});
$(function(){ $(document).foundation(); });
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
		var navIndex = $(this).index();
		$(".expanded").eq(navIndex).slideUp().removeClass("expanded");
		$(".arrow").eq(navIndex).removeClass("rotate");
		$(".subNav").eq(navIndex).slideDown().addClass("expanded");
		$(this).addClass("active");
		$(this).children(".arrow").addClass("rotate");
	});

	$(".active").click(function(e) {
		$(".expanded").slideToggle();
	});

	// $(".active").click(function() {
	// 	$(".expanded").slideUp().removeClass("expanded").stop();
	// });

	$("nav.filters .subNav li a").click(function() {
		$(this).toggleClass("selected");
	});
});
$(function(){ $(document).foundation(); });
$(function () {
	$(".test_inner ul li .flower").click(function () {

		$(this).addClass("on1");
		$(".test_inner ul.left li a").removeClass("on2");
		$(".test_inner ul.left li a").removeClass("on3");
	});
	$(".test_inner ul li .cozy").click(function () {
		$(this).addClass("on2");
		$(".test_inner ul.left li a").removeClass("on1");
		$(".test_inner ul.left li a").removeClass("on3");
	});
	$(".test_inner ul li .deep").click(function () {
		$(this).addClass("on3");
		$(".test_inner ul.left li a").removeClass("on2");
		$(".test_inner ul.left li a").removeClass("on1");
	});
	$(".test_inner ul li .blue").click(function () {
		$(this).addClass("on4");
		$(".test_inner ul.right li a").removeClass("on5");
		$(".test_inner ul.right li a").removeClass("on6");
	});
	$(".test_inner ul li .red").click(function () {
		$(this).addClass("on5");
		$(".test_inner ul.right li a").removeClass("on4");
		$(".test_inner ul.right li a").removeClass("on6");
	});
	$(".test_inner ul li .yellow").click(function () {
		$(this).addClass("on6");
		$(".test_inner ul.right li a").removeClass("on5");
		$(".test_inner ul.right li a").removeClass("on4");
	});
});
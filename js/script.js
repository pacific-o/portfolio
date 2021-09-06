const infoBtn = document.getElementById("info");
const infoSmBtn = document.getElementById("info-sm-btn");
const resumeBtnSm = document.getElementById("resume-menu-sm");
const InfoFadeInBtn = document.getElementById("about-me");
const showResumeBtn = document.getElementById("resume-btn");
const container = document.getElementById("container");
const infoContainer = document.getElementById("info-container");
const closeBtn = document.getElementById("close-btn");
const resumeEl = document.getElementById("resume-menu");
const resumeCardsContainer = document.getElementById('resume-cards-container');


// function to change proficiencies in home page
var counter = 1;

var myVar = setInterval(showTitle, 4000);

function showTitle() {
	var numOfTitles = document.getElementsByClassName("slides");
	for (var i = 0; i < numOfTitles.length; i++) {
		numOfTitles[i].className = "slides";
	}
	document.getElementsByClassName("slides")[counter].className = "slides fade-in";
	counter++;

	if (counter >= numOfTitles.length) {
		counter = 0;
	};

};


// function te set attribute for elements
function setStyleSheet(url) {
	var stylesheet = document.getElementById("stylesheet");
	stylesheet.setAttribute('href', url);
}


// function to show and hide resume items
function toggleCard(e) {
	document.getElementById(e.target.dataset.target).classList.toggle('active-card');
	resumeCardsContainer.classList.toggle('active-container');
	resumeEl.classList.toggle('visible');
	$(".resume-btn").toggleClass('translate');
}


// function to change resume items
function cardChanger(e) {
	document.getElementsByClassName('active-card')[0].classList.remove('active-card');
	document.getElementById(e.target.dataset.target).classList.add('active-card');
}


$(document).ready(function () {

// function to colors section slide toggle
	$(".color-customizer").hover(function () {
		$(".color-options").slideToggle('fast');
	})


// function to show all blogs information
	$(".more-info-btn").each(function () {
		$(this).click(function () {
			$('.blog-card').not($(this).parent().parent()).toggle("slow");
			$(this).parent().parent().find(".blog-more-info").slideToggle('slow');
			$(this).parent().toggleClass('rotate');
		})
	});


// function to like and unlike blogs
	$(".like-btn").each(function () {
		$(this).click(function () {
			$(this).toggleClass('liked')
		})
	})


// function to change color mode
	$('#light-mode').click(() =>
		setStyleSheet('./style/light-style.css')
	)

	$('#dark-mode').click(() =>
		setStyleSheet('./style/dark-style.css')
	)

	$('#green-mode').click(() =>
		setStyleSheet('./style/green-style.css')
	)

	$('#blue-mode').click(() =>
		setStyleSheet('./style/blue-style.css')
	)


// click handler function to show resume section
	$('.resume-link').click((e) =>
		toggleCard(e)
	)


// click handler function to hide resume section
	$('.card-closer').click((e) => {
		toggleCard(e);
	})


// click handler function to change resume items
	$('.resume-item').click((e) =>
		cardChanger(e)
	)


});



infoBtn.addEventListener('click', () =>
	container.classList.add('right-panel-active')
);

resumeBtnSm.addEventListener('click', () =>
	container.classList.add('right-panel-active')
);

showResumeBtn.addEventListener('click', () =>
	container.classList.remove('right-panel-active')
);

infoSmBtn.addEventListener('click', () =>
	container.classList.remove('right-panel-active')
);

InfoFadeInBtn.addEventListener('click', () =>
	infoContainer.classList.add('fade-in')
);

closeBtn.addEventListener('click', () =>
	infoContainer.classList.remove('fade-in')
);
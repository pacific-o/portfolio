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

document.addEventListener('DOMContentLoaded', function () {
	let skew = 1000;

	document.querySelectorAll(".wrapper").forEach(wrapper => {
		wrapper.addEventListener('mousemove', function (e) {
			var relX = event.pageX - $(this).offset().left;
			wrapper.querySelector('.handle').style.left = relX + 'px';
			wrapper.querySelector('.top').style.width = relX + skew + 'px'

		})
	})

})


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


$('.resume-link').click((e) =>
	toggleCard(e)
)

$('.card-closer').click((e) =>
	toggleCard(e)
)


function toggleCard(e) {
	document.getElementById(e.target.dataset.target).classList.toggle('active-card');
	resumeCardsContainer.classList.toggle('active-container');
	resumeEl.classList.toggle('visible');
	$(".resume-btn").toggleClass('translate');
}


$('.resume-item').click((e) =>
	cardChanger(e)
)


function cardChanger(e) {
	document.getElementsByClassName('active-card')[0].classList.remove('active-card');
	document.getElementById(e.target.dataset.target).classList.add('active-card');
}


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


$(document).ready(function () {
	$(".color-customizer").hover(function () {
		$(".color-options").slideToggle('slow');
		//$(".main").toggleClass("main-full");
})
});


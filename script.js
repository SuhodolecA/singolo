const TOP_MENU = document.getElementById('top-menu');
const PORTFOLIO_BTN = document.getElementById('portfolio-btn');
const PORTFOLIO_IMG = document.getElementById('portfolio-img');

TOP_MENU.addEventListener('click', (event)=> {
	TOP_MENU.querySelectorAll('a').forEach(el => el.classList.remove('active-top-menu'));
	event.target.classList.add('active-top-menu');
});


PORTFOLIO_BTN.addEventListener('click', (event)=> {
	PORTFOLIO_BTN.querySelectorAll('button').forEach(el => el.disabled = false);
	PORTFOLIO_BTN.querySelectorAll('button').forEach(el => el.classList.remove('active-portfolio-btn'));
	event.target.classList.add('active-portfolio-btn');
	event.target.disabled = true;

});


PORTFOLIO_IMG.addEventListener('click', (event)=> {
	PORTFOLIO_IMG.querySelectorAll('img').forEach(el => el.classList.remove('active-portfolio-images'));
	event.target.classList.add('active-portfolio-images');

});


function mixImg() {
let arrPortfolioImg = [
	"assets/img/img-1.jpg","assets/img/img-2.jpg","assets/img/img-3.jpg","assets/img/img-4.jpg",
	"assets/img/img-5.jpg","assets/img/img-6.jpg","assets/img/img-7.jpg","assets/img/img-8.jpg",
	"assets/img/img-9.jpg","assets/img/img-10.jpg","assets/img/img-11.jpg","assets/img/img-12.jpg"];
	mix(arrPortfolioImg);
	for(let i=0; i<PORTFOLIO_IMG.getElementsByTagName("img").length; i++) {
		PORTFOLIO_IMG.getElementsByTagName("img")[i].src = arrPortfolioImg[i];
	}

}

function mix(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


function changeBG(param) {
  var vertBg = document.getElementById(param);
  var displayValue = window.getComputedStyle(vertBg, null).getPropertyValue("display");
  if (displayValue === "none") {
    vertBg.style.display = "block";
  } else {
    vertBg.style.display = "none";
  }
}


const BUTTON_SUBMIT = document.getElementById('btn');
const CLOSE_SUBMIT = document.getElementById('close-btn');

BUTTON_SUBMIT.addEventListener('click', ()=> {
	const subject = document.getElementById('subject').value.toString();
	const description = document.getElementById('description').value.toString();

	if (subject =="") {
		document.getElementById('message-subj').innerText = 'Without subject';
	}else {
		document.getElementById('message-subj').innerText = 'Subject: '+subject;
	}

	if (description =="") {
		document.getElementById('message-desc').innerText = 'Without description';
	}else {
		document.getElementById('message-desc').innerText = 'Description: '+description;
	}
	document.getElementById('message-block').classList.remove('hidden');
});


CLOSE_SUBMIT.addEventListener('click', ()=> {
	document.getElementById('message-subj').innerText = '';
	document.getElementById('message-block').classList.add('hidden');
	document.getElementById('contForm').reset();
});

const prev = document.getElementById('prev');
const next = document.getElementById('next');
let counter = 0;

prev.addEventListener('click', ()=> {
	if(counter == -2040) {
		document.getElementById('prevslide').style.transform = 'translateX(' +(0) + 'px)';
		document.getElementById('prevslide').style.transition = 'transform 0.6s';
		document.getElementById('nextslide').style.transition = 'transform 0s';
		document.getElementById('nextslide').style.transform = 'translateX(' +(1020) + 'px)';
		counter=0;
	}else {
	document.getElementById('nextslide').style.transition = 'transform 0.6s';
	document.getElementById('prevslide').style.transition = 'transform 0s';
	document.getElementById('nextslide').style.transform = 'translateX(' +(counter) + 'px)';
	document.getElementById('prevslide').style.transform = 'translateX(' +(1020) + 'px)';
	counter -= 1020;
}
});

next.addEventListener('click', ()=> {
	if(counter == 2040) {
		document.getElementById('prevslide').style.transform = 'translateX(' +(0) + 'px)';
		document.getElementById('prevslide').style.transition = 'transform 0s';
		document.getElementById('nextslide').style.transition = 'transform 0.6s';
		document.getElementById('nextslide').style.transform = 'translateX(' +(-1020) + 'px)';
		counter=0;
	}else {
	document.getElementById('nextslide').style.transition = 'transform 0s';
	document.getElementById('prevslide').style.transition = 'transform 0.6s';
	document.getElementById('nextslide').style.transform = 'translateX(' +(-1020) + 'px)';
	document.getElementById('prevslide').style.transform = 'translateX(' +(counter) + 'px)';
	counter += 1020;
}
});


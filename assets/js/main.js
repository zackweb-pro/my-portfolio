// window.onload = ()=>{
//     document.querySelector('nav').style.clipPath = 'circle(100%)';
//     document.body.style.overflow = 'hidden';
// }

//scrolling behavior ;


open = document.querySelector('.open');
close = document.querySelector('.close');
nav = document.querySelector('nav');
open.addEventListener('click', ()=>{
    if (open.classList.contains('active')) {
        nav.style.clipPath = 'circle(100%)';
        document.body.style.overflow = 'hidden';
        open.classList.remove('active');
        close.classList.add('active');
    }
});
close.addEventListener('click', ()=>{
    if (close.classList.contains('active')) {
        nav.style.clipPath = 'circle(0% at 100% 0%)';
        document.body.style.overflow = 'visible';
        close.classList.remove('active');
        open.classList.add('active');
    }
});

let control_div = Array.from(document.querySelectorAll('.spans span'));
let bg_section = document.querySelectorAll('.project');
control_div[0].classList.add('active');
bg_section[0].classList.add('active');
let j;

control_div.forEach((e, i)=>{
	e.addEventListener("click", ()=>{
		remove_active(control_div);
        remove_active(bg_section);
		e.classList.add('active');
		bg_section[i].classList.add("active");
        j = i
	});
});
function remove_active(e){
	e.forEach((el)=>{
		el.classList.remove('active');
	});
}
j = 0;
setInterval(function(){
	if(j > 4){
		j = 0;
	}
	remove_active(control_div);
	remove_active(bg_section);
	control_div[j].classList.add('active');
	bg_section[j].classList.add('active');
	j++;
}, 3000);

// window.onload = ()=>{
//     document.querySelector('nav').style.clipPath = 'circle(100%)';
//     document.body.style.overflow = 'hidden';
// } 

//scrolling behavior ;


open = document.querySelector('.open');
close = document.querySelector('.close');
nav = document.querySelector('nav');
open.addEventListener('click', ()=>{
    if (open.classList.contains('active')) {
        nav.style.clipPath = 'circle(100%)';
        document.body.style.overflow = 'hidden';
        open.classList.remove('active');
        close.classList.add('active');
		document.querySelector('.projects').style.zIndex = '-1';
		document.querySelector('.control-projects').style.zIndex = '-1';
    }
});
close.addEventListener('click', ()=>{
    if (close.classList.contains('active')) {
        nav.style.clipPath = 'circle(0% at 100% 0%)';
        document.body.style.overflow = 'visible';
        close.classList.remove('active');
        open.classList.add('active');
		document.querySelector('.projects').style.zIndex = '0';
		document.querySelector('.control-projects').style.zIndex = '0';
    }
});

// j = 0;		
// control_div.forEach((e, i)=>{
// 	e.addEventListener("click", ()=>{
// 		remove_active(control_div);
//         remove_active(bg_section);
// 		e.classList.add('active');
// 		bg_section[i].classList.add("active");
//         j = i
// 	});
// });
// document.querySelector('.projects').addEventListener('click',(e)=>{
// 	if(e.pageX > width/2){
// 			remove_active(control_div);
// 			remove_active(bg_section);
// 			bg_section[j != 4 ? j++ : 0].classList.add('active');
// 			control_div[j != 4 ? j++ : 0].classList.add('active');

// 	}
// 	else if(e.pageX <= width/2){
// 		remove_active(control_div);
//         remove_active(bg_section);
// 		bg_section[j != 0 ? j-- : 4].classList.add('active');
// 		control_div[j != 0 ? j-- : 4].classList.add('active');

// 	}
// });
function remove_active(e){
	e.forEach((el)=>{
		el.classList.remove('active');
	});
}

// setInterval(function(){
// 	if(j > 4){
// 		j = 0;
// 	}
// 	remove_active(control_div);
// 	remove_active(bg_section);
// 	control_div[j].classList.add('active');
// 	bg_section[j].classList.add('active');
// 	j++;
// }, 3000);
// var coord = {
// 	x: 0,
// 	y: 0
// }
// var width = window.innerWidth;
// var height = window.innerHeight;
// let right = document.querySelector('.right');
// let left = document.querySelector('.left');

// window.addEventListener('resize', (e)=>{
// 	width = window.innerWidth;
// 	height = window.innerHeight;
// });
// document.querySelector('.projects').addEventListener('mousemove', (e)=>{
// 	if(e.pageX > width/2){
// 		left.classList.remove('active');
// 		right.classList.add('active');
// 	}
// 	else if(e.pageX <= width/2){
// 		right.classList.remove('active');
// 		left.classList.add('active');
// 		document.querySelector('.projects').onclick = function(){
			
// 		}
// 	}
// });
// document.querySelector('.projects').addEventListener('mouseout',()=>{
// 	right.classList.remove('active');
// 	left.classList.remove('active');
// });

function check(){
	// something
}

function deplaceElement(e){
	// something
}

// function chilaeaba(memoriesSection, link){
// 		const clientHeight = document.documentElement.clientHeight;
// 		const memoriesSectionY = memoriesSection.getBoundingClientRect().y;
// 		const memoriesSectionHeight = memoriesSection.getBoundingClientRect().height;
	  
// 		if (clientHeight > memoriesSectionY + (memoriesSectionHeight * 2) / 3) {
// 			document.querySelector('nav li a[href="index.html' + link +'"]').classList.add("active");
// 		}else{
// 			document.querySelector('nav li a[href="index.html' + link +'"]').classList.remove("active");

// 		}
	  
// 		// const skillsY = skills[1].getBoundingClientRect().y;
	  
// 		// if (clientHeight > skillsY) {

// 		// }
// }
// window.addEventListener("scroll", function () {

// chilaeaba(document.getElementById("my-projects"), "#my-projects");
// chilaeaba(document.getElementById("my-skills"), "#my-skills");
// chilaeaba(document.getElementById("contact"), "#contact");
// chilaeaba(document.getElementById("about-me"), "#about-me");
// chilaeaba(document.getElementById("home"), "#home");
// });
// const arr_el = ["contact", "my-projects",  "my-skills",  "about-me", "home"];
// const observer = new IntersectionObserver(entries =>{
// 	entries.forEach((entry, i)=>{
// 		document.querySelector('nav li a[href="index.html#' + entry.target.id +'"]').classList.toggle("active", entry.isIntersecting)
// 		if(entry.isIntersecting){
// 			window.location.hash = "#" + entry.target.id
// 		}

// 	},
// 	{
// 		threshold: 1,
// 	}
// 	);
// });

// arr_el.forEach(el =>{
// 	observer.observe(document.getElementById(el))
// });
// window.addEventListener('scroll',()=>{
// 	arr_el.forEach(el =>{
// 		if(document.getElementById(el).classList.contains("active")){
// 			document.querySelectorAll("nav ul li a").forEach((ee)=>{
// 				ee.classList.remove("active")
// 			});
// 			document.querySelector('nav li a[href="index.html#' + el +'"]').classList.add("active");
// 		}
// 	});
// });
window.addEventListener('hashchange', ()=>{
	document.querySelectorAll("nav ul li a").forEach((ee)=>{
		ee.classList.remove("active")
	});
	document.querySelector('nav li a[href="index.html' + window.location.hash +'"]').classList.add("active");

});
window.addEventListener('load', ()=>{
	bhire.classList.add("active")
	window.location.hash = "#home"
	document.querySelector('nav li a[href="index.html' + window.location.hash +'"]').classList.add("active");

});
let bhire = document.getElementById("hire_me")
const observer = new IntersectionObserver(entry =>{
	entry[0].target.classList.toggle("active", entry[0].isIntersecting)
	document.querySelector("nav ul li .hire_me").classList.toggle("active", !entry[0].isIntersecting)
});
observer.observe(bhire)

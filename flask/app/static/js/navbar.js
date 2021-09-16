let toggleNavStatus = false;

// Open and close nav
let toggleNav = function() {
	let getSidebar = document.querySelector(".nav-sidebar");
	let getSidebarUl = document.querySelector(".nav-sidebar ul");
	let getSidebarTitle = document.querySelector(".nav-sidebar span");
	let getSidebarLink = document.querySelectorAll(".nav-sidebar a");
	           
	if (toggleNavStatus === false) {
		getSidebar.style.visibility = "visible";
		getSidebarUl.style.visibility = "visible";
		getSidebar.style.width = "220px";
		getSidebarTitle.style.opacity = "0.5";

		let arrayLength = getSidebarLink.length;
		for(let i = 0; i < arrayLength; i++) {
			getSidebarLink[i].style.opacity = "1";
		}
		toggleNavStatus = true;
	}

	// Check if sidebar is open
	else if (toggleNavStatus === true) {
		getSidebar.style.width = "0px";
		getSidebarTitle.style.opacity = "0";

		let arrayLength = getSidebarLink.length;
		for(let i = 0; i < arrayLength; i++) {
			getSidebarLink[i].style.opacity = "0";
		}

		getSidebar.style.visibility = "hidden";
		getSidebarUl.style.visibility = "hidden";
		toggleNavStatus = false;
	}  
}

var _LOCK_BUTTON = document.querySelector("#lock-landscape-button"),
	_UNLOCK_BUTTON = document.querySelector("#unlock-button"),
	_STATUS = document.querySelector("#orientation-status");

_STATUS.innerHTML = screen.orientation.type + ' mode';

// upon unlock
document.querySelector("#unlock-button").addEventListener('click', function() {
	
});

// when screen orientation changes
screen.orientation.addEventListener("change", function() {
	_STATUS.innerHTML = screen.orientation.type + ' mode';
});

// on exiting full-screen lock is automatically released
document.addEventListener("fullscreenchange", function() {
	_LOCK_BUTTON.style.display = 'block';
	_UNLOCK_BUTTON.style.display = 'none';
});

// for Chrome & Safari
document.addEventListener("webkitfullscreenchange", function() {
	_LOCK_BUTTON.style.display = 'block';
	_UNLOCK_BUTTON.style.display = 'none';
});
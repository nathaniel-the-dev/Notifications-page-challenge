const markAsReadBtn = document.getElementById('markAsReadBtn');
const unreadNotifs = document.querySelectorAll('.unread');

markAsReadBtn.addEventListener('click', () =>
	[...unreadNotifs].forEach((notif) => {
		notif.classList.remove('bg-grayish-blue-very-light', 'unread');
		notif.querySelector('.dot')?.remove();
	})
);

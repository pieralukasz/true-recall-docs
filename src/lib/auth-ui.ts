import { supabase } from "./supabase";

function getEmailInitial(email?: string): string {
	return email?.[0]?.toUpperCase() || "U";
}

function renderLoggedIn(email?: string) {
	document.documentElement.classList.add("is-logged-in");
	document.querySelectorAll("[data-auth-initial]").forEach((el) => {
		el.textContent = getEmailInitial(email);
	});
}

function renderLoggedOut() {
	document.documentElement.classList.remove("is-logged-in");
	document.querySelectorAll(".auth-dropdown").forEach((el) => {
		(el as HTMLElement).style.display = "none";
	});
}

function setupDropdowns() {
	document.querySelectorAll("[data-auth-avatar]").forEach((avatar) => {
		const dropdown = avatar.querySelector(".auth-dropdown") as HTMLElement;
		if (!dropdown) return;
		avatar.addEventListener("click", (e) => {
			e.stopPropagation();
			const open = dropdown.style.display === "block";
			// Close all other dropdowns first
			document.querySelectorAll(".auth-dropdown").forEach((el) => {
				(el as HTMLElement).style.display = "none";
			});
			dropdown.style.display = open ? "none" : "block";
		});
	});

	document.addEventListener("click", () => {
		document.querySelectorAll(".auth-dropdown").forEach((el) => {
			(el as HTMLElement).style.display = "none";
		});
	});

	document.querySelectorAll("[data-auth-signout]").forEach((btn) => {
		btn.addEventListener("click", async (e) => {
			e.preventDefault();
			e.stopPropagation();
			await supabase.auth.signOut();
			renderLoggedOut();
			window.location.href = "/";
		});
	});
}

// Async confirm — sync localStorage check already handled by inline script
const { data } = await supabase.auth.getSession();
if (data.session) {
	renderLoggedIn(data.session.user.email ?? undefined);
} else {
	renderLoggedOut();
}

setupDropdowns();

supabase.auth.onAuthStateChange((_event, session) => {
	if (session) {
		renderLoggedIn(session.user.email ?? undefined);
	} else {
		renderLoggedOut();
	}
});

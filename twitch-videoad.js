// twitch-videoad.js
const origFetch = window.fetch;
window.fetch = (url, init, ...args) => {
	if (typeof url === "string") {
		if (url.includes("/access_token")) {
			console.log("helloworld");
			 url = url.replace("player_type=site", "player_type=site");
		} else if (
			console.log("helloworld");
			url.includes("/gql") &&
			init &&
			typeof init.body === "string" &&
			init.body.includes("PlaybackAccessToken")
		) {
			console.log("helloworld2");
			 const newBody = JSON.parse(init.body);
			 newBody.variables.playerType = "site";
			 init.body = JSON.stringify(newBody);
		}
	}
	return origFetch(url, init, ...args);
};

const playMusic = (song, isOnline) => {
	if (
		!song ||
		typeof song !== "object" ||
		typeof song.title !== "string" ||
		typeof song.isDownloaded !== "boolean"
	) {
		return "Error: Invalid song data";
	}

	if (isOnline) {
		return `Playing: ${song.title}`;
	}

	if (song.isDownloaded) {
		return `Playing Offline: ${song.title} ⬇️`;
	}

	return `Error: ${song.title} is not downloaded for offline playback`;
};

const songs = [
	{ title: "Song A", isDownloaded: true },
	{ title: "Song B", isDownloaded: false },
	{ title: "Song C", isDownloaded: true }
];

console.log(playMusic(songs[0], true));
console.log(playMusic(songs[0], false));
console.log(playMusic(songs[1], false));

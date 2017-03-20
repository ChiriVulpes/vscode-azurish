const gulp = require("gulp");

gulp.task("compile", () => {
	const plist = require("plist");
	const fs = require("fs");
	try {
		let azure = JSON.parse(fs.readFileSync("src/azure.json"));
		fs.writeFileSync("out/azure.tmTheme", plist.build(azure));
	} catch (err) {
		console.log(err.stack);
	}
});

gulp.task("watch", ["compile"], () => {
	gulp.watch([
		"./src/**/*"
	], ["compile"]);
});
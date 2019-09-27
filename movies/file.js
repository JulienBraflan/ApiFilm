const { writeFile, mkdir } = require('fs');

const filename = "movies/movies.txt";
const content = "Contenu du fichier";
const message = "Chemin du fichier  : " + filename;

writeFile(filename, content, (err) => {
	if(err) console.log(err);
	console.log(message);
});
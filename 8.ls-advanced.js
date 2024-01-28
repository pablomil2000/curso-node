const fs = require('node:fs/promises');
const path = require('node:path');
const folder = process.argv[2] ?? '.';
const picocolors = require('picocolors');


async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder);
        files.forEach(file => {
            console.log(file);
        });
    } catch (error) {
        console.log(`Error al leer el directorio ${folder}`);
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;

        try {
            stats = await fs.stat(filePath);  //Informacion del archivo
        } catch (error) {
            console.log(`Error al leer el archivo ${filePath}`);
            process.exit(1);
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(30)} ${fileSize.toString().padStart(6)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises);

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}


ls(folder);
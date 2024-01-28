const fs = require('node:fs/promises')
const path = require('node:path')
const folder = process.argv[2] ?? '.'
const pc = require('picocolors')

// eslint-disable-next-line space-before-function-paren
async function ls(folder) {
  let files
  try {
    files = await fs.readdir(folder)
    files.forEach((file) => {
      // console.log(pc.green(file));
    })
  } catch (error) {
    console.log(pc.red(`Error al leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath) // Informacion del archivo
    } catch (error) {
      console.log(pc.red(`Error al leer el archivo ${filePath}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : '-'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    if (fileType === 'd') {
      return pc.yellow(
        `${fileType} ${file.padEnd(30)} ${fileSize
          .toString()
          .padStart(6)} ${fileModified}`
      )
    } else if (fileType === '-') {
      return pc.blue(
        `${fileType} ${file.padEnd(30)} ${fileSize
          .toString()
          .padStart(6)} ${fileModified}`
      )
    } else {
      return `${fileType} ${file.padEnd(30)} ${fileSize
        .toString()
        .padStart(6)} ${fileModified}`
    }
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo)
  })
}

ls(folder)

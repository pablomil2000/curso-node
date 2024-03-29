import { platform, version, arch, cpus, totalmem, freemem, userInfo, homedir, tmpdir, hostname, uptime } from 'node:os'

console.log('Informacion del Sistema Operativo')
console.log('---------------------------------')
console.log('Plataforma:', platform())
console.log('Version:', version())
console.log('Arquitectura:', arch())
console.log('Procesadores:', cpus().length)
console.log('Memoria Total:', totalmem() / 1024 / 1024 / 1024, 'GB')
console.log('Memoria Libre:', freemem() / 1024 / 1024 / 1024, 'GB')
console.log('---------------------------------')
console.log('Usuario:', userInfo().username)
console.log('---------------------------------')
console.log('Carpeta Personal:', homedir())
console.log('Directorio Temporal:', tmpdir())
console.log('---------------------------------')
console.log('Hostname:', hostname())
console.log('---------------------------------')
console.log('tiempo activo', uptime() / 60 / 60, 'horas')

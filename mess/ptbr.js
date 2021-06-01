const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
 
exports.wait = () => {
	return`⏳Espere unos momentos...⏳\n\nSi no funciona, vuelva a utilizar el comando.`
}

exports.tterro = () => {
	return `Debes escribir ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`
}

exports.waitmusic = () => {
	return`⏳Espera unos momentos...⏳\n\nTu música se enviará en 2 minutos.\nSi no es así, intente especificar el nombre de la canción.`
}

exports.waitfig = () => {
	return`⏳Espera unos momentos...⏳\n\nLa creación de pegatinas lleva unos segundos.`
}

exports.waitgif = () => {
	return`⏳Espera unos momentos...⏳\n\nLa creación de pegatinas lleva unos segundos\nLa creación de stickergif toma de 10 segundos a 1 minuto dependiendo del tamaño del gif\nLímite de 10 segundos por gif.`
}

exports.waitsfw = () => {
	return`⏳Espera unos momentos...⏳\n\nEl bot enviará el hentai en 2 minutos.\nInténtelo de nuevo si no lo hace.`
}

exports.waitpor = () => {
	return`⏳Espera unos momentos...⏳\n\nEl bot enviará la imagen\nInténtelo de nuevo si no lo hace.`
}

exports.waitimg= () => {
	return`⏳Espera unos momentos...⏳\n\nEl bot enviará crear y enviará la imagen\nEl proceso tarda al menos 10 segundos \nInténtelo de nuevo si no lo hace.`
}

exports.success = () => {
	return`✅Éxito✅`
}

exports.levelon = () => {
	return`✅Se Ha Activado La Función De Nivel✅`
}

exports.leveloff = () => {
	return`❌La Función De Nivel Ha Sido Deshabilitada❌`
}

exports.levelnoton = () => {
	return`🚫La Función De Nivel Está Desactivada🚫`
}

exports.levelnol = () => {
	return`Estás en el nivel 0... \n¿Ya estás registrado para empezar a ganar XP?`
}

exports.ban = () => {
	return`🛂 Estás Baneado Del BOT🛂`
}

exports.stick = () => {
	return`❌Error al crear la calcomanía❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌El Comando Solo Se Puede Usar En Grupos❌`
}

exports.ownerG = (ownerName) => {
	return`El Comando Solo Puede Ser Utilizado Por ${ownerName}🕴`
}

exports.lia = () => {
	return`Solo Felixcrack Lo Puede Usar😳👌`
}

exports.ownerB = (ownerName) => {
	return`El Comando Solo Puede Ser Utilizado Por ${ownerName}🕴`
}

exports.admin = () => {
	return`❌El Comando Solo Puede Ser Utilizado Por Administradores De Grupo❌`
}

exports.Badmin = () => {
	return`❌El Comando Solo Se Puede Usar Cuando El Bot Es Un Administrador Del Grupo❌'`
}

exports.registrarB = (pushname, prefix) => {
	return`Hola 👋 ${pushname}\n\nAun No Te Has Registrado ....\n\nPara Registrarse Y Poder Utilizar Todos Los Comandos Del Bot, Utilice:\n\nComando: ${prefix}registrar su nombre|su edad\nPor ejemplo: ${prefix}registrar Felix|16`
}

exports.nsfw = () => {
	return`🚫Funciones NSFW deshabilitadas en este grupo🚫`
}

exports.erro = () => {
	return`❌ocurrio un error❌\n\nIntenta De  nuevo.`
}



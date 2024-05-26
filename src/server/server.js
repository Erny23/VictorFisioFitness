import fs from 'node:fs/promises'// Es una api asincrona del sistema de archivos local que devuelve promesas.
import express from 'express'


// CONSTANTES
const isProduction = process.env.NODE_ENV === 'production'// gracias al paquete cross-env esta variable de entorno
//se asigna apenas inicie el programa, dependiendo del comando de ejecucion se asignara si es produccion o no...

const port = process.env.PORT || 5173// la variable de entorno PORT no es asignada en ningun momento, por lo que,
//mientras no se le asigne otro valor seguira siendo (5173) su valor por defecto...

const base = process.env.BASE || '/'// la variable de entorno BASE no es asignada en ningun momento, por lo que,
//mientras no se le asigne otro valor seguira siendo ( / ) su valor por defecto...

// CACHED PRODUCTION ASSETS
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined
/**
 * dependiendo del valor booleano isProduction, se asignara o no un valor a cada constante...
 * + En la constente 'templateHtml' se le asignara la el archivo index.html que se encuentra en produccion.
 * + En la constante 'ssrManifest' se le asignara el archivo ssr-manifest.json que se encuentra en produccion.
 */

// CREATE HTTP SERVER
const app = express() // instancia del paquete express a una constante llamada "app"

// ADD VITE OR RESPECTIVE PRODUCTION MIDDLEWARES
// -> MIDDLEWARES
let vite
if (!isProduction) {
  const { createServer } = await import('vite') // importacion asincrona de la funcion createServer, esta
  //funcion es parte del paquete vite que sirve para crear un servidor local...
  vite = await createServer({
    server: { middlewareMode: true }, //conexiones a difernetes servidores usando llamados http y otras cosas
    appType: 'spa', //tipos de appType (spa/ mpa/ custom)
    base
  }) // instanciacion asincrona a la variable "vite" del servidor local
  app.use(vite.middlewares) // asignar los respectivos middlewares al servidor que se le asigno.
  /**
   * si no es produccion se genera un servidor local usando el paquete de vite llamado "createServer",
   * con el se le asignaran todas las configuraciones necesarias para optimizar y aprovechar bien el servidor local.
   */

} else {
  const compression = (await import('compression')).default // importacion asincrona del modulo encargado
  //de la exportacion de respuestas http comprimidas.

  const sirv = (await import('sirv')).default // importacion asincrona del modulo encargado de enviar
  //archivos estaticos de forma sencilla.

  app.use(compression()) //asignacion del middleware "compression" al servidor "app"
  app.use(base, sirv('./dist/client', { extensions: [] })) //asignacion del middleware "sirv" al servidor "app" desde su base "/"
  /**
   * si estamos en produccion se tienen que trabajar con los middlewares compression y sirv, para 
   * asignar sus funciones y sus respuestas desde el servidor al cliente de produccion.
   */
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')//cambia la base del url por otro en el primer parametro se coloca
    // la base original y en el segundo el valor por el que se desea cambiar...

    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8') //-> lectura del archivo index.html de forma asincrona.
      template = await vite.transformIndexHtml(url, template) //-> asignando la plantilla index.html al url asignado
      //de forma asincrona.

      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render //-> estamos asignando el valor de este modulo
      //a la variable render.

      /**
       * si no esta en modo produccion entonces se asignara una url a la plantilla index.html luego, 
       * se le asignaran las funciones del modulo servidor al index.html
       */
    } else {
      template = templateHtml
      render = (await import('../../dist/server/entry-server.js')).render
      /**
       * si estamos en produccion el programa seguira igual en este caso se importan las funciones del servidor
       * de forma mas sencilla y directa...
       */
    }

    const rendered = await render(url, ssrManifest) // si existe un valor "ssrManifest" entonces se asigna en la 
    //url asignada los valores del archivo JSON que contienen los datos del servidor en produccion. para enviar
    //informacion que requiere la plantilla html...

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '') //se reemplazaran las cadenas que se encuentran en el 
      //archivo index.html por datos html de la url requerida eso si esta en produccion si no el remplazo no se hara.

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)// se asigna un codigo de estado, el tipo de datos
    // manejados y se envia la plantilla html...
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
    /**
     * en caso de un error si existe un valor para la variable vite, hacer su codigo de error respectivo, 
     * si no se ignora, luego una salida en consola del error y al final como resultado se asigna el estatus
     * correspondiente y funiliza el codigo asignando el error.
     */
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Servidor iniciado desde -> http://localhost:${port}`)
})
/**
 * por ultimo se inicia la aplicacion usando la funcion listen que es una funcion sobrecargada, entre los
 * parametros adimitidos en esta funcion esta el primer parametro que sirve para asignar un puerto al servidor
 * y el segundo parametro que es un callback...
 */

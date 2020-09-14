//Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const path = require('path') 

//Archivo necesario para trabajar con HTML.
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CopyWebpackPlugin = require('copy-webpack-plugin')

//Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
module.exports = {  
    //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
    entry: './src/index.js',
    output: { //Donde se envía el proyecto estructurado y compilado listo para producción.
        //Creamos el lugar dónde se exportará el proyecto.
        path: path.resolve(__dirname, 'dist'),  
        //Este es el nombre del archivo final para producción.
        filename: 'main.js' 
    },
    resolve: {
        //Extensiones que vamos a utilizar.
        extensions: ['.js'], 
    },
    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
        rules: [    //Reglas
            {   // Estructura de Babel
                test: /\,js?$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                exclude: /node_modules/,    //Excluimos la carpeta de node modules
                use: {
                    loader: 'babel-loader',    //Utilizar un loader como configuración establecida.
                }
            }
        ]
    },
    plugins: [  //Establecemos los plugins que vamos a utilizar
        new HtmlWebpackPlugin(    //Permite trabajar con los archivos HTML
            {
                inject: true,   //Cómo vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html',    //Dirección donde se encuentra el template principal
                filename: './index.html'    //El nombre que tendrá el archivo
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
        })
    ]
}
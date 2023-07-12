import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
/* 
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
inquirer.registerPrompt('client', 'whats the site?');

inquirer.prompt([
    {
        message:'what is the website?', 
        name: 'URL'
    },
    ])
    .then((answer) => {
        const site = answer.URL
        console.log(site)

        var qr_png = qr.image(site, {type: 'png'})
        qr_svg.pipe(fs.createWriteStream('jairanlas.png'))

        var png_string = qr.imageSync(site, { type: 'png' });
    })
    .catch((error) =>{    
        console.log('something went wrong :( ' + error)
    })
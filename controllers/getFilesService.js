const path = require('path')
const fs = require('fs')
const dirPath = path.join(__dirname, '../uploads')

module.exports = {

    getFiles: async () => {
        return new Promise((res, rej) => {
            fs.readdir(dirPath, (err, files) => {
                if(err){
                    console.error(err)
                    rej(err)
                }
                else{ 
                    res(files)
                }
            })
        })

    }
}
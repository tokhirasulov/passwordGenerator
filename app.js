const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let placeholder = document.getElementById("placeholder")
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

function generatePassword() {
        let passwordone = Math.floor(Math.random() * characters.length )
        let passwordtwo = Math.floor(Math.random() * characters.length )
        let passwordthree = Math.floor(Math.random() * characters.length )
        let passwordfour = Math.floor(Math.random() * characters.length )
        let passwordfive = Math.floor(Math.random() * characters.length )
        let passwordsix = Math.floor(Math.random() * characters.length )
        let passwordseven = Math.floor(Math.random() * characters.length )
        let passwordeight = Math.floor(Math.random() * characters.length )
        let passwordnine = Math.floor(Math.random() * characters.length )
        let passwordten = Math.floor(Math.random() * characters.length )
        let passwordeleven = Math.floor(Math.random() * characters.length )
        let passwordtwelve = Math.floor(Math.random() * characters.length )
        let passwordtheerteen = Math.floor(Math.random() * characters.length )
        let passwordfourteen = Math.floor(Math.random() * characters.length )
        let passwordfifteen = Math.floor(Math.random() * characters.length )
        
        firstPassword.textContent = characters[passwordone] + characters[passwordtwo] + characters[passwordthree] + 
        characters[passwordfour] + characters[passwordfive] + characters[passwordsix] + characters[passwordseven] + characters[passwordeight]
        + characters[passwordnine] + characters[passwordten] + characters[passwordeleven] + characters[passwordtwelve] + characters[passwordtheerteen]
         + characters[passwordfourteen] + characters[passwordfifteen]



         let passwordon = Math.floor(Math.random() * characters.length )
         let passwordtw = Math.floor(Math.random() * characters.length )
         let passwordthre = Math.floor(Math.random() * characters.length )
         let passwordfou = Math.floor(Math.random() * characters.length )
         let passwordfiv = Math.floor(Math.random() * characters.length )
         let passwordsi = Math.floor(Math.random() * characters.length )
         let passwordseve = Math.floor(Math.random() * characters.length )
         let passwordeigh = Math.floor(Math.random() * characters.length )
         let passwordnin = Math.floor(Math.random() * characters.length )
         let passwordte = Math.floor(Math.random() * characters.length )
         let passwordeleve = Math.floor(Math.random() * characters.length )
         let passwordtwelv = Math.floor(Math.random() * characters.length )
         let passwordtheertee = Math.floor(Math.random() * characters.length )
         let passwordfourtee = Math.floor(Math.random() * characters.length )
         let passwordfiftee = Math.floor(Math.random() * characters.length )
         
         secondPassword.textContent = characters[passwordon] + characters[passwordtw] + characters[passwordthre] + 
         characters[passwordfou] + characters[passwordfiv] + characters[passwordsi] + characters[passwordseve] + characters[passwordeigh]
         + characters[passwordnin] + characters[passwordte] + characters[passwordeleve] + characters[passwordtwelv] + characters[passwordtheertee]
          + characters[passwordfourtee] + characters[passwordfiftee]
}

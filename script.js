console.log("lets write java script");


    async function main() {
        let a= await fetch("http://172.19.238.113:5500/assets/Audio-songs/Billie%20Eillish/");
        let response= await a.text();
        console.log(response);
    }

main() 
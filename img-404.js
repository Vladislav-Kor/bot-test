const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const glavUrl =  'https://tech-success.ru/';
    const postUrl = glavUrl;
    const objUrl = [];
    const error = [];
    
    var myFunc = (async (postUrl, baseUrl) => {
        try {
            const res = await page.goto(postUrl); //захожу на страницу          
            if ( res !== null && res.status() === 404) {                      
                    error.push('со страницы '+baseUrl+' переходит на страницу error '+postUrl);
                    console.log('\u001b[' + 33 + 'm' + ':(' + '\u001b[38m',postUrl,baseUrl)       
                return
            }
               // добовляю в масив
            let pageUrls = await page.evaluate(() => { // забираю все url
                const urlArray = Array.from(document.getElementsByTagName('a')).map((link) => link.href);
                const uniqueUrlArray = [...new Set(urlArray)];
                return uniqueUrlArray;
            });

            const pageUrls2 = await page.evaluate(() => { // забираю все url
                const urlArray = Array.from(document.getElementsByTagName('link')).map((link) => link.href);
                const uniqueUrlArray = [...new Set(urlArray)];
                return uniqueUrlArray;
            });
            const pageUrls3 = await page.evaluate(() => { // забираю все url
                const urlArray = Array.from(document.getElementsByTagName('img')).map((link) => link.src);
                const uniqueUrlArray = [...new Set(urlArray)];
                return uniqueUrlArray;
            });
            pageUrls = pageUrls.concat(pageUrls2).concat(pageUrls3)

            for (let url1 of  pageUrls) { // прохожусь по всем url
                let filter = url1.startsWith(glavUrl) || url1.startsWith('https://static.orbitatech.ru') //проверяю url   
                if(filter) {
                    if (!objUrl.includes(url1)) {
                        objUrl.push(url1);  
                        console.log(`\u001b[` + 37 + 'm'+'со страницы'+' '+postUrl+' '+'переходит на страницу'+' '+url1);

                        await myFunc(url1, postUrl);
                        // все заного 
                    }
                }
            }
        } catch (error) {
            console.log('\u001b[31m'+'не соответствует',postUrl)
            console.log(error)
            
        }
    }); 
    
    await myFunc(glavUrl, postUrl);

    var fs = require('fs');
    var errorStream = fs.createWriteStream("error.txt");
    errorStream.once('open', function(fs) {
        for(let url2 of  error){
            errorStream.write(url2+`\n`);
        }
        errorStream.end();
    });
    
    console.log('\u001b[33m'+objUrl.length)
    
    await browser.close();
    
})();

const puppeteer = require('puppeteer');

(async() => {
    // Запустим браузер
    const browser = await puppeteer.launch({headless: true});

    // Откроем новую страницу
    const page = await browser.newPage();
    const pageURL = 'https://orbita.docker.localhost';

    try {
        // Попробуем перейти по URL
        await page.goto(pageURL);
        console.log(`Открываю страницу: ${pageURL}`);
    } catch (error) {
        console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
    }
    
        // Найдём все ссылки на статьи
        const postsSelector = 'a';
        await page.waitForSelector(postsSelector);
        const postUrls = await page.$$eval(
            postsSelector, postLinks => postLinks.map(link => link.href)
        );
    
    
    // Перейдём по каждой из них
    for (let postUrl of  postUrls) {
        // Откроем страницу
        //console.log(postUrl);
        let filter = postUrl.startsWith("https://orbita.docker.localhost")
        if(filter === true) {
	
           
                try {
                    await page.goto(postUrl);
                    
                    } catch (error) {
                        console.log(error);
                    }
                
                page.on('response',(res)=>{
                    if(res.status()===404){
                        let filter = res.url().startsWith("https://orbita.docker.localhost")
                        if(filter === true) {
                            console.log('\u001b[' + 45 + 'm' + 'критично' + '\u001b[30m',postUrl)
                            
                            console.log("res.url", res.url(), res.status())
                        }
                    }if(res.status()===500){
                        console.log('\u001b[' + 33 + 'm' + 'проверь' + '\u001b[0m',postUrl)
                        console.log("res.url", res.url(), res.status())
                    }
                    if(res.status()!==404&&res.status()!==500&&res.status()===200){
                        let filter = res.url().startsWith("https://orbita.docker.localhost")
                        if(filter === true) {
                            console.log('\u001b[' + 44 + 'm' + ':)' + '\u001b[30m',postUrl,res.status())
                        }
                    }
                })
                
            }
        }
        console.log('\u001b[' + 32 + 'm' + 'процес окончен:)' + '\u001b[0m')
    // Всё сделано, закроем браузер
    await browser.close();
    process.exit()
})();

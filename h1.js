const puppeteer = require('puppeteer');

(async() => {
    // Запустим браузер
    const browser = await puppeteer.launch({headless: false});

    // Откроем новую страницу
    const page = await browser.newPage();
    const pageURL = 'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka';

    try {
        // Попробуем перейти по URL
        await page.goto(pageURL);
        console.log(`Открываю страницу: ${pageURL}`);
    } catch (error) {
        console.log(`Не удалось открыть страницу: ${pageURL} из-за ошибки: ${error}`);
    }
    
        // Найдём все ссылки на статьи
        const postsSelector = '.b-product-card';
        await page.waitForSelector(postsSelector, { timeout: 990 });
        const postUrls = await page.$$eval(
            postsSelector, postLinks => postLinks.map(link => link.href)
        );  
   
    // Перейдём по каждой из них
    for (let postUrl of  postUrls) {
        // Откроем страницу
        try {
            await page.goto('https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/'+postUrl);
            console.log('Открываю страницу: ',postUrl);
        } catch (error) {
            console.log(error);
            console.log('Не удалось открыть страницу: ',postUrl);
        }
       

        // Получим pathname
        let pagePathname = await page.evaluate(() => location.pathname);
        pagePathname += pagePathname.replace(/\//g, '-');
        console.log('Нашёл pathname:', pagePathname);

        // Получим заголовок статьи
        const titleSelector = 'h1';
        await page.waitForSelector(titleSelector);
        const pageTitle = await page.$eval(
            titleSelector, titleSelector => titleSelector.outerHTML
        );
        console.log('Нашёл заголовок статьи: ', pageTitle);

        // Получим контент статьи
        const contentSelector = '.b-text';
        await page.waitForSelector(contentSelector, { timeout: 0 });
        const pageContent = await page.$eval(
            contentSelector, contentSelector => contentSelector.innerHTML
        );
        console.log('Нашёл контент: ', pageContent);

        
    }
    console.log('Нашёл контент:) ');
    // Всё сделано, закроем браузер
    await browser.close();

    process.exit()
})();

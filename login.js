const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://orbita.docker.localhost/audit#/category');
    try { await page.waitForSelector('.b-auth-form__form-group, .-empty')} catch (error) {console.log('кнопочки та и нет)');}

    await page.click('.b-auth-form__form-control')
    await page.keyboard.type('admin')
    const elHandleArray = await page.$$('.b-auth-form__input-group',);
    await elHandleArray[elHandleArray.length-1].click();    
    await page.keyboard.type('qaz123');
    await page.waitForTimeout(2500)
    const titleSelector = 'title';
    await page.waitForSelector(titleSelector);
    let pageTitle = ''
    
        
    while(pageTitle !== '<title>Админка 2.0</title>'){
        try { await page.waitForSelector('button'); page.click('button')  } catch (error) {console.log('кнопочки та и нет)');}
        pageTitle = await page.$eval(
            titleSelector, titleSelector => titleSelector.outerHTML
        );
        console.log('Нашёл заголовок статьи:', pageTitle);
        await page.waitForTimeout(2500)
    }
    
    await console.log('Нашёл заголовок статьи:', pageTitle);
    await console.log('}{@|{, вошел :)'); 
    await browser.close();
    process.exit();
})();
const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    const postUrls = [
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/e3041.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/e3141.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/gostinichnyij-zamok-e3220.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/s3072h.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/s3172h.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/orbita-bt-9008.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/orbita-bt-118.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/orbita-rk005.html',
        'https://orbitatech.ru/produkcziya/upravlenie-poseleniem/orbita-sk-ad3.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/zamok-e4031.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/zamok-e4131.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/gostinichnyij-zamok-s4032g.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/enkoder.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/karta-dannyix.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/karta-mifare.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/enkoder-smartcard-reader-d3.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/nfc-metka-orbita.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/rf-metka-orbita.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/rf-metka-vip.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-ofisov/e3060g.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-ofisov/f3220.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-ofisov/rfid-klyuch-brelok.html',
        'https://orbitatech.ru/produkcziya/gostnichnye-sejfy/sejf-obt-2045mb.html',
        'https://orbitatech.ru/produkcziya/gostnichnye-sejfy/obt-2045me.html',
        'https://orbitatech.ru/produkcziya/gostnichnye-sejfy/obt-2043mb.html',
        'https://orbitatech.ru/produkcziya/gostnichnye-sejfy/sejf-obt-2043me.html',
        'https://orbitatech.ru/produkcziya/gostnichnye-sejfy/obt-2040mb.html',
        'https://orbitatech.ru/produkcziya/gostnichnye-sejfy/obt-2040me.html',
        'https://orbitatech.ru/produkcziya/gostnichnye-sejfy/sejf-obt-2043ma.html',
        'https://orbitatech.ru/produkcziya/minibary-dlya-gostinic/minibar-mb-30x.html',
        'https://orbitatech.ru/produkcziya/minibary-dlya-gostinic/minibar-mb-40b.html',
        'https://orbitatech.ru/produkcziya/minibary-dlya-gostinic/minibar-mb-30g.html',
        'https://orbitatech.ru/produkcziya/minibary-dlya-gostinic/minibar-mb-40g.html',
        'https://orbitatech.ru/produkcziya/minibary-dlya-gostinic/mb-30dx.html',
        'https://orbitatech.ru/produkcziya/minibary-dlya-gostinic/mb-40dx.html',
        'https://orbitatech.ru/produkcziya/intellektualnaya-sistema-upr/ss-ap07.html',
        'https://orbitatech.ru/produkcziya/intellektualnaya-sistema-upr/ss-1705ds.html',
        'https://orbitatech.ru/produkcziya/intellektualnaya-sistema-upr/ss-1705ts.html',
        'https://orbitatech.ru/produkcziya/intellektualnaya-sistema-upr/ss-1708ds.html',
        'https://orbitatech.ru/produkcziya/informeri/vyiklyuchatel-dvernoj-tss-40.html',
        'https://orbitatech.ru/produkcziya/energosberegayushhie-vyiklyu/energosberegayushhee-ustrojs.html',
        'https://orbitatech.ru/produkcziya/energosberegayushhie-vyiklyu/ess-400.html',
        'https://orbitatech.ru/produkcziya/informeri/indikator-dvernoj-ds-90.html',
        'https://orbitatech.ru/produkcziya/informeri/vyiklyuchatel-dvernoj-tss-90.html',
        'https://orbitatech.ru/produkcziya/informeri/indikator-dvernoj-ds-40.html',
        'https://orbitatech.ru/produkcziya/informeri/vyiklyuchatel-dvernoj-dvuxkn.html',
        'https://orbitatech.ru/produkcziya/informeri/vyiklyuchatel-dvernoj-tss-70.html',
        'https://orbitatech.ru/produkcziya/informeri/indikator-dvernoj-ds-70.html',
        'https://orbitatech.ru/produkcziya/informeri/indikator-dvernoj-ds-80.html',
        'https://orbitatech.ru/produkcziya/informeri/vyiklyuchatel-dvernoj-tss-80.html',
        'https://orbitatech.ru/produkcziya/informeri/dvernoj-zvonok-tss-20.html',
        'https://orbitatech.ru/produkcziya/energosberegayushhie-vyiklyu/dvernoj-zvonok-db-01.html',
        'https://orbitatech.ru/produkcziya/energosberegayushhie-vyiklyu/korobka-montazhnaya-rasprede.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/zamok-dlya-shkafchikov-820.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/zamok-dlya-shkafchikov-821.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/zamok-dlya-shkafchikov-840.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/zamok-dlya-shkafchikov-841.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/zamok-dlya-shkafchikov-850.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/zamok-dlya-shkafchikov-851.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-razdevalok/braslet-dlya-zamkov.html',
        'https://orbitatech.ru/produkcziya/onlajn-zamki/3041.html',
        'https://orbitatech.ru/produkcziya/onlajn-zamki/3141.html',
        'https://orbitatech.ru/produkcziya/onlajn-zamki/zigbee-router-orbita.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/zamok-e4431.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/zamok-e3441.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/zamok-e3042.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/zamok-e3142.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/zamok-orbita-008b.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/programmator-obt-pp01.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/programmator-mobil.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/vneshniy-schityvatel.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/zamok-s31a.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-apartamentov/bluetooth-orbita-g2.html',
        'https://orbitatech.ru/produkcziya/zamki-dlya-apartamentov/orbita-ttlock.html',
        'https://orbitatech.ru/produkcziya/upravlenie-poseleniem/kiosk.html',
        'https://orbitatech.ru/produkcziya/biometricheskie-zamki/p7021.html',
        'https://orbitatech.ru/produkcziya/biometricheskie-zamki/p7020.html',
        'https://orbitatech.ru/produkcziya/biometricheskie-zamki/n20.html',
        'https://orbitatech.ru/produkcziya/zamki-s-mobilnym-klyuchom/p6010.html',
        'https://orbitatech.ru/produkcziya/biometricheskie-zamki/s31.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/e3064p.html',
        'https://orbitatech.ru/produkcziya/bluetooth-zamki/e3041sbt-bluetooth.html',
        'https://orbitatech.ru/produkcziya/bluetooth-zamki/e3141sbt-bluetooth.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/e3164p.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/vneshniy-schityvatel-k2.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/komplekt-upravleniya-liftom.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/komplekt-upravleniya-elektromagnitnym-zamkom.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/p8030.html',
        'https://orbitatech.ru/produkcziya/apartament-zamki/h15b.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/tthotel-e2.html',
        'https://orbitatech.ru/produkcziya/gostinichnyie-zamki-na-rf-ka/e4041.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/sezam24.html',
        'https://orbitatech.ru/produkcziya/elektronnye-zamki/orbita-e15.html',
        'https://orbitatech.ru/produkcziya/service-book/service-book-planshet.html',
    ];
    const itog = '';
    for (let postUrl of  postUrls) {
        // Откроем страницу
        try {
            await page.goto(postUrl);
            console.log('Открываю страницу: ',postUrl);
        } catch (error) {
            console.log(error);
            console.log('Не удалось открыть страницу: ',postUrl);
        }
        // Получим pathname
        let pagePathname = await page.evaluate(() => location.pathname);
        pagePathname = pagePathname.replace(/\//g, '-');
        console.log('Нашёл pathname:', pagePathname);

        // Получим заголовок статьи
        const titleSelector = 'h1';
        await page.waitForSelector(titleSelector);
        const pageTitle = await page.$eval(
            titleSelector, titleSelector => titleSelector.outerHTML
        );
        console.log('Нашёл заголовок статьи: ', pageTitle);
    }
    console.log('Нашёл контент: ', postUrls);
    // Всё сделано, закроем браузер
    await browser.close();
    process.exit()
    
})();

import fetch from 'node-fetch';
import { parse } from 'node-html-parser';
async function search(q){
    let res = await fetch(`https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=10&hl=ru&source=gcsc&gss=.com&cselibv=fd562c898514f252&cx=81ac8cba9f2904c46&q=${q}&safe=off&cse_tok=AB1-RNU0GBMdDNeJgDZaqnzawN_8:1662118181562&lr=&cr=&gl=&filter=0&sort=&as_oq=&as_sitesearch=&exp=csqr,cc&callback=google.search.cse.api19620`, {
        "headers": {
            "accept": "application/json",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "cross-site",
            "x-client-data": "CIq2yQEIpLbJAQjBtskBCKmdygEI0qDKAQiUocsBCLO8zAEI/7zMAQ==",
            "cookie": "NID=511=Xb4HCTlwhI4--jKzwRm08ksvC160yjysOesH4nc-N0U06A3uRHJq_a4Inc63fFTepiUdcGusi31cvxIxkYaBvhAc79t3Bf0ncm7WeO0T0X3zy7M9gNKwtVnUZwYEb3YvBIpAidwTzhyRkfW1ceq76yyY_56idVqxhqEp6mpIz-o; 1P_JAR=2022-09-02-11",
            "Referer": "https://muzati.net/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });
    res = (await res.text())
    res = res.replace('google.search.cse.api19620(','').replace(');','')
    res = eval('(' + res + ')');
    getSong(res.results[0].url)
}
async function getSong(url){
    let res =await fetch(url, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "cookie": "_ga=GA1.1.1650040531.1662065457; __gsas=ID=78837a337fda7c66:T=1662076572:S=ALNI_MZknRcUXRWddfiPUIarjuIVYr95MA; _ga_ZDJGVNSJCV=GS1.1.1662106950.4.1.1662107064.0.0.0; 2electrolifeld=xTvq7BFjYEnu2hFjTT2eRhFj"
        },
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET"
    });
    res = await res.text()
    let root = parse(res)
    root = root.querySelector('.track-itemss').childNodes[0].parentNode['_attrs']
    let link = root['data-track']
    //let img = root['data-img']
    //let title = root['data-title']
    //let artist = root['data-artist']
    console.log(link)


}
export default {parse,fetch,search,getSong}
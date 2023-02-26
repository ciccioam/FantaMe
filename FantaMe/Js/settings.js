//SETTINGS
var Settings = {
    appVer: __.g('sd').jsVer,
	apiVer: 'v1',
    apiBaseUrl: __.g('sd').webBaseUrl,
    appKey: __.g('sd').authAppKey,
	localStorageId: 'fantagazzetta',  
    
    baseUrl: __.g('sd').webBaseUrl,
    //imageBaseUrl: __.g('sd').webBaseUrl + 'img/',
    imageBaseUrl: __.g('sd').imgBaseUrl,
    remoteImageBaseUrl: __.g('sd').imgBaseUrl,
	htmlFolder: 'html/',

	//facebook
	fbConfig: {
	    appId: '276105532435709',  //facebook app ufficiale (produzione)
	    //appId: '1988010471510983',  //facebook app test
	    //appId: '834966063216317', // facebook app test
	    //appId: '304375639597747', // fb app: 'FGprova'
	    //appId: __.g('sd').fbid,
		cookie: true,  	// enable cookies to allow the server to access 
		xfbml: true,  	// parse social plugins on this page
		version: 'v2.8'
	},
	fbScope: 'public_profile,email',


    missingImageSrc: '',
    missingLogoSrc: __.g('sd').imgBaseUrl+'no_logo.png',
    missingCrestSrc: __.g('sd').imgBaseUrl+'no_logo.png',
    missingShirtSrc: __.g('sd').imgBaseUrl+'no_shirt.png',
    //missingCampioncinoSrc: 'campioncini/default.png',
    missingCampioncinoSrc: 'no_campioncino.png',


    playerCardsBaseUrl: __.g('sd').playerCardsBaseUrl, //ed: https://content.fantagazzetta.com/web/campioncini/card/MIRANTE.jpg
    playerCampioncinoBaseUrl: __.g('sd').playerCampioncinoBaseUrl,//'https://doh3bfkx6r7ti.cloudfront.net/web/campioncini/small/' 
    shirtsBaseUrl: __.g('sd').shirtsBaseUrl,
    crestsBaseUrl: __.g('sd').crestsBaseUrl,
    logosBaseUrl: __.g('sd').logosBaseUrl,
    serieACrestsBaseUrl: "https://content.fantagazzetta.com/web/img/team/ico/",
    fantagazzettaBaseUrl: "https://www.fantagazzetta.com/",

	last:''
}



//Questa funzione gestisce le immagini non trovate (scudetti, maglie) e deve essere
//inizializzata prima che l'html venga scritto nel DOM
function handleImageError(target, defaultSrc) {
    /*
    if (!target.currentSrc) {
        target.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
        return;
    }
    */
    /*
    target.classList.add('img-error');
    target.setAttribute('data-error-src', target.src);
    //target.src = Settings.imageBaseUrl + (defaultSrc || Settings.missingImageSrc);
    target.src = defaultSrc || Settings.missingImageSrc;
    target.onerror = "";
    */
}

//Questa funzione gestisce il caricamento delle immagini
function handleImageLoad (target) {
    target.classList.add('img-loaded');
}

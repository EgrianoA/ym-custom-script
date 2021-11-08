(function () {
    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
    var parentStyles = document.createElement('style');
    parentStyles.type = 'text/css';
    var parentCssStyles = '#ymDivCircle { bottom: 100px !important; } #ym-notification { bottom: 183px !important; }';
    if (parentStyles.styleSheet) {
        console.log("A")
        parentStyles.styleSheet.cssText = parentCssStyles;
    } else {
        console.log("B")
        parentStyles.appendChild(document.createTextNode(parentCssStyles));
        console.log(parentStyles)
    }
    console.log(parentStyles)
    parentCssHead.appendChild(parentStyles);
    console.log(parentCssHead)
})();

(function () {
    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
    var parentStyles = document.createElement('style');
    parentStyles.type = 'text/css';
//     var parentCssStyles = '#ymDivCircle { bottom: 100px !important; right: 30px !important; } #ymDivCircle.open { bottom: 20px !important; } #ym-notification { bottom: 183px !important; } #ymFrameHolder { right: 10px !important; }';
    var parentCssStyles = '#ymDivCircle { bottom: 70px !important; right: 10px !important; } #ymDivCircle.open { bottom: 20px !important; } #ym-notification { bottom: 183px !important; } #ymFrameHolder { right: 10px !important; }';
    if (parentStyles.styleSheet) {
        parentStyles.styleSheet.cssText = parentCssStyles;
    } else {
        parentStyles.appendChild(document.createTextNode(parentCssStyles));
    }
    parentCssHead.appendChild(parentStyles);
})();

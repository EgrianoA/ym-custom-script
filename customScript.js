(function injectJS() {
    try {
        var parentCssHead = document.head || document.getElementsByTagName('head')[0]; var parentStyles = document.createElement('style'); parentStyles.type = 'text/css';
        var parentCssStyles = '@media only screen and (max-width: 768px) { #ymDivCircle { bottom: 75px !important; } @media only screen and (min-width: 768px) { #ymDivCircle { bottom: 50vh !important; } }'; if (parentStyles.styleSheet) { parentStyles.styleSheet.cssText = parentCssStyles; } else { parentStyles.appendChild(document.createTextNode(parentCssStyles)); } parentCssHead.appendChild(parentStyles);
    } catch (e) { console.error("failed while inserting to iFrame", e); }
})();

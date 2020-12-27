function change() {
    if (document.getElementsByTagName('link')[0].href.indexOf('style.css') != -1) {
        document.getElementsByTagName('link')[0].href = 'style1.css';
    }
    else {
        document.getElementsByTagName('link')[0].href = 'style.css';
    }
};

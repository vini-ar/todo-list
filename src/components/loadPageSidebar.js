export function loadPageSideBar(destinatioPath, currPath) {
    if (!destinatioPath) {
        return console.error('You must add valid url')
    }
    if (!currPath) {
        return console.error('You must add valid pathname')
    }

    if (destinatioPath !== currPath) {
        window.location.pathname = destinatioPath;
    }

}
export function elementFactory(htmlElement='', text='', attributes={}) {
    const el = document.createElement(htmlElement)
    el.textContent = text
    for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, value)
    }

    return el
}
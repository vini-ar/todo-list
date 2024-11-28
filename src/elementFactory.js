export class ElementFactory {

    #element;
    #attributes;
    #text;


    constructor(element, attributes = {}, text = "") {
        this.#element = element
        this.#attributes = attributes
        this.#text = text
    }

    get text() {
        return this.#text
    }

    get attributes() {
        return this.#attributes 
    }

    get element() {
        return this.#element
    }

    create() {
        const htmlElement = document.createElement(this.element)

        Object.entries(this.attributes).forEach(([key,value]) => {
            htmlElement.setAttribute(key, value)
        })
        
        htmlElement.textContent = this.text;

        return htmlElement;
    }

    static createElement(element = "", attributtes = {}, text = "") {
        return new ElementFactory(element, attributtes, text).create()
    }

    static div(attributtes = {}, text = "") {
        return ElementFactory.createElement("div", attributtes, text)
    }
    static label(attributes = {}, text = "") {
        return ElementFactory.createElement("label", attributes, text)
    }
    static input(attributes = {}, text = "") {
        return ElementFactory.createElement("input", attributes, text)
    }
    static span(attributes = {}, text = "") {
        return ElementFactory.createElement("span", attributes, text)
    }

}
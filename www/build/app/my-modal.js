/*! Built with http://stenciljs.com */
const { h } = window.App;

class MyModal {
    constructor() {
        this.buttons = ['Cancel'];
        this.showOptions = false;
        this.closeModalHandler = () => {
            this.modalEl.style.display = 'none';
            this.showOptions = false;
        };
        this.showOptionsHandler = () => {
            this.showOptions = true;
        };
    }
    open() {
        this.modalEl.style.display = 'block';
    }
    render() {
        let options = null;
        if (this.showOptions) {
            options = (this.buttons.map(btn => (h("button", { onClick: this.closeModalHandler }, btn))));
        }
        return (h("div", null,
            h("h1", null, this.title),
            h("p", null, this.content),
            h("hr", null),
            h("button", { onClick: this.showOptionsHandler }, "Show options"),
            h("hr", null),
            options));
    }
    static get is() { return "my-modal"; }
    static get properties() { return { "content": { "type": String, "attr": "content" }, "modalEl": { "elementRef": true }, "open": { "method": true }, "showOptions": { "state": true }, "title": { "type": String, "attr": "title" } }; }
    static get style() { return "my-modal {\n    font-family: Arial, Helvetica, sans-serif;\n    border: 1px solid #ccc;\n    -webkit-box-shadow: 1px 1px 1px #ccc;\n    box-shadow: 1px 1px 1px #ccc;\n    background-color: white;\n    position: fixed;\n    top: 30%;\n    width: 350px;\n    left: calc(50% - 175px);\n    z-index: 1000;\n    display: none;\n    padding: 20px;\n}\n\nbutton{\n  background-color: grey;\n  color: white;\n  border: none;\n  outline: none;\n  font: inherit;\n}"; }
}

export { MyModal };

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome User!! </h1>
            <h2>
                This is the Dashboard. Basically the home page of the website. 
            </h2>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}
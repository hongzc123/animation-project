import sizeDirect from "./sizeDirect";

const directives = [sizeDirect]

export default (app) => {
    directives.forEach((directive) => {
        app.directive(directive.name, directive)
    })
}
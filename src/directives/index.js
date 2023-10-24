import sizeDirect from "./sizeDirect";
import slideDirect from "./slideDirect";

const directives = [sizeDirect, slideDirect]

export default (app) => {
    directives.forEach((directive) => {
        app.directive(directive.name, directive)
    })
}
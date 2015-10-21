/**
 *  this javascript library is for people to actully
 *  understand that how to manipulat the DOM in the javascript,
 *  and how to find the short way when we deal with the DOM
 */


var Manipulator = function(argument) {

    this.IsUnDefined = function(v) {
        return typeof v === 'undefined';
    }

    /* ======>
     * Search Element
     * In the Section,All the function return either DOM or array-like DOMs.
     */

    /**
     * This function need at least one argument
     * if provided two, then simple search in the ele,otherwise,
     * try search the 'id' in the global document object
     * @param  {DOM}
     * @param  {string}
     * @return {DOM}
     */
    this.id = function(ele, id) {
        if (this.IsUnDefined(id)) {
            return document.getDocumentById(id)
        } else {
            return ele.getDocumentById(id)
        }
    }
    this.one = function(ele, query) {
        return ele.querySelector(query);
    }
    this.parent = function(ele, query) {
        return ele.parentNode;
    }

    this.val = function(ele) {

            return ele.value || ele.innerText;
        }
        //set or remove attribute
    this.attr = function(ele, attr, value) {
        if (this.IsUnDefined(value)) {
            ele.removeAttribute(attr)
        } else {
            ele.setAttribute(attr, value)
        }
    }

    this.decodeBase64 = function(base64) {
        return
    }
}

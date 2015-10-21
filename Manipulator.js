/**
 *  this javascript library is for people to actually
 *  understand that how to manipulat the DOM in the javascript,
 *  and how to find the short way when we deal with the DOM
 */


var Manipulator = function(argument) {

    this.IsUnDefined = function(v) {
        return typeof v === 'undefined';
    }

    /* ======>
     * Search Element
     * In the follow Section,All the function return either DOM or array-like DOMs.
     */

    /**
     * This function need at least one argument
     * if provided two, then simple search in the ele,otherwise,
     * try search the 'id' in the global document object
     * @param  {DOM} ele: the DOM element for query 
     * @param  {string} id:the id of the target element
     * @return {DOM}
     */
    this.id = function(ele, id) {
        if (this.IsUnDefined(id)) {
            return document.getElementById(ele)
        } else {
            return ele.document.getElementById(id)
        }
    }

    /**
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    this.one = function(ele, query) {
        return ele.querySelector(query);
    }

    /**
     * get the element's parent node
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    this.parent = function(ele, query) {
        return ele.parentNode;
    }

    /**
     *  get value of the element
     *  if the element is the type for input text,get the 'value' attribute
     *  or get the 'innerText'
     *  
     * @param  {[type]}
     * @return {[type]}
     */
    this.val = function(ele) {

        return ele.value || ele.innerText;
    }

    /**
     * set or get the attribute from the element.
     * @param  {[type]}
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    this.attr = function(ele, attr, value) {
        if (this.IsUnDefined(value)) {
            ele.removeAttribute(attr)
        } else {
            ele.setAttribute(attr, value)
        }
    }

    /** decode the base64 string to normal string
     * @param  {[type]}
     * @return {[type]}
     */
    this.decodeBase64 = function(base64) {
        return atob(base64)
    }

    /*
    <!-- beforebegin -->
    <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
    </p>
    <!-- afterend -->
     */

    this.afterbegin = function(ele, html) {
        ele.insertAdjacentHTML('afterbegin', html)
    }

    /**
     * insert html after the element.
     * @param  {[type]}
     * @param  {[type]}
     * @return {[type]}
     */
    this.afterend = function(ele, html) {
        ele.insertAdjacentHTML('afterend', html)
    }
    this.beforebegin = function(ele, html) {
        ele.insertAdjacentHTML('beforebegin', html)
    }

    this.beforeend = function(ele, html) {
        ele.insertAdjacentHTML('beforeend', html)
    }

}

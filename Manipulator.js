/**
 *  this javascript library is for people to actually
 *  understand that how to manipulate the DOM in the javaScript,
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
        if (this.IsUnDefined(query)) {
            query = ele
            ele = document
        };
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

    this.scrollIntoView = function(ele) {
        if (ele.scrollIntoView) {
            ele.scrollIntoView(true)
        };
    }

    /**
     * this function is for scroll the element 
     * to the visible view by y-coordinate

     * @param  {[type]} ele       [description]
     * @param  {[type]} container the most top element which have set the overflow or the body
     * @return {[type]}           [description]
     */
    this.scrollView = function(ele, container) {
        //if not set the container,
        //then use the document.body
        container = container || document.body
        var y = ele.offsetTop;
        var node = ele;
        // the loop for calculate the element position on the Y-axis
        while (node.offsetParent && node.offsetParent != container) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        // the gutter is a makeshift to make sure dont scroll too far
        var gutter = ele.clientHeight + 60;
        // do the scroll
        container.scrollTop = y - gutter;
    }

    /*
    The Element.clientHeight read-only property 
    is zero for elements with no CSS or inline 
    layout boxes, otherwise it's the inner height
    of an element in pixels, including padding 
    but not the horizontal scrollbar height, border, or margin.

    clientHeight can be calculated as CSS height
     + CSS padding - height of horizontal scrollbar (if present).
     */
    this.h = function() {

    }
}

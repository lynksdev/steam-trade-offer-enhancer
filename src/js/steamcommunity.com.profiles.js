// @include /^https?:\/\/steamcommunity\.com\/(?:id|profiles)\/[^\/]+(\/$|\?|$)/
function main({ addAttributesToHoverItems }) {
    const itemsList = document.getElementsByClassName('item_showcase_item');
    
    // add attributes to images - so easy!
    addAttributesToHoverItems(itemsList);
}
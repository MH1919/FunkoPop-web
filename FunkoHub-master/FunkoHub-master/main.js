const productContainers = [...document.querySelectorAll('.product-container')];//querySelector controls the 
                                                                               //class product-container
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();//Return the size of an element 
                                                           //and its position relative to the viewport.(store the coordinates
                                                                                                        //of the item)
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {//function that execute a code on click of a button
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
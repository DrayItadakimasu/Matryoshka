import Masonry from 'masonry-layout';
const CONTAINER = 1030;
const GRID = new Masonry('.info-box-grid',{
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
    gutter: 30
})


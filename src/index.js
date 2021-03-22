import Masonry from 'masonry-layout';
import Axios from 'axios';

class App {
    constructor({app,container,API_URL}) {
        this.container = container;
        this.app = app;
        this.API_URL = API_URL;
    }
    get ContainerOffset(){
        return this.container.offsetLeft;
    }
    CreateContainerOffset(block){
        const _block = document.querySelector(block);
        if(!_block) return;
        _block.style.left = this.ContainerOffset + 'px';
    }
    Callback(form = '#callback-form') {
        let _form = document.querySelector(form);
        if (!_form) return;
        const Validate = () => {
            let valid = true;
            if(_form.name.value.trim() === '') valid = false;
            if (_form.contact.value.trim() === '') valid = false;
            return valid;
        }
        const Send = (e) => {
            e.preventDefault();
            if(Validate()){
                Axios.post(`${this.API_URL}`,new FormData(_form))
                    .then(({data})=>{
                        Clear();
                    })
            }else{

                Clear();
            }
        }
        const Clear = () => {
            for (let item in _form){
                _form[item].value = '';
            }
        }
        _form.onsubmit = Send;
    }
    MasonryBlock(){
        return new Masonry('.info-box-grid', {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            gutter: 30
        })
    }
    init(){
        this.MasonryBlock();
        this.Callback();
        this.CreateContainerOffset('#big-slot .text')
    }
}
new App({
    app: document.querySelector('#app'),
    container: document.querySelector('.container'),
    API_URL: ""
}).init();
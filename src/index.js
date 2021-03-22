import Masonry from 'masonry-layout';
import Axios from 'axios';
const GRID = new Masonry('.info-box-grid', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
    gutter: 30
})
Callback()
function Callback(form = '#callback-form') {
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
            Axios.post('',new FormData(_form))
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

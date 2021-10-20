import './style/app.scss';
import 'bootstrap';
import './style/pages/carousel'

function onPageLoad() {
    require('./js/app');
}

if (document.body) onPageLoad();
else document.addEventListener('DOMContentLoaded', onPageLoad);






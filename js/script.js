const btn = document.querySelector('.btn-nav');
		const holder = document.body;

		btn.addEventListener('click', (e)=>{
			e.preventDefault();
			holder.classList.toggle('nav-active');
		})



 submit.onclick=function() {
    alert( 'Achtung! Please try again later.' );
  };
var filter_select_el = document.getElementById('filter-list');
var items_el = document.getElementById('portfolio');

filter_select_el.onchange = function() {
	console.log(this.value);
  var items = items_el.getElementsByClassName('portfolio-item');
  for (var i=0; i<items.length; i++) {
  	if (items[i].classList.contains(this.value)) {
    	items[i].style.display = 'block';
    } else {
    	items[i].style.display = 'none';
    }
  }
};
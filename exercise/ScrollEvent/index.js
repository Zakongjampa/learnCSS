let terms = document.querySelector('.terms');
let button = document.querySelector('.terms button');

terms.children[0] .addEventListener('scroll', (e)=>{
   let isBottom = e.target.scrollTop == e.target.scrollTopMax;

   if(isBottom){
      button.style.visibility = "visible";
   }else{
      button.style.visibility = "hidden";
   }
})

let observer = new IntersectionObserver();
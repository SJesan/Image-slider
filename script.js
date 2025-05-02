const wrapper = document.querySelector('.slider-wrapper');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
let count = 0;
const total = wrapper.children.length;

next.addEventListener("click", ()=>{
  count++;
  if(count > total-1) {count=0};
  wrapper.style.transform = `translateX(-${700 * count}px)`;
  console.log(total);
  
});

previous.addEventListener("click", ()=>{
  count--;
  if(count < 0){count = total - 1};
  wrapper.style.transform = `translateX(-${700 * count}px)`;
  console.log(count);
  
})
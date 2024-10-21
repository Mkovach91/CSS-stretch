const foodItems = document.querySelectorAll(`.food`)

foodItems.forEach ((item) => {
  item.addEventListener('click', (event) => {
    const clickedItem = event.target;

    const deliveredlist = document.querySelector(`#delivered`)


    deliveredlist.appendChild(clickedItem);
  });
});
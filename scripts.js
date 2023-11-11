window.addEventListener("DOMContentLoaded", () => {
  const inputsColor = document.querySelectorAll('input[name=product_color]');
  const formColorLabel = document.getElementById('productColorValue');
  inputsColor.forEach((input) => {
    input.addEventListener('change', (e) => {
      formColorLabel.innerText = e.target.dataset.nameDisplay;
    });
  });

  const inputsQuantity = document.querySelectorAll('.input-quantity');
  inputsQuantity.forEach((input) => {
    const inputField = input.querySelector('.input-quantity__field');
    const inputBtnIncrease = input.querySelector('.input-quantity__btn[data-action=increase]');
    const inputBtnDecrease = input.querySelector('.input-quantity__btn[data-action=decrease]');
    inputBtnIncrease.addEventListener('click', () => {
      const initialValue = inputField.value * 1;
      inputField.value = initialValue + 1; 
    });
    inputBtnDecrease.addEventListener('click', () => {
      const initialValue = inputField.value * 1;
      if (initialValue > 1) inputField.value = initialValue - 1;
    });    
  });

  const accordions = document.querySelectorAll('.accordion__item');
  accordions.forEach((accordion) => {
    const accordionTitle = accordion.querySelector('.accordion__item-title');
    accordionTitle.addEventListener('click', () => {
      accordion.classList.toggle('accordion__item_active');
      const title = accordion.querySelector('.accordion__item-title');
      const body = accordion.querySelector('.accordion__item-body');
      if (accordion.classList.contains('accordion__item_active')) {
        title.setAttribute('aria-expanded', 'true');
        body.removeAttribute('aria-hidden');
      } else {
        title.setAttribute('aria-expanded', 'false');
        body.setAttribute('aria-hidden', 'true');
      }
    });    
  });

  const modalTarget = document.querySelectorAll('.modal-target');
  modalTarget.forEach((modalTarget)=> {
    modalTarget.addEventListener('click', ()=>{
      const modalWindow = document.querySelector('.modal');
      modalWindow.showModal();
    });
  });

  const modalCloseButton = document.querySelectorAll('.modal-close-button');
  modalCloseButton.forEach((modalCloseButton)=> {
    modalCloseButton.addEventListener('click', (e) => {
      const modalWindow = e.target.closest('.modal');
      modalWindow.close();
    });
  });
})
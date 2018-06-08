let openBtn = document.getElementById('open-btn'),
  nameDiv = document.getElementsByClassName('name')[0],
  nameValue = document.getElementsByClassName('name-value')[0],
  budgetDiv = document.getElementsByClassName('budget')[0],
  budgetValue = document.getElementsByClassName('budget-value')[0],
  goodsDiv = document.getElementsByClassName('goods')[0],
  goodsValue = document.getElementsByClassName('goods-value')[0],
  itemsDiv = document.getElementsByClassName('items')[0],
  itemsValue = document.getElementsByClassName('items-value')[0],
  employersDiv = document.getElementsByClassName('employers')[0],
  employersValue = document.getElementsByClassName('employers-value')[0],
  discountDiv = document.getElementsByClassName('discount')[0],
  discountValue = document.getElementsByClassName('discount-value')[0],
  isopenDiv = document.getElementsByClassName('isopen')[0],
  isopenValue = document.getElementsByClassName('isopen-value')[0],
  goodsItem = document.getElementsByClassName('goods-item'),
  goodsItemBtn01 = document.getElementsByTagName('button')[1],
  goodsItemBtn02 = document.getElementsByTagName('button')[2],
  goodsItemBtn03 = document.getElementsByTagName('button')[3],
  chooseItem = document.querySelector('.choose-item'),
  timeValue = document.querySelector('.time-value'),
  countBudgetValue = document.querySelector('.count-budget-value'),
  hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
  discountУes = document.getElementById('discount-yes'),
  discountNo = document.getElementById('discount-no'),
  yourBudget,
  nameYourStore;

let mainList = {
  budget: yourBudget,
  nameStore: nameYourStore,
  shopGoods: [],
  employers: {},
  open: false,
  discount: true,
  shopItems: [],
  chooseGoods: {},
  getDiscount: true,
  getEmployers: {},
  chooseShopItems: {}
}

function openStore() {
  if (mainList.open == false) {
    isopenValue.textContent = 'Магазин закрыт. Чтобы открыть нажать кнопку вверху';
    goodsItemBtn01.disabled = true;
    goodsItemBtn02.disabled = true;
    goodsItemBtn03.disabled = true;
  } else {
    goodsItemBtn01.disabled = false;
    goodsItemBtn02.disabled = false;
    goodsItemBtn03.disabled = false;
    isopenValue.textContent = 'Добро пожаловать';
  }
}

openStore();

//чел вводит но цифры стираются
countBudgetValue.addEventListener('keyup', () => {
  countBudgetValue.value = '';
});

//кнопка открыть магазин
openBtn.addEventListener('click', () => {
  mainList.open = true;
  openStore();
  yourBudget = prompt('Ваш бюджет на месяц?', '');
  while (isNaN(yourBudget) || yourBudget == '' || yourBudget == null) {
    yourBudget = prompt('Ваш бюджет на месяц?', '');
  }
  nameValue.textContent = prompt('Название вашего магазина?', '').toUpperCase();
  budgetValue.textContent = yourBudget;
  mainList.budget = yourBudget;
});

//вводим категории товаров
goodsItemBtn01.addEventListener('click', () => {
  for (let i = 0; i < goodsItem.length; i++) {
    let a = goodsItem[i].value;
    if ((typeof (a)) === 'string' && (typeof (a)) !== null && a.length < 50) {
      mainList.shopGoods[i] = a;
      goodsValue.textContent = mainList.shopGoods;
    }
  }
});

//вводим сами товары
/*chooseItem.addEventListener('change', ()=> {
  itemsValue.textContent = chooseItem.value + ' ';
});*/

// сделал по событию keyup - чтобы сразу видеть 
chooseItem.addEventListener('keyup', () => {
  let items = chooseItem.value;
  mainList.shopItems = items.split(',');
  mainList.shopItems.sort();
  itemsValue.textContent = mainList.shopItems;
});

//событие открыт магазин или нет
timeValue.addEventListener('change', () => {
  let time = timeValue.value;
  if (time < 0) {
    mainList.open = false;
      } else if (time > 8 && time < 20) {
        mainList.open = true;
          } else  (time < 24) {
            mainList.open = false;
  }; 

  if (mainList.open == true) {
    isopenDiv.textContent = 'Магазин работает';
    isopenValue.style.backgroundColor = 'green';
  } else {
    isopenDiv.textContent = 'Магазин закрыт';
    isopenValue.style.backgroundColor = 'red';
  }
});

//расчет бюджета
goodsItemBtn02.addEventListener('click', () => {
  countBudgetValue.value = mainList.budget / 30;
});

//найм сотрудников
goodsItemBtn03.addEventListener('click', () => {
  for (let i = 0; i < hireEmployersItem.length; i++) {
    let name = hireEmployersItem[i].value;
    mainList.employers[i] = name;
    employersValue.textContent += mainList.employers[i] + ', ';
  }
});

//скидочная система
function getDiscount() {
  let a;
  if (discountУes.checked) {
    a = true;
  } else {
    a = false;
  }
  if (a) {
    discountValue.style.backgroundColor = 'yellow';
    discountValue.textContent = 'Действует скидочная система';
    mainList.discount = true;
  } else {
    discountValue.style.backgroundColor = 'red';
    discountValue.textContent = 'Скидок нет';
    mainList.discount = false;
  }
}

//тут 2 вызова но наверное нужно использовать this ?
discountУes.addEventListener('click', () => {
  getDiscount();
});

discountNo.addEventListener('click', () => {
  getDiscount();
});



console.log(mainList);

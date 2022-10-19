
const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => { // обов'язково передаєм event параметром
    event.preventDefault(); //недаємо перезавантажити сторінку
    const {elements: { email, password }} = event.currentTarget; //отримуємо значення полів форми
    if (email.value === "" || password.value === "") { //перевіряємо чи є пусті поля
      alert("Всі поля повинні бути заповнені!");
    } else {
    console.log({ "email": email.value, "password": password.value });//виводимо об'єкт в консоль
      form.reset();//скидаємо форму
    }
  });
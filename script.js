const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});
/*btn.addEventListener("click", ...) btn elemanına bir tıklama olayı dinleyicisi ekler. Buton     tıklandığında, belirtilen fonksiyon çalıştırılır.
 element.classList.toggle(className); toggle yöntemi, bir HTML elemanının classListinde istenen class varsa kaldırır,yoksa ekler.className genellikle CSS ile tanımlanır.Bu, özellikle kullanıcı etkileşimleri ile sınıfların varlığını değiştirmek için yaygın olarak kullanılır ve JavaScript ile CSS arasında etkileşim kurmanın temel bir yöntemidir.*/

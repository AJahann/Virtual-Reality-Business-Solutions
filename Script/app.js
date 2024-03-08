const menuIcon = document.querySelector('.navBar-icon');
const menu = document.querySelector('.navBar-md')
let menuFlag = 0

menuIcon.addEventListener('click', (event) => {
  if (!menuFlag) {
    menu.style.margin ='0'
    menuIcon.innerHTML = '<svg width="64px" height="64px" viewBox="-4.8 -4.8 33.60 33.60" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 4L20 20M20 4L4 20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
    menuFlag = 1
  }else{
    menu.style.marginLeft ='-18rem'
    menuIcon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'
    menuFlag = 0
  }
});

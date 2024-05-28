'use strict'
const myInfor = document.querySelector('.myinfor');
const formInput =document.querySelector('.form-input');
const intputEmail = document.querySelector('.input-email');
const btnSubmit = document.querySelector('.btn-submit');

const openInfor = function()
{
    myInfor.classList.remove('hidden');
}
const closeInfor = function()
{
    myInfor.classList.add('hidden');
}
const closeForm =function()
{
    formInput.classList.add('hidden');
}
const displaybtnviewmore =function()
{
    for(let i = 0; i<btnViewmores.length; i++)
    {
        btnViewmores[i].classList.add('hidden');
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var jobItems = document.querySelectorAll('.job-infor-item');
    
    jobItems.forEach(function (item) {
    var content = item.querySelector('.content');
    var viewMoreBtn = item.querySelector('.view-more');
    var viewLessBtn = item.querySelector('.view-less');
    
    viewMoreBtn.addEventListener('click', function () {
    content.style.display = 'block';
    viewMoreBtn.style.display = 'none';
    viewLessBtn.style.display = 'block';
    });
    
    viewLessBtn.addEventListener('click', function () {
    content.style.display = 'none';
    viewMoreBtn.style.display = 'none';
    viewLessBtn.style.display = 'none';
    });
    });
    });



//kiem tra email đầu vào
btnSubmit.addEventListener("click", function() {
    let checkEmail = intputEmail.value;

    if (!checkEmail) {
        alert("Nhập vào email!");
    } else {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(checkEmail)) {
            openInfor();
            closeForm();
        } else {
            alert("Sai địa chỉ email!");
            closeInfor();
        }
    }
});



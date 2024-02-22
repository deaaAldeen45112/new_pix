

import * as common from "../../common/common.js";
import { makeToast } from "./toast.js";

import * as en from "../../common/env.js";

import { PaymentService } from "../../service/PaymentService.js";
import { Payment } from "../../model/payment.js";


let tbodyPayment = document.getElementById("tbody_payment");
let listPagenationPayment = document.getElementById('list-pagination-payment')

let buttonCreate = document.getElementById("button_create");








let spinnerUserTable = document.getElementById('spinner-user-table');


let paymentIdNow = 0;

let planCategoryIdNow = 0;

let pageNumber = 1;
let pageSize = 5;


document.addEventListener(
    "DOMContentLoaded",
    async () => {




        let res = await PaymentService.getPagenation(pageNumber, pageSize);
        console.log(res);
        fillTable(res.data, tbodyPayment);
        fillPageCom(res.totalPages, listPagenationPayment, res.currentPage);
        addEventListenersByClassName('btn-table-payment-delete', function () { paymentIdNow = this.id; })
        addEventListenersByClassName('btn-table-payment-update', assignUpdateInputs)
        addEventListenersByClassName('button-page-payment', changePageForTable)

    },
    false
);

function addEventListenersByClassName(classname, fun) {

    var element = document.getElementsByClassName(classname);
    for (var i = 0; i < element.length; i++) {

        element[i].addEventListener("click", fun, false);
    }
}





function fillDropDown(res, selectInput, generateOptionHTML) {
    let optionsParentElement = "";
    console.log("fill");

    optionsParentElement = `<option selected value=0>Choose...</option>`;


    res.forEach((element) => {
        optionsParentElement += generateOptionHTML(element);
    });
    console.log(optionsParentElement);
    selectInput.innerHTML = optionsParentElement;
    // selectCreateParent.innerHTML = optionsParentElement;
}


function generateOptionHTMLForCategory(element) {
    return `<option value=${element.categoryId}>${element.categoryName}</option>`;
}

function generateOptionHTMLForQuestionType(element) {
    return `<option value=${element.questionTypeId}>${element.typeName}</option>`;
}

function generateOptionHTMLForQuestionYear(element) {
    return `<option value=${element}>${element}</option>`;
}
function generateOptionHTMLForPlanName(element) {
    return `<option value=${element.planId}>${element.planName}</option>`;
}


//create 

let inputPaymentNameModalCreate = document.getElementById('input-payment-name-modal-create');
let inputPaymentNumberModalCreate = document.getElementById('input-payment-number-modal-create');


let selectPaymentTypeModalCreate = document.getElementById('select-payment-type-modal-create');


let buttonModalPaymentCreate = document.getElementById('button-modal-payment-create');

buttonCreate.addEventListener('click', async () => {

});



buttonModalPaymentCreate.addEventListener('click', async () => {
    let payment = new Payment();
    payment.name = inputPaymentNameModalCreate.value;
    payment.number = inputPaymentNumberModalCreate.value;
    payment.type = selectPaymentTypeModalCreate.value;

    let effect = await PaymentService.create(payment.toJSON());
    if (effect) {
        makeToast('bg-success');
        let res = await PaymentService.getPagenation(pageNumber, pageSize);
        fillTable(res.data, tbodyPayment);
        fillPageCom(res.totalPages, listPagenationPayment, res.currentPage);
        addEventListenersByClassName('btn-table-payment-delete', function () { paymentIdNow = this.id; })
        addEventListenersByClassName('btn-table-payment-update', assignUpdateInputs)
        addEventListenersByClassName('button-page-payment', changePageForTable)
    }

})



// delete
let buttonModalPaymentDelete = document.getElementById('button-modal-payment-delete');

buttonModalPaymentDelete.addEventListener('click', async () => {

    let effect = await PaymentService.delete(paymentIdNow);
    if (effect) {
        makeToast('bg-success');
        let res = await PaymentService.getPagenation(pageNumber, pageSize);
        fillTable(res.data, tbodyPayment);
        fillPageCom(res.totalPages, listPagenationPayment, res.currentPage);
        addEventListenersByClassName('btn-table-payment-delete', function () { paymentIdNow = this.id; })
        addEventListenersByClassName('btn-table-payment-update', assignUpdateInputs)
        addEventListenersByClassName('button-page-payment', changePageForTable)

    }
})



//     //update




let inputPaymentNameModalUpdate= document.getElementById('input-payment-name-modal-update');
let inputPaymentNumberModalUpdate = document.getElementById('input-payment-number-modal-update');


let selectPaymentTypeModalUpdate = document.getElementById('select-payment-type-modal-update');


let buttonModalPaymentUpdate = document.getElementById('button-modal-payment-update');




buttonModalPaymentUpdate.addEventListener('click', async () => {
    let payment = new Payment();
    payment.paymentId = paymentIdNow;
    payment.number = inputPaymentNumberModalUpdate.value;
    payment.name = inputPaymentNameModalUpdate.value;
    payment.type=selectPaymentTypeModalUpdate.value;

    let effect = await PaymentService.update(payment.toJSON());
    if (effect) {
        makeToast('bg-success');
        let res = await PaymentService.getPagenation(pageNumber, pageSize);
        fillTable(res.data, tbodyPayment);
        fillPageCom(res.totalPages, listPagenationPayment, res.currentPage);
        addEventListenersByClassName('btn-table-payment-delete', function () { paymentIdNow = this.id; })
        addEventListenersByClassName('btn-table-payment-update', assignUpdateInputs)
        addEventListenersByClassName('button-page-payment', changePageForTable)
    }

})










function fillTable(data, tbody) {

    console.log("fill");
    let trAdd = "";
    let index = 1;
    data.forEach(item => {

        trAdd += `
          <tr><th scope=row>${index++}</th>
        
          <td >${item.name}</td>
          <td >${item.number}</td>
          <td >${item.type}</td>
          <td><button id=${item.paymentId} data-bs-toggle=\"modal\"  data-bs-target=\"#modal-payment-delete\"type=\"button\" class=\"btn btn-danger btn-table-payment-delete\">delete</button></td>
          <td><button id=${item.paymentId} type=\"button\" class=\"btn btn-info btn-table-payment-update\" data-bs-toggle=\"modal\" data-bs-target=\"#modal-payment-update\">update</button></td>
       
          `
    });

    tbody.innerHTML = trAdd;
}


function tableStructurePlanCategory(item, index) {

    return `
  <tr><th scope=row>${index}</th>
  <td>${item.category.categoryName}</td>
  <td>${item.questionTypeNavigation.typeName}</td>
  <td>${item.year}</td>
  <td><button id=${item.planCategoryId}  data-bs-dismiss="modal" data-bs-toggle=\"modal\"  data-bs-target=\"#modal-planCategory-delete\"type=\"button\" class=\"btn btn-danger btn-table-planCategory-delete\">delete</button></td>
   `
}


function fillTableGeneral(data, tbody, tableStructure) {

    console.log("fill");
    let trAdd = "";
    let index = 1;
    data.forEach(item => {


        trAdd += tableStructure(item, index++);
    });

    tbody.innerHTML = trAdd;
}




function fillPageCom(totalPages, listPagenationElement, pageNumber) {

    let trAdd = `  <li class="page-item first">
      <a class="page-link" href="javascript:void(0);"
        ><i class="tf-icon bx bx-chevrons-left"></i
      ></a>
    </li>
    <li class="page-item prev">
      <a class="page-link" href="javascript:void(0);"
        ><i class="tf-icon bx bx-chevron-left"></i
      ></a>
      </li>`;
    listPagenationElement.innerHTML = '';

    //   if(res.status=="success"){


    for (let index = 1; index <= totalPages; index++) {
        trAdd += `  <li class="page-item ${index == pageNumber ? 'active' : ''} ">
        <a class="page-link button-page-payment "  >${index}</a>
         </li>`;

    }


    trAdd += `<li class="page-item next">
        <a class="page-link" href="javascript:void(0);"
          ><i class="tf-icon bx bx-chevron-right"></i
        ></a>
      </li>
      <li class="page-item last">
        <a class="page-link" href="javascript:void(0);"
          ><i class="tf-icon bx bx-chevrons-right"></i
        ></a>
                </li>`;
    listPagenationElement.innerHTML = trAdd;



}

async function changePageForTable() {
    pageNumber = this.innerHTML;
    let res = await PaymentService.getPagenation( pageNumber, pageSize);
    fillTable(res.data, tbodyPayment);

    addEventListenersByClassName('btn-table-payment-delete', function () { paymentIdNow = this.id; })
    addEventListenersByClassName('btn-table-payment-update', assignUpdateInputs)
    addEventListenersByClassName('button-page-payment', changePageForTable)

    let childItems = document.getElementsByClassName('button-page-payment');

    Array.prototype.forEach.call(childItems, function (item) {
        item.parentNode.classList.remove('active');
    });
    this.parentNode.classList.add('active');

}







async function assignUpdateInputs() {

    paymentIdNow = this.id;
  

    let paymentById = await PaymentService.readById(this.id)
    inputPaymentNumberModalUpdate.value = paymentById.number;
    inputPaymentNameModalUpdate.value = paymentById.name;
    selectPaymentTypeModalUpdate.value = paymentById.type;





}











function toggleHidden(id) {
    var element = document.getElementById(id);

    // Check if the element is currently hidden
    if (element.hasAttribute("hidden")) {
        // If hidden, remove the hidden attribute to show the element
        element.removeAttribute("hidden");
    } else {
        // If not hidden, add the hidden attribute to hide the element
        element.setAttribute("hidden", "true");
    }
}





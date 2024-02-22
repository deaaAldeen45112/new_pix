const toastPlacementExample = document.querySelector('.toast-placement-ex');
let selectedType, selectedPlacement, toastPlacement;

// Dispose toast when open another
function toastDispose(toast) {
    if (toast && toast._element !== null) {
        if (toastPlacementExample) {
            toastPlacementExample.classList.remove(selectedType);
            DOMTokenList.prototype.remove.apply(toastPlacementExample.classList, selectedPlacement);
        }
        toast.dispose();
    }
}





export function makeToast(type) {

    if (toastPlacement) {
        toastDispose(toastPlacement);
    }
    selectedType = type; //document.querySelector('#selectTypeOpt').value;
    let s = "bottom-0 start-50 translate-middle-x";
    selectedPlacement = s.split(' ');
    toastPlacementExample.classList.add(selectedType);
    DOMTokenList.prototype.add.apply(toastPlacementExample.classList, selectedPlacement);
    toastPlacement = new bootstrap.Toast(toastPlacementExample);
    toastPlacement.show();
}
// let user={
//     name: fullNameInput.value,
//     password:passwordInput.value,
//     email:emailInput.value,
//     phone:phoneInput.value,
//     roleId:1

// };
// // user.name= fullNameInput.value;
// // user.password=passwordInput.value;
// // user.email=emailInput.value;
// // user.phone=phoneInput.value;
// // user.roleId=1;

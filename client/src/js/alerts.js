export const hideAlert = () => {
  // select .alert class and remove it
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};
// if type is success or error
export const showAlert = (type, message) => {
  hideAlert();
  const markup = `<div class=" alert alert--${type}">${message}</div>`;

  document.getElementById("form").insertAdjacentHTML("afterbegin", markup);

  //   hide the alert after 5sec
  window.setTimeout(hideAlert, 5000);
};

export const showPaymentAlert = (type, message) => {
  hideAlert();
  const markup = `<div class=" alert alert-payment alert--${type}">${message}</div>`;

  document.getElementById("payment").insertAdjacentHTML("afterbegin", markup);

  //   hide the alert after 5sec
  window.setTimeout(hideAlert, 5000);
};

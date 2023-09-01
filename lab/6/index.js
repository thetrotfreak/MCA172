const fullName = document.getElementById("fullName");
const emailAddress = document.getElementById("emailAddress");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dateOfBirth = document.getElementById("dateOfBirth");
const submit = document.getElementById("submit");

const fullNameRegExp = new RegExp("^[A-Za-z ]{3,}$");
const passwordRegExp = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$");
const emailAddressRegExp = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

const toggleSubmit = () => {
  if (submit.disabled) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};

const validateFullName = (event) => {
  fullName.classList.toggle(
    "is-valid",
    fullNameRegExp.test(event.target.value.trim())
  );
  fullName.classList.toggle(
    "is-invalid",
    !fullNameRegExp.test(event.target.value.trim())
  );
};

const validateEmailAddress = (event) => {
  emailAddress.classList.toggle(
    "is-valid",
    emailAddressRegExp.test(event.target.value.trim())
  );
  emailAddress.classList.toggle(
    "is-invalid",
    !emailAddressRegExp.test(event.target.value.trim())
  );
};

const validatePassword = (event) => {
  emailAddress.classList.toggle(
    "is-valid",
    emailAddressRegExp.test(event.target.value.trim())
  );
  emailAddress.classList.toggle(
    "is-invalid",
    !emailAddressRegExp.test(event.target.value.trim())
  );
};

const validateConfirmPassword = (event) => {
  confirmPassword.classList.toggle(
    "is-valid",
    event.target.value.trim() === password.value &&
      password.value.trim().length != 0
  );
  confirmPassword.classList.toggle(
    "is-invalid",
    !(
      event.target.value.trim() === password.value &&
      password.value.trim().length != 0
    )
  );
};

const validateDateOfBirth = (event) => {
  dateOfBirth.classList.toggle(
    "is-valid",
    new Date() - new Date(event.target.value) >= 18
  );
  dateOfBirth.classList.toggle(
    "is-invalid",
    new Date() - new Date(event.target.value) < 18
  );
};

fullName.addEventListener("input", validateFullName);
emailAddress.addEventListener("input", validateEmailAddress);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);
dateOfBirth.addEventListener("input", validateDateOfBirth);

const validate = () => {
  const form = document.getElementById("needs-validation");
  form.addEventListener("submit", (event) => {
    console.log(event);
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      form.classList.add("was-validated");
    }
  });
};

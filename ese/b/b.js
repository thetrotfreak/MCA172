const f_name = document.getElementById("name");
const f_email = document.getElementById("email");
const f_comment = document.getElementById("comment");

const nameRegExp = new RegExp("^[A-Za-z ]{3,}$");
const emailRegExp = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);
const commentRegExp = new RegExp("[A-Za-z ]+");

const validateName = (event) => {
  f_name.classList.toggle(
    "is-valid",
    nameRegExp.test(event.target.value.trim())
  );
  f_name.classList.toggle(
    "is-invalid",
    !nameRegExp.test(event.target.value.trim())
  );
};

const validateEmail = (event) => {
  f_email.classList.toggle(
    "is-valid",
    emailRegExp.test(event.target.value.trim())
  );
  f_email.classList.toggle(
    "is-invalid",
    !emailRegExp.test(event.target.value.trim())
  );
};

const validateComment = (event) => {
  f_comment.classList.toggle(
    "is-valid",
    commentRegExp.test(event.target.value.trim())
  );
  f_comment.classList.toggle(
    "is-invalid",
    !commentRegExp.test(event.target.value.trim())
  );
};

f_name.addEventListener("input", validateName);
f_email.addEventListener("input", validateEmail);
f_comment.addEventListener("input", validateComment);

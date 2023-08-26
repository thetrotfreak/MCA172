function filePicker() {
  const fp = document.getElementById("fp");
  const separator_at = fp.files[0].name.lastIndexOf(".");
  if (separator_at != -1) {
    alert(fp.files[0].name.slice(separator_at));
  }
}

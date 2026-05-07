function toggleKeyboard() {
  let kb = document.getElementById("keyboard");

  if (kb.style.display === "block") {
    kb.style.display = "none";
  } else {
    kb.style.display = "block";
  }
}
function showSection(id) {

  let sections =
    document.getElementsByClassName("kbSection");

  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  document.getElementById(id).style.display =
    "block";
}

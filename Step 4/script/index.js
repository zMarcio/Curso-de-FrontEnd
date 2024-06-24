function FODASE(checkbox) {
  var testing = document.getElementsByName("check_sim_nao");

  testing.forEach((e) => {
    if (e !== checkbox) e.checked = false;
  });
}

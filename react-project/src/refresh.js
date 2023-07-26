function add_admin() {
  let isloginstatus = localStorage.getItem("islogin");
  if (isloginstatus === null) {
    localStorage.setItem("islogin", false);
  } else {
    localStorage.setItem("islogin", localStorage.getItem("islogin"));
  }
  localStorage.setItem("admin-username", "admin@admin.com");
  localStorage.setItem("admin-password", "12345@");
  console.log("repeted");
}

export default add_admin;

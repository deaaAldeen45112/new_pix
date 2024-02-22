<!DOCTYPE html>

<html lang="en" class="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default" data-assets-path="../assets/" data-template="vertical-menu-template-free">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

  <title>User-Page</title>

  <meta name="description" content="" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

  <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

  <!-- Core CSS -->
  <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
  <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
  <link rel="stylesheet" href="../assets/css/demo.css" />

  <!-- Vendors CSS -->
  <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
  <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
  <style>
    .btn-table-delete {}

    .btn-table-update {}

    .button-page-user {
      cursor: pointer;
    }

    #spinner-user-table{
    position: absolute;
    height: 50px;
    width: 50px;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;

    background-size: 100%;
}
  </style>
  <!-- Page CSS -->

  <!-- Helpers -->
  <script src="../assets/vendor/js/helpers.js"></script>
  <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
  <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
  <script src="../assets/js/config.js"></script>
</head>


<body>

  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <?php

      include('../component/side-bar.php')
      
      ?>

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->


        <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
          <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
              <i class="bx bx-menu bx-sm"></i>
            </a>
          </div>

          <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
            <!-- Search -->
            <div class="navbar-nav align-items-center">
              <div class="nav-item d-flex align-items-center">
                <i class="bx bx-search fs-4 lh-0"></i>
                <input type="text" class="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
              </div>
            </div>
            <!-- /Search -->

            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <!-- Place this tag where you want the button to render. -->


              <!-- User -->
              <li class="nav-item navbar-dropdown dropdown-user dropdown">
                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">

                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">

                        </div>
                        <div class="flex-grow-1">
                          <span class="fw-semibold d-block">John Doe</span>
                          <small class="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bx bx-user me-2"></i>
                      <span class="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bx bx-cog me-2"></i>
                      <span class="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="d-flex align-items-center align-middle">
                        <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                        <span class="flex-grow-1 align-middle">Billing</span>
                        <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="auth-login-basic.html">
                      <i class="bx bx-power-off me-2"></i>
                      <span class="align-middle">Log Out</span>
                    </a>
                  </li>
                </ul>
              </li>
              <!--/ User -->
            </ul>
          </div>
        </nav>

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->

          <div class="container-xxl flex-grow-1 container-p-y">

            <!-- Responsive Table -->
            <div class="card">
              <div>
                <h5 class="card-header"></h5>
                <button id="button_create" style="margin-left: 4%; margin-bottom: 16px;" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#basicModal">add user</button>
              </div>
              <div class="table-responsive text-nowrap">
                <table class="table">
                  <thead>
                    <tr class="text-nowrap">
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Phone</th>
                 
                      <th>Role</th>
                      <th>Delete</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody id="tbody_user">



                  </tbody>
                </table>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-lg-6">

                    <div class="demo-inline-spacing">
                      <!-- Basic Pagination -->
                      <nav aria-label="Page navigation">
                        <ul id="list-pagination-user" class="pagination">
                          <li class="page-item first">
                            <a class="page-link" href="javascript:void(0);"><i class="tf-icon bx bx-chevrons-left"></i></a>
                          </li>
                          <li class="page-item prev">
                            <a class="page-link" href="javascript:void(0);"><i class="tf-icon bx bx-chevron-left"></i></a>
                          </li>

                          <li class="page-item next">
                            <a class="page-link" href="javascript:void(0);"><i class="tf-icon bx bx-chevron-right"></i></a>
                          </li>
                          <li class="page-item last">
                            <a class="page-link" href="javascript:void(0);"><i class="tf-icon bx bx-chevrons-right"></i></a>
                          </li>
                        </ul>
                      </nav>
                      <!--/ Basic Pagination -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--/ Responsive Table -->

          </div>
          <!-- / Content -->

          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->



      </div>
      <!-- / Layout page -->
    </div>



    <!-- Create  -->
    <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel1">add user</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label class="form-label" for="basic-default-fullname">name</label>
                  <input type="text" class="form-control" id="basic-default-fullname" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="basic-default-email">email</label>
                  <div class="input-group input-group-merge">
                    <input type="text" id="basic-default-email" class="form-control" aria-label="john.doe" aria-describedby="basic-default-email2" />

                  </div>
                  <div class="form-text">You can use letters, numbers & periods</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="basic-default-company">passowrd</label>
                  <input type="text" class="form-control" id="basic-default-company" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="basic-default-phone">phone</label>
                  <input type="text" id="basic-default-phone" class="form-control phone-mask" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="basic-default-email">role</label>
                  <div class="input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                    <select id="select_role" class="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="2">Admin</option>
                      <option value="1">User</option>

                    </select>
                  </div>
                </div>

               
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                close
              </button>
              <button id="button_send" type="button" class="btn btn-primary">confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Update  -->
    <div class="modal fade" id="model-basic-update" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel1">update user</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label class="form-label" for="input-user-update-name">name</label>
                  <input type="text" class="form-control" id="input-user-update-name" />
                </div>

                <div class="mb-3">
                  <label class="form-label" for="input-user-update-email"> email</label>
                  <div class="input-group input-group-merge">
                    <input type="text" id="input-user-update-email" class="form-control" aria-label="john.doe" aria-describedby="basic-default-email2" />

                  </div>
                  <div class="form-text">You can use letters, numbers & periods</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="input-user-update-password">password</label>
                  <input type="text" class="form-control" id="input-user-update-password" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="input-user-update-phone">phone</label>
                  <input type="text" id="input-user-update-phone" class="form-control phone-mask" />
                </div>
                <div class="mb-3">
                  <label class="form-label" for="select-user-update-type">role</label>
                  <div class="input-group">
                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                    <select id="select-user-update-type" class="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="2">Admin</option>
                      <option value="1">User</option>

                    </select>
                  </div>
                </div>

            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              close
            </button>
            <button id="button-update" type="button" class="btn btn-primary">confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Button trigger modal -->

  <!-- Delete Modal -->
  <div class="modal fade" id="deleteModal" tabindex="-1" style="display: none;" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">delete user</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <div type="text">
              are your sure for delete the user

              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button id="delete_confirm_user" type="button" class="btn btn-primary">confirm</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Update  -->

  </div>


  <div id="spinner-user-table" class="spinner-border" hidden role="status">
    <span class="visually-hidden">Loading...</span>
  </div>

  <div class="bs-toast toast toast-placement-ex m-2" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <i class="bx bx-bell me-2"></i>   
      
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
    success
    </div>
  </div>

  <!-- Core JS -->
  <!-- build:js assets/vendor/js/core.js -->
  <script src="../assets/vendor/libs/jquery/jquery.js"></script>
  <script src="../assets/vendor/libs/popper/popper.js"></script>
  <script src="../assets/vendor/js/bootstrap.js"></script>
  <script src="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
  <script src="../assets/vendor/js/menu.js"></script>

  <!-- endbuild -->

  <!-- Vendors JS -->
  <script src="../assets/vendor/libs/apex-charts/apexcharts.js"></script>

  <!-- Main JS -->
  <script src="../assets/js/main.js"></script>

  <!-- Page JS -->
  <script src="../assets/js/dashboards-analytics.js"></script>

  <!-- Place this tag in your head or just before your close body tag. -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>

</body>



<script src="../imp/user.js" type="module"></script>

</html>
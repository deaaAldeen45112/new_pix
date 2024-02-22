<!DOCTYPE html>

<html lang="en" class="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default"
    data-assets-path="../assets/" data-template="vertical-menu-template-free">

<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Product</title>

    <meta name="description" content="" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet" />

    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
    <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="../assets/css/demo.css" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
    <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />
    <style>
    .btn-table-product-delete {}

    .btn-table-planCategory {}

    .btn-table-product-update {}


    .back-planCategory {}

    .button-page-plan {
        cursor: pointer;
    }

    #spinner-user-table {
        position: absolute;
        height: 50px;
        width: 50px;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;

        background-size: 100%;
    }


    .button-container {
        display: flex;
        justify-content: center;
    }

    .select-container {
        display: flex;
        gap: 10px;
        /* Adjust the gap as needed */
    }

    /* Optional: Adjust individual select styles if needed */
    .select-container select {
        margin-bottom: 16px;
        /* Optional margin between selects */
    }

    .select-container input {
        margin-bottom: 16px;
        /* Optional margin between selects */
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


                <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                    id="layout-navbar">
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
                                <input type="text" class="form-control border-0 shadow-none" placeholder="Search..."
                                    aria-label="Search..." />
                            </div>
                        </div>
                        <!-- /Search -->

                        <ul class="navbar-nav flex-row align-items-center ms-auto">
                            <!-- Place this tag where you want the button to render. -->


                            <!-- User -->
                            <li class="nav-item navbar-dropdown dropdown-user dropdown">
                                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                                    data-bs-toggle="dropdown">

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
                                                <span
                                                    class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
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
                                <button id="button_create" style="margin-left: 10px; margin-bottom: 16px;"
                                    class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#modal-product-create">add product</button>
                            </div>

                            <div class="table-responsive text-nowrap">
                                <table class="table">
                                    <thead>
                                        <tr class="text-nowrap">
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th>Product Description</th>
                                            <th>Product Summary</th>
                                            <!-- <th>Quantity</th> -->
                                            <th>Price</th>
                                            <td>Category Name</td>
                                            <th>Delete</th>
                                            <th>Update</th>
                                            <th>Image Slider</th>
                                            <th>Review</th>
                                            <th>Property</th>
                                            <th>Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody_product">



                                    </tbody>
                                </table>
                            </div>

                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">

                                        <div class="demo-inline-spacing">
                                            <!-- Basic Pagination -->
                                            <nav aria-label="Page navigation">
                                                <ul id="list-pagination-product" class="pagination">
                                                    <li class="page-item first">
                                                        <a class="page-link" href="javascript:void(0);"><i
                                                                class="tf-icon bx bx-chevrons-left"></i></a>
                                                    </li>
                                                    <li class="page-item prev">
                                                        <a class="page-link" href="javascript:void(0);"><i
                                                                class="tf-icon bx bx-chevron-left"></i></a>
                                                    </li>

                                                    <li class="page-item next">
                                                        <a class="page-link" href="javascript:void(0);"><i
                                                                class="tf-icon bx bx-chevron-right"></i></a>
                                                    </li>
                                                    <li class="page-item last">
                                                        <a class="page-link" href="javascript:void(0);"><i
                                                                class="tf-icon bx bx-chevrons-right"></i></a>
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


        <!-- Image Slider  -->
        <div class="modal fade" id="model-product-image-slider" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">add images slider</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <form>

                                <div class="mb-3">
                                    <label for="questionImage" class="form-label">Add Images</label>
                                    <input class="form-control" accept="image/*" type="file" name="images[]"
                                        id="input-product-images-create" multiple />
                                </div>

                                <!-- <form id="uploadForm" enctype="multipart/form-data">
    <input type="file" name="images[]" accept="image/*" multiple>
    <input type="button" value="Upload" onclick="uploadImages()">
</form> -->

                                <div id="carousel-product-images" class="carousel slide">
                                    <div class="carousel-inner" id="carousel-inner-product-images-create">
                                        <!-- Existing carousel items -->


                                    </div>
                                    <a class="carousel-control-prev" href="#carousel-product-images" role="button"
                                        data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carousel-product-images" role="button"
                                        data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </a>
                                    <div class="button-container">
                                        <button id="button-carousel-product-images-delete" style="text-align: center;"
                                            type="button" class="btn btn-primary">delete</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-product-images-confirm" type="button"
                            class="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Create  -->
    <div class="modal fade" id="modal-product-create" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">add product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>

                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Name</label>
                                <input type="text" id="input-modal-product-name-create"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Description</label>
                                <input type="text" id="input-modal-product-desc-create"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Summary</label>
                                <input type="text" id="input-modal-product-summary-create"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Price</label>
                                <input type="text" id="input-modal-product-price-create"
                                    class="form-control phone-mask" />
                            </div>

                            <div class="mb-3">
                                <label for="questionImage" class="form-label">Product Image</label>
                                <input class="form-control" runat="server" type="file" id="input-product-img-create" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Select Category</label>
                                <select value=0 class="form-select" id="select_parents">
                                    <option selected>Choose...</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Select Subcategory</label>
                                <select value=0 class="form-select" id="select_child">
                                    <option selected>Choose...</option>
                                </select>
                            </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-product-create" type="button" class="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- <div class="mb-3">
                  <label class="form-label" for="basic-default-fullname">Category</label>
                  <select class="form-select" id="select_parent-model-create" style="width: 100%!important ;">
                    <option selected>Choose...</option>
                  </select>


                </div>

                <div class="mb-3">
                  <label class="form-label" for="basic-default-email">Sub Category</label>
                  <div class="input-group input-group-merge">
                    <select class="form-select" id="select_child-model-create" style="width: 100%!important ;">
                      <option selected>Choose...</option>
                    </select>


                  </div>
                  <div class="form-text">You can use letters, numbers & periods</div>
                </div>
                <div class="mb-3">
                  <label class="form-label" for="basic-default-company">Type</label>
                  <select class="form-select" id="select-question-type-model-create" style="width: 100%!important ;">
                    <option selected>Choose...</option>
                  </select>


                </div>
                <div class="mb-3">
                  <label class="form-label" for="basic-default-phone">Year</label>
                  <select class="form-select" id="select-question-year-model-create" style="width: 100%!important ;">
                    <option selected>Choose...</option>
                  </select>


                </div> -->

    <!-- <div class="mb-3">

       
                  <input id="check-box-question-isfree-model-create" class="form-check-input" type="checkbox" value="" id="freeCheckbox" />
                  <label class="form-check-label" for="freeCheckbox">Free</label>


                </div> -->


    <!-- Update  -->
    <div class="modal fade" id="modal-product-update" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">update product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>

                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Name</label>
                                <input type="text" id="input-modal-product-name-update"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Description</label>
                                <input type="text" id="input-modal-product-desc-update"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Summary</label>
                                <input type="text" id="input-modal-product-summary-update"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Price</label>
                                <input type="text" id="input-modal-product-price-update"
                                    class="form-control phone-mask" />
                            </div>

                            <div class="mb-3">
                                <label for="questionImage" class="form-label">Update Images</label>
                                <input class="form-control" runat="server" type="file"
                                    id="input-product-image-update" />
                            </div>

                            <div class="mb-3">
                                <img id="img-product-update" style="height: auto; width: 100%;"
                                    src="http://localhost:8000/storage/uploads/3nthkoCYITY6OIQDqoDuqwRVfjXr2lB3aEN6StNP.png">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Select Category</label>
                                <select value=0 class="form-select" id="select_parents-update">
                                    <option selected>Choose...</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Select Subcategory</label>
                                <select value=0 class="form-select" id="select_child-update">
                                    <option selected>Choose...</option>
                                </select>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                    close
                                </button>
                                <button id="button-modal-product-update" type="button"
                                    class="btn btn-primary">Confirm</button>
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
                        <h5 class="modal-title" id="exampleModalLabel1">delete product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col mb-3">
                                <div type="text">
                                    are you sure
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button id="delete_confirm_user" type="button" class="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Update  -->

    </div>
    <!-- Delete Modal -->
    <div class="modal fade" id="modal-product-delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">delete product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <div type="text">
                                are you sure

                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button id="button-modal-product-delete" type="button" class="btn btn-primary">Confirm</button>
                </div>
            </div>
        </div>
    </div>








    <!-- discount  -->
    <div class="modal fade" id="modal-discount" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Discount </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <button type="button" id="button-discount-create"
                            style="margin-left: 10px; margin-bottom: 16px;" class="btn btn-primary"
                            data-bs-toggle="modal" data-bs-target="#modal-discount-create"> add discount</button>

                        <div class="table-responsive text-nowrap">
                            <table class="table">
                                <thead>
                                    <tr class="text-nowrap">
                                        <th>#</th>
                                        <th>Quantity</th>
                                        <th>Discount Rate</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody-discount">



                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--  discount create -->
    <div class="modal fade" id="modal-discount-create" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">add discount</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>



                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Quantity</label>
                                <input type="text" id="input-modal-discount-quantity-create"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Discount Rate</label>
                                <input type="text" id="input-modal-discount-discount-rate-create"
                                    class="form-control phone-mask" />
                            </div>




                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-discount-create" type="button" class="btn btn-primary">Confirm</button>
                        <button class="btn btn-primary back-discount" type="button" data-bs-target="#modal-discount"
                            data-bs-toggle="modal" data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- discount  update -->
    <div class="modal fade" id="modal-discount-update" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">add discount</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>



                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Quantity</label>
                                <input type="text" id="input-modal-discount-quantity-update"
                                    class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Discount Rate</label>
                                <input type="text" id="input-modal-discount-discount-rate-update"
                                    class="form-control phone-mask" />
                            </div>




                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-discount-update" type="button" class="btn btn-primary">Confirm</button>
                        <button class="btn btn-primary back-discount" type="button" data-bs-target="#modal-discount"
                            data-bs-toggle="modal" data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- discount  delete -->
    <div class="modal fade" id="modal-discount-delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">delete discount</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <div type="text">
                                are you sure
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button id="delete_confirm_discount" type="button" class="btn btn-primary">Confirm</button>
                    <button class="btn btn-primary back-discount" type="button" data-bs-target="#modal-discount"
                        data-bs-toggle="modal" data-bs-dismiss="modal">
                        Back to first
                    </button>
                </div>
            </div>
        </div>
    </div>



    <!-- review  -->
    <div class="modal fade" id="modal-review" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Review</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">

                        <div class="table-responsive text-nowrap">
                            <table class="table">
                                <thead>
                                    <tr class="text-nowrap">
                                        <th>#</th>
                                        <th>User Id</th>
                                        <th>Review Description</th>
                                        <th>Review Star</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody id="tbody-review">



                                </tbody>
                            </table>
                        </div>


                        <div class="row">
                            <div class="col-lg-6">

                                <div class="demo-inline-spacing">
                                    <!-- Basic Pagination -->
                                    <nav aria-label="Page navigation">
                                        <ul id="list-pagination-review" class="pagination">
                                            <li class="page-item first">
                                                <a class="page-link" href="javascript:void(0);"><i
                                                        class="tf-icon bx bx-chevrons-left"></i></a>
                                            </li>
                                            <li class="page-item prev">
                                                <a class="page-link" href="javascript:void(0);"><i
                                                        class="tf-icon bx bx-chevron-left"></i></a>
                                            </li>

                                            <li class="page-item next">
                                                <a class="page-link" href="javascript:void(0);"><i
                                                        class="tf-icon bx bx-chevron-right"></i></a>
                                            </li>
                                            <li class="page-item last">
                                                <a class="page-link" href="javascript:void(0);"><i
                                                        class="tf-icon bx bx-chevrons-right"></i></a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <!--/ Basic Pagination -->
                                </div>
                            </div>
                        </div>

                    </div>




                    <div class="modal-footer">

                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- review  delete -->
    <div class="modal fade" id="modal-review-delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">delete review</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <div type="text">
                                are you sure
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button id="delete_confirm_review" type="button" class="btn btn-primary">Confirm</button>
                    <button class="btn btn-primary back-review" type="button" data-bs-target="#modal-review"
                        data-bs-toggle="modal" data-bs-dismiss="modal">
                        Back to first
                    </button>
                </div>
            </div>
        </div>
    </div>










    <!-- prop  -->
    <div class="modal fade" id="modal-prop" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Property</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <button type="button" id="button-prop-create" style="margin-left: 10px; margin-bottom: 16px;"
                            class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-prop-create">add
                            property</button>

                        <div class="table-responsive text-nowrap">
                            <table class="table">
                                <thead>
                                    <tr class="text-nowrap">
                                        <th>#</th>
                                        <th>Property Name</th>
                                        <th>Property Description</th>
                                        <th>Property Type</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                        <th>Property Type</th>
                                       
                                    </tr>
                                </thead>
                                <tbody id="tbody-prop">



                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- prop create-->
    <div class="modal fade" id="modal-prop-create" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">add property</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>



                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Name</label>
                                <input type="text" id="input-modal-prop-name-create" class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Description</label>
                                <input type="text" id="input-modal-prop-des-create" class="form-control phone-mask" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="basic-default-email">Type</label>
                                <div class="input-group input-group-merge">
                                    <select class="form-select" id="select-prop-type"
                                        style="width: 100%!important ;">
                                        <option value="0" selected>Choose...</option>
                                        <option value="1">Selection</option>
                                        <option value="2">Options</option>
                                        <option value="3">Radio Buttons</option>
                                        <option value="4">Input</option>
                                    </select>
                                </div>
                            </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-prop-create" type="button" class="btn btn-primary">Confirm</button>
                        <button class="btn btn-primary back-prop" type="button" data-bs-target="#modal-prop"
                            data-bs-toggle="modal" data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- prop  update -->
    <div class="modal fade" id="modal-prop-update" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">update property</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>



                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Name</label>
                                <input type="text" id="input-modal-prop-name-update" class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Description</label>
                                <input type="text" id="input-modal-prop-des-update" class="form-control phone-mask" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="basic-default-email">Type</label>
                                <div class="input-group input-group-merge">
                                    <select class="form-select" id="select-prop-type-update"
                                        style="width: 100%!important ;">
                                        <option value="0" selected>Choose...</option>
                                        <option value="1">Selection</option>
                                        <option value="2">Options</option>
                                        <option value="3">Radio Buttons</option>
                                        <option value="4">Input</option>
                                    </select>
                                </div>
                            </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-prop-update" type="button" class="btn btn-primary">Confirm</button>
                        <button class="btn btn-primary back-prop" type="button" data-bs-target="#modal-prop"
                            data-bs-toggle="modal" data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- prop  delete -->
    <div class="modal fade" id="modal-prop-delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">delete prop</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <div type="text">
                                are you sure
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button id="delete_confirm_prop" type="button" class="btn btn-primary">Confirm</button>
                    <button class="btn btn-primary back-prop" type="button" data-bs-target="#modal-prop"
                        data-bs-toggle="modal" data-bs-dismiss="modal">
                        Back to first
                    </button>
                </div>
            </div>
        </div>
    </div>



    <!-- option  -->
    <div class="modal fade" id="modal-option" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Option</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <button type="button" id="button-option-create" style="margin-left: 10px; margin-bottom: 16px;"
                            class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-option-create">
                            add option</button>
                        	

                        <div class="table-responsive text-nowrap">
                            <table class="table">
                                <thead>
                                    <tr class="text-nowrap">
                                        <th>#</th>
                                        <th>Option Name</th>
                                        <th>Option Price</th>
                                        <th>Option Default</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody-option">



                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>


  <!-- update option -->
  <div class="modal fade" id="modal-option-update" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">update option</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>

                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Name</label>
                                <input type="text" id="input-modal-option-name-update" class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Price</label>
                                <input type="text" id="input-modal-option-price-update" class="form-control phone-mask" />
                            </div>
                            
                            <div class="mb-3">
                                <label for="questionImage" class="form-label">Option Image</label>
                                <input class="form-control" runat="server" type="file" id="input-option-img-update" />
                            </div>
                            <div class="mb-3">
                                <img id="img-option-update" style="height: auto; width: 100%;"
                                    src="http://localhost:8000/storage/uploads/3nthkoCYITY6OIQDqoDuqwRVfjXr2lB3aEN6StNP.png">
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Default</label>
                                <input type="checkbox" class="form-check-input" id="input-modal-option-default-update" />
                            </div>
                          
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-option-update" type="button" class="btn btn-primary">Confirm</button>
                        <button class="btn btn-primary back-option" type="button" data-bs-target="#modal-option"
                            data-bs-toggle="modal" data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>





  <!-- create option -->
  <div class="modal fade" id="modal-option-create" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">add option</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>



                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Name</label>
                                <input type="text" id="input-modal-option-name-create" class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Price</label>
                                <input type="text" id="input-modal-option-price-create" class="form-control phone-mask" />
                            </div>
                            
                            <div class="mb-3">
                                <label for="questionImage" class="form-label">Option Image</label>
                                <input class="form-control" runat="server" type="file" id="input-option-img-create" />
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Default</label>
                                <input type="checkbox" class="form-check-input" id="input-modal-option-default-create" />
                            </div>
                          
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-option-create" type="button" class="btn btn-primary">Confirm</button>
                        <button class="btn btn-primary back-option" type="button" data-bs-target="#modal-option"
                            data-bs-toggle="modal" data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


  <!-- prop  delete -->
  <div class="modal fade" id="modal-option-delete" tabindex="-1" style="display: none;" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">delete option</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col mb-3">
                            <div type="text">
                                are you sure
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button id="delete_confirm_option" type="button" class="btn btn-primary">Confirm</button>
                    <button class="btn btn-primary back-option" type="button" data-bs-target="#modal-option"
                        data-bs-toggle="modal" data-bs-dismiss="modal">
                        Back to first
                    </button>
                </div>
            </div>
        </div>
    </div>




   





<!-- create option -->
<div class="modal fade" id="modal-input" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">add input property</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form>



                            
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">Price</label>
                                <input type="number" id="input-modal-input-price" class="form-control phone-mask" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="basic-default-phone">For Num</label>
                                <input type="number" id="input-modal-input-for-num" class="form-control phone-mask" />
                            </div>
                          
                          
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            close
                        </button>
                        <button id="button-modal-input" type="button" class="btn btn-primary">Confirm</button>
                        <button class="btn btn-primary " type="button" data-bs-target="#modal-prop"
                            data-bs-toggle="modal" data-bs-dismiss="modal">
                            Back to first
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>




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



<script src="../imp/product.js" type="module"></script>

</html>
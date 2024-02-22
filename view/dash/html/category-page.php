<!DOCTYPE html>

<html lang="en" class="light-style layout-menu-fixed layout-compact" dir="ltr" data-theme="theme-default"
    data-assets-path="../assets/" data-template="vertical-menu-template-free">


<head>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    <title>Category-Page</title>

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
    /* .btn-table-delete {}

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
} */


    .button-container {
        display: flex;
        justify-content: center;
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
                                <button id="button-popup-model-user-create"
                                    style="margin-left: 4%; margin-bottom: 16px;" class="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#basicModal">add category</button>
                            </div>
                            <div class="table-responsive text-nowrap">
                                <table class="table">
                                    <thead>
                                        <tr class="text-nowrap">

                                            <th>Category Name</th>
                                            <th>Delete</th>
                                            <th>Update</th>
                                            <th>Image Slider</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tobdy_parents">

                                        <td>
                                            <select style="width: 320px!important ;max-width: 320px!important;"
                                                class="form-select" id="select_parents">
                                                <option selected>Choose...</option>

                                            </select>

                                        </td>
                                        <td>
                                            <button data-bs-toggle="modal" data-bs-target="#deleteModal" type="button"
                                                class="btn btn-danger">Delete</button>
                                        </td>
                                        <td>
                                            <button id="button_update_parents" type="button" class="btn btn-info"
                                                data-bs-toggle="modal"
                                                data-bs-target="#model-category-update-parent">Update</button>
                                        </td>
                                        <td>
                                            <button id="button-category-image-slider" type="button" class="btn btn-info"
                                                data-bs-toggle="modal"
                                                data-bs-target="#model-category-image-slider">Image Slider</button>
                                        </td>
                                        </tr>


                                    </tbody>





                                </table>
                                <table class="table">
                                    <thead>
                                        <tr class="text-nowrap">

                                            <th>Sub Category Name</th>
                                            <th>Delete</th>
                                            <th>Update</th>
                                            <th>Image Slider</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <td>
                                            <select class="form-select" id="select_child"
                                                style="width: 320px!important ;max-width: 320px!important;">
                                                <option selected>Choose...</option>

                                            </select>

                                        </td>
                                        <td><button data-bs-toggle="modal" data-bs-target="#delete_modal_table_2"
                                                type="button" class="btn btn-danger">Delete</button>
                                        </td>
                                        <td>
                                            <button id="button_update_table_2" type="button" class="btn btn-info"
                                                data-bs-toggle="modal"
                                                data-bs-target="#model-category-update-child">Update</button>
                                        </td>
                                        <td>
                                            <button id="button-subcategory-image-slider" type="button"
                                                class="btn btn-info" data-bs-toggle="modal"
                                                data-bs-target="#model-category-image-slider">Image Slider</button>
                                        </td>
                                        </tr>


                                    </tbody>
                                </table>

                            </div>



                        </div>
                        <!--/ Responsive Table -->
                    </div>



                    <div class="content-backdrop fade"></div>
                </div>




                <!-- Content wrapper table 2 -->

                <!-- / Layout page -->
            </div>









            <!-- Image Slider  -->
            <div class="modal fade" id="model-category-image-slider" tabindex="-1" aria-hidden="true">
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
                                            id="input-category-images-create" multiple />
                                    </div>

                                    <!-- <form id="uploadForm" enctype="multipart/form-data">
    <input type="file" name="images[]" accept="image/*" multiple>
    <input type="button" value="Upload" onclick="uploadImages()">
</form> -->

                                    <div id="carousel-category-images" class="carousel slide">
                                        <div class="carousel-inner" id="carousel-inner-category-images-create">
                                            <!-- Existing carousel items -->


                                        </div>
                                        <a class="carousel-control-prev" href="#carousel-category-images" role="button"
                                            data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carousel-category-images" role="button"
                                            data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </a>
                                        <div class="button-container">
                                            <button id="button-carousel-category-images-delete"
                                                style="text-align: center;" type="button"
                                                class="btn btn-primary">delete</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                close
                            </button>
                            <button id="button-modal-category-images-confirm" type="button"
                                class="btn btn-primary">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Create  -->
        <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">add category</h5>
                        <button id="button_create_parents" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <form>

                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-fullname">category name</label>
                                    <input type="text" class="form-control" id="basic-default-fullname" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-fullname">category description</label>
                                    <input type="text" class="form-control" id="input-category-des-model-create" />
                                </div>

                                <div class="mb-3">
                                    <label for="questionImage" class="form-label">cateogry Image</label>
                                    <input class="form-control" runat="server" type="file"
                                        id="input-category-img-create" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-email">parent category for it</label>
                                    <div class="input-group">
                                        <label class="input-group-text" for="select_create_parents">Options</label>
                                        <select class="form-select" id="select_create_parents">
                                            <option selected>Choose...</option>

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



        <!-- update table 1  -->
        <div class="modal fade" id="model-category-update-parent" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">update category </h5>
                        <button id="button_create_parents" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <form>

                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-fullname">category name</label>
                                    <input type="text" class="form-control"
                                        id="input-update-category-topicname-parent" />
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-fullname">category description</label>
                                    <input type="text" class="form-control" id="input-category-des-model-update" />
                                </div>


                                <div class="mb-3">
                                    <label for="questionImage" class="form-label">Update Images</label>
                                    <input class="form-control" runat="server" type="file"
                                        id="input-category-image-update" />
                                </div>
                                <div class="mb-3">
                                    <img id="img-category-update" style="height: auto; width: 100%;"
                                        src="http://localhost:8000/storage/uploads/3nthkoCYITY6OIQDqoDuqwRVfjXr2lB3aEN6StNP.png">
                                </div>


                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-email">parent category for it</label>
                                    <div class="input-group">
                                        <label class="input-group-text" for="select_create_parents">Options</label>
                                        <select class="form-select" id="select-update-category-topicname-parent">
                                            <option selected>Choose...</option>

                                        </select>
                                    </div>
                                </div>



                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                اغلاق
                            </button>
                            <button id="button-confirm-update-parent" type="button"
                                class="btn btn-primary">تعديل</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- update table 2  -->
        <div class="modal fade" id="model-category-update-child" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1"> update sub category</h5>
                        <button id="button_create_parents" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-fullname"> cateogry name</label>
                                    <input type="text" class="form-control"
                                        id="input-update-category-topicname-child" />
                                </div>


                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-fullname">category description</label>
                                    <input type="text" class="form-control" id="input-subcategory-des-model-update" />
                                </div>


                                <div class="mb-3">
                                    <label for="questionImage" class="form-label">Update Images</label>
                                    <input class="form-control" runat="server" type="file"
                                        id="input-subcategory-image-update" />
                                </div>
                                <div class="mb-3">
                                    <img id="img-subcategory-update" style="height: auto; width: 100%;"
                                        src="http://localhost:8000/storage/uploads/3nthkoCYITY6OIQDqoDuqwRVfjXr2lB3aEN6StNP.png">
                                </div>


                                <div class="mb-3">
                                    <label class="form-label" for="basic-default-email">parent category for it</label>
                                    <div class="input-group">
                                        <label class="input-group-text" for="select_create_parents">Options</label>
                                        <select class="form-select" id="select-update-category-topicname-child">
                                            <option selected>Choose...</option>

                                        </select>
                                    </div>
                                </div>



                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                اغلاق
                            </button>
                            <button id="button-confirm-update-child" type="button"
                                class="btn btn-primary">تعديل</button>
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
                        <h5 class="modal-title" id="exampleModalLabel1">delete category</h5>
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
                            close
                        </button>
                        <button id="button_confirm_delete_parents" type="button" class="btn btn-primary">
                            confirm</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Modal -->
        <div class="modal fade" id="delete_modal_table_2" tabindex="-1" style="display: none;" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">delete sub category</h5>
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
                            close
                        </button>
                        <button id="button_confirm_delete_child" type="button" class="btn btn-primary">
                            confirm</button>
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

<script src="../imp/topic.js" type="module"></script>
<script>
async function uploadImages() {
    //     const input = document.querySelector('input[name="images[]"]');
    //     const formData = new FormData();

    //     for (const file of input.files) {
    //         formData.append('images[]', file);
    //     }
    //  console.log("daa");
    //    await fetch("http://localhost:8000/api/category/uploadImagesSlider", {
    //         method: "POST",
    //         body: formData
    //     })
    //     .then(response => response.text())
    //     .then(result => {
    //         console.log(result);
    //         // Handle the response as needed
    //     })
    //     .catch(error => console.error("Error:", error));
}
</script>

</html>
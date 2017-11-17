        <li class="nav-item">
                            <div class="dropdown" id="customers">
                                <button class="dropbtn">Customers</button>
                                <div class="dropdown-content">
                                    <a class="nav-link" href="/addcustomer">Add Customers</a>
                                    <a class="nav-link" href="/updatecustomer">Update Customers</a>
                                    <a class="nav-link" href="/viewcustomer">View Customers</a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="dropdown" id="products">
                                <button class="dropbtn">Products</button>
                                <div class="dropdown-content">
                                    <a class="nav-link" href="/addproduct">Add Products</a>
                                    <a class="nav-link" href="/updateproduct">Update Products</a>
                                    <a class="nav-link" href="/viewproduct">View Products</a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="dropdown" id="product_types">
                                <button class="dropbtn">Product Types</button>
                                <div class="dropdown-content">
                                    <a class="nav-link" href="/addproducttype">Add Product Types</a>
                                    <a class="nav-link" href="/updateproducttype">Update Product Types</a>
                                    <a class="nav-link" href="/viewproducttype">View Product Types</a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="dropdown" id="scent_types">
                            <button class="dropbtn">Scent Types</button>
                                <div class="dropdown-content">
                                    <a class="nav-link" href="/addscenttype">Add Scent Types</a>
                                    <a class="nav-link" href="/updatescenttype">Update Scent Types</a>
                                    <a class="nav-link" href="/viewscenttype">View Scent Types</a>
                                </div>
                            </div>
                        </li>

                        <li class="nav-item">
                            <div class="dropdown" id="suppliers">
                            <button class="dropbtn">Suppliers</button>
                                <div class="dropdown-content">
                                    <a class="nav-link" href="/addsupplier">Add Suppliers</a>
                                    <a class="nav-link" href="/updatesupplier">Update Suppliers</a>
                                    <a class="nav-link" href="/viewsuppliers">View Suppliers</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>

<div class="col-3">
    <label for="inputType">Supplier</label>
    <select class="custom-select" id="suppliers" name="suppliers">
        <option selected>Open this select menu</option>
    </select>
</div>

$.ajax({
            url: "http://localhost:3000/api/sidebar_links",
            dataType: "json",
            type: "GET",
            data: {},
            success: function (result) {
                // We iterate through the array of records we get back from the database API call
                // If you drill down in the console, you will find the array at result.data.product_types
                $.each(result.data.product_types, function (index, product_type) {
                    $('#productTypes').append('<option value=' + product_type.id + '>' + product_type.label + '</option>');
                })
            }
        });
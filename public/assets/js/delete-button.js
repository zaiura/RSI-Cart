<script type="text/javascript">
    $(document).ready(function() {
            //delete button
        var answer = confirm ("Are you sure you want to remove this from your cart?");
            if (answer) {
                    $('#btn-default').on( 'click', 'button', function () {
                        $.ajax({
                                type        : 'DELETE', // define the type of HTTP verb we want to use (DELETE our cart)
                                url         : 'http://localhost:3000/api/cart:id', // the url where we want to DELETE
                                data        : {}, // our data object
                                dataType    : 'json', // what type of data do we expect back from the server
                                encode      : true
                                success: function (result) {

                                                                        })
                                // using the done promise callback
                                .done(function(data) {
                                // Success, so clear
                                $('#btn-default').remove();
                                // Show success alert
                                swal("Success, your cart has been deleted!", "success");
                                })
                                .fail(function(data){
                                // In a fail, we need to look inside the responseJSON object for our
                                // APIs error message
                                swal("Oops...", data.responseJSON.data.error, "error");
                            });
                
                    });

                }); //delete button confirmation
            } //delete button script
</script>
//Include <script src="assets/js/delete-button.js"></script> in your document and place this document in your assets/js directory
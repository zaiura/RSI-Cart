"use strict";

// UUID
var uuid = require('uuid');

// Dates
var dateutil = require('dateutil');

//-------------------------------------------------------------------------------------------
// Create a Supplier
exports.createSupplier = function(req, res) {
	
	pool.connect(function(err, client, done) {
		
		var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) return false;
			res.status(500).json({ result:'error', data:{ error:err } });
			return true;
	    }; // End handleError
	    // handle an error from the connect
		if(handleError(err)) return;
		
		// Validate then insert
		if(req.body.name) {
            
			var queryText = 'INSERT INTO suppliers (id, name, phone, email, address, city, state, zip, description, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, name'
			client.query(queryText, [uuid.v4(), req.body.name, req.body.phone, req.body.email, req.body.address, req.body.city, req.body.state, req.body.zip, req.body.description, dateutil.date()], function(err, result) {
				done();
				// handle an error from the query
				if(handleError(err)) return;
				res.status(200).json({result: 'success', data:{ id : result.rows[0].id, name : result.rows[0].name }});	
			}); // End client.query
	  	
		} else {
			done();
	    	res.status(400).json({ result: 'error', data:{error: 'name is required'} });
		} // End else loop
		
	}); // End pool.connect
	
} // End exports.CreateSupplier

//-------------------------------------------------------------------------------------------
// Get all Suppliers
exports.readSuppliers = function(req, res) {
	
	// get a pg client from the connection pool
	pool.connect(function(err, client, done) {
		
    	var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) return false;
			done();
			console.log(err);
			res.status(500).json({ result:'error', data:{ error:err } });
			return true;
    	}; // End handleError
    	
    	// handle an error from the connect
		if(handleError(err)) return;
		var queryText = 'SELECT * FROM suppliers;';
		client.query(queryText, [], function(err, result) {
			if(handleError(err)) return;
			done();
			if(result.rowCount > 0) {
				var suppliers = result.rows;
				res.status(200).json({result: 'success', data:{ suppliers : suppliers }});
			} else {
				res.status(400).json({ result:'error', data:{ error:err } });
			} // End else loop

		}); // End client.query

	}); // End pool.connect

}; // End exports.readSuppliers

//-------------------------------------------------------------------------------------------
// Get a Supplier
exports.readSupplier = function(req, res) {
	
	// get a pg client from the connection pool
	pool.connect(function(err, client, done) {
		
    	var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) return false;
			done();
			console.log(err);
			res.status(500).json({ result:'error', data:{ error:err } });
			return true;
    	}; // End handleError
    	
    	// handle an error from the connect
		if(handleError(err)) return;
		var queryText = 'SELECT FROM suppliers WHERE id = $1;';
		client.query(queryText, [req.params.id], function(err, result) {
			if(handleError(err)) return;
			done();
			if(result.rowCount > 0) {
				var supplier = result.rows;
				res.status(200).json({result: 'success', data:{ supplier : supplier }});
			} else {
				res.status(200).json({result: 'success', data:{}});
			} // End else loop

		}); // End client.query

	}); // End pool.connect

}; // End exports.readSupplier

//---------------------------------------------------------------------------------------
// Update
// TODO
exports.updateSupplier = function(req, res) {
	
	// get a pg client from the connection pool
	pool.connect(function(err, client, done) {

    	var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) return false;
			done();
			res.status(500).json({ result:'error', data:{ error:err } });
			return true;
    	}; // End handleError

    	// handle an error from the connect
		if(handleError(err)) return;

		// Validate then insert
		if(req.params.id) {
			done();
			res.status(200).json({result: 'success', data:{count : result.rowCount}});
    	} else {
	    	done();
	    	rres.status(400).json({ result: 'error', data:{error: 'id is required'} });
    	} // End else loop
   
  	}); // End pool.connect

}; // End exports.updateSupplier

//---------------------------------------------------------------------------------------
// Delete
// TODO
exports.deleteSupplier = function(req, res) {
	
	// get a pg client from the connection pool
	pool.connect(function(err, client, done) {

    	var handleError = function(err) {
			// no error occurred, continue with the request
			if(!err) return false;
			done();
			res.status(500).json({ result:'error', data:{ error:err } });
			return true;
    	}; // End handleError

    	// handle an error from the connect
		if(handleError(err)) return;

		// Validate then insert
		if(req.params.id) {
			
			var queryText = 'DELETE FROM supplier WHERE id = $1'
			client.query(queryText, [req.params.id], function(err, result) {
    			// handle an error from the query
				if(handleError(err)) return;
				done();
				res.status(200).json({result: 'success', data:{count : result.rowCount}});
      		}); // End client.query
      	
    	} else {
	    	done();
	    	res.status(400).json({ result: 'error', data:{error: 'id is required'} });
    	} // End else loop
   
  	}); // End pool.connect

}; // End exports.deleteSupplier
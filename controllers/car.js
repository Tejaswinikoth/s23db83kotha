const car = require('../models/car');

// List of all cars
exports.car_list = async function (req, res) {
    try {
        const thecars = await car.find();
        res.send(thecars);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Controller for retrieving details of a specific car by ID
exports.car_detail = async function (req, res) {
    try {
        result = await car.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Controller for creating a new car
exports.car_create_post = async function (req, res) {
    console.log(req.body);
    let document = new car();

    // Set the properties of the new car object based on the request body
    document.hat_type = req.body.hat_type;
    document.color = req.body.color;
    document.price = req.body.price;

    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Controller for deleting a specific car by ID
exports.car_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await car.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Controller for updating a specific car by ID
exports.car_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await car.findById(req.params.id)
        // Do updates of properties
        if (req.body.hat_type) toUpdate.hat_type = req.body.hat_type;
        if (req.body.color) toUpdate.color = req.body.color;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};

exports.car_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        const result = await car.findById(req.query.id);
        res.render('cardetail', {
            title: 'Hats Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};

exports.hats_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('hatscreate', { title: 'Hats Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.hats_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await car.findById(req.query.id)
        res.render('hatsupdate', { title: 'Hats Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.car_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await car.findById(req.query.id)
        res.render('hatsdelete', {
            title: 'Hats Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
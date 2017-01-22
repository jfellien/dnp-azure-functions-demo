module.exports = (context, req) => { 
    context.bindings.sinkMeasurements = req.body; 
    context.res = { 
        status: 200, 
        body: "Measurement received" }; 
        context.done(); 
    };
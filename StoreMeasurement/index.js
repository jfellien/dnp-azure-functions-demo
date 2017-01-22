module.exports = (context, triggerMeasurements ) => { 
    context.bindings.sinkTemperature = { 
        PartitionKey : triggerMeasurements.date, 
        RowKey: triggerMeasurements.time, 
        temperature: triggerMeasurements.temperature 
    }; 
    context.bindings.sinkHumidity = { 
        PartitionKey: triggerMeasurements.date, 
        RowKey: triggerMeasurements.time, 
        humidity: triggerMeasurements.humidity 
    }; 
    context.done(); 
};
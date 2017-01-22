#r "Microsoft.WindowsAzure.Storage"
using Microsoft.WindowsAzure.Storage.Table; 
using System.Net; 
public class Measurement : TableEntity  { 
    public int temperature {get; set;} 
} 

public static async Task<HttpResponseMessage> Run(
    HttpRequestMessage req, 
    IQueryable<Measurement> sourceTemperatures, 
    TraceWriter log) { 
        return req.CreateResponse(HttpStatusCode.OK, sourceTemperatures); 
}
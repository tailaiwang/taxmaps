async function foo(){
    // Imports the Google Cloud client libraries
    const vision = require('@google-cloud/vision');

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Bucket where the file resides, e.g. my-bucket';
    // const fileName = 'Path to file within bucket, e.g. path/to/image.png';

    // Performs text detection on the gcs file
    const [result] = await client.textDetection('reciept.jpg');
    const detections = result.textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));
}    

foo().then(result => {
    console.log('Hey');
}).catch(error => {
    console.log(error);
})

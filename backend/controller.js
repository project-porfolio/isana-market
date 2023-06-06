function Upload(req, res) {
    console.log(req.file);
  
    res.status(200).json({ message: "Image Uploaded Successfuly" });
  }

module.exports = Upload;
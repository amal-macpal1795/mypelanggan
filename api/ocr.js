const { ImageAnnotatorClient } = require('@google-cloud/vision').v1p3beta1;
const client = new ImageAnnotatorClient();

module.exports = async (req, res) => {
  try {
    const { imageBase64 } = req.body;
    const imageBuffer = Buffer.from(imageBase64, 'base64');
    
    // Kirim gambar ke Google Cloud Vision API
    const [result] = await client.documentTextDetection(imageBuffer);
    const fullText = result.fullTextAnnotation.text;

    // Logika parsing untuk NIK dan Nama
    let nik = '';
    let nama = '';
    const lines = fullText.split('\n');
    
    lines.forEach((line) => {
      const processedLine = line.trim();
      
      // Cari NIK
      const nikMatch = processedLine.match(/\b\d{16}\b/);
      if (nikMatch && nik.length === 0) {
        nik = nikMatch[0];
      }
      
      // Cari Nama
      if (processedLine.toUpperCase().includes('NAMA')) {
        nama = lines[lines.indexOf(line) + 1].trim().toUpperCase();
      }
    });

    res.status(200).json({
      success: true,
      data: { nik, nama, fullText }
    });
  } catch (error) {
    console.error('Error processing OCR:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal memproses OCR.',
      error: error.message
    });
  }
};
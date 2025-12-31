# Certificate Images

Add your certificate JPEG/PNG images here.

## Instructions:

1. Add your certificate images to this folder:
   - `power-bi-certificate.jpg` (or .png)
   - `fabric-certificate.jpg` (or .png)

2. Update `Certificates.js` to import the images:
   ```javascript
   import PowerBICert from "../assets/certificates/power-bi-certificate.jpg";
   import FabricCert from "../assets/certificates/fabric-certificate.jpg";
   ```

3. Update the certificates array in `Certificates.js`:
   ```javascript
   {
     id: 1,
     // ... other properties
     image: PowerBICert, // Replace null with the imported image
   }
   ```

## Supported Formats:
- .jpg
- .jpeg
- .png

## Recommended Image Size:
- Width: 800-1200px
- Aspect Ratio: 4:3 or 16:9
- File Size: Under 2MB for optimal loading


# Carousel

Photo Carousel module
Description:
Displays photos for listings and allows CRUD operations

Related Projects: 
https://github.com/hackshack1/Carousel
https://github.com/hackshack1/Recommendations
https://github.com/hackshack1/Reviews
https://github.com/hackshack1/Reservations
Table Of contents:
Usage
Requirements
Development
Usage:
Setup config.js in ./database/
Requirements:
Node 10.16
Development:
npm run seed-database
npm run react-dev
npm run start

CRUD APIs:
Create (POST)
This method will create a single photo and add it to the specified listing

POST: /:propertyId/image

BODY:

Name
Type
Description
propertyId
integer
Required: property identifier
URL
string
Required: gives specific picture URL needed create image posting
description
string
Optional: description of image from property
verified
Boolean
Required: must identify if image of property is verified

Read (GET)
This method will retrieve information about the photo that is being accessed

GET: /:id/image

BODY:

Name
Type
Description
propertyId
integer
Required: property identifier
imageId
string
Optional: if specified, then the specified image will be retrieved, otherwise all the images will be retrieved.





PUT ( Update)
This method will update information about a specific image: description, image url, verification

PUT: /:id/image/{specification}

Name
Type
Description
propertyId
integer
Required: property identifier
image
integer
Required: image identifier
URL
string
Optional: gives specific picture URL that an image would be updated to
description
string
Optional: update description of image from property
verified
Boolean
Optional: update if verification of image changes


DELETE (delete)
This method will delete either an image itself or image information about a property

DELETE: /:id/image/{specification to delete}
DELETE: /id/image
Delete entire image for property

Name
Type
Description
propertyId
integer
Required: property identifier
image
integer
Required: image identifier
URL
string
Optional: deletion of URL will cause a null value to be rendered for this image
description
string
Optional: will get rid of the description 
verified
Boolean
Optional: will delete the verification if there.


Makes photos scrollable

- Includes photo scroll functionality: 
  - Select specific image
  - hover over specific image
  - image click enlargens the image
    -  gets the same image
  - scroll to other images
  
Table of Contents
Usage
Routing
** Instructions on running the service will go here **

Routing
POST - Add Image to Carousel
- POST/image/:Id
 - post new airbnb home with its own photo carousel, id would have to be at the end of the db
- POST/image/23/4
 - post a specific image to the carousel with id 23

GET - get image from database
- GET/image/25
 - get all images from item with id 25
- GET /image/25/3
 - get image 3 from id 25

PUT - update(change) image
- PUT /image/25/5
 - update(change) image 5 for item with id 25

DELETE - delete image from carousel
- DELETE/image/25
 - delete all images for item with id 25
- DELETE /image/25/3
 - delete image 3 for item with id 25

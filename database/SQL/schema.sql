DROP TABLE propertyImages;

CREATE TABLE propertyImages{
    propertyId   integer,
    Primary Key (propertyId)
}

CREATE TABLE imageInfo{
    Id           integer      NOT NULL,
    URL          VARCHAR(100) NOT NULL,
    description  VARCHAR(200) NOT NULL,
    verify       BOOLEAN      NOT NULL,
    Primary Key (Id),
    propertyId FOREIGN KEY REFERENCES propertyImages(propertyId),

}
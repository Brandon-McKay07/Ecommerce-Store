CREATE TABLE WISHLIST(
  wishListId           INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId               INTEGER NOT NULL,
  productId            INTEGER NOT NULL,
  FOREIGN KEY (userId) REFERENCES USERS(userId),
  FOREIGN KEY (productId) REFERENCES PRODUCTS(productId)
);
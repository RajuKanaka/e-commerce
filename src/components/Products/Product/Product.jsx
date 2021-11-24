import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import styles from "./styles";
const Product = ({ product, onAddToCart }) => {
  const classes = styles();

  // return <div> test </div>;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className="classes.cardContent">
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="h5">
            {product.price.formatted_with_code}
          </Typography>
        </div>
        <Typography dangerouslyInnerHTML variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton
          aria-label={"Add to card"}
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

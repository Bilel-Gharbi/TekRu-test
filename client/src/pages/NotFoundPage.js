import React from "react";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={"assets/notFound.png"} alt="not found img" />
    </div>
  );
};

const styles = {
  container: {
    width: "100wv",
    height: "100hw",
  },
  img: {
    width: "100%",
    height: "100%",
  },
};

export default NotFoundPage;

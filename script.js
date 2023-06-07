const greets = (message = "", cb = (d) => {}) => {
  console.log(message);
  cb(message);
};

greets(10, () => {

  greets(9, () => {
    greets(8, () => {
      greets(7, () => {
        greets(6, () => {
          greets(5, () => {
            greets(4, () => {
              greets(3, () => {
                greets(2, () => {
                  greets(1, () => {
                    greets("Happy Independence Day!!!");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

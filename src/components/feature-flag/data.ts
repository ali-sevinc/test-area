const feature = {
  showTheme: true,
  showTicTacToe: false,
  showQrcode: true,
  showCCPMenu: true,
};

export default function fetchFeaturesFlags() {
  return new Promise((resolve, reject) => {
    if (feature) {
      setTimeout(() => {
        resolve(feature);
      }, 750);
    } else {
      reject("An error occured. Please try again later");
    }
  });
}

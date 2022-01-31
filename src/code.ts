figma.showUI(__html__, {
  width: 476,
  height: 375,
  title: "Daisy Project Dev Instance",
});

figma.ui.onmessage = (msg) => {
  if (msg === "export-file-info") {
    figma.ui.postMessage({ fileKey: figma.fileKey, user: figma.currentUser });
  }
};

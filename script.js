

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log("Document loaded")
        document.getElementById("header").style.display = "inline";
    }
  };
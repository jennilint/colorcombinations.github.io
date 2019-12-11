Papa.parse("https://colorcombinations.github.io/colors.csv", {
    download: true,
    complete: function(result) {
    
    let dataByKey = {};

    for (let dataPoint of result.data) {
        let combinationNumber = dataPoint[0];
        let colorCode = dataPoint[1];
        let colorPercentage = dataPoint[2];

        if (dataByKey[combinationNumber] === undefined) {
            dataByKey[combinationNumber] = {};
        }
        if (dataByKey[combinationNumber][colorCode] === undefined) {
            dataByKey[combinationNumber][colorCode] = {};
        }
        dataByKey[combinationNumber][colorCode] = colorPercentage;
    }

    console.log(dataByKey);

    //Here is the search bar
    let searchBar = document.createElement("div");
    searchBar.style.backgroundColor = "red";
    searchBar.style.display = "block";
    searchBar.style.height = "100px";
    searchBar.style.width = "100%";
    document.getElementById("code").append(searchBar);

    //Here is the image gallery
    let colorGallery = document.createElement("div");
    colorGallery.style.backgroundColor = "blue";
    colorGallery.style.display = "block";
    colorGallery.style.height = "30px";

        for (let combinationNumber of Object.keys(dataByKey)){
            let combinationContainer = document.createElement("div");
            colorGallery.append(combinationContainer);

            for (let colorCode of Object.keys(dataByKey[combinationNumber])){
                let colorContainer = document.createElement("div");
                colorContainer.innerHTML = "moi";
                colorContainer.style.backgroundColor = colorCode;
                combinationContainer.append(colorContainer);

                for (let colorPercentage of Object.keys(dataByKey[combinationNumber][colorCode])){
                    colorContainer.style.size = colorPercentage;
                }
            }
        }
    document.getElementById("code").append(colorGallery);
    
    }
})
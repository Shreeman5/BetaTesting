class Tab2Viz{

    static Tab2VizRootName
    static Tab2VizData
    static Tab2SelectedButtons

    constructor(sliderMin, sliderMax, rootName, selectedOptions, structureData, classNames, selectedRemovals, tab2Boolean){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab2Viz.Tab2VizRootName = rootName
        this.selectedRemovals = selectedRemovals
        this.tab2Boolean = tab2Boolean
    }

    renderLegend(){
        // console.log('here')
        let svg = d3.select(".dynamic-div-x" ).append("svg")
                    .attr("width", 2960)
                    .attr("height", 430)

        svg.append("text")
            .attr("x", 0)
            .attr("y", 50)
            .attr("font-size", "58")
            .attr("fill", "Black")
            .text("All Organisms Heatmap")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Low Abundance of Organism"))

        const gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#0200b9")
            .attr("stop-opacity", 1);

        gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#00fff3")
                .attr("stop-opacity", 1);

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 90)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "url(#gradient)") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
        .attr("x", 552)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .text("0")

        svg.append("text")
        .attr("x", 952)
        .attr("y", 150)
        .attr("font-size", "38")
        .attr("fill", "Black")
        .attr("text-anchor", "end")
        .text((this.sliderMin).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 190)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Normal Abundance of Organism"))

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 160)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "purple") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMin).toFixed(0))
    
        svg.append("text")
            .attr("x", 952)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text((this.sliderMax).toFixed(0))

        svg.append("text")
            .attr("x", 542)
            .attr("y", 260)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("High Abundance of Organism"))

        const gradient2 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient2")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient2.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#ff0000")
            .attr("stop-opacity", 1);

        gradient2.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#7b0000")
                .attr("stop-opacity", 1);

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 230)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "url(#gradient2)") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 552)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text((this.sliderMax).toFixed(0))
    
        svg.append("text")
            .attr("x", 952)
            .attr("y", 290)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("100")

        svg.append("text")
            .attr("x", 542)
            .attr("y", 330)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Low Abundance of LIO")

        const gradient3 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient3")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient3.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#654321")
            .attr("stop-opacity", 1);

        gradient3.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#d2691e")
                .attr("stop-opacity", 1);
            
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 300)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "url(#gradient3)") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 972)
            .attr("y", 330)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "start")
            .text("High Abundance of LIO; LIO = Low-Indicator Organism")
        
        
        svg.append("text")
            .attr("x", 552)
            .attr("y", 360)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("0")


        svg.append("text")
            .attr("x", 952)
            .attr("y", 360)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("100")

        

        svg.append("text")
            .attr("x", 542)
            .attr("y", 400)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Low Abundance of HIO")

        const gradient4 = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient4")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        gradient4.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#E0FFE0")
            .attr("stop-opacity", 1);

        gradient4.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#003300")
                .attr("stop-opacity", 1);
            
        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 370)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "url(#gradient4)") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        svg.append("text")
            .attr("x", 972)
            .attr("y", 400)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "start")
            .text("High Abundance of HIO; HIO = High-Indicator Organism")

        
        svg.append("text")
            .attr("x", 552)
            .attr("y", 430)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("0")


        svg.append("text")
            .attr("x", 952)
            .attr("y", 430)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("100")


        svg.append("text")
            .attr("x", 1027)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Go Up Hierarchy")


        svg.append("circle")
            .attr("cx", 1342)    // x position of the rectangle
            .attr("cy", 105)    // y position of the rectangle
            .attr("r", 20) // width of the rectangle
            .attr("fill", "black") 

        svg.append("text")
            .attr("x", 1372)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root")
        
        svg.append("text")
            .attr("x", 1027)
            .attr("y", 170)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Click on any node in graph to make that node root.")

        let renderVal = Tab2Viz.Tab2VizRootName.split('__')
        // console.log(renderVal)
        svg.append("text")
            .attr("x", 1027)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
            .attr("x", 1027)
            .attr("y", 270)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used.")
    }

    handleMouseOver(event, fileIndex, p, nodeName, cdfContainerData, transformedData, transformedData2, transformedData3) {

        // console.log("FileIndex: ", fileIndex)

        const hoveredPathId = "path-" + p.data.name + '-' + fileIndex
        // console.log(hoveredPathId)
    
        // // Reset the style of all paths
        d3.selectAll(".sunburst-path")
            .style("stroke", "none")
            .style("stroke-width", 0);
    
        // // Apply the style to the hovered path only
    
        d3.selectAll(".sunburst-path")
            .filter(function(d) {
                // console.log(d)
                return this.id === hoveredPathId;
            })
            .style("stroke", "black")
            .style("stroke-width", 5);
            
        
        let myVar = p.data.name
        let myNames = myVar.split("__")
        let index = myVar.indexOf("_")
        let substringBeforeUnderscore = ''
        if (index !== -1) {
            substringBeforeUnderscore = nameMapping(myVar.substring(0, index));
        } 
    
        let lastIndex = nodeName.lastIndexOf('__')
        let firstIndex = nodeName.indexOf('__')
        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
        let taxonID = nodeName.substring(lastIndex + 2)

        // let cdf = findTaxonCDFbyID(cdfContainerData, taxonID)
        let cdf = findTaxonCDFbyName(cdfContainerData, taxonName)
        
        
        if (fileIndex >= 5){
            if (fileIndex === 5){
                let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                // let myNames = findNamesbyID(transformedData, taxonID)
                let myNames = findNamesbyName(transformedData3, taxonName)
                let myChange = []
                let myChange2 = []

                if (cdf !== null && myWeight !== null){
                    for (let i = 0; i < myWeight.length; i++){
                        if (myWeight[i] < 0){
                            cdf = (Number(cdf) + 0)/2
                            myChange.push('Negative Influence:')
                        }
                        else if (myWeight[i] > 0){ 
                            cdf = (Number(cdf) + 1)/2
                            myChange.push('Positive Influence:')
                        }
                        // names.push(findTaxonNamebyID(transformedData, taxonID))
                    }
                    
                    // console.log(myNames)
                    // console.log(myChange)
                    let text = ''
                    for (let j = 0; j < myChange.length; j++){
                        if (j === myChange.length - 1){
                            text = text + myChange[j] + myNames[j]
                        }
                        else{
                            text = text + myChange[j] + myNames[j] + '<br>'
                        }
                    }
                    cdf = (cdf * 100).toFixed(3) + '%' + '<br>' +  text
                    // console.log(cdf)
                }
                else if (myWeight !== null){
                    let counter = 0
                    for (let i = 0; i < myWeight.length; i++){
                        if (myWeight[i] < 0){
                            counter = (counter + 0)/2
                            myChange2.push('Negative Influence:')
                        }
                        else if (myWeight[i] > 0){ 
                            counter = (counter + 1)/2
                            myChange2.push('Positive Influence:')
                        }
                    }
    
                    let text = ''
                    for (let j = 0; j < myChange2.length; j++){
                        if (j === myChange2.length - 1){
                            text = text + myChange2[j] + myNames[j]
                        }
                        else{
                            text = text + myChange2[j] + myNames[j] + '<br>'
                        }
                    }
                    if (counter <= 0.35){
                        cdf = 'low' + '<br>' + text
                    }
                    else if (counter > 0.35 && counter <= 0.65){
                        cdf = 'normal' + '<br>' + text
                    }
                    else if (counter > 0.65){
                        cdf = 'high' + '<br>' + text
                    }
                }
                else if (cdf !== null){
                    cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
                }
                else{
                    cdf = '0%'
                }
            }
            if (fileIndex === 6 || fileIndex === 7){
                let myWeight
                let myChange = []
                if (fileIndex === 6){
                    myWeight = findTaxonWeightbyName(transformedData, taxonName)
                }
                else if (fileIndex === 7){
                    myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                } 

                if (myWeight === null){
                    if (cdf !== null){
                        cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
                    }
                    else{
                        cdf = '0%'
                    }
                }
                else{
                    if (cdf === null){
                        cdf = 0
                    }
                    
                    let myWeight2 = findTaxonWeightbyName(transformedData3, taxonName)
                    if (myWeight2 !== null){
                        for (let i = 0; i < myWeight2.length; i++){
                            if (myWeight2[i] < 0){
                                cdf = (Number(cdf) + 0)/2
                                myChange.push('Negative Influence:')
                            }
                            else if (myWeight2[i] > 0){ 
                                cdf = (Number(cdf) + 1)/2
                                myChange.push('Positive Influence:')
                            }
                        }
                    }
                    // cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
                    let myNames = findNamesbyName(transformedData3, taxonName)
                    let text = ''
                    for (let j = 0; j < myChange.length; j++){
                        if (j === myChange.length - 1){
                            text = text + myChange[j] + myNames[j]
                        }
                        else{
                            text = text + myChange[j] + myNames[j] + '<br>'
                        }
                    }
                    cdf = (parseFloat(cdf) * 100).toFixed(3) + '%' + '<br>' +  text
                    // if (myWeight > 0){
                    //     cdf = (cdf * myWeight)
                    // }
                    // else{
                    //     cdf = Math.abs((1-cdf) * myWeight)
                    // }
                }
            }
        }
        else{
            if (cdf === null){
                cdf = '0%'
            }
            else{
                cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
            }
        }
    


        // let myVal = findNodeValueByID(cdfContainerData, taxonID)
        let myVal = findNodeValueByName(cdfContainerData, taxonName)
        if (myVal === undefined){
            myVal = 0 + '%'
        }
        else{
            myVal = (myVal * 100).toFixed(6) + '%'
        }
    
    
        let mytext = 'Name : ' + myNames[1] + "<br>" +
            'Relative Abundance in this dataset : ' + myVal+ "<br>" + 
            'Percentile Value : ' + cdf + "<br>" +
            'Rank : ' + substringBeforeUnderscore + "<br>" +
            'NCBI Taxon ID: ' + myNames[2] + "<br>"
    
        tooltip.innerHTML = mytext
        tooltip.style.left = `${event.pageX + 5}px`;
        tooltip.style.top = `${event.pageY + 5}px`;
        tooltip.style.visibility = 'visible';
    }

    mouseout(event, p) {
        // console.log('here')
        d3.selectAll(".sunburst-path").each(function(d, i) {
                var element = d3.select(this);
                element.style("stroke", element.attr("original-stroke"));
                element.style("stroke-width", element.attr("original-stroke-width"));
            });
    
                                        
        const tooltip = document.getElementById('tooltip');
        tooltip.style.visibility = 'hidden';
    }



    fillDropDown(){
        const div = document.getElementById('selectedContainer-T2');
        const buttons = div.querySelectorAll('button');
        // console.log('A:', buttons.length);


        if (buttons.length === 0 || this.tab2Boolean === 'new'){
            // console.log("I'm here")
            let diseaseNames = ["Resistant Starch", "Iron", "Vitamin D", "Omega-3 Fatty Acids", "Intermittent Fasting"]//this.structureData[2].map(item => item.Name);
            // console.log('A:', diseaseNames)
            const selectBox = document.getElementById('selectBox-T2');
            let selectedValues = [];
            let inputField = document.getElementById('selectInput-T2');
            const selectedContainer = document.getElementById('selectedContainer-T2');
            const that = this;  // Save the current context

            function updateSelectedContainer() {
                // console.log('there')
                selectedContainer.innerHTML = '';
                selectedValues.forEach((value, index) => {
                    const span = document.createElement('span');
                    span.textContent = value;

                    const removeButton = document.createElement('button');
                    removeButton.textContent = 'x';
                    removeButton.addEventListener('click', function() {
                        selectedValues.splice(index, 1);
                        updateSelectedContainer();
                        Tab2Viz.Tab2SelectedButtons = selectedValues

                        if (selectedValues.length === 0){
                            Tab2Viz.Tab2VizRootName = 'sk__Bacteria__2'
                        }
                        removeVizDivs();
                        renderVizDivs(selectedValues.length, 'tab2');

                        
                        // console.log('A: ', selectedValues)
                        that.render(selectedValues);
                    });

                    span.appendChild(removeButton);
                    selectedContainer.appendChild(span);
                });
            }

            function initializeOptions() {
                // console.log('here')
                selectBox.innerHTML = ''; // Clear any existing options
                diseaseNames.forEach(option => {
                    let div = document.createElement('div');
                    div.textContent = option;
                    div.addEventListener('click', function() {
                        if (!selectedValues.includes(this.innerText)) {
                            selectedValues.push(this.innerText);
                            updateSelectedContainer();
                        }
                        inputField.value = ''; // Clear input field after selection
                        selectBox.style.display = 'none';
                        Tab2Viz.Tab2SelectedButtons = selectedValues
                        removeVizDivs();
                        renderVizDivs(selectedValues.length, 'tab2');
                        // console.log('B: ', selectedValues)
                        that.render(selectedValues);
                    });
                    selectBox.appendChild(div);
                });
            }

            inputField.addEventListener('input', function() {
                let filter = this.value.toUpperCase();
                let options = selectBox.getElementsByTagName('div');
                for (let i = 0; i < options.length; i++) {
                    let txtValue = options[i].textContent || options[i].innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        options[i].style.display = "";
                    } else {
                        options[i].style.display = "none";
                    }
                }
            });

            inputField.addEventListener('focus', function() {
                selectBox.style.display = 'block';
                initializeOptions();
            });

            document.addEventListener('click', function(event) {
                if (!event.target.matches('#selectInput-T2') && !event.target.closest('.select-items-T2')) {
                    selectBox.style.display = 'none';
                }
            });

            // Ensure initial options are displayed
            initializeOptions();
            updateSelectedContainer();
        }
        else{
            // console.log("I'm here2")
            removeVizDivs();

            // console.log('A:', Tab2Viz.Tab2SelectedButtons.length)
            renderVizDivs(Tab2Viz.Tab2SelectedButtons.length, 'tab2');
            this.render(Tab2Viz.Tab2SelectedButtons);
        }
    }

    transformObject(obj, cdfContainerData) {
        const transformedObjects = [];
        Object.keys(obj).forEach((key, index) => {
            if (index > 1){
                let value = obj[key]

                const firstCloseBracketIndex = value.indexOf(']')
                const firstOpenParenIndex = value.indexOf('(');
                const result = value.substring(firstCloseBracketIndex+1, firstOpenParenIndex).trim();

                let match2 = value.match(/\[(\d+)\]/);
                let number = match2 ? match2[1] : null;
                if (number === null){
                    number = '620'
                }

                let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                let number2 = match3 ? match3[1] : null;


                const transformedObj = {};
                transformedObj.organism = result; // Example transformation
                transformedObj.ncbi_taxon_id = number; // Example transformation for key2
                transformedObj.weight = number2; // Example transformation for key3
                transformedObjects.push(transformedObj);
            }
        });
        return transformedObjects;
    }


    transformObject2(obj) {
        const transformedObjects = [];
        // console.log(obj.Name)
        Object.keys(obj).forEach((key, index) => {
            if (index > 1) {
                let value = obj[key];
    
                const firstCloseBracketIndex = value.indexOf(']');
                const firstOpenParenIndex = value.indexOf('(');
                const result = value.substring(firstCloseBracketIndex + 1, firstOpenParenIndex).trim();
    
                let match2 = value.match(/\[(\d+)\]/);
                let number = match2 ? match2[1] : '620'; // Default to '620' if not found
    
                let match3 = value.match(/\((-?\d+(?:\.\d+)?)\)/);
                let number2 = match3 ? match3[1] : null;
    
                if (result !== ' ') {
                    let existingObj = transformedObjects.find(obj => obj.organism === result);
    
                    if (existingObj) {
                        if (!Array.isArray(existingObj.weight)) {
                            existingObj.weight = [existingObj.weight];
                            existingObj.action = [obj.Name];
                        }
                        existingObj.weight.push(number2);
                        existingObj.action.push(obj.Name);
                    } else {
                        const transformedObj = {};
                        transformedObj.organism = result; // Example transformation
                        transformedObj.ncbi_taxon_id = number; // Example transformation for key2
                        transformedObj.weight = [number2]; // Example transformation for key3
                        transformedObj.action = [obj.Name]
                        transformedObjects.push(transformedObj);
                    }
                }
            }
        });
        // console.log(transformedObjects)
        return transformedObjects;
    }

    transformArray2(X){
        const newArray = [];
        for (let i = 0; i < X.length; i++) {
            if (i < 3){
                newArray.push(X[i]);
            }
            else{
                newArray.push(X[i]);
                // newArray.push(X[i]);
            }
        }
        return newArray;
    }

    transformArray(X) {
        const newArray = [];
        for (let i = 0; i < X.length; i++) {
            newArray.push(X[i]);
            newArray.push(X[i]);
        }
        return newArray;
    }


    
    render(diseaseName){
        // console.log(diseaseName)
        // console.log(this.structureData)

        let sliderMin = this.sliderMin/100
        let sliderMax = this.sliderMax/100

        let csvData = this.structureData[1]
        let myRow
        for (const row in csvData){
            if (csvData[row].Name === 'Crohn Disease'){
                myRow = csvData[row]
            }
        }
        let transformedData = this.transformObject(myRow, this.structureData[2]);
        // console.log(transformedData)

        let csvData2 = this.structureData[1]
        let myRow2
        for (const row2 in csvData2){
            if (csvData2[row2].Name === 'Blood Pressure'){
                myRow2 = csvData2[row2]
            }
        }
        let transformedData2 = this.transformObject(myRow2);
        // console.log(transformedData2)

        let csvData3 = this.structureData[2];
        let transformedData3 = [];

        for (const name of diseaseName) {
            let myRow;

            // Find the row matching the current name
            for (const row of csvData3) {
                if (row.Name === name) {
                    myRow = row;
                    break; // Exit loop once the matching row is found
                }
            }

            // If a matching row is found, transform it and add to transformedData
            if (myRow) {
                let result = this.transformObject2(myRow);
        
                // If result is an array, flatten it and push items individually
                if (Array.isArray(result)) {
                    transformedData3.push(...result);
                } else {
                    transformedData3.push(result);
                }
            }
        }


        const combinedResults = {};

        transformedData3.forEach(item => {
            if (!combinedResults[item.organism]) {
                combinedResults[item.organism] = {
                    ncbi_taxon_id: item.ncbi_taxon_id,
                    weight: [],
                    action: []
                };
            }
            combinedResults[item.organism].weight.push(...item.weight);
            combinedResults[item.organism].action.push(...item.action);
        });

        // Convert the combinedResults object back to an array if needed
        const resultArray = Object.keys(combinedResults).map(key => ({
            organism: key,
            ncbi_taxon_id: combinedResults[key].ncbi_taxon_id,
            weight: combinedResults[key].weight,
            action: combinedResults[key].action
        }));

        // console.log(resultArray);

        transformedData3 = resultArray

        // console.log(transformedData3)




        let selectedOptionsArray = this.transformArray(this.selectedOptions)

        let selectedDataArray = this.transformArray2(this.structureData)
        // console.log(selectedDataArray)
        

        for (let i = 0; i < this.classNames.length; i++) {
            let data = this.structureData[0]

            let svg = d3.select(this.classNames[i]).append("svg")
                    .attr("width", 1150)
                    .attr("height", 1220)
                    .append("g")
                    .attr("transform", "translate(" + 1150 / 2 + "," + 1220 / 2 + ")");
            
            let word = this.selectedOptions[i]
            // console.log(word)

            if (i === 0){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "58")
                .attr("fill", "black")
                .text('All Organisms')
            }
            else if (i === 1){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "58")
                .attr("fill", "black")
                .text('Top Association 1: Crohns')
            }
            else if (i === 2){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "58")
                .attr("fill", "black")
                .text('Top Association 2: Blood Pressure')
            }
            else if (i === 3){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "58")
                .attr("fill", "black")
                .text('All Organisms -- Future')
            }
            else if (i === 4){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "58")
                .attr("fill", "black")
                .text('Crohns -- Future')
            }
            else if (i === 5){
                svg.append("text")
                .attr("x", -350)
                .attr("y", -550)
                .attr("font-size", "58")
                .attr("fill", "black")
                .text('Blood Pressure -- Future')
            }
            

            
            if (Tab2Viz.Tab2VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                // console.log('X:', Tab1Viz.Tab1VizRootName)
                enableCheckboxes()
            }

            // if (this.rootName !== 'sk__Bacteria__2'){
            // console.log(data)
            data = findChildByName(data, Tab2Viz.Tab2VizRootName)
            // console.log(data)


            let that = this
            function processData(data) {
                if (data && typeof data === 'object' && data.children && Array.isArray(data.children)) {
                  assignValues(data);
                } else {
                  console.error("The data structure is not recognized or does not have a 'children' property.");
                }
            }
              
              // Start processing the data
            processData(data);

            // Create the initial hierarchy and pack layout
            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let partition = d3.partition()
                    .size([2 * Math.PI, 100]);

            let root = partition(hierarchy);

            let arr = this.selectedRemovals
            // Reassign children and remove nodes at depth x
            for (let i = 0; i < arr.length; i++){
                let numbers = arr[i]
                let w = numbers[0]
                let x = numbers[1]
                root = reassignChildren(root, w, x); 
                root = adjustDepths(root, x); // Adjust depths if needed
                root = partition(root); // Reapply pack layout
            }
            
            let findIN = new FindIndicators(this.structureData[1])
            let [myArray, myArray2, myArray3, myArray4] = findIN.returnIndicators()
            calculateLeafDescendantsAndNames(root, myArray, myArray2, myArray3, myArray4);
            let maxNodeName = findMaxValueNodeAtDepth1(root, 'nameFoundTotal');

            sortHierarchy(root, maxNodeName);

            root.each(function(d) {
                if (d.children) {
                    // Calculate the total number of leaf descendants for all children
                    var totalLeafDescendants = d.children.reduce(function(sum, child) {
                        return sum + child.totalLeafDescendants;
                    }, 0);

                    // Iterate over the children and assign size proportional to their leaf descendants count
                    var currentAngle = d.x0;
                    d.children.forEach(function(child) {
                        var childWeight = child.totalLeafDescendants;
                        var angleRange = (childWeight / totalLeafDescendants) * (d.x1 - d.x0);

                        // Calculate the start and end angle for the child
                        child.x0 = currentAngle;
                        child.x1 = currentAngle + angleRange;

                        // Update the current angle
                        currentAngle += angleRange;
                    });
                }
            });
 
            let arc = createArc(findMaxDepth(root) - 1)//checkedLevels

            // cons
            let colorScaleLow = d3.scaleLinear()
                       .domain([0, sliderMin])
                       .range(["#0200b9", "#00fff3"]);
    
            let colorScaleHigh = d3.scaleLinear()
                        .domain([sliderMax, 1])
                        .range(["#ff0000", "#7b0000"]);

            let indicatorLow = d3.scaleLinear()
                        .domain([0, 1])
                        .range(["#654321", "#d2691e"]);
            
            let indicatorHigh = d3.scaleLinear()
                        .domain([0, 1])
                        .range(["#E0FFE0", "#003300"]);


            // that = this
            svg.selectAll("path")
                .data(root.descendants().slice(1))
                .enter().append("path")
                .classed("sunburst-path", true) // Add a class to each path
                .attr("id", (d) => "path-" + d.data.name + "-" + (i+2)) // Add a unique ID to each path
                .attr("d", arc)
                .style("fill", function(d) { 
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        
                        if (cdf === null){
                            // console.log('yes')
                            return "white"
                        }
                        else{
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                if (sliderMin === 0){
                                    return "purple"
                                }
                                else{
                                    return colorScaleLow(cdf)
                                }
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                // console.log('A:', cdf)
                                if (sliderMax === 1){
                                    return "purple"
                                }
                                else{
                                    return colorScaleHigh(cdf)
                                }
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                    }
                    if (i === 1 || i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 1){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 2){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "white"
                        }
                        else{
                            // console.log('A:', myWeight)
                            // console.log(taxonName)
                            let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                            // console.log('A: ', myWeight)
                            // console.log('B: ', cdf)
                            // console.log('times')
                            if (cdf === null){
                                cdf = 0
                            }


                            // if (cdf < 0){
                            //     return colorScaleLow(0)
                            // }
                            // else if (cdf >= 0 && cdf < sliderMin){
                            //     if (sliderMin === 0){
                            //         return "purple"
                            //     }
                            //     else{
                            //         return colorScaleLow(cdf)
                            //     }
                            // }
                            // else if (cdf >= sliderMax && cdf <= 1){
                            //     // console.log('A:', cdf)
                            //     if (sliderMax === 1){
                            //         return "purple"
                            //     }
                            //     else{
                            //         return colorScaleHigh(cdf)
                            //     }
                            // }
                            // else if (cdf > 1){
                            //     return colorScaleHigh(1)
                            // }
                            // else{
                            //     return "purple"
                            // }
                            // if (myWeight > 0){
                            //     let value = cdf * myWeight
                            //     // console.log('A: ', value)
                            //     return indicatorHigh(value)
                            // }
                            // else{
                            //     // console.log('here2')
                            //     let value = Math.abs((1-cdf) * myWeight)
                            //     // console.log('B: ', value)
                            //     return indicatorLow(value)
                            // }
                            if (myWeight > 0){
                                return indicatorHigh(cdf)
                            }
                            else{
                                return indicatorLow(cdf)
                            }
                        }
                    }
                    if (i === 3){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)

                        // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                        let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)

                        if (cdf !== null && myWeight !== null){
                            // console.log('C: ', cdf)
                            // console.log('b:', myWeight)
                            // console.log('E: ', myname)

                            for (let i = 0; i < myWeight.length; i++){
                                if (myWeight[i] < 0){
                                    cdf = (Number(cdf) + 0)/2
                                }
                                else if (myWeight[i] > 0){ 
                                    cdf = (Number(cdf) + 1)/2
                                }
                            }
                            // console.log('D: ', cdf)
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                return colorScaleLow(cdf)
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                return colorScaleHigh(cdf)
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else if (myWeight !== null){
                            // console.log('B:', myWeight)
                            // console.log('F: ', myname)
                            let number = 0
                            for (let i = 0; i < myWeight.length; i++){
                                if (myWeight[i] < 0){
                                    number = (number + 0)/2
                                }
                                else if (myWeight[i] > 0){ 
                                    number = (number + 1)/2
                                }
                            }

                            if (number < 0){
                                return colorScaleLow(0)
                            }
                            else if (number >= 0 && number < sliderMin){
                                return colorScaleLow(number)
                            }
                            else if (number >= sliderMax && number <= 1){
                                return colorScaleHigh(number)
                            }
                            else if (number > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else if (cdf !== null){

                            // console.log('C;', myWeight)
                            if (cdf < 0){
                                return colorScaleLow(0)
                            }
                            else if (cdf >= 0 && cdf < sliderMin){
                                return colorScaleLow(cdf)
                            }
                            else if (cdf >= sliderMax && cdf <= 1){
                                return colorScaleHigh(cdf)
                            }
                            else if (cdf > 1){
                                return colorScaleHigh(1)
                            }
                            else{
                                return "purple"
                            }
                        }
                        else{
                            return "white"
                        }
                    }
                    if (i === 4 || i === 5){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 4){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 5){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "white"
                        }
                        else{
                            let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                            if (cdf === null){
                                cdf = 0
                            }
                            
                            let myWeight2 = findTaxonWeightbyName(transformedData3, taxonName)
                            // console.log(myWeight2)
                            // if (taxonName === 'Oscillospiraceae'){
                            //     console.log('Index: ', i)
                            //     console.log('A: ', cdf)   
                            //     console.log('Weight: ', myWeight)
                            //     console.log('Weights: ', myWeight2)
                            // }
                            if (myWeight2 !== null){
                                for (let i = 0; i < myWeight2.length; i++){
                                    if (myWeight2[i] < 0){
                                        cdf = (Number(cdf) + 0)/2
                                    }
                                    else if (myWeight2[i] > 0){ 
                                        cdf = (Number(cdf) + 1)/2
                                    }
                                }
                            }
                            // if (taxonName === 'Oscillospiraceae'){
                            //     console.log('B: ', cdf)
                            // }

                            
                            // if (cdf < 0){
                            //     return colorScaleLow(0)
                            // }
                            // else if (cdf >= 0 && cdf < sliderMin){
                            //     if (sliderMin === 0){
                            //         return "purple"
                            //     }
                            //     else{
                            //         return colorScaleLow(cdf)
                            //     }
                            // }
                            // else if (cdf >= sliderMax && cdf <= 1){
                            //     // console.log('A:', cdf)
                            //     if (sliderMax === 1){
                            //         return "purple"
                            //     }
                            //     else{
                            //         return colorScaleHigh(cdf)
                            //     }
                            // }
                            // else if (cdf > 1){
                            //     return colorScaleHigh(1)
                            // }
                            // else{
                            //     return "purple"
                            // }
                            // if (myWeight > 0){
                            //     let value = cdf * myWeight
                            //     console.log(indicatorHigh(value))
                            //     return indicatorHigh(value)
                            // }
                            // else{
                            //     let value = Math.abs((1-cdf) * myWeight)
                            //     // if (taxonName === 'Oscillospiraceae'){
                            //     //     console.log("value:", value)
                            //     // }
                            //     return indicatorLow(value)
                            // }
                            if (myWeight > 0){
                                return indicatorHigh(cdf)
                            }
                            else{
                                return indicatorLow(cdf)
                            }
                        }
                    }
                })
                .style("stroke", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        // let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)

                        if (cdf === null){
                            // console.log('yes')
                            return "grey"
                        }
                        else{
                            return "black"
                        }
                    }
                    if (i === 1 || i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 1){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 2){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "grey"
                        }
                        else{
                            return "black"
                        }
                    }
                    if (i === 3){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "grey"
                            }
                            else{
                                return "black"
                            }
                        }
                        else{
                            return "black"
                        }
                    }
                    if (i === 4 || i === 5){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 4){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 5){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "grey"
                        }
                        else{
                            return "black"
                        }
                    }
                })
                .style("opacity", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        // let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        // console.log(cdf)
                        if (cdf === null){
                            // console.log('yes')
                            return "0.1"
                        }
                        else{
                            return "1"
                        }
                    }
                    if (i === 1 || i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 1){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 2){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.1"
                        }
                        else{
                            return "1"
                        }
                    }
                    if (i === 3){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "0.1"
                            }
                            else{
                                return "1"
                            }
                        }
                        else{
                            return "1"
                        }
                    }
                    if (i === 4 || i === 5){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 4){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 5){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.1"
                        }
                        else{
                            return "1"
                        }
                    }
                }) 
                .style("stroke-width", function(d){
                    if (i === 0){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)
                        // let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)
                        let cdf = findTaxonCDFbyName(that.structureData[3], taxonName)
                        // console.log(cdf)
                        if (cdf === null){
                            // console.log('yes')
                            return "0.2"
                        }
                        else{
                            return "3"
                        }
                    }
                    if (i === 1 || i === 2){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 1){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 2){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.2"
                        }
                        else{
                            return "3"
                        }
                    }
                    if (i === 3){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight = findTaxonWeightbyName(transformedData3, taxonName)
                        if (myWeight === null){         
                            // let cdf = findTaxonCDFbyID(selectedDataArray[i+3], taxonID)
                            let cdf = findTaxonCDFbyName(selectedDataArray[3], taxonName)
                            if (cdf === null){
                                return "0.1"
                            }
                            else{
                                return "1"
                            }
                        }
                        else{
                            return "5"
                        }
                    }
                    if (i === 4 || i === 5){
                        let nodeName = d.data.name
                        let lastIndex = nodeName.lastIndexOf('__')
                        let firstIndex = nodeName.indexOf('__')
                        let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                        let taxonID = nodeName.substring(lastIndex + 2)

                        let myWeight
                        if (i === 4){
                            myWeight = findTaxonWeightbyName(transformedData, taxonName)
                        }
                        else if (i === 5){
                            myWeight = findTaxonWeightbyName(transformedData2, taxonName)
                        } 

                        if (myWeight === null || myWeight === '0.0' || myWeight === '-0.0'){
                            return "0.2"
                        }
                        else{
                            let myWeight2 = findTaxonWeightbyName(transformedData3, taxonName)
                            if (myWeight2 !== null){
                                return "5"
                            }
                            return "3"
                        }
                    }
                })
                .on("click", function(event, p){
                    // console.log('Y: ', p.children)

                    let found = 0
                    let myArr = p.children
                    for (let i = 0; i < myArr.length; i++) {
                        if (myArr[i].hasOwnProperty('children')) {
                            found = 1
                            break
                        }
                    } 
                    if (found = 1){

                        // console.log('here')
                        Tab2Viz.Tab2VizRootName = p.data.name
                        // console.log('X:', Tab1Viz.Tab1VizRootName)
                        // disableCheckboxes()
                        that.selectedRemovals = []
                        removeVizDivs()
                        renderVizDivs(that.selectedOptions.length, 'tab2')
                        removeLegendDivs()
                        renderLegendDivs()
                        that.renderLegend()
                        that.render(diseaseName)
                    }
                })
                .on("mouseover", function (event, d){
                    let nodeName = d.data.name
                    that.handleMouseOver(event, i+2, d, nodeName, that.structureData[3], transformedData, transformedData2, transformedData3)
                })
                .on("mouseout", that.mouseout)


            d3.selectAll(".sunburst-path").each(function(d, i) {
                var element = d3.select(this);
                element.attr("original-stroke", element.style("stroke"));
                element.attr("original-stroke-width", element.style("stroke-width"));
            });
            
            let circle = svg.append("circle")
                .attr("cx", 0) // x-coordinate of the center
                .attr("cy", 0) // y-coordinate of the center
                .attr("r", 30)   // radius of the circle
                .attr("fill", "black") // fill color of the circle
                .on("click", function(event, p){
                    // console.log('B:', unChangingData)
                    // console.log('D:', Tab2Viz.Tab2VizRootName)
                    if (Tab2Viz.Tab2VizRootName !== undefined){
                        if (Tab2Viz.Tab2VizRootName === 'sk__Bacteria__2'){
                            that.selectedRemovals = []
                            enableCheckboxes2()
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab2')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render(diseaseName)
                        }
                        else{
                            // console.log('A:', Tab2Viz.Tab1VizData[i+2])
                            // console.log('B;', Tab2Viz.Tab1VizRootName)
                            let parent = findParentByName(Tab2Viz.Tab2VizData[0], Tab2Viz.Tab2VizRootName);
                            // console.log('E: ', parent.name)
                            Tab2Viz.Tab2VizRootName = parent.name
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab2')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render(diseaseName)
                            // clicked(parent.name, sliderMin*100, sliderMax*100, indicatorValue)
                        } 
                    }
                })
                .append("title")
                .text(function(){
                    if (Tab2Viz.Tab2VizRootName === undefined){
                        return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
                    }
                    else{
                        let myNames = Tab2Viz.Tab2VizRootName.split('__')
                        return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
                    }
                })
            
        }
    }


}
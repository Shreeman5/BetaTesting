class Tab7Viz{

    static Tab7VizRootName
    static Tab7VizData

    constructor(rootName, selectedOptions, structureData, classNames, selectedRemovals){
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab7Viz.Tab7VizRootName = rootName
        this.selectedRemovals = selectedRemovals
    }


    renderLegend(){
        let svg = d3.select(".dynamic-div-x" ).append("svg")
                    .attr("width", 2960)
                    .attr("height", 410)

        svg.append("text")
            .attr("x", 0)
            .attr("y", 50)
            .attr("font-size", "58")
            .attr("fill", "Black")
            .text("Indicator Organisms Heatmap")

        svg.append("text")
            .attr("x", 612)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text(("Low Abundance Indicator Organism"))

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 622)    // x position of the rectangle
            .attr("y", 90)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "blue") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 612)
            .attr("y", 160)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("High Abundance Indicator Organism")

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 622)    // x position of the rectangle
            .attr("y", 130)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "red") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")


        svg.append("text")
            .attr("x", 612)
            .attr("y", 200)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .attr("text-anchor", "end")
            .text("Non-Indicator Organism")

        // Append a rectangle to the SVG container and apply the gradient
        svg.append("rect")
            .attr("x", 622)    // x position of the rectangle
            .attr("y", 170)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "white") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")

        

        svg.append("text")
            .attr("x", 1047)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Go Up Hierarchy")


        svg.append("rect")
            .attr("x", 1342)    // x position of the rectangle
            .attr("y", 85)    // y position of the rectangle
            .attr("width", 40) // width of the rectangle
            .attr("height", 40) // width of the rectangle
            .attr("fill", "black") 

        svg.append("text")
            .attr("x", 1392)
            .attr("y", 120)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root")
        
        svg.append("text")
            .attr("x", 1047)
            .attr("y", 170)
            .attr("font-size", "38")
            .attr("fill", "Black")
            // .attr("text-anchor", "end")
            .text("Click on any node in graph to make that node root.")

        // console.log(Tab7Viz.Tab7VizRootName)
        let renderVal = Tab7Viz.Tab7VizRootName.split('__')
        console.log(renderVal)
        svg.append("text")
            .attr("x", 1047)
            .attr("y", 220)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Current Root = " + renderVal[1] + "[" + nameMapping(renderVal[0]) + "]")

        svg.append("text")
            .attr("x", 1047)
            .attr("y", 270)
            .attr("font-size", "38")
            .attr("fill", "Black")
            .text("Bacteria needs to be the root of the hierarchy for the checkboxes functionality to be used.")
    }

    fillDropDown(){
        let diseaseNames = this.structureData[1].map(item => item.Name)
        const selectBox = document.getElementById('selectBox-T5');
        // console.log(document.getElementById('selectInput-T2').value)
        let val = document.getElementById('selectInput-T5').value
        if (val === ''){
            selectBox.innerHTML = ''; // Clear any existing options
            let selectedValue = ''
            let that = this
            diseaseNames.forEach(option => {
                let div = document.createElement('div');
                div.textContent = option;
                div.addEventListener('click', function() {
                    document.getElementById('selectInput-T5').value = this.innerText;
                    selectedValue = this.innerText;
                    selectBox.style.display = 'none';
                    // console.log(selectedValue)
                    removeVizDivs()
                    renderVizDivs(that.selectedOptions.length, 'tab7')
                    that.render(selectedValue)
                });
                selectBox.appendChild(div);
            });
        }
        else{
            removeVizDivs()
            renderVizDivs(this.selectedOptions.length,'tab7')
            this.render(val)
        }


        document.getElementById('selectInput-T5').addEventListener('keyup', function() {
            let filter = this.value.toUpperCase();
            let selectBox = document.getElementById('selectBox-T5');
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

        document.getElementById('selectInput-T5').addEventListener('focus', function() {
            document.getElementById('selectBox-T5').style.display = 'block';
        });

        document.addEventListener('click', function(event) {
            if (!event.target.matches('#selectInput-T5')) {
                document.getElementById('selectBox-T5').style.display = 'none';
            }
        });

        // this.render(diseaseNames)
    }

    transformObject(obj) {
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


    reassignChildren(root, w, x) {
        root.each(node => {
            if (node.depth === x && node.children) {
                node.children.forEach(child => {
                    let ancestor = node.parent;
                    while (ancestor && ancestor.depth !== w) {
                        ancestor = ancestor.parent;
                    }
                    if (ancestor) {
                        ancestor.children = ancestor.children || [];
                        ancestor.children.push(child);
                        child.parent = ancestor;
                    }
                });
                if (node.parent) {
                    node.parent.children = node.parent.children.filter(n => n !== node);
                }
            }
        });
    
        // Remove nodes at depth x after reassigning their children
        root.eachBefore(node => {
            if (node.depth === x) {
                if (node.parent) {
                    node.parent.children = node.parent.children.filter(n => n !== node);
                }
            }
        });
    
        // Clean up any nodes with empty children arrays
        root.eachBefore(node => {
            if (node.children && node.children.length === 0) {
                delete node.children;
            }
        });
    
        return root;
    }
    
    adjustDepths(root, removedDepth) {
        root.each(node => {
            if (node.depth > removedDepth) {
                node.depth -= 1;
            }
        });
        return root;
    }
    
    
    // Function to recalculate the values of the nodes
    // recalculateValues(root) {
    //     root.each(node => {
    //         node.value = node.children ? node.children.length : 0;
    //         // console.log(`Node: ${node.data.name}, Value: ${node.value}`); // Debugging line
    //     });
    //     // Ensure sum is recalculated based on updated values
    //     root.sum(d => d.value).sort((a, b) => b.value - a.value);
    //     console.log('X:', root)
    //     return root;
    // }

    assignValues(node) {
        if (!node.children || node.children.length === 0) {
          // Leaf node
          node.value = 1; // or another default value if necessary
        } else {
          // Non-leaf node
        //   node.value = node.children.length;
          // Recursively process children
          for (let child of node.children) {
            this.assignValues(child);
          }
        }
    }


    handleMouseOver(event, fileIndex, p, nodeName, cdfContainerData) {

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
        if (cdf === null){
            cdf = '0%'
        }
        else{
            cdf = (parseFloat(cdf) * 100).toFixed(3) + '%'
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


    render(diseaseName){
        // console.log(diseaseName)
        // console.log(this.structureData)
        let csvData = this.structureData[1]
        let myRow
        for (const row in csvData){
            if (csvData[row].Name === diseaseName){
                myRow = csvData[row]
            }
        }
        // console.log(myRow)

        let transformedData = this.transformObject(myRow);
        // console.log(transformedData)


        for (let i = 0; i < this.classNames.length; i++) {
            let data = this.structureData[0]

            let svg = d3.select(this.classNames[i]).append("svg")
                    .attr("width", 1150)
                    .attr("height", 1220)
                    .attr("viewBox", [0, 0, 1150, 1220])
                    .style("font", "30px sans-serif");
            
            let word = this.selectedOptions[i]
            // console.log(word)

            svg.append("text")
                .attr("x", 0)
                .attr("y", 25)
                .attr("font-size", "34")
                .attr("fill", "black")
                .text(word)

            if (Tab7Viz.Tab7VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }

            data = findChildByName(data, Tab7Viz.Tab7VizRootName)
            console.log(data)

            let that = this
            function processData(data) {
                if (data && typeof data === 'object' && data.children && Array.isArray(data.children)) {
                  that.assignValues(data);
                } else {
                  console.error("The data structure is not recognized or does not have a 'children' property.");
                }
            }
              
              // Start processing the data
            processData(data);
            console.log(data)

            // let arr = [[1,2], [1,2], [1,2], [3,4]]

            // Create the initial hierarchy and pack layout
            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let pack = d3.pack()
                .size([1150, 1150])
                .padding(3);

            let root = pack(hierarchy);
            // let finalRoot

            let arr = this.selectedRemovals
            // let finalRoot
            // Reassign children and remove nodes at depth x
            for (let i = 0; i < arr.length; i++){
                let numbers = arr[i]
                let w = numbers[0]
                let x = numbers[1]
                root = this.reassignChildren(root, w, x); // Modify hierarchy
                // console.log("Before recalculation:", root);
                // root = this.recalculateValues(root); // Update node values based on number of children
                // console.log("After recalculation:", root);
                root = this.adjustDepths(root, x); // Adjust depths if needed
                root = pack(root); // Reapply pack layout
            }
            console.log(root)

            // for (let i = 0; i < arr.length; i++){
            //     let numbers = arr[i]
            //     let w = numbers[0]
            //     let x = numbers[1]
            //     root = this.reassignChildren(root, w, x); // Modify hierarchy
            //     // console.log("Before recalculation:", root);
            //     // root = this.recalculateValues(root); // Update node values based on number of children
            //     // console.log("After recalculation:", root);
            //     root = this.adjustDepths(root, x); // Adjust depths if needed
            //     root = pack(root); // Reapply pack layout
            // }
            
            
            svg.selectAll("circle")
                .data(root.descendants().slice(0)) // Start from index 1 to skip the root node
                .join("circle")
                .classed("sunburst-path", true) // Add a class to each path
                .attr("id", (d) => "path-" + d.data.name + "-" + (i+2)) // Add a unique ID to each path
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", function(d){
                    return d.r
                })
                .attr("fill", function(d){
                    if (d.depth === 0){
                        return "white"
                    }
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)

                    // let myWeight = findTaxonWeightbyID(transformedData, taxonID)
                    let myWeight = findTaxonWeightbyName(transformedData, taxonName)
                    
                    if (myWeight === null){
                        return "white"
                    }
                    else{
                        if (myWeight > 0){
                            // console.log('here')
                            return "red"
                        }
                        else{
                            // console.log('here2')
                            return "blue"
                        }
                        // let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)

                        // if (cdf === null){
                        //     return "white"
                        // }
                        // else{
                        //     if (myWeight > 0){
                        //         return "red"
                        //     }
                        //     else{
                        //         return "blue"
                        //     }
                        // }
                    }
                })
                .style("stroke", function(d){
                    
                    
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)

                    // let myWeight = findTaxonWeightbyID(transformedData, taxonID)
                    let myWeight = findTaxonWeightbyName(transformedData, taxonName)

                    if (myWeight === null){
                        return "grey"
                    }
                    else{
                        return "black"
                        // let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)
                        // let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)

                        // if (cdf === null){
                        //     return "grey"
                        // }
                        // else{
                        //     return "black"
                        // }
                    }
                })
                .style("opacity", function(d){
                    let nodeName = d.data.name
                    let lastIndex = nodeName.lastIndexOf('__')
                    let firstIndex = nodeName.indexOf('__')
                    let taxonName = nodeName.substring(firstIndex+2, lastIndex)
                    let taxonID = nodeName.substring(lastIndex + 2)

                    // let myWeight = findTaxonWeightbyID(transformedData, taxonID)
                    let myWeight = findTaxonWeightbyName(transformedData, taxonName)

                    if (myWeight === null){
                        return "0.1"
                    }
                    else{
                        return "1"
                        // let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)
                        // let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)

                        // if (cdf === null){
                        //     return "0.1"
                        // }
                        // else{
                        //     return "1"
                        // }
                    }
                }) 
                .style("stroke-width", function(d){
                    if (d.depth === 0){
                        return "5"
                    }
                    return "1"
                })
                .on("mouseover", function (event, d){
                    let nodeName = d.data.name
                    that.handleMouseOver(event, i+2, d, nodeName, that.structureData[i+2])
                })
                .on("mouseout", that.mouseout)
                .on("click", function(event, p){
                    let found = 0
                    let myArr = p.children
                    for (let i = 0; i < myArr.length; i++) {
                        if (myArr[i].hasOwnProperty('children')) {
                            found = 1
                            break
                        }
                    } 
                    if (found = 1){
                        Tab7Viz.Tab7VizRootName = p.data.name
                        that.selectedRemovals = []
                        removeVizDivs()
                        renderVizDivs(that.selectedOptions.length, 'tab7')
                        removeLegendDivs()
                        renderLegendDivs()
                        that.renderLegend()
                        that.render(diseaseName)
                    }
                })


                d3.selectAll(".sunburst-path").each(function(d, i) {
                    var element = d3.select(this);
                    element.attr("original-stroke", element.style("stroke"));
                    element.attr("original-stroke-width", element.style("stroke-width"));
                });
            
                svg.append("rect")
                .attr("x", 0) // x-coordinate of the center
                .attr("y", 40) // y-coordinate of the center
                .attr("width", 90)   // radius of the circle
                .attr("height", 90)
                .attr("fill", "black") // fill color of the circle
                .on("click", function(event, p){
                    // console.log('B:', unChangingData)
                    console.log('D:', Tab7Viz.Tab7VizRootName)
                    if (Tab7Viz.Tab7VizRootName !== undefined){
                        if (Tab7Viz.Tab7VizRootName === 'sk__Bacteria__2'){
                            that.selectedRemovals = []
                            enableCheckboxes2()
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab7')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render(diseaseName)
                        }
                        else{
                            console.log('A:', Tab7Viz.Tab7VizData[i+2])
                            console.log('B;', Tab7Viz.Tab7VizRootName)
                            let parent = findParentByName(Tab7Viz.Tab7VizData[0], Tab7Viz.Tab7VizRootName);
                            console.log('E: ', parent.name)
                            Tab7Viz.Tab7VizRootName = parent.name
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab7')
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
                    if (Tab7Viz.Tab7VizRootName === undefined){
                        return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
                    }
                    else{
                        let myNames = Tab7Viz.Tab7VizRootName.split('__')
                        return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
                    }
                })
        }
    }
}
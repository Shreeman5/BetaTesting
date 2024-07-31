class Tab1Viz{

    static Tab1VizRootName
    static Tab1VizData

    constructor(sliderMin, sliderMax, rootName, selectedOptions, structureData, classNames, selectedRemovals){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab1Viz.Tab1VizRootName = rootName
        // Tab1Viz.Tab1VizData = structureData
        this.selectedRemovals = selectedRemovals
    }


    renderLegend(){
        // console.log('here')
        let svg = d3.select(".dynamic-div-x" ).append("svg")
                    .attr("width", 2960)
                    .attr("height", 410)

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
            .text(("Organism Absent"))

        svg.append("rect")
            .attr("x", 552)    // x position of the rectangle
            .attr("y", 300)    // y position of the rectangle
            .attr("width", 400) // width of the rectangle
            .attr("height", 30) // height of the rectangle
            .attr("fill", "white") // fill color of the rectangle using the gradient
            .attr("stroke", "black")
            .attr("stroke-width", "1")


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

        let renderVal = Tab1Viz.Tab1VizRootName.split('__')
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


    handleMouseOver(event, fileIndex, p, nodeName, cdfContainerData) {

        // console.log(event)
        // console.log(fileIndex)
        // console.log(p)
        // console.log(nodeName)
        // console.log(cdfContainerData)

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
            
            // let nodeName = d.data.name
            // let lastIndex = nodeName.lastIndexOf('__')
            
            // let taxonID = nodeName.substring(lastIndex + 2)


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


    render(){
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
            

            
            if (Tab1Viz.Tab1VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                // console.log('X:', Tab1Viz.Tab1VizRootName)
                enableCheckboxes()
            }

            // if (this.rootName !== 'sk__Bacteria__2'){
            // console.log(data)
            data = findChildByName(data, Tab1Viz.Tab1VizRootName)
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
            .domain([0, 0.0001, 0.001, 0.01, 0.1, 0.3, 1])
            .range(["#FFFFE0", "#FFFFCC", "#FFFF99", "#FFFF66", "#FFFF33", "#FFCC00", "#FFFF00"]);
          
            let indicatorHigh = d3.scaleLinear()
            .domain([0, 0.0001, 0.001, 0.01, 0.1, 0.3, 1])
            .range(["#E0FFE0", "#C8FFC8", "#A0FFA0", "#78FF78", "#50FF50", "#28FF28","#003300"]);




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
                        let cdf = findTaxonCDFbyName(that.structureData[2], taxonName)
                        
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

                        if (myWeight === null){
                            return "white"
                        }
                        else{
                            // console.log(taxonName)
                            let cdf = findTaxonCDFbyName(that.structureData[2], taxonName)
                            // console.log('A: ', myWeight)
                            // console.log('B: ', cdf)
                            // console.log('times')
                            if (cdf === null){
                                cdf = 0
                            }
                            // console.log('Name: ', taxonName)
                            // console.log('Weight: ', myWeight)
                            // console.log('CDF: ', cdf)
                            if (myWeight > 0){
                                let value = cdf * myWeight
                                // console.log('I: ', i)
                                // console.log('A: ', value)
                                return indicatorHigh(value)
                            }
                            else{
                                // console.log('here2')
                                let value = Math.abs((1-cdf) * myWeight)
                                // console.log('I: ', i)
                                // console.log('B: ', value)
                                return indicatorLow(value)
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
                        let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)

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

                        if (myWeight === null){
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
                        let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)
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

                        if (myWeight === null){
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
                        let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)
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

                        if (myWeight === null){
                            return "0.2"
                        }
                        else{
                            return "3"
                        }
                    }
                })
                // .on("click", function(event, p){
                //     // console.log('Y: ', p.children)

                //     let found = 0
                //     let myArr = p.children
                //     for (let i = 0; i < myArr.length; i++) {
                //         if (myArr[i].hasOwnProperty('children')) {
                //             found = 1
                //             break
                //         }
                //     } 
                //     if (found = 1){

                //         // console.log('here')
                //         Tab1Viz.Tab1VizRootName = p.data.name
                //         // console.log('X:', Tab1Viz.Tab1VizRootName)
                //         // disableCheckboxes()
                //         that.selectedRemovals = []
                //         removeVizDivs()
                //         renderVizDivs(that.selectedOptions.length, 'tab1')
                //         removeLegendDivs()
                //         renderLegendDivs()
                //         that.renderLegend()
                //         that.render()
                //     }
                // })
                .on("mouseover", function (event, d){
                    let nodeName = d.data.name
                    that.handleMouseOver(event, i+2, d, nodeName, that.structureData[2])
                })
                .on("mouseout", that.mouseout)


            d3.selectAll(".sunburst-path").each(function(d, i) {
                var element = d3.select(this);
                element.attr("original-stroke", element.style("stroke"));
                element.attr("original-stroke-width", element.style("stroke-width"));
            });
            
            // let circle = svg.append("circle")
            //     .attr("cx", 0) // x-coordinate of the center
            //     .attr("cy", 0) // y-coordinate of the center
            //     .attr("r", 30)   // radius of the circle
            //     .attr("fill", "black") // fill color of the circle
            //     .on("click", function(event, p){
            //         // console.log('B:', unChangingData)
            //         console.log('D:', Tab1Viz.Tab1VizRootName)
            //         if (Tab1Viz.Tab1VizRootName !== undefined){
            //             if (Tab1Viz.Tab1VizRootName === 'sk__Bacteria__2'){
            //                 that.selectedRemovals = []
            //                 enableCheckboxes2()
            //                 removeVizDivs()
            //                 renderVizDivs(that.selectedOptions.length, 'tab1')
            //                 removeLegendDivs()
            //                 renderLegendDivs()
            //                 that.renderLegend()
            //                 that.render()
            //             }
            //             else{
            //                 console.log('A:', Tab1Viz.Tab1VizData[i+2])
            //                 console.log('B;', Tab1Viz.Tab1VizRootName)
            //                 let parent = findParentByName(Tab1Viz.Tab1VizData[0], Tab1Viz.Tab1VizRootName);
            //                 console.log('E: ', parent.name)
            //                 Tab1Viz.Tab1VizRootName = parent.name
            //                 removeVizDivs()
            //                 renderVizDivs(that.selectedOptions.length, 'tab1')
            //                 removeLegendDivs()
            //                 renderLegendDivs()
            //                 that.renderLegend()
            //                 that.render()
            //                 // clicked(parent.name, sliderMin*100, sliderMax*100, indicatorValue)
            //             } 
            //         }
            //     })
            //     .append("title")
            //     .text(function(){
            //         if (Tab1Viz.Tab1VizRootName === undefined){
            //             return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
            //         }
            //         else{
            //             let myNames = Tab1Viz.Tab1VizRootName.split('__')
            //             return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
            //         }
            //     })
            
        }
    }



}
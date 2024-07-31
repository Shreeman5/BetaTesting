class Tab6Viz{

    static Tab6VizRootName
    static Tab6VizData

    constructor(sliderMin, sliderMax, rootName, selectedOptions, structureData, classNames, selectedRemovals){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.structureData = structureData
        this.classNames = classNames
        Tab6Viz.Tab6VizRootName = rootName
        // Tab1Viz.Tab1VizData = structureData
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


        svg.append("rect")
            .attr("x", 1322)    // x position of the rectangle
            .attr("y", 85)    // y position of the rectangle
            .attr("width", 40) // width of the rectangle
            .attr("height", 40) // width of the rectangle
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

        let renderVal = Tab6Viz.Tab6VizRootName.split('__')
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
    

    render(){
        // console.log(this.structureData)
        let sliderMin = this.sliderMin/100
        let sliderMax = this.sliderMax/100

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

            if (Tab6Viz.Tab6VizRootName !== 'sk__Bacteria__2'){
                disableCheckboxes()
            }
            else{
                enableCheckboxes()
            }

            
            data = findChildByName(data, Tab6Viz.Tab6VizRootName)
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

            // Create the initial hierarchy and pack layout
            let hierarchy = d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);
            let pack = d3.pack()
                .size([1150, 1150])
                .padding(3);

            let root = pack(hierarchy);

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
            
            

            // cons
            let colorScaleLow = d3.scaleLinear()
                       .domain([0, sliderMin])
                       .range(["#0200b9", "#00fff3"]);
    
            let colorScaleHigh = d3.scaleLinear()
                        .domain([sliderMax, 1])
                        .range(["#ff0000", "#7b0000"]);



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
                    // let cdf = findTaxonCDFbyID(that.structureData[i+2], taxonID)
                    let cdf = findTaxonCDFbyName(that.structureData[i+2], taxonName)
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
                })
                .style("stroke", function(d){
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
                })
                .style("opacity", function(d){
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
                }) 
                .style("stroke-width", function(d){
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
                        Tab6Viz.Tab6VizRootName = p.data.name
                        that.selectedRemovals = []
                        removeVizDivs()
                        renderVizDivs(that.selectedOptions.length, 'tab6')
                        removeLegendDivs()
                        renderLegendDivs()
                        that.renderLegend()
                        that.render()
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
                    console.log('D:', Tab6Viz.Tab6VizRootName)
                    if (Tab6Viz.Tab6VizRootName !== undefined){
                        if (Tab6Viz.Tab6VizRootName === 'sk__Bacteria__2'){
                            that.selectedRemovals = []
                            enableCheckboxes2()
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab6')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render()
                        }
                        else{
                            console.log('A:', Tab6Viz.Tab6VizData[i+2])
                            console.log('B;', Tab6Viz.Tab6VizRootName)
                            let parent = findParentByName(Tab6Viz.Tab6VizData[0], Tab6Viz.Tab6VizRootName);
                            console.log('E: ', parent.name)
                            Tab6Viz.Tab6VizRootName = parent.name
                            removeVizDivs()
                            renderVizDivs(that.selectedOptions.length, 'tab6')
                            removeLegendDivs()
                            renderLegendDivs()
                            that.renderLegend()
                            that.render()
                            // clicked(parent.name, sliderMin*100, sliderMax*100, indicatorValue)
                        } 
                    }
                })
                .append("title")
                .text(function(){
                    if (Tab6Viz.Tab6VizRootName === undefined){
                        return "Root = bacteria\n Rank = Kingdom\n NCBI Taxon ID = 2"
                    }
                    else{
                        let myNames = Tab6Viz.Tab6VizRootName.split('__')
                        return "Root = " + myNames[1] + "\n Rank = " + nameMapping(myNames[0]) + "\n NCBI Taxon ID = " + myNames[2]
                    }
                })
        }
    }



}
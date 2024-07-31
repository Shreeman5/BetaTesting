class Sunburst{


    constructor(sliderMin, sliderMax, indicatorValue, rootName, selectedOptions, selectedRemovals, tab2Boolean){
        this.sliderMin = sliderMin
        this.sliderMax = sliderMax
        this.indicatorValue = indicatorValue
        this.rootName = rootName
        this.selectedOptions = selectedOptions
        this.selectedRemovals = selectedRemovals
        this.tab2Boolean = tab2Boolean
        // console.log(this.selectedRemovals)
    }

    rendering(structureData){
        var container = document.getElementById('allDivs');
        var divs = container.getElementsByTagName('div');
        var classNames = [];
        for (var i = 0; i < divs.length; i++) {
            var classes = '.'+divs[i].className.split(/\s+/);
            classNames = classNames.concat(classes);
        }

        if (this.indicatorValue === 'tab1'){
            let tab1Viz = new Tab1Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals)
            Tab1Viz.Tab1VizData = structureData
            tab1Viz.renderLegend()
            tab1Viz.render()
        }
        else if (this.indicatorValue === 'tab2'){
            console.log(structureData)
            let tab2Viz = new Tab2Viz(this.sliderMin, this.sliderMax, this.rootName, this.selectedOptions, structureData, classNames, this.selectedRemovals, this.tab2Boolean)
            Tab2Viz.Tab2VizData = structureData
            tab2Viz.renderLegend()
            tab2Viz.fillDropDown()
        }
    }

    
    async getData(selectedSamples, tabValue){
        try {
            const structureData = await getAllData(selectedSamples,tabValue);
            this.rendering(structureData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}


async function getAllData(selectedSamples,tabValue) {
    try {
        let responseArray = []
        let response = await fetch("JSONswithStandardRanks/MergedJSONfile/taxonomy.json");
        let jsonData = await response.json();
        responseArray.push(jsonData)
        let csvData = await d3.csv('CSVs/Diseases.csv')
        responseArray.push(csvData)

        if (tabValue === 'tab1' || tabValue === 'tab2'){
            if (tabValue === 'tab2'){
                let csvData4 = await d3.csv('CSVs/Actions.csv')
                responseArray.push(csvData4)
            }
            for (let i = 0; i < selectedSamples.length; i++){
                let csvData3 = await d3.csv("CSVs/initialCSVs/AggregateFiles/"+selectedSamples[i]+"_aggregate.csv")
                responseArray.push(csvData3)
            }
        }
        return responseArray;

    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}











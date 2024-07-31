
function calculateLeafDescendantsAndNames(node, namesArray, namesArray2, namesArray3, namesArray4) {
    if (!node.children || node.children.length === 0) {
        node.totalLeafDescendants = 1; // Leaf node has 1 leaf descendant (itself)

        let myVal = node.data.name
        let myNames = myVal.split('__')
        // console.log(myNames)
        node.nameFound = namesArray.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
        // node.positiveInd = namesArray2.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
        // node.negativeInd = namesArray3.includes(myNames[2]) ? 1 : 0; // Check if the leaf node's name is in the names array
        node.nameFoundTotal = (foundObject = namesArray4.find(obj => obj.hasOwnProperty(myNames[2]))) ? foundObject[myNames[2]] : 0
    } 
    else {
        node.totalLeafDescendants = node.children.reduce(function(sum, child) {
            return sum + calculateLeafDescendantsAndNames(child, namesArray, namesArray2, namesArray3, namesArray4);
        }, 0);

        let myVal = node.data.name
        let myNames = myVal.split('__')
        node.nameFound = node.children.reduce(function(sum, child) {
            return sum + child.nameFound;
        }, namesArray.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
        // node.positiveInd = node.children.reduce(function(sum, child) {
        //     return sum + child.positiveInd;
        // }, namesArray2.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
        // node.negativeInd = node.children.reduce(function(sum, child) {
        //     return sum + child.negativeInd;
        // }, namesArray3.includes(myNames[2]) ? 1 : 0); // Add 1 if the node's own name is in the names array
        node.nameFoundTotal = node.children.reduce(function(sum, child) {
            return sum + child.nameFoundTotal;
        }, (foundObject = namesArray4.find(obj => obj.hasOwnProperty(myNames[2]))) ? foundObject[myNames[2]] : 0); // Add 1 if the node's own name is in the names array
    }
    return node.totalLeafDescendants;
}


function findMaxValueNodeAtDepth1(root, key) {
    let maxValueNode = null;
    let maxValue = -Infinity;
  
    // Traverse the hierarchy to find the node at depth = 1 with the maximum value for the given key
    root.each(node => {
      if (node.depth === 1 && node[key] > maxValue) {
        maxValueNode = node;
        maxValue = node[key];
      }
    });
  
    return maxValueNode.data.name;
}


function sortHierarchy(node, maxNodeName) {
    // console.log(maxNodeName)
    if (node.children) {               
        node.children.sort((a, b) => b.nameFoundTotal - a.nameFoundTotal);
        node.children.forEach(child => sortHierarchy(child, maxNodeName));
    }
}


function createArc(maxDepth){
    // console.log(maxDepth)
    return d3.arc()
            .startAngle(function(d) { 
                return d.x0; 
            })
            .endAngle(function(d) { 
                return d.x1; 
            })
            .innerRadius(function(d) { 
                // console.log(value, d)
                let val = innerRadius(d, maxDepth);
                return val; 
            })
            .outerRadius(function(d) { 
                let val = outerRadius(d, maxDepth);
                return val; 
            });
}


function innerRadius(d, maxDepth){
    if (maxDepth === 7){
        // console.log('here')
        if (d.depth === 7){
            return 468//1515
        }
        else if (d.depth === 6){
            return 403//1304
        }
        else if (d.depth === 5){
            return 341//1093
        }
        else if (d.depth === 4){
            return 279//882
        }
        else if (d.depth === 3){
            return  217//671
        }
        else if (d.depth === 2){
            return 155//460
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 6){
        if (d.depth === 6){
            return 459
        }
        if (d.depth === 5){
            return 388
        }
        if (d.depth === 4){
            return 317
        }
        if (d.depth === 3){
            return 246
        }
        if (d.depth === 2){
            return 175
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 5){
        if (d.depth === 5){
            return 447
        }
        if (d.depth === 4){
            return 364
        }
        if (d.depth === 3){
            return 281
        }
        if (d.depth === 2){
            return 198
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 4){
        if (d.depth === 4){
            return 430
        }
        if (d.depth === 3){
            return 330
        }
        if (d.depth === 2){
            return 230
        }
        if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 3){
        if (d.depth === 3){
            return 405
        }
        if (d.depth === 2){
            return 280
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 2){
        if (d.depth === 2){
            return 365
        }
        else if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 1){
        if (d.depth === 1){
            return 30
        }
    }
    if (maxDepth === 0){
        return 0
    }
}


function outerRadius(d, maxDepth){
    if (maxDepth === 7){
        if (d.depth === 7){
            return 530 //1730
        }
        else if (d.depth === 6){
            return 468 //1515
        }
        else if (d.depth === 5){
            return 403 //1304
        }
        else if (d.depth === 4){
            return 341 //1093
        }
        else if (d.depth === 3){
            return 279 //882
        }
        else if (d.depth === 2){
            return 217 //671
        }
        else if (d.depth === 1){
            return 155 //460
        }
    }
    if (maxDepth === 6){
        if (d.depth === 6){
            return 530 //1730
        }
        if (d.depth === 5){
            return 459 //1487
        }
        if (d.depth === 4){
            return 388 //1244
        }
        if (d.depth === 3){
            return 317 //1001
        }
        if (d.depth === 2){
            return 246 //758
        }
        else if (d.depth === 1){
            return 175 //515
        }
    }
    if (maxDepth === 5){
        if (d.depth === 5){
            return 530 //1730
        }
        if (d.depth === 4){
            return 447 //1449
        }
        if (d.depth === 3){
            return 364 //1166
        }
        if (d.depth === 2){
            return 281 //883
        }
        else if (d.depth === 1){
            return 198 //600
        }
    }
    if (maxDepth === 4){
        if (d.depth === 4){
            return 530 //1730
        }
        if (d.depth === 3){
            return 430 //1390
        }
        if (d.depth === 2){
            return 330 //1050
        }
        if (d.depth === 1){
            return 230 //710
        }
    }
    if (maxDepth === 3){
        if (d.depth === 3){
            return 530 //1730
        }
        if (d.depth === 2){
            return 405 //1305
        }
        else if (d.depth === 1){
            return 280 //880
        }
    }
    if (maxDepth === 2){
        if (d.depth === 2){
            return 530 //1730
        }
        else if (d.depth === 1){
            return 365 //1165
        }
    }
    if (maxDepth === 1){
        if (d.depth === 1){
            return 530 //1730
        }
    }
    if (maxDepth === 0){
        return 0
    }
}


function disableCheckboxes(){
    let checkbox1 = d3.select('#checkbox1')
    checkbox1.property("checked", true)
    checkbox1.property("disabled", true)
    let checkbox2 = d3.select('#checkbox2')
    checkbox2.property("checked", true)
    checkbox2.property("disabled", true)
    let checkbox3 = d3.select('#checkbox3')
    checkbox3.property("checked", true)
    checkbox3.property("disabled", true)
    let checkbox4 = d3.select('#checkbox4')
    checkbox4.property("checked", true)
    checkbox4.property("disabled", true)
    let checkbox5 = d3.select('#checkbox5')
    checkbox5.property("checked", true)
    checkbox5.property("disabled", true)
    let checkbox6 = d3.select('#checkbox6')
    checkbox6.property("checked", true)
    checkbox6.property("disabled", true)
    let checkbox7 = d3.select('#checkbox7')
    checkbox7.property("checked", true)
    checkbox7.property("disabled", true)
}

function enableCheckboxes(){
    let checkbox1 = d3.select('#checkbox1')
    checkbox1.property("disabled", false)
    let checkbox2 = d3.select('#checkbox2')
    checkbox2.property("disabled", false)
    let checkbox3 = d3.select('#checkbox3')
    checkbox3.property("disabled", false)
    let checkbox4 = d3.select('#checkbox4')
    checkbox4.property("disabled", false)
    let checkbox5 = d3.select('#checkbox5')
    checkbox5.property("disabled", false)
    let checkbox6 = d3.select('#checkbox6')
    checkbox6.property("disabled", false)
    let checkbox7 = d3.select('#checkbox7')
    checkbox7.property("disabled", false)
}

function enableCheckboxes2(){
    let checkbox1 = d3.select('#checkbox1')
    checkbox1.property("checked", true)
    let checkbox2 = d3.select('#checkbox2')
    checkbox2.property("checked", true)
    let checkbox3 = d3.select('#checkbox3')
    checkbox3.property("checked", true)
    let checkbox4 = d3.select('#checkbox4')
    checkbox4.property("checked", true)
    let checkbox5 = d3.select('#checkbox5')
    checkbox5.property("checked", true)
    let checkbox6 = d3.select('#checkbox6')
    checkbox6.property("checked", true)
    let checkbox7 = d3.select('#checkbox7')
    checkbox7.property("checked", true)
}


function findMaxDepth(node) {
    if (!node || !node.children || node.children.length === 0) {
      return 1; // Base case: if there are no children, the depth is 1
    }
  
    // Recursively find the depth of each child
    const childDepths = node.children.map(findMaxDepth);
  
    // Return the maximum depth found plus one for the current level
    return Math.max(...childDepths) + 1;
  }

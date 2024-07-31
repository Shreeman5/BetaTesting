function findTaxonCDFbyID(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.CDF : null; // Return the taxon_rank_level if found, else return null
}

function findTaxonCDFbyName(dataArray, taxonName){
    const element = dataArray.find(item => item.name === taxonName);
    return element ? element.CDF : null; // Return the taxon_rank_level if found, else return null
}


function findTaxonWeightbyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.weight;
        }
    }
    return null; // Return null if no match found
}

function findTaxonWeightbyName(dataArray, taxonName){
    for (let obj of dataArray) {
        if (obj.organism === taxonName) {
            return obj.weight;
        }
    }
    return null; // Return null if no match found
}

function findNamesbyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            return obj.action;
        }
    }
    return null; // Return null if no match found
}

function findNamesbyName(dataArray, taxonName){
    for (let obj of dataArray) {
        if (obj.organism === taxonName) {
            return obj.action;
        }
    }
    return null; // Return null if no match found
}


function findTaxonNamebyID(dataArray, taxonId){
    for (let obj of dataArray) {
        if (obj.ncbi_taxon_id === taxonId) {
            // console.log('here')
            return obj.organism;
        }
    }
    return null; // Return null if no match found
}



function nameMapping(val){
    if (val === 's'){
        return "species"
    }
    else if (val === 'st'){
        return "strain"
    }
    else if (val === 'g'){
        return "genus"
    }
    else if (val === 'f'){
        return "family"
    }
    else if (val === 'o'){
        return "order"
    }
    else if (val === 'c'){
        return "class"
    }
    else if (val === 'p'){
        return "phylum"
    }
    else if (val === 'sk'){
        return "superkingdom"
    }
    return ""
}


function findChildByName(node, targetName) {
    // Base case: if the current node's name matches the target name, return the node
    if (node.name === targetName) {
        return node;
    }
    
    // If the node has children, search each child recursively
    if (node.children && node.children.length > 0) {
        for (let child of node.children) {
            let result = findChildByName(child, targetName);
            if (result) {
                return result;  // Return the found child
            }
        }
    }
    
    // If the child is not found, return null
    return null;
}

function findParentByName(node, targetName, parent = null) {
    // Base case: if the current node's name matches the target name, return the parent
    if (node.name === targetName) {
        return parent;
    }
    
    // If the node has children, search each child recursively
    if (node.children && node.children.length > 0) {
        for (let child of node.children) {
            let result = findParentByName(child, targetName, node);
            if (result) {
                return result;  // Return the found parent
            }
        }
    }
    
    // If the parent is not found, return null
    return null;
}


function findNodeValueByID(dataArray, taxonId) {
    const element = dataArray.find(item => item.ncbi_taxon_id === taxonId);
    return element ? element.relative_abundance : null; // Return the taxon_rank_level if found, else return null
}

function findNodeValueByName(dataArray, taxonName) {
    const element = dataArray.find(item => item.name === taxonName);
    return element ? element.relative_abundance : null; // Return the taxon_rank_level if found, else return null
}



function assignValues(node) {
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


function reassignChildren(root, w, x) {
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

    root.eachBefore(node => {
        if (node.depth === x && (!node.children || node.children.length === 0)) {
            if (node.parent) {
                node.parent.children = node.parent.children.filter(n => n !== node);
            }
        }
        if (node.children && node.children.length === 0) {
            delete node.children;
        }
    });

    return root;
}


function adjustDepths(root, removedDepth) {
    root.each(node => {
        if (node.depth > removedDepth) {
            node.depth -= 1;
        }
    });
    return root;
}
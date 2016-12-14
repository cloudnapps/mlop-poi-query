// each node has a attribute pathName, which in format of { criteria: {property1: 'aaa', property2: 'bbb'}, action: 'include'/'exclude'}
function Query(rules) {
  this._compileSelections(rules);
}

function explainSelectionTreeNodesAsIfStatments(treeNodes) {
  var lines = [];
  (treeNodes || []).forEach(function (node) {
    lines.push('if(' + JSON.stringify(node.rule.criteria) + ') {');
    lines.push('  return ' + (node.rule.action !== 'exclude'));
    lines.push('}');
  });

  return lines;
}

function extend(obj1, obj2) {
  for (var key in obj2) {
    var temp = {};
    temp[key] = obj2[key];
    obj1.push(temp);
  }
  return obj1;
}

function compileSelectionTreeToQuery(node) {
  var query = {};

  var nodeQueryExp = extend([], node.rule.criteria);

  if (node.rule.action === 'exclude') {
    query.$nor = nodeQueryExp;
  } else {
    query.$and = nodeQueryExp;
  }
  return query;
}

function compileSelectionTreeNodesToQuery(treeNodes) {
  var query = {};
  var ors = query.$or = [];
  treeNodes.forEach(function (node) {
    ors.push(compileSelectionTreeToQuery(node));
  });
  if (query.$or.length === 0) {
    // negate the query
    query = { _id: null };
  }
  return query;
}

Query.prototype._compileSelections = function (rules) {
  var selectionNodes = rules.map(function (rule) {
    return {
      rule: rule
    };
  });

  this.explanation = explainSelectionTreeNodesAsIfStatments(selectionNodes).join('\n');

  this.query = compileSelectionTreeNodesToQuery(selectionNodes);
};

module.exports = Query;

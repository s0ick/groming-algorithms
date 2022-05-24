const testGraph1 = {
  start: {
    A: 6,
    B: 2
  },
  A: {
    final: 1
  },
  B: {
    A: 3,
    final: 5
  },
  final: {}
};

const testGraph2 = {
  start: {
    A: 5,
    B: 2
  },
  A: {
    C: 4,
    D: 2
  },
  B: {
    A: 8,
    D: 7
  },
  C: {
    D: 6,
    final: 3
  },
  D: {
    final: 1
  },
  final: {}
};

const searchMaxValidPath = (graph, start) => {
  const processed = {};
  const costs = {...graph[start]};
  const parents = {
    A: start,
    B: start,
    final: null
  };

  for (let key in graph) {
    if (key !== start && !graph[start][key]) {
      costs[key] = Infinity;
    }
  }

  const findLowestCostNode = costs => {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let key in costs) {
      const cost = costs[key];

      if (cost < lowestCost && !processed[key]) {
        lowestCost = cost;
        lowestCostNode = key;
      }
    }

    return lowestCostNode;
  };

  let node = findLowestCostNode(costs);

  while(node) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (let key in neighbors) {
      const newCost = cost + neighbors[key];

      if (costs[key] > newCost) {
        costs[key] = newCost;
        parents[key] = node;
      }
    }

    processed[node] = true;
    node = findLowestCostNode(costs);
  }

  return costs.final;
};

console.log(searchMaxValidPath(testGraph1, 'start'));
console.log(searchMaxValidPath(testGraph2, 'start'));

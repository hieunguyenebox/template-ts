
interface Data {
  value: number
  children?: Data[]
}

const data: Data = {
  value: 1,
  children: [
    {
      value: 2,
      children:
        [
          { value: 4, children: [] },
          {
            value: 5, children:
              [
                { value: 9, children: [] },
                { value: 10, children: [] },
              ]
          },
        ]
    },
    {
      value: 3, children: [
        { value: 11, children: [] },
        { value: 23, children: [] },
      ]
    },
  ],
}

const sum = (node: Data) => {

  let flatArrr: Data[] = [node]
  const hasChildren = () => flatArrr.findIndex(item => item.children)
  const getIndex = () => flatArrr.findIndex(item => item.children)

  while (hasChildren() !== -1) {
    const index = getIndex()
    if (flatArrr[index].children) {
      flatArrr.push(...flatArrr[index].children)
    }
    flatArrr[index].children = null
  }

  console.log(flatArrr)

  return flatArrr.reduce((total, node) => total + node.value, 0)
}

console.log(sum(data))